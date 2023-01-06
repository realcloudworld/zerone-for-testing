<template>
  <div>
    <receipt-for-bill
      :reference="reference"
      :bill="passed_bill"
      :receipt="receipt"
      :dialog="add_receipt_dialog"
      @changeBillStatus="changeBillStatus"
      @close_receipt_dialog="close_receipt_dialog"
    ></receipt-for-bill>
    <v-data-table
      :headers="headers"
      :items="bills"
      :options.sync="options"
      :server-items-length="bills_total"
      :loading="loading"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>إدارة المشتريات</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-btn
            elevation
            color="primary"
            @click.stop="AddUpdatePerson('', 'add')"
            :to="new_bill.link"
          >
            {{ new_bill.title }}
          </v-btn>
          <v-btn
            class="mx-1"
            elevation
            color="primary"
            @click.stop="AddUpdatePerson('', 'add')"
            :to="new_ret_bill.link"
            >{{ new_ret_bill.title }}
          </v-btn>
          <span class="lable"> {{ switch_lable_R }}</span>
          <v-switch
            @change="getProperBills"
            v-model="switch1"
            hide-details
            :label="switch_lable_L"
          ></v-switch>
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

        <v-row>
          <v-col cols="12" lg="3">
            <v-text-field
              v-model="search.company_name"
              label="اسم المورد"
              class="mx-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="2">
            <v-text-field
              v-model="search.reference"
              label="رقم الفاتورة"
              class="mx-4"
            ></v-text-field>
          </v-col>

          <v-col cols="12" lg="3">
            <v-autocomplete
              v-model="search.status_id"
              :items="statuses"
              item-text="ar_name"
              item-value="id"
              label="الحالة"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" lg="2">
            <v-text-field
              v-model="search.minimum"
              label="القيمة الأدنى"
              class="mx-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="2">
            <v-text-field
              v-model="search.maximum"
              label="القيمة الأعالى"
              class="mx-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="3">
            <v-menu
              v-model="menu1"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="search.date_from"
                  label="من تاريخ"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="search.date_from"
                no-title
                @input="menu1 = false"
              ></v-date-picker> </v-menu
          ></v-col>

          <v-col cols="12" lg="3">
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="search.date_to"
                  label="إلى تاريخ"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                no-title
                v-model="search.date_to"
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" lg="3">
            <v-row>
              <v-col>
                <v-btn elevation color="primary" @click="getBills">البحث</v-btn>
              </v-col>
              <v-col>
                <v-btn elevation color="primary" @click.stop="searchReset"
                  >إعادة تعيين</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </template>

      <template v-slot:item.type="{ item }">
        {{ types.find((elem) => elem.id == item.document_type_id).ar_name }}
      </template>
      <template v-slot:item.status="{ item }">
        {{ statuses.find((elem) => elem.id == item.status_id).ar_name }}
      </template>
      <template v-slot:item.account="{ item }">
        {{ item.account_code }} - {{ item.ar_name }}
      </template>
      <template v-slot:item.issue_date="{ item }">
        <div style="white-space: nowrap">
          {{ item.issue_date.split(" ")[0] }}
        </div>
      </template>
      <template v-slot:item.remainder="{ item }">
        {{ item.remainder.toFixed(2) }}
      </template>
      <template v-slot:item.maturity_date="{ item }">
        {{ item.maturity_date.split(" ")[0] }}
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

        <v-btn icon @click.stop="deleteBill(item, 'update')">
          <v-icon small class="outlined font-size-12">mdi-delete</v-icon>
        </v-btn>
      </template>
      <template v-slot:no-data>لا يوجد بيانات !</template>
    </v-data-table>
  </div>
</template>

<script>
import Bill from "../../../apis/Bill";
import Receipt from "../../../apis/Receipt";
import receiptForBill from "./receiptForBill.vue";

export default {
  components: {
    receiptForBill,
  },
  data() {
    return {
      new_bill: { title: "إضافة مرتجع مشتريات", link: "purchase" },
      new_ret_bill: { title: "إضافة مشتريات", link: "purchase_return" },

      proper_route: "",
      switch_lable_L: "مرتجع المشتريات]",
      switch_lable_R: "[ المشتريات",
      switch1: false,
      receipt: {
        bill_id: "",
        person_id: "",
        people: "",
        description: "",
        amount: "",
        reference: "",
        account_id: "",
        date: new Date().toISOString().substr(0, 10),
        document_type_id: this.document_type_id,
        payment_type_id: 1,
      },
      person: "",
      reference: "",
      add_receipt_dialog: false,
      passed_bill: "",
      document_type_id: 1,
      route: window.location.pathname.replace(/^\/([^\/]*).*$/, "$1"),
      loading: true,
      menu1: false,
      menu2: false,
      types: [
        { id: 1, ar_name: "صرف" },
        { id: 2, ar_name: "نقد" },
      ],

      statuses: [
        { id: 1, ar_name: "غير مدفوعة" },
        { id: 2, ar_name: "بانتظار الموافقة" },
        { id: 3, ar_name: "مدفوعة" },
        { id: 4, ar_name: "مسودة" },
        { id: 5, ar_name: "دفعت" },
        { id: 6, ar_name: "دفعت جزئيا" },
      ],
      search: {
        document_type_id: "",
        company_name: "",
        reference: "",
        minimum: "",
        maximum: "",
        status_id: "",
        date_from: "",
        date_to: "",
      },
      bills_total: 10,
      options: {},
      bills: [],
      headers: [
        {
          text: "م",
          align: "center",
          width: "5",
          sortable: false,
          value: "id",
        },
        {
          text: "المرجع",
          align: "center",
          sortable: false,
          value: "reference",
        },
        { text: "اسم المشتريات", align: "center", value: "company_name" },
        { text: "تاريخ الإصدار", align: "center", value: "issue_date" },
        { text: "	تاريخ الاستحقاق", align: "center", value: "maturity_date" },
        { text: "قيمة الفاتورة", align: "center", value: "total_amount" },
        { text: "الباقي", align: "center", value: "remaining_amount_at_all" },
        { text: "الحالة ", align: "center", value: "status" },
        { text: "التحكم ", align: "center", value: "actions" },
      ],
    };
  },
  methods: {
    printing(item) {
      console.log(this.$router);
      console.log(this.$router.mode == "hash");
      let window_string = this.proper_route + "/print/" + item.id;
      if (this.$router.mode == "hash") window_string = "#/" + window_string;
      window.open(window_string, "newwindow", "width=800,height=800");
      return false;
    },
    getProperBills() {
      if (this.$route.name == "purchases" && !this.switch1) {
        this.proper_route = "purchase";
        this.document_type_id = 1;
        this.receipt.document_type_id = 5;
        this.receipt.payment_type_id = 1;
      } else if (this.$route.name == "purchases" && this.switch1) {
        this.proper_route = "purchase_return";
        this.document_type_id = 3;
        this.receipt.document_type_id = 5;
        this.receipt.payment_type_id = 2;
      } else if (this.$route.name == "invoices" && !this.switch1) {
        this.proper_route = "invoice";
        this.document_type_id = 2;
        this.receipt.document_type_id = 6;
        this.receipt.payment_type_id = 2;
      } else if (this.$route.name == "invoices" && this.switch1) {
        this.proper_route = "invoice_return";
        this.document_type_id = 4;
        this.receipt.document_type_id = 6;
        this.receipt.payment_type_id = 1;
      }
      this.getBills();
    },
    close_receipt_dialog() {
      this.reference = "";
      this.add_receipt_dialog = false;
    },
    changeBillStatus(bill) {},
    payReceipt(bill) {
      Receipt.getNewReference({
        document_type_id: this.receipt.document_type_id,
      }).then((response) => {
        this.reference = response.data;
      });

      this.receipt.bill_id = bill.id;
      this.receipt.person_id = bill.person_id;
      this.receipt.people = [{ id: bill.person_id, name: bill.name }];
      this.receipt.amount = bill.remaining_amount_at_all;

      this.passed_bill = bill;

      this.add_receipt_dialog = true;
    },
    deleteBill(bill) {
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      Bill.delete({
        id: bill.id,
        document_type_id: bill.document_type_id,
        page,
        itemsPerPage,
        search: this.search,
      }).then((response) => {
        this.bills = response.data.data;
        this.bills_total = response.data.total;
      });
    },
    getBills() {
      this.loading = true;

      const { sortBy, sortDesc, page, itemsPerPage } = this.options;

      this.search.document_type_id = this.document_type_id;
      Bill.getAll({
        page,
        itemsPerPage,
        search: this.search,
      }).then((response) => {
        this.loading = false;

        this.bills = response.data.data;
        this.bills_total = response.data.total;
      });
    },
    searchReset() {
      Bill.getAll(
        {
          page: 1,
          itemsPerPage: 10,
          search: {
            company_name: "",
            reference: "",
            minimum: "",
            maximum: "",
            status_id: "",
            date_from: "",
            date_to: "",
            document_type_id: 1,
          },
        },
        this.route
      ).then((response) => {
        this.bills = response.data.data;
        this.bills_total = response.data.total;

        this.search = {
          document_type_id: this.document_type_id,
          company_name: "",
          reference: "",
          minimum: "",
          maximum: "",
          status_id: "",
          date_from: "",
          date_to: "",
        };
      });
    },
    createPage(route_to) {
      if (route_to.name == "purchases") {
        this.switch_lable_L = "مرتجع المشتريات]";
        this.switch_lable_R = "[ المشتريات";
        this.new_bill = {
          title: "إضافة مشتريات",
          link: "purchase",
        };
        this.new_ret_bill = {
          title: "إضافة مرتجع مشتريات",
          link: "purchase_return",
        };
        this.document_type_id = 1;
        this.proper_route = "purchase";
        this.getBills();
        this.receipt.document_type_id = 5;
        this.receipt.payment_type_id = 1;
      }
      if (route_to.name == "invoices") {
        this.new_bill = {
          title: "إضافة مبيعات",
          link: "invoice",
        };
        this.new_ret_bill = {
          title: "إضافة مرتجع مبيعات",
          link: "invoice_return",
        };

        this.switch_lable_L = "مرتجع المبيعات]";
        this.switch_lable_R = "[ المبيعات";
        this.document_type_id = 2;
        this.proper_route = "invoice";
        this.getBills();
        this.receipt.document_type_id = 6;
        this.receipt.payment_type_id = 2;
      }
    },
  },

  computed: {
    params(nv) {
      return {
        ...this.options,
      };
    },
  },

  created() {
    this.createPage(this.$route);
  },
  watch: {
    $route(to, from) {
      this.createPage(to);
    },
    params: {
      handler() {
        this.getBills();
      },
      deep: true,
    },
  },
};
</script>

<style>
.theme--light.v-input--switch .v-input--switch__track {
  color: rgb(7, 201, 39);
}

.theme--light.v-input--switch .v-input--switch__thumb {
  color: rgb(7, 172, 34);
}
span.lable {
  font-size: 16px;
  color: #7c7c7c;
}
</style>