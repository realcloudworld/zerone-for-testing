<template>
  <div>
    <div>
      <v-col style="height: 5px">
        <v-progress-linear
          v-model="value"
          :active="show"
          :indeterminate="query"
          :query="true"
        ></v-progress-linear>
      </v-col>
    </div>
    <v-spacer></v-spacer>

          <v-col style="text-align: end; font-size: 13px">
            <a @click="$router.push('/dashboard')" style="color: black">
              اغلاق
              <v-icon> mdi-close-box </v-icon>
            </a>

            <a @click="$router.back()" style="color: black">
              رجوع
              <v-icon> mdi-arrow-left-bold </v-icon>
            </a>
          </v-col>
    <v-form ref="form">
      <v-dialog v-model="starter_dialog" hide-overlay persistent width="300">
        <v-card color="primary" dark>
          <v-card-text>
            انتظر قليلاً!
            <v-progress-linear
              indeterminate
              color="pink"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-snackbar
        :color="snackbarColor"
        centered
        transition="scale-transition"
        v-model="snackbar"
        :timeout="snackbarTimeout"
      >
        {{ snackbarText }}

        <template v-slot:action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
      <v-row style="padding: 100px">
        <v-col>
          <v-row>
            <v-col cols="6">
              <v-menu
                ref="issue_date"
                v-model="issue_date_is_down"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="balance.issue_date"
                    label="تاريخ القيد"
                    prepend-icon="mdi-calendar"
                    v-bind="attrs"
                    v-on="on"
                    @keydown.enter="issue_date_is_down = false"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="balance.issue_date"
                  no-title
                  @input="issue_date_is_down = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6">
              <v-text-field
                multi-line
                autocomplete="off"
                v-model="balance.description"
                label="الوصف"
              ></v-text-field> </v-col
          ></v-row>
          <v-row>
            <v-col cols="6" class="pa-0">
              <v-autocomplete
                flat
                outlined
                no-data
                no-data-text
                non-linear
                v-model="balance.account_id"
                :items="from_accounts"
                :item-text="(item) => item.account_code + ' - ' + item.ar_name"
                item-value="id"
                prefix=" من حساب | "
                :rules="required"
              >
              </v-autocomplete>
            </v-col>
          </v-row>
          <v-row> </v-row>
        </v-col>
      </v-row>
      <v-container class="pa-2">
        <v-divider inset></v-divider>

        <v-row v-for="element in balance.accounts" :key="element.id">
          <v-col cols="12" sm="6" md="4">
            <v-autocomplete
              v-model="element.account"
              :loading="loading"
              :items="accounts"
              :item-text="(item) => item.account_code + ' - ' + item.ar_name"
              return-object
              flat
              hide-no-data
              label="اسم الحساب"
              @change="checkIfAccountSelectedBefor(element.account)"
            ></v-autocomplete>
          </v-col>

          <v-col cols="12" sm="6" md="4">
            <v-text-field
              type="number"
              autocomplete="off"
              v-model.number="element.total"
              label="الرصيد"
              @keydown.enter="searchProductByBarcode('barcode')"
              :rules="is_exists"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4" v-if="is_first(element)">
            <v-icon color="red" small @click="deleteItem(element)"
              >mdi-delete</v-icon
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col style="text-align: start">
            <v-btn
              elevation
              color="primary"
              @click.stop="AddNewAccount"
              >إضافة جديد</v-btn
            >
          </v-col>
        </v-row>
        <v-row style="padding-top: 50px">
          <v-col style="text-align: end">
            <v-btn elevation color="primary" @click.stop="submit"
              >حفظ الارصدة الافتتاحية</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import Account from "../../../apis/Account";
import Product from "../../../apis/Product";
export default {
  data() {
    return {
      /*------------------------------*/
      value: 0,
      query: false,
      show: true,
      interval: 0,
      /*------------------------------*/

      starter_dialog: false,
      snackbarColor: "",
      snackbar: false,
      snackbarText: "تأكد من تعبئة الحقول",
      snackbarTimeout: 2000,
      name_search: "",
      /*-------------------validators---------------------------*/
      vld_minlingth_one: [(v) => v.length >= 1 || "أدخل قيمة"],
      vld_selected: [(v) => v > 0 || "أدخل قيمة"],
      required: [(value) => !!value || "الحقل مطلوب."],
      isunique: [],
      is_exists: [],
      balance_exists: [],
      
      is_valid_date: [],
      vld_numbering: [(v) => /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية"],

      searched_barcode: "",

      loading: false,
      found_products: [],
      selected_product: {
        expires_at: "",
        expires_at_message: "",
      },
      name_search: "",

      accounts: [],
      from_accounts: [],

      date: new Date().toISOString().substr(0, 10),
      issue_date_is_down: false,
      balance: {
        account_id: "",
        accounts: [{ total: 0, account: { id: "" } }],
        issue_date: new Date().toISOString().substr(0, 10),
        description: "",
      },
    };
  },
  created() {
    this.query = true;
    this.show = true;
    Account.showAccountsByTypes().then((response) => {
      this.query = false;
      this.show = false;
      this.accounts = response.data.accounts;
      this.from_accounts = response.data.accounts.filter((elem) =>
        elem.account_code.toString().startsWith("3")
      );
    });
  },
  
  methods: {
    checkIfAccountSelectedBefor(account) {
      let sameaccount = this.balance.accounts.filter(
        (elem) => elem.account.id == account.id
      );

      if (sameaccount.length <= 1) {
        return;
      }
      alert("الاسم موجود مسبقا!");

      let indextodelete = this.balance.accounts.findIndex(
        (elem) => elem.account.id == account.id && elem.total == 0
      );

      this.balance.accounts.splice(indextodelete, 1);
      return;
      let notnulltotal = this.balance.people.filter(
        (elem) => elem.person.id == person.id && elem.total != 0
      );

      this.balance.people.splice(this.balance.people.indexOf(sameunits[0]), 1);
    },
    AddNewAccount() {
      this.balance.accounts.push({
        id: Math.floor(Math.random(1, 100) * 100),
        total: 0,
        account: { id: "" },
      });
    },
    is_first(item) {
      if (item.account.id != this.balance.accounts[0].account.id) return true;
      return false;
    },
    submit() {
      

      if (!this.$refs.form.validate()) {
        
        
        
        return;
      }

      if (this.balance.accounts.length == 0) {
        this.snackbar = true;
        return;
      }

      
      

      this.starter_dialog = true;
      Account.storeAccountOpeningBalance(this.balance).then((response) => {
        this.starter_dialog = false;
this.$router.push("/opening_balances");
        // this.snackbar = true;
        // this.snackbarText = "تم حفظ الفاتورة";
      });

      
    },
    
    deleteItem(item) {
      this.balance.accounts.splice(this.balance.accounts.indexOf(item), 1);
    },
    
    
   
  },
};
</script>

<style>
</style>