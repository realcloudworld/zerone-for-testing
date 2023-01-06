<template>
  <div>
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
                :rules="required"
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
                :items="accounts"
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

        <v-row v-for="element in balance.people" :key="element.id">
          <v-col cols="12" sm="6" md="4">
            <v-autocomplete
              v-model="element.person"
              :loading="loading"
              :items="people"
              item-text="name"
              return-object
              flat
              hide-no-data
              :label="'اسم ال' + persona"
              @change="checkIfPersonSelectedBefor(element.person)"
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
              @click.stop="AddNewPerson('', 'add')"
              >إضافة {{ persona }} جديد</v-btn
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
import Person from "../../../apis/Person";
import Product from "../../../apis/Product";
export default {
  data() {
    return {
      type_id: "",
      people: [],
      persona: "عميل جديد",

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
      expires_at_valid: [
        (v) => (v.has_expiration_date && v != "*******") || "قم بتغيير التاريخ",
      ],
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
      date: new Date().toISOString().substr(0, 10),
      issue_date_is_down: false,
      balance: {
        type_id: "",
        account_id: "",
        people: [{ total: 0, person: { id: "" } }],
        issue_date: new Date().toISOString().substr(0, 10),
        details: [],
        description:'',
      },
    };
  },
  created() {
    this.createPage(this.$route, "new");
    Account.showAccountsByType(3).then((response) => {
      this.accounts = response.data.accounts;
    });
  },
  watch: {
    name_search(val) {
      val &&
        val !== this.selected_product.name &&
        this.getProducts(val, "name");
    },
  },
  methods: {
    checkIfPersonSelectedBefor(person) {
      let sameunits = this.balance.people.filter(
        (elem) => elem.person.id == person.id
      );

      if (sameunits.length <= 1) {
        return;
      }
      alert("الاسم موجود مسبقا!");

      let indextodelete = this.balance.people.findIndex(
        (elem) => elem.person.id == person.id && elem.total == 0
      );

      this.balance.people.splice(indextodelete, 1);
      return;
      let notnulltotal = this.balance.people.filter(
        (elem) => elem.person.id == person.id && elem.total != 0
      );

      this.balance.people.splice(this.balance.people.indexOf(sameunits[0]), 1);
    },
    createPage(to, status) {
      this.route = to.fullPath.substr(
        this.$route.fullPath.lastIndexOf("/") + 1
      );

      console.log(this.route);
      console.log("to");

      if (this.route == "suppliers") {
        this.balance.type_id = 1;
        this.persona = "مورد";
      }
      if (this.route == "customers") {
        this.balance.type_id = 2;
        this.persona = "عميل";
      }
      Person.get({ type_id: this.balance.type_id }).then((response) => {
        console.log(response.data);
        this.people = response.data.filter((elem) => elem.name != "افتراضي");
      });
    },
    AddNewPerson() {
      this.balance.people.push({
        id: Math.floor(Math.random(1, 100) * 100),
        total: 0,
        person: { id: "" },
      });
    },
    is_first(item) {
      if (item.person.id != this.balance.people[0].person.id) return true;
      return false;
    },
    deleteItem(item) {
      this.balance.people.splice(this.balance.people.indexOf(item), 1);
    },
    submit() {
      if (!this.$refs.form.validate()) {
        console.log("this.balance.details");
        console.log(this.balance.details);
        console.log(this.$refs.form.rules);
        return;
      }
      Account.storePeopleOpeningBalance(this.balance).then((response) => {
        this.starter_dialog = false;

        this.snackbar = true;
        this.snackbarText = "تم حفظ الفاتورة";
      });
    },
  },
};
</script>

<style>
</style>