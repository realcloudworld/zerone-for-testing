<template>
  <v-form ref="form">
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
    <div>
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
      <!--<loader :isLoading="isLoading" />-->
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

      <v-dialog v-model="no_product_dialog" max-width="290">
        <v-card>
          <v-card-title> الصنف غير موجود </v-card-title>

          <v-card-text>
            الصنف لم يتم شراؤه من قبل أو أن المخزون قد نفد
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="green darken-1"
              text
              @click="no_product_dialog = false"
            >
              اغلق
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog" max-width="600px" persistent>
        <v-card>
          <p style="margin: 0 10px; font-size: 14px; padding: 10px">
            قم باختيار الصنف المناسب واضغط موافق
          </p>

          <v-card-text>
            <ul>
              <div
                v-for="set in sets"
                tabIndex="-1"
                :key="set.id + 'd'"
                @blur="selected_elem_fromSet = set.id"
              >
                <v-row>
                  <v-col>
                    {{ set.id }}
                  </v-col>
                  <v-col>
                    {{ selected_product.ar_name }}
                  </v-col>
                  <v-col>
                    {{ set.sum_quantity_in_minor_unit }}
                  </v-col>
                  <v-col>
                    {{ set.expires_at && set.expires_at.split(" ")[0] }}
                  </v-col>
                </v-row>
              </div>
            </ul>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="disagree">
              Disagree
            </v-btn>
            <v-btn color="green darken-1" text @click="agreeToAdd">
              Agree
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <product-info
        :dialog="product_info_dialog"
        :product="product_info_product"
        :prdct_forms="prdct_forms"
        :prdct_taxes="prdct_taxes"
        :prdct_types="prdct_types"
        @dialogFalse="product_info_dialog = false"
      >
        <span slot="title"> معلومات الصنف</span>
      </product-info>
      <v-card max-width="100%">
        <v-card-title>
          <v-toolbar flat color="white">
            <v-row>
              <v-col cols="3"
                ><v-toolbar-title>{{ title }}</v-toolbar-title></v-col
              >

              <v-col cols="7" v-if="return_stocktake"
                ><v-radio-group v-model="return_source">
                  <v-row class="pa-0">
                    <v-col cols="1" class="pa-0 mt-7">
                      <v-radio value="1"></v-radio>
                    </v-col>
                    <v-col cols="7" class="pa-0 mt-6">
                      <v-text-field
                        class="stocktake-info"
                        placeholder="رقم الفاتورة"
                        outlined
                        @click="return_source = '1'"
                        autocomplete="off"
                        v-model="stocktake_number_to_search"
                        prefix=" برقم فاتورة الشراء | "
                        :rules="stocktake_exists"
                        @keydown.enter="getStocktakeByHittingStocktakeNumber()"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="4" class="pa-0 pr-1 mt-7">
                      <v-radio value="2" label="اختيار حر للمنتجات"></v-radio>
                    </v-col>
                  </v-row> </v-radio-group
              ></v-col>
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
            </v-row>
          </v-toolbar>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-container>
              <v-row class="justify-space-between">
                <v-col cols="12" lg="5">
                  <v-row>
                    <v-col cols="12" class="pa-0">
                      <v-text-field
                        v-model="stocktake.reference"
                        outlined
                        disabled
                        prefix=" رقم الجرد | "
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" class="pa-0">
                      <v-autocomplete
                        flat
                        no-data
                        no-data-text
                        non-linear
                        v-model="stocktake.revenue_account_id"
                        outlined
                        prefix=" حساب الإيراد للكميات الزائدة | "
                        :items="revenue_accounts"
                        :item-text="
                          (item) => item.account_code + ' ' + item.ar_name
                        "
                        item-value="id"
                        :rules="required"
                      >
                      </v-autocomplete>
                    </v-col>
                    <v-col cols="12" class="pa-0">
                      <v-autocomplete
                        flat
                        no-data
                        no-data-text
                        non-linear
                        v-model="stocktake.expense_account_id"
                        outlined
                        prefix=" حساب التكلفة للكميات الناقصة* | "
                        :items="expense_accounts"
                        :item-text="
                          (item) => item.account_code + ' ' + item.ar_name
                        "
                        item-value="id"
                        :rules="required"
                      >
                      </v-autocomplete>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" lg="5">
                  <v-row>
                    <v-col cols="12" class="pa-0">
                      <v-autocomplete
                        flat
                        outlined
                        no-data
                        no-data-text
                        non-linear
                        v-model="stocktake.inventory_id"
                        :items="inventories"
                        item-text="ar_name"
                        item-value="id"
                        prefix=" المخزن | "
                        :rules="required"
                      >
                      </v-autocomplete>
                    </v-col>
                    <v-col cols="12" class="pa-0">
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
                            :rules="required"
                            v-model="stocktake.issue_date"
                            label="تاريخ الاصدار"
                            prepend-icon="mdi-calendar"
                            v-bind="attrs"
                            v-on="on"
                            @keydown.enter="issue_date_is_down = false"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="stocktake.issue_date"
                          no-title
                          @input="issue_date_is_down = false"
                        ></v-date-picker>
                      </v-menu>
                    </v-col>

                    <v-col cols="12" class="pa-0">
                      <v-textarea
                        rows="2"
                        v-model="stocktake.description"
                        outlined
                        prefix=" الوصف* | "
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
            <v-row>
              <small>*indicates required field</small>
            </v-row>

            <v-divider inset></v-divider>
            <v-row>
              <v-data-table
                disable-pagination
                :headers="header"
                :items="stocktake.details"
                class="elevation-1"
                :hide-default-footer="true"
                :item-key="toString(Math.floor(Math.random(1, 100) * 100))"
              >
                <template slot="no-data">
                  <div style="color: red">قم باختيار الأصناف</div>
                </template>
                <template
                  v-slot:top
                  v-if="!return_stocktake || return_source != '1'"
                >
                  <v-toolbar flat color="white">
                    <v-toolbar-title>قائمة الأصناف</v-toolbar-title>
                    <v-divider class="mx-4" inset vertical></v-divider>
                    <v-col cols="12" sm="6" md="6">
                      <v-autocomplete
                        v-model="selected_product"
                        :loading="loading"
                        :items="found_products"
                        item-text="ar_name"
                        return-object
                        :search-input.sync="name_search"
                        flat
                        hide-no-data
                        label="اسم الصنف"
                        @change="addProductToStocktake(true)"
                      ></v-autocomplete>
                    </v-col>

                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        type="barcode"
                        id="barcode"
                        autocomplete="off"
                        v-model="searched_barcode"
                        label="الباركود"
                        @keydown.enter="searchProductByBarcode('barcode')"
                        :rules="is_exists"
                      ></v-text-field>
                    </v-col>

                    <v-spacer></v-spacer>
                  </v-toolbar>
                </template>
                <template v-slot:item.ar_name="{ item }">
                  <div>{{ item.ar_name }}</div>

                  <a @click="show_product_dialog(item)">
                    <v-icon> mdi-information </v-icon>
                  </a>
                </template>
                <template v-slot:item.expires_at="{ item }">
                  <v-menu
                    ref="maturity_date"
                    v-model="item.expires_at_is_down"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-if="item.has_expiration_date"
                        @click="expires_date(item)"
                        v-model="item.expires_at.split(' ')[0]"
                        flat
                        outlined
                        autocomplete="off"
                        hide-no-data
                        :hide-details="item.expires_at_message"
                        v-bind="attrs"
                        v-on="on"
                        @keydown.enter="item.expires_at_is_down = false"
                        :rules="item.expires_at_valid"
                      ></v-text-field>
                      <v-text-field
                        v-else
                        disabled
                        value="--"
                        flat
                        outlined
                        autocomplete="off"
                        hide-no-data
                        hide-details
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="item.expires_at"
                      no-title
                      @input="item.expires_at_is_down = false"
                      @change="changeExpirationDate(item)"
                    ></v-date-picker>
                  </v-menu>
                </template>
                <template v-slot:item.current_quantity="{ item }">
                  <v-text-field
                    disabled
                    hide-no-data
                    hide-details
                    autocomplete="off"
                    single-line
                    outlined
                    v-model="item.current_quantity"
                  ></v-text-field>
                </template>
                <template v-slot:item.actual_quantity="{ item }">
                  <v-text-field
                    type="number"
                    :rules="required"
                    min="0"
                    hide-no-data
                    hide-details
                    autocomplete="off"
                    single-line
                    outlined
                    v-model="item.actual_quantity"
                    @input="actual_quantity_change(item)"
                  ></v-text-field>
                </template>
                <template v-slot:item.unit_price="{ item }">
                  <v-text-field
                    disabled
                    v-model="item.unit_price"
                    flat
                    type="number"
                    outlined
                    autocomplete="off"
                    hide-no-data
                    hide-details
                    :rules="required"
                  ></v-text-field>
                </template>

                <template v-slot:item.action="{ item }">
                  <v-icon color="red" small @click="deleteItem(item)"
                    >mdi-delete</v-icon
                  >
                </template>

                <template v-slot:item.product_unit_id="{ item }">
                  <v-autocomplete
                    v-model="item.unit_id"
                    :items="item.units"
                    item-text="ar_name"
                    item-value="pivot.id"
                    cache-items
                    flat
                    hide-no-data
                    hide-details
                    solo-inverted
                    outlined
                    @change="product_unit_change(item)"
                  >
                  </v-autocomplete>
                </template>

                <template v-slot:item.total="{ item }">
                  {{
                    (item.actual_quantity - item.current_quantity) *
                    item.unit_price
                  }}
                </template>
              </v-data-table>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            class="btn btn-info m-b-5 m-r-2 white--text"
            color="text--white"
            text
            @click="submit()"
          >
            <v-icon class="white--text">mdi-plus-box</v-icon>حفظ وإضافة صنف جديد
          </v-btn>
          <v-btn
            class="btn btn-info m-b-5 m-r-2 white--text"
            color="text--white"
            text
            @click="suspend()"
          >
            <v-icon class="white--text">mdi-plus-box</v-icon>تعليق
          </v-btn>
          <v-btn
            class="btn btn-info m-b-5 m-r-2 white--text"
            color="text--white"
            text
            @click="return_suspended_stocktake()"
          >
            <v-icon class="white--text">mdi-plus-box</v-icon>احضار المعلقات
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-form>
</template>

<script>
import Product from "../../../apis/Product";
import loader from "../loader.vue";
import StockTake from "../../../apis/StockTake";
import ProductInfo from "./product-info.vue";

import Country from "../../../apis/Country";

export default {
  components: {
    loader,
    ProductInfo,
  },
  data() {
    return {
      new_product: false,

      /*----------------الجرد--------------*/
      issue_date_is_down: false,

      inventories: [],
      revenue_accounts: [],
      expense_accounts: [],

      snackbarColor: "",
      ready: 4,
      /*------------------------------*/
      value: 0,
      query: false,
      show: true,
      interval: 0,
      /*------------------------------*/
      isLoading: true,
      return_source: "1",

      act: "output",
      stocktake_number_to_search: "",
      return_stocktake: false,
      cols: 10,
      main_stocktake: true,
      //-------------
      snackbar: false,
      snackbarText: "تأكد من تعبئة الحقول",
      snackbarTimeout: 2000,
      //-------------
      no_product_dialog: false,
      agree: false,
      functionToAddProduct: "",
      someVariableUnderYourControl: 1,
      sets: [],
      dialog: false,
      starter_dialog: false,
      route: window.location.pathname.replace(/^\/([^\/]*).*$/, "$1"),
      title: "جرد المخزون",

      //----
      person_info: "معلومات المورد",
      person_type: "suppliers",
      persona: "المورد",
      //----

      is_new_stocktake: true,
      additional_expenses_from_accounts: [],
      additional_expenses_from_account_id: 0,
      searched_barcode: "",
      /*----------------info----------------- */
      payment_method_dialog: false,
      product_info_product: "",
      product_info_dialog: false,
      prdct_forms: [],
      prdct_taxes: [],
      prdct_types: [],

      /*-----------------------taxes---------------------------*/
      taxes: [],
      /*----------------discount_types--------------------*/
      discount_types: [
        { id: 1, ar_name: "%", en_name: "%" },
        { id: 2, ar_name: "قيمة", en_name: "amount" },
      ],

      add_update_person_dialog: false,
      passed_person: "",
      operation: "add",
      cities: [],
      people: [],
      name_search: "",

      loading: false,

      found_products: [],
      selected_product: [],
      header: [
        {
          text: "اسم الصنف",
          align: "center",
          value: "ar_name",
          width: 300,
          sortable: false,
        },
        {
          text: "الصلاحية",
          align: "center",
          value: "expires_at",
          sortable: false,
          width: 100,
        },
        {
          text: "الكمية في النظام",
          align: "center",
          value: "current_quantity",
          sortable: false,
        },

        {
          text: "الكمية الفعلية",
          align: "center",
          value: "actual_quantity",
          sortable: false,
        },

        {
          text: "الوحدة",
          align: "center",
          value: "product_unit_id",
          sortable: false,
        },

        {
          text: "متوسط سعر الوحدة",
          align: "center",
          value: "unit_price",
          sortable: false,
        },

        {
          text: "تكلفة الفرق",
          align: "center",
          value: "total",
          sortable: false,
        },

        { text: "تحكم ", align: "center", value: "action" },
      ],

      payment_conditions: [],
      new_stocktake: {
        is_input: 1,
        document_type_id: "",
        person_id: 1,
        only_cash: true,
        payment_condition_id: 10,
        payment_methods: [
          {
            account_id: "",
            amount: 0,
            description: "",
          },
          {
            account_id: "",
            amount: 0,
            description: "",
          },
          {
            account_id: "",
            amount: 0,
            description: "",
          },
        ],
        paid_amount: 0,
        remaining_amount: 0,

        additional_expenses: 0,
        total_without_products_tax: 0,
        total_tax: 0,
        total_amount: 0,

        patch_number: Math.floor(Math.random() * (99999 - 10000 + 1) + 10000),

        details: [],
        reference: "",
        description: "",
        person_id: "",
        issue_date: new Date().toISOString().substr(0, 10),
        maturity_date: new Date(
          new Date().getTime() + 10 * 24 * 60 * 60 * 1000
        ),
      },
      stocktake: {
        person_id: 1,
        is_input: 1,
        document_type_id: 1,
        only_cash: true,

        payment_condition_id: 10,
        payment_methods: [
          {
            account_id: "",
            amount: 0,
            description: "",
          },
          {
            account_id: "",
            amount: 0,
            description: "",
          },
          {
            account_id: "",
            amount: 0,
            description: "",
          },
        ],
        paid_amount: 0,
        remaining_amount: 0,

        additional_expenses: 0,
        additional_expenses_from_account_id: 4,
        total_without_products_tax: 0,
        total_tax: 0,
        total_amount: 0,

        patch_number: Math.floor(Math.random() * (99999 - 10000 + 1) + 10000),

        details: [],
        reference: "",
        description: "",
        issue_date: new Date().toISOString().substr(0, 10),
        maturity_date: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000)
          .toISOString()
          .substr(0, 10),
      },

      /*------------------dateTime----------------------*/
      date: new Date().toISOString().substr(0, 10),
      issue_date_is_down: false,
      maturity_date_is_down: false,
      formatted_issue_date: this.formatDate(
        new Date().toISOString().substr(0, 10)
      ),

      /*-------------------validators---------------------------*/
      vld_minlingth_one: [(v) => v.length >= 1 || "أدخل قيمة"],
      vld_selected: [(v) => v > 0 || "أدخل قيمة"],
      required: [(value) => !!value || "الحقل مطلوب."],
      isunique: [],
      is_exists: [],
      stocktake_exists: [],
      expires_at_valid: [
        (v) => (v.has_expiration_date && v != "*******") || "قم بتغيير التاريخ",
      ],
      is_valid_date: [],
      vld_numbering: [(v) => /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية"],
    };
  },
  watch: {
    ready() {},
    name_search(val) {
      val &&
        val !== this.selected_product.ar_name &&
        this.getProducts(val, "name");
    },

    $route(to, from) {
      console.log("from");
      console.log(to);
      this.createPage(to, "old");
    },
  },
  beforeRouteUpdate(to, from, next) {
    // alert(1);
    next();
  },
  methods: {
    changeExpirationDate(item) {
      let occurrences = 0;
      let firstIndex = -1;

      for (let index = 0; index < this.stocktake.details.length; index++) {
        console.log("item");
        console.log(item);
        console.log(this.stocktake.details[index]);
        console.log("this.stocktake.details[index].expires_at");

        if (
          this.stocktake.details[index].barcode == item.barcode &&
          this.stocktake.details[index].expires_at.split("")[0] ==
            item.expires_at
        ) {
          if (firstIndex == -1) firstIndex = index;
          occurrences++;
          if (occurrences == 2) {
            this.stocktake.details[firstIndex].quantity +=
              this.stocktake.details[index].quantity;
            this.stocktake.details.splice(index, 1);
            return;
          }
        }
      }

      console.log(item);
    },
    actual_quantity_change(item) {
      let unit = item.units.find((elem) => elem.pivot.id == item.unit_id);
      console.log(unit);
      console.log("unit");
      item.actual_quantity_in_minor_unit = parseInt(
        item.actual_quantity * unit.pivot.contains
      );

      console.log(item.actual_quantity_in_minor_unit);
    },
    disagree() {
      this.dialog = false;
      this.selected_product = "";
    },
    quantity_clicked(item) {
      item.hide_quantity_valid_message = true;
      item.quantity_valid = [true];
    },
    endIntersect(entries, observer, isIntersecting) {},
    getStocktakeByHittingStocktakeNumber() {
      //this.title = "تعديل فاتورة رقم " + this.$route.params.id;
      Stocktake.get(
        this.stocktake_number_to_search,
        { document_type_id: this.stocktake.document_type_id - 2, return: 1 }
        /*
        1 - purchase
        2 - invoice
        3 - purchase return 
        4 - invoice  return 
        */
      ).then((response) => {
        if (Array.isArray(response.data)) {
          this.stocktake_exists = [false || "الفاتورة غير موجود "];

          return 0;
        }
        this.stocktake_exists = [true];
        this.stocktake = response.data.stocktake;
        if (this.route == "purchase_return") {
          this.stocktake.document_type_id = 3;
          this.stocktake.is_input = 0;
        } //purcase return
        if (this.route == "invoice_return") {
          this.stocktake.document_type_id = 4; //purcase return
          this.stocktake.is_input = 1;
        }
        console.log(this.stocktake);
        this.stocktake.issue_date = this.stocktake.issue_date.split(" ")[0];
        this.stocktake.maturity_date =
          this.stocktake.maturity_date.split(" ")[0];
        this.stocktake.details.forEach((elem) => {
          if (elem.expires_at) elem.expires_at = elem.expires_at.split(" ")[0];
        });

        if (this.stocktake.payment_methods.length != 0) {
        } else
          this.stocktake.payment_methods = [
            {
              account_id: "",
              amount: 0,
              description: "",
            },
            {
              account_id: "",
              amount: 0,
              description: "",
            },
            {
              account_id: "",
              amount: 0,
              description: "",
            },
          ];

        this.people = response.data.people;
        this.additional_expenses_from_accounts =
          response.data.accounts.accounts;
        console.log(response.data.accounts.accounts);
      });
    },
    expires_date(item) {
      item.expires_at_message = true;
      item.expires_at_valid = [true];
      if (item.expires_at == "*******")
        item.expires_at = new Date().toISOString().substr(0, 10);
    },
    agreeToAdd() {
      // this.agree = true;

      this.index_of_selected_product = this.sets.findIndex(
        (elem) => elem.id == this.selected_elem_fromSet
      );

      console.log(this.index_of_selected_product);

      let selected_product = JSON.parse(JSON.stringify(this.selected_product));

      console.log(selected_product);
      selected_product["details"][0] =
        selected_product["details"][this.index_of_selected_product];

      this.showThisProduct(selected_product);
      console.log("index");

      console.log("index");

      window.removeEventListener("keydown", this.functionToAddProduct);

      let input_barcode = document.getElementById("barcode");
      this.$nextTick(() => {
        input_barcode.focus();
      });

      this.dialog = false;
      this.agree = false;
      return;

      //e.preventDefault();

      console.log(selectedElm);
      selectedElm = selectedElm[action[e.key] + "ElementSibling"];

      // loop if top/bottom edges reached or "home"/"end" keys clicked
      if (!selectedElm || e.key == "Home" || e.key == "End") {
        goToStart = action[e.key] == "next" || e.key == "Home";
        selectedElm =
          listElm.children[goToStart ? 0 : listElm.children.length - 1];
      }

      selectedElm.focus();

      return;

      // Mark first list item
      this.$nextTick(() => {
        listElm.firstElementChild.focus();
        var selectedElm = document.activeElement,
          goToStart,
          // map actions to event's key
          action = {
            ArrowUp: "previous",
            Up: "previous",
            ArrowDown: "next",
            Down: "next",
          };

        this.functionToAddProduct = (e) => {};
        window.addEventListener("keydown", this.functionToAddProduct);
      });

      // Event listener
    },
    showThisProduct(selected_product) {
      this.selected_product = "";
      this.searched_barcode = "";
      let gg;
      if (this.route == "purchase")
        selected_product.tax = selected_product.bought_tax;
      if (this.route == "invoice")
        selected_product.tax = selected_product.sold_tax;

      if (this.route != "purchase")
        if (
          (gg = this.stocktake.details.findIndex(
            (elem) =>
              elem.id == selected_product.id &&
              elem.expires_at.split(" ")[0] ==
                selected_product["details"][0].expires_at.split(" ")[0]
          )) >= 0
        ) {
          this.stocktake.details[gg].quantity++;

          return;
        }

      selected_product.expires_at_message = true;
      selected_product.hide_quantity_valid_message = true;
      selected_product.quantity_valid = [true];

      console.log("selected_product");
      console.log(selected_product);
      //this.dialog = true;

      selected_product["document_type_id"] = this.stocktake.document_type_id;
      selected_product.unit_id =
        selected_product.units[selected_product.main_unit_id - 1].pivot.id;

      selected_product.unit_price = selected_product.average_cost.toFixed(2);

      selected_product.quantity = 1;

      selected_product["product_id"] = selected_product["id"]; // stocktake

      selected_product.expires_at = selected_product.details[0].expires_at;
      selected_product.current_quantity =
        selected_product.details[0].sum_quantity_in_minor_unit /
        selected_product.units[selected_product.main_unit_id - 1].pivot
          .contains;

      selected_product.actual_quantity = selected_product.current_quantity;
      selected_product.actual_quantity_in_minor_unit = parseInt(
        selected_product.actual_quantity *
          selected_product.units[selected_product.main_unit_id - 1].pivot
            .contains
      );

      selected_product = JSON.parse(JSON.stringify(selected_product));
      this.stocktake.details.push(selected_product);
      return;
    },

    addProductToStocktake(name) {
      //-----processing  for output document
      if (this.act == "input") {
        this.selected_product.expires_at = "*******";
        this.showThisProduct(this.selected_product);
        return;
      }

      //-----processing  for output document
      if (this.selected_product.details.length == 0) {
        let detail = {
          expires_at: "*******",
          sum_quantity_in_minor_unit: 0,
        };
        this.selected_product.details = [];
        this.selected_product.details.push(detail);

        this.showThisProduct(this.selected_product);
        return;
      }
      if (this.selected_product.details.length == 1) {
        this.showThisProduct(this.selected_product);
        return;
      }
      let products_grouped = false;
      if (products_grouped) {
        this.selected_product.details[0].sum_quantity_in_minor_unit =
          this.selected_product.sum_quantity_in_minor_unit;

        // this.selected_product.details[0].sum_quantity_in_minor_unit =
        //   this.selected_product.details.reduce(
        //     (a, b) => +a + +b.sum_quantity_in_minor_unit,
        //     0
        //   );
        console.log("this.selected_product");
        console.log(this.selected_product);
        this.showThisProduct(this.selected_product);
        return;
      }
      let first = false;
      if (name) first = true;

      this.sets = this.selected_product.details;
      this.dialog = true;
      this.$nextTick().then(() => {
        var listElm = document.querySelector("ul");

        // Mark first list item
        this.$nextTick(() => {
          listElm.firstElementChild.focus();
          var selectedElm = document.activeElement,
            goToStart,
            // map actions to event's key
            action = {
              ArrowUp: "previous",
              Up: "previous",
              ArrowDown: "next",
              Down: "next",
            };

          this.functionToAddProduct = (e) => {
            if (e.key === "Enter" && this.dialog && !first) {
              var parent = selectedElm.parentNode;
              console.log(parent);
              console.log(selectedElm);

              this.index_of_selected_product = Array.prototype.indexOf.call(
                listElm.children,
                selectedElm
              );

              let selected_product = JSON.parse(
                JSON.stringify(this.selected_product)
              );

              console.log(selected_product);
              selected_product["details"][0] =
                selected_product["details"][this.index_of_selected_product];

              this.showThisProduct(selected_product);
              console.log("index");

              console.log("index");

              window.removeEventListener("keydown", this.functionToAddProduct);

              console.log("input_barcode");
              console.log(input_barcode);
              console.log("input_barcode");
              let input_barcode = document.getElementById("barcode");
              // this.$nextTick(() => {
              //   input_barcode.focus();
              // });

              console.log("selectedElm");
              console.log(selectedElm);
              console.log("selectedElm");
              this.dialog = false;
              this.agree = false;
              return;
            }
            //e.preventDefault();

            if (e.key !== "Enter") {
              console.log(selectedElm);
              selectedElm = selectedElm[action[e.key] + "ElementSibling"];

              // loop if top/bottom edges reached or "home"/"end" keys clicked
              if (!selectedElm || e.key == "Home" || e.key == "End") {
                goToStart = action[e.key] == "next" || e.key == "Home";
                selectedElm =
                  listElm.children[goToStart ? 0 : listElm.children.length - 1];
              }

              selectedElm.focus();
              first = false;
            }
          };

          window.addEventListener("keydown", this.functionToAddProduct);
        });

        // Event listener
      });

      //CHECK IF PRODUCT HAS EXPIRATION DATE --> ADD QUANTITY

      // if (!selected_product.has_expiration_date) {
      //   let index = this.stocktake.details.findIndex(
      //     (elem) => elem.barcode == selected_product.barcode
      //   );
      //   if (index != -1) {
      //     this.stocktake.details[index].quantity++;
      //     return;
      //   }
      // }

      // //this.found_products = response.data.products;

      // //-----add

      // selected_product.unit_id =
      //   selected_product.units[selected_product.main_unit_id - 1].pivot.id;

      // selected_product.unit_price =
      //   selected_product.units[
      //     selected_product.main_unit_id - 1
      //   ].pivot.bought_price;

      // selected_product.quantity = 1;

      // //---------
      // selected_product["document_type_id"] = 1; // stocktake
      // selected_product["product_id"] = selected_product["id"]; // stocktake

      // this.stocktake.details.push(selected_product);
    },
    searchProductByBarcode() {
      let params = { barcode: this.searched_barcode };
      let extra_route = this.act;
      Product.billBarcodeSearch(params, extra_route).then((response) => {
        if (response.data.products.length == 0) {
          this.is_exists = [false || "الصنف غير موجود "];
          return;
        }
        this.is_exists = [true];
        this.selected_product = JSON.parse(
          JSON.stringify(response.data.products[0])
        );

        this.addProductToStocktake();
      });
    },

    remaining_amount() {
      return (this.stocktake.remaining_amount =
        this.stocktake.total_amount - this.stocktake.paid_amount);
    },
    payAllCash() {
      this.stocktake.paid_amount = this.stocktake.total_amount.toFixed(2);
      this.stocktake.payment_methods = [
        {
          account_id: "",
          amount: 0,
          description: "",
        },
        {
          account_id: "",
          amount: 0,
          description: "",
        },
        {
          account_id: "",
          amount: 0,
          description: "",
        },
      ];
    },
    paymentMethods(payments) {
      this.stocktake.payment_methods = payments.payment_methods;
      this.stocktake.paid_amount = payments.paid_amount;
      this.stocktake.only_cash = false;
    },
    show_product_dialog(item) {
      this.product_info_dialog = true;
      console.log(item);
      this.product_info_product = item;
    },
    product_unit_change(item) {
      item.hide_quantity_valid_message = true;
      item.quantity_valid = [true];

      let unit = item.units.find((elem) => elem.pivot.id == item.unit_id);

      item.current_quantity = parseInt(
        item.details[0].sum_quantity_in_minor_unit / unit.pivot.contains
      );
      item.unit_price = (unit.pivot.contains * item.average_cost).toFixed(2);
    },
    total_tax() {
      this.stocktake.total_tax = this.stocktake.details.reduce(
        (a, b) => +a + +b.tax_value,
        0
      );
      return this.stocktake.total_tax;
    },
    total_amount() {
      this.stocktake.total_amount =
        this.total_without_products_tax() + this.total_tax();

      return this.stocktake.total_amount;
    },

    total_without_products_tax() {
      return this.stocktake.details.reduce(
        (a, b) => +a + +b.total_befor_tax,
        0
      );
    },

    total(item) {
      item.total = this.tax_value(item) + this.total_befor_tax(item);
      return item.total;
    },

    tax_value(item) {
      item.tax_value = (this.total_befor_tax(item) * item.tax) / 100;
      return item.tax_value;
    },
    total_befor_tax(item) {
      if (item.discount_type_id == 1) {
        item.total_befor_tax =
          item.quantity * item.unit_price -
          (item.quantity * item.unit_price * item.discount) / 100;

        return item.total_befor_tax;
      }
      item.total_befor_tax = item.quantity * item.unit_price - item.discount;

      return item.total_befor_tax;
    },
    sum_quantity_in_minor_unit(item) {
      let unit = item.units.find((elem) => elem.pivot.id == item.unit_id);
      item.sum_quantity_in_minor_unit = item.quantity * unit.pivot.contains;
      return item.sum_quantity_in_minor_unit;
    },
    deleteItem(item) {
      this.stocktake.details.splice(this.stocktake.details.indexOf(item), 1);
    },
    getProducts(val, type) {
      if (val.length > 2) {
        this.loading = true;
        let params = { name: val };
        let extra_route = this.act;
        Product.billNameSearch(params, extra_route).then((response) => {
          if (response.data.products.length == 0) {
            this.is_exists = [false || "الصنف غير موجود "];
            return;
          }

          this.loading = false;
          console.log("hi", response.data);

          this.found_products = JSON.parse(
            JSON.stringify(response.data.products)
          );

          this.is_exists = [true];
        });
      }
    },

    // addProductToStocktake() {
    //   console.log("this.selected_product");
    //   console.log(this.selected_product);
    //   console.log("this.selected_product");
    //   this.selected_product.main_unit_id =
    //     this.selected_product.main_bought_unit_id;
    //   this.showThisProduct(this.selected_product);
    // },
    checkExicting() {},

    suspend() {
      let stocktake = JSON.parse(JSON.stringify(this.stocktake));
      this.$store.state.suspended_stocktakes.push(stocktake);
    },
    return_suspended_stocktake() {
      console.log(this.$store.state.suspended_stocktakes[0]);
      this.stocktake = this.$store.state.suspended_stocktakes[0];
    },
    submit() {
      if (!this.$refs.form.validate()) {
        console.log("this.stocktake.details");
        console.log(this.stocktake.details);
        console.log(this.$refs.form.rules);
        return;
      }

      if (this.stocktake.details.length == 0) {
        this.snackbar = true;
        return;
      }
      this.starter_dialog = true;
      //if (this.is_new_stocktake)
      StockTake.store(this.stocktake).then((response) => {
        this.starter_dialog = false;
        console.log(response.data);
      });
      // else
      //   StockTake.update(this.stocktake).then((response) =>
      //     console.log(response.data)
      //   );
    },

    /*------------------dateTime----------------------*/
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    createPage(to, status) {
      this.query = true;
      this.show = true;

      StockTake.create().then((response) => {
        this.query = false;
        this.show = false;

        this.stocktake.reference = response.data["reference"];

        this.revenue_accounts = [
          ...[{ header: "حسابات حقوق الملاك" }],
          ...response.data[3],
          ...[{ divider: true }, { header: "حسابات الإيرادات" }],
          ...response.data[4],
        ];
        console.log(this.revenue_accounts);
        this.expense_accounts = [
          ...[{ header: "حسابات حقوق الملاك" }],
          ...response.data[3],
          ...[{ divider: true }, { header: "حسابات المصروفات" }],
          ...response.data[5],
        ];
        this.inventories = response.data["inventories"];
      });
    },
  },
  created() {
    this.createPage(this.$route, "new");
  },
};
</script>

<style>
.v-application--wrap > .container {
  margin: 0;
}
.v-text-field.v-text-field--enclosed .v-text-field__details,
.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
  > .v-input__control
  > .v-input__slot {
  padding: 0px;
}
.stocktake-footer {
  min-width: 0;
  overflow: hidden;
}
.purchas-extra-expense :after,
.purchas-extra-expense :before {
  display: none;
}

.purchas-extra-expense .v-text-field__details {
  display: none;
}
.text-red input {
  color: red !important;
}
.stocktake-info .v-text-field__prefix {
  margin-right: 10px;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.v-application ol,
.v-application ul {
  padding-left: 0;
}
ul {
  list-style: none;
  border: 1px solid silver;
  max-height: 170px;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth; /* nice smooth movement */
  overflow: hidden; /* set to hidden by OP's request */
}

ul > div {
  padding: 0.5em;
  margin: 0;
}
ul > div:focus {
  background: #e91e63;
  outline: none;
}

.theme--light.v-subheader {
  background: rgb(255, 231, 243);
  justify-content: center;
}
.first-level {
  background: rgb(103, 133, 196);
  justify-content: center;
}

.v-application ol,
.v-application ul {
  padding-left: 0;
}
ul {
  list-style: none;
  border: 1px solid silver;
  max-height: 170px;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth; /* nice smooth movement */
  overflow: hidden; /* set to hidden by OP's request */
}

ul > div {
  padding: 0.5em;
  margin: 0;
}
ul > div:focus {
  background: #e91e63;
  outline: none;
}

.theme--light.v-subheader {
  background: rgb(255, 231, 243);
  justify-content: center;
}
.first-level {
  background: rgb(103, 133, 196);
  justify-content: center;
}
</style>