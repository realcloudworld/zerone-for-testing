<template>
  <div style="margin-top: 20px">
    <v-row>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card :loading="isloading">
          <v-card-title>
            <span class="text-h5">User Profile</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" lg="6">
                  <v-text-field
                    v-model="opening_balance.ar_name"
                    label="اسم الوحدة العربي"
                    :rules="is_exists"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field
                    v-model="opening_balance.ar_opening_balance_representation"
                    label="الاختصار العربي"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field
                    v-model="opening_balance.en_name"
                    label="اسم الوحدة بالانجليزي"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" lg="6">
                  <v-text-field
                    v-model="opening_balance.en_opening_balance_representation"
                    label="الاختصار  بالانجليزي"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              الغاء
            </v-btn>
            <v-btn color="blue darken-1" text @click="saveOpeningBalance">
              حفظ
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <v-data-table
      :headers="opening_balances_header"
      :items="opening_balances"
      item-key="id"
      :search="search"
      :loading="table_loading"
    >
      <template v-slot:item.created_at="{ item }">
        {{ item.created_at.split("T")[0] }}
      </template>
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>الارصدة الافتتاحية</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>

          <v-btn
            elevation="0"
            style="margin: 2px"
            :color="btn_colors.accounts"
            @click="callAccounts('accounts')"
          >
            أرصدة الحسابات
          </v-btn>
          <v-btn
            elevation="0"
            style="margin: 2px"
            :color="btn_colors.customers"
            @click="callAccounts('customers')"
          >
            أرصدة العملاء
          </v-btn>
          <v-btn
            elevation="0"
            style="margin: 2px"
            :color="btn_colors.suppliers"
            @click="callAccounts('suppliers')"
          >
            أرصدة الموردين
          </v-btn>
          <v-btn
            elevation="0"
            style="margin: 2px"
            :color="btn_colors.products"
            @click="callAccounts('products')"
          >
            أرصدة المنتجات
          </v-btn>
          <v-btn
            elevation="0"
            style="margin: 2px"
            :color="btn_colors.all"
            @click="callAccounts('all')"
          >
            كل الأرصدة
          </v-btn>

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
        </v-toolbar>
      </template>

      <template v-slot:item.actions="{ item }">
        <router-link :to="proper_route + '/' + item.id"
          ><v-icon small>mdi-pencil</v-icon></router-link
        >
        <v-btn
          icon
          @click.stop="payReceipt(item)"
          v-show="item.remaining_amount_at_all != 0"
        >
          <v-icon small class="outlined font-size-12">mdi-credit-card</v-icon>
        </v-btn>
        <a @click="printing(item)"><v-icon small>mdi-printer</v-icon></a>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon @click="deleteOpening_balance(item)">
              <v-icon v-bind="attrs" small v-on="on" class="outlined font-size-12"
                >mdi-delete</v-icon
              >
            </v-btn>
          </template>
          <span style="font-size: 10px">حذف الرصيد الافتتاحي</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              @click.stop="showDialog(item)"
              v-if="canBeModefied(item)"
            >
              <v-icon small v-bind="attrs" v-on="on" class="outlined font-size-12"
                >mdi-pencil</v-icon
              ></v-btn
            >
          </template>
          <span style="font-size: 10px">تعديل الحساب</span>
        </v-tooltip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import Account from "../../apis/Account";

export default {
  data() {
    return {
      /*------------------------*/
      btn_colors: {
        accounts: "none",
        customers: "none",
        suppliers: "none",
        products: "none",
        all: "primary",
      },

      /*-------------------validators---------------------------*/
      vld_minlingth_one: [(v) => v.length >= 1 || "أدخل قيمة"],
      vld_selected: [(v) => v > 0 || "أدخل قيمة"],
      required: [(value) => !!value || "الحقل مطلوب."],
      isunique: [],
      is_exists: [],
      is_valid_date: [],
      vld_numbering: [(v) => /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية"],
      vld_match: [true],

      table_loading: false,
      isloading: false,
      operation: "add",
      dialog: false,
      search: "",
      opening_balance: { ar_name: "" },
      opening_balances: [],
      opening_balances_header: [
        {
          text: " رقم القيد ",
          align: "center",
          sortable: false,
          value: "document_id",
        },

        {
          text: "الوصف ",
          align: "center",
          sortable: false,
          value: "description",
        },

        {
          text: "التاريخ",
          align: "center",
          sortable: false,
          value: "created_at",
        },
        {
          text: "القيمة الاجمالية ",
          align: "center",
          sortable: false,
          value: "credit",
        },

        {
          text: "الخيارات",
          align: "center",
          sortable: false,
          value: "actions",
          width: 110,
        },
      ],
    };
  },
  methods: {
    dataProcessing(response) {
      this.table_loading = false;

      this.opening_balances = [];

      response.forEach((element) => {
        
        let index = this.opening_balances.findIndex(
          (elem) =>
            elem.document_id == element.document_id &&
            elem.document_type_id == element.document_type_id
        );
        
        if (index >= 0) {
          this.opening_balances[index].credit += element.credit;
          this.opening_balances[index].debit += element.debit;
          return;
        }
        this.opening_balances.push(element);
      });
      
    },

    changeVal(varName) {
      this[varName] = "primary";
    },
    getAccounts(type) {
      this.table_loading = true;
      Account.getOpeningBalance(type).then((response) => {
        this.dataProcessing(response.data);
      });
    },
    callAccounts(type) {
      this.getAccounts({ [type]: true });
      this.btn_colors = {
        accounts: "none",
        customers: "none",
        suppliers: "none",
        products: "none",
        all: "none",
      };
      this.btn_colors[type] = "primary";

      // if (type == "accounts") {

      // }
    },
    saveOpeningBalance() {},
    showDialog(item) {},

    canBeModefied(item) {},
    canBeDeleted(item) {},
    deleteOpening_balance(item) {
      this.table_loading = true;
      Account.deleteOpeningBalance(item).then((response) => {
        this.table_loading = false;

        if (!response.data.valid) {
          alert("لايمكن حذف ارصدة المنتجات لأنه قد تم البيع منها");
          return;
        }
        this.dataProcessing(response.data.opening_balances);
      });
    },
  },

  created() {
    this.table_loading = true;
    this.getAccounts({ all: true });
  },
};
</script>

<style>
</style>