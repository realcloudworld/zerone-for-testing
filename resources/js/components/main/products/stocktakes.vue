<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="stocktakes"
      :options.sync="options"
      :server-items-length="stocktakes_total"
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
            >إضافة جرد مخزون</v-btn
          >
        </v-toolbar>

        <v-row>
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
                <v-btn elevation color="primary" @click="getStocktakes"
                  >البحث</v-btn
                >
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

      <template v-slot:item.revenue_accounts="{ item }">
        <div style="white-space: nowrap">
          {{ item.revenue_account_name }}
        </div>
      </template>
      <template v-slot:item.expense_accounts="{ item }">
        {{ item.expense_account_name }}
      </template>
      <template v-slot:item.issue_date="{ item }">
        <div style="white-space: nowrap">
          {{ item.issue_date.split(" ")[0] }}
        </div>
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

        <router-link :to="proper_route + '/' + item.id"
          ><v-icon small>mdi-card</v-icon></router-link
        >

        <v-btn icon @click.stop="deleteStocktake(item, 'update')">
          <v-icon small class="outlined font-size-12">mdi-delete</v-icon>
        </v-btn>
      </template>
      <template v-slot:no-data>لا يوجد بيانات !</template>
    </v-data-table>
  </div>
</template>

<script>
import StockTake from "../../../apis/StockTake";

export default {
  data() {
    return {
      proper_route: "",
      switch_lable_L: "مرتجع المشتريات]",
      switch_lable_R: "[ المشتريات",
      switch1: false,
      receipt: {
        stocktake_id: "",
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
      passed_stocktake: "",
      document_type_id: 1,
      route: window.location.pathname.replace(/^\/([^\/]*).*$/, "$1"),
      loading: true,
      menu1: false,
      menu2: false,
      types: [
        { id: 1, ar_name: "صرف" },
        { id: 2, ar_name: "نقد" },
      ],

      search: {
        document_type_id: "",
        reference: "",
        minimum: "",
        maximum: "",

        date_from: "",
        date_to: "",
      },
      stocktakes_total: 10,
      options: {},
      stocktakes: [],
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

        { text: "تاريخ الإصدار", align: "center", value: "issue_date" },

        { text: "حسابات المصروف", align: "center", value: "expense_accounts" },
        { text: "حسابات الايراد", align: "center", value: "revenue_accounts" },

        { text: "التحكم ", align: "center", value: "actions" },
      ],
    };
  },
  methods: {
    getProperStocktakes() {
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
      this.getStocktakes();
    },
    close_receipt_dialog() {
      this.reference = "";
      this.add_receipt_dialog = false;
    },

    payReceipt(stocktake) {
      Receipt.getNewReference({
        document_type_id: this.receipt.document_type_id,
      }).then((response) => {
        this.reference = response.data;
      });

      this.receipt.stocktake_id = stocktake.id;
      this.receipt.person_id = stocktake.person_id;
      this.receipt.people = [{ id: stocktake.person_id, name: stocktake.name }];
      this.receipt.amount = stocktake.remaining_amount_at_all;

      this.passed_stocktake = stocktake;

      console.log("this.reference");
      console.log(this.reference);
      console.log("stocktake");
      console.log(stocktake);
      console.log(this.receipt);
      this.add_receipt_dialog = true;
    },
    deleteStocktake(stocktake) {
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      StockTake.delete({
        id: stocktake.id,
        document_type_id: stocktake.document_type_id,
        page,
        itemsPerPage,
        search: this.search,
      }).then((response) => {
        this.stocktakes = response.data.data;
        this.stocktakes_total = response.data.total;
      });
    },
    getStocktakes() {
      this.loading = true;

      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      console.log("sssss");
      console.log(this.search);
      this.search.document_type_id = this.document_type_id;
      StockTake.getAll({
        page,
        itemsPerPage,
        search: this.search,
      }).then((response) => {
        this.loading = false;

        this.stocktakes = response.data.data;
        this.stocktakes_total = response.data.total;
      });
    },
    searchReset() {
      Stocktake.getAll(
        {
          page: 1,
          itemsPerPage: 10,
          search: {
            reference: "",
            minimum: "",
            maximum: "",
            date_from: "",
            date_to: "",
            document_type_id: 1,
          },
        },
        this.route
      ).then((response) => {
        this.stocktakes = response.data.data;
        this.stocktakes_total = response.data.total;

        this.search = {
          document_type_id: this.document_type_id,
          reference: "",
          minimum: "",
          maximum: "",
          date_from: "",
          date_to: "",
        };
      });
    },
    createPage(route_to) {
      if (route_to.name == "purchases") {
        this.switch_lable_L = "مرتجع المشتريات]";
        this.switch_lable_R = "[ المشتريات";
        this.document_type_id = 1;
        this.proper_route = "purchase";
        this.getStocktakes();
        this.receipt.document_type_id = 5;
        this.receipt.payment_type_id = 1;
      }
      if (route_to.name == "invoices") {
        this.switch_lable_L = "مرتجع المبيعات]";
        this.switch_lable_R = "[ المبيعات";
        this.document_type_id = 2;
        this.proper_route = "invoice";
        this.getStocktakes();
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
        this.getStocktakes();
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
span {
  font-size: 16px;
  color: #7c7c7c;
}
</style>