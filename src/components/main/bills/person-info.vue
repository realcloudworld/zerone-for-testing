<template>
  <div style="padding: 20px; font-size: 14px">
    <v-row>
      <v-col style="height: 10px">
        <v-progress-linear
          v-model="value"
          :active="show"
          :indeterminate="query"
          :query="true"
        ></v-progress-linear>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-toolbar flat color="white">
          <v-toolbar-title>{{ title }} </v-toolbar-title>
        </v-toolbar>
      </v-col>
    </v-row>
    <v-row style="">
      <v-col cols="12" lg="6">
        <v-row
          style="
            font-size: 14px;
            border: 1px solid #bababa;
            border-radius: 5px;

            margin-left: 10px;
            margin-right: 10px;
          "
        >
          <v-col
            style="
              text-align: start;
              background: #8c9eff;
              border-radius: 0px 5px 5px 0px;
            "
          >
            <div style="padding: 3px">الاسم</div>
            <div style="padding: 3px">الشركة</div>
            <div style="padding: 3px">رقم الاتصال</div>
            <div style="padding: 3px">البريد الالكتروني</div>
          </v-col>
          <v-col style="text-align: start">
            <div style="padding: 3px">{{ person.name }}</div>
            <div style="padding: 3px">{{ person.company_name }}</div>
            <div style="padding: 3px">{{ person.phone01 }}</div>
            <div style="padding: 3px">{{ person.email }}</div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="6">
        <v-row
          style="
            font-size: 14px;
            border: 1px solid #bababa;
            border-radius: 5px;

            margin-left: 10px;
            margin-right: 10px;
            min-height: 135px;
          "
        >
          <v-col
            style="
              text-align: start;
              background: #8c9eff;
              border-radius: 0px 5px 5px 0px;
            "
          >
            <div style="padding: 5px">الرصيد الافتتاحي</div>
            <div style="padding: 5px">الحالة</div>
            <div style="padding: 5px">العنوان</div>
          </v-col>
          <v-col style="text-align: start">
            <div style="padding: 5px">
              {{ opening_balance ? opening_balance.toFixed(2) : 0.0 }}
            </div>
            <div style="padding: 5px">
              {{ person.is_person_active == 1 ? " غير نشط" : "نشط" }}
            </div>
            <div style="padding: 5px">{{ person.address }}</div>
          </v-col>

          <v-col> </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="pt-10 justify-center">
      <v-col cols="12" lg="2">
        <v-row>
          <v-col cols="6" lg="12"> الرصيد </v-col>
          <v-col cols="6" lg="12">
            <h1>
              {{ balance.toFixed(2) }}
            </h1>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="2">
        <v-row>
          <v-col cols="6" lg="12"> قيمة الفواتير </v-col>
          <v-col cols="6" lg="12">
            <h1>
              {{ total_amount.toFixed(2) }}
            </h1>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="2">
        <v-row>
          <v-col cols="6" lg="12"> إجمالي المستحق </v-col>
          <v-col cols="6" lg="12">
            <h1>
              {{ remain_amount.toFixed(2) }}
            </h1>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="2">
        <v-row>
          <v-col cols="6" lg="12"> متأخرات </v-col>
          <v-col cols="6" lg="12">
            <h1>
              {{ arrears.toFixed(2) }}
            </h1>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="2">
        <v-row>
          <v-col cols="6" lg="12"> عدد الفواتير </v-col>
          <v-col cols="6" lg="12">
            <h1>
              {{ bills_count }}
            </h1>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="2">
        <v-row>
          <v-col cols="6" lg="12"> عدد المرتجعات </v-col>
          <v-col cols="6" lg="12">
            <h1>
              {{ ret_bills_count }}
            </h1>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-card color="basil" style="width: 100%">
        <v-card-title class="text-center justify-center py-6">
          <p class="basil--text">التعاملات</p>
        </v-card-title>

        <v-tabs v-model="tab" background-color="transparent" color="basil">
          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-row>
              <v-data-table
                style="width: 100%"
                :headers="headers"
                :items="bills"
                :options.sync="pur_options"
                :server-items-length="bills_total"
                :loading="pur_loading"
                class="elevation-1"
              >
                <template v-slot:top> </template>
                <template v-slot:item.issue_date="{ item }">
                  {{ item.issue_date.split(" ")[0] }}
                </template>
                <template v-slot:item.status="{ item }">
                  {{
                    statuses.find((elem) => elem.id == item.status_id).ar_name
                  }}
                </template>
              </v-data-table>
            </v-row>
          </v-tab-item>
          <v-tab-item>
            <v-row>
              <v-data-table
                style="width: 100%"
                :headers="headers"
                :items="ret_bills"
                :options.sync="ret_pur_options"
                :server-items-length="ret_bills_total"
                :loading="ret_pur_loading"
                class="elevation-1"
              >
                <template v-slot:top> </template>
                <template v-slot:item.issue_date="{ item }">
                  {{ item.issue_date.split(" ")[0] }}
                </template>
                <template v-slot:item.status="{ item }">
                  {{
                    statuses.find((elem) => elem.id == item.status_id).ar_name
                  }}
                </template>
              </v-data-table>
            </v-row>
          </v-tab-item>
          <v-tab-item>
            <v-row>
              <v-data-table
                style="width: 100%"
                :headers="receipt_headers"
                :items="receipts"
                :options.sync="receipt_options"
                :server-items-length="receipt_total"
                :loading="receipt_loading"
                class="elevation-1"
              >
                <template v-slot:top> </template>
                <template v-slot:item.status="{ item }">
                  {{
                    receipt_statuses.find((elem) => elem.id == item.status_id)
                      .ar_name
                  }}
                </template>
                <template v-slot:item.date="{ item }">
                  {{ item.date.split(" ")[0] }}
                </template>
              </v-data-table>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import person from "../../../apis/Person";
import personInfoTabs from "./person-info-tabs.vue";
export default {
  components: {
    personInfoTabs,
  },
  data() {
    return {
      /*------------------------------*/
      value: 0,
      query: false,
      show: true,
      interval: 0,
      /*------------------------------*/
      title: "بيانات المورد",
      type_id: "1",
      //---- tabs
      tab: null,
      items: ["الفواتير", "الفواتير المرتجعة", "السندات"],

      //----
      pur_loading: false,
      ret_pur_loading: false,
      remain_amount: 0,
      receipt_loading: false,
      headers: [
        {
          text: "م",
          align: "center",
          width: "5",
          sortable: false,
          value: "id",
        },
        { text: "رقم الفاتورة", align: "center", value: "reference" },
        {
          text: "جهة الاتصال",
          align: "center",
          sortable: false,
          value: "issue_date",
        },
        { text: "الرصيد", align: "center", value: "total_amount" },
        { text: "متأخرات", align: "center", value: "paid_amount" },
        { text: "الحالة ", align: "center", value: "status" },
      ],
      receipt_headers: [
        {
          text: "م",
          align: "center",
          width: "5",
          sortable: false,
          value: "id",
        },
        { text: "رقم الفاتورة", align: "center", value: "reference" },
        {
          text: "تاريخ الاصدار",
          align: "center",
          sortable: false,
          value: "date",
        },
        { text: "القيمة", align: "center", value: "amount" },

        { text: "الحالة ", align: "center", value: "status" },
      ],
      pur_options: {},
      ret_pur_options: {},
      receipt_options: {},
      person: "",
      total_amount: 0,
      bills: [],
      ret_bills: [],
      receipts: [],
      statuses: [
        { id: 1, ar_name: "غير مدفوعة" },
        { id: 2, ar_name: "بانتظار الموافقة" },
        { id: 3, ar_name: "مدفوعة" },
        { id: 4, ar_name: "مسودة" },
        { id: 5, ar_name: "دفعت" },
        { id: 6, ar_name: "دفعت جزئيا" },
      ],
      receipt_statuses: [
        { id: 1, ar_name: "غير مستعمل" },
        { id: 2, ar_name: "مستعمل" },
        { id: 3, ar_name: "مستعمل جزئيا" },
      ],
      bills_total: 0,
      ret_bills_total: 0,
      receipt_total: 0,
      arrears: 0,
      balance: 0,
      bills_count: 0,
      ret_bills_count: 0,
      opening_balance: 0.0,
    };
  },
  computed: {
    pur_params(nv) {
      return {
        ...this.pur_options,
      };
    },
    ret_pur_params(nv) {
      return {
        ...this.ret_pur_options,
      };
    },
    receipt_params(nv) {
      return {
        ...this.receipt_options,
      };
    },
  },
  watch: {
    pur_params: {
      handler() {
        let pur_page = this.pur_options.page;
        let pur_itemsPerPage = this.pur_options.itemsPerPage;
        this.pur_loading = true;
        //

        

        person
          .getOne({
            id: this.$route.params.id,
            pur_page,
            pur_itemsPerPage,
            type_id: this.type_id,
          })
          .then((response) => {
            this.query = false;
            this.show = false;
            this.pur_loading = false;
            this.dataProcessing(response, "pur");
          });
      },
      deep: true,
    },
    ret_pur_params: {
      handler() {
        let ret_pur_page = this.ret_pur_options.page;
        let ret_pur_itemsPerPage = this.ret_pur_options.itemsPerPage;

        //

        
        this.ret_pur_loading = true;
        person
          .getOne({
            id: this.$route.params.id,
            ret_pur_page,
            ret_pur_itemsPerPage,
            type_id: this.type_id,
          })
          .then((response) => {
            this.ret_pur_loading = false;
            this.dataProcessing(response, "ret_pur");
          });
      },
      deep: true,
    },
    $route(to, from) {
      
      
      this.createPage(to, "old");
    },
    receipt_params: {
      handler() {
        this.receipt_loading = true;
        let receipt_page = this.receipt_options.page;
        let receipt_itemsPerPage = this.receipt_options.itemsPerPage;

        

        person
          .getOne({
            id: this.$route.params.id,
            receipt_page,
            receipt_itemsPerPage,
            type_id: this.type_id,
          })
          .then((response) => {
            this.receipt_loading = false;
            this.dataProcessing(response, "receipt");
          });
      },
      deep: true,
    },
  },
  created() {
    this.route = this.$route.fullPath.substr(
      this.$route.fullPath.lastIndexOf("/") + 1
    );

    this.createPage(this.$route, "new");
  },
  methods: {
    createPage(to, status) {
      this.query = true;
      this.show = true;
      this.route = to.fullPath.replace(/^\/([^\/]*).*$/, "$1");

      
      

      if (this.route == "suppliers") {
        this.type_id = 1;
        this.title = "بيانات المورد";
      }
      if (this.route == "customers") {
        this.type_id = 2;
        this.title = "بيانات العميل";
      }

      person
        .getOne({ id: this.$route.params.id, type_id: this.type_id })
        .then((response) => {
          this.dataProcessing(response, "receipt");
        });
    },
    dataProcessing(response, type) {
      

      if (response.data.bills) {
        this.bills = response.data.bills.data;
        this.bills_total = response.data.bills.total;
        return;
      }
      if (response.data.ret_bills) {
        this.ret_bills = response.data.ret_bills.data;
        this.ret_bills_total = response.data.ret_bills.total;
        return;
      }

      if (response.data.receipts) {
        this.receipts = response.data.receipts.data;
        
        this.receipt_total = response.data.receipts.total;
        return;
      }
      this.person = response.data.person;

      
      
      this.total_amount = response.data.total_amount;
      this.bills_count = response.data.bills_count;
      this.ret_bills_count = response.data.ret_bills_count;
      this.remain_amount = response.data.remain_amount;
      this.opening_balance = response.data.opening_balance;
      this.arrears = response.data.arrears;
      this.balance = response.data.balance;
      return 0;
    },
  },
};
</script>

<style>
.v-window__container {
  height: 100%;
}
.v-tabs__content {
  background-color: green;
  height: 100px;
}
</style>