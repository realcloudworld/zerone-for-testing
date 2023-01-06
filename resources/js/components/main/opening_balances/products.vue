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
      <v-container>
        <v-divider inset></v-divider>
        <v-row>
          <v-data-table
            style="
              width: 100%;
              font-weight: initial;
              font-size: 14px;
              min-height: 400px;
            "
            disable-pagination
            :headers="header"
            :items="balance.details"
            class="elevation-1"
            :hide-default-footer="true"
            :item-key="toString(Math.floor(Math.random(1, 100) * 100))"
          >
            <template slot="no-data">
              <div style="color: red">قم باختيار الأصناف</div>
            </template>
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-toolbar-title>قائمة الأصناف</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-col cols="12" sm="6" md="4">
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
                    @change="addProductToBalance(true)"
                  ></v-autocomplete>
                </v-col>

                <v-col cols="12" sm="6" md="4">
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
            <template v-slot:footer>
              <div style="height: 100px"></div>
              <v-divider class="mx-4" inset></v-divider>
              <v-toolbar flat color="white">
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-btn
                  class="btn btn-info m-b-5 m-r-2 white--text"
                  color="text--white"
                  text
                  @click="submit()"
                >
                  <v-icon class="white--text">mdi-plus-box</v-icon>حفظ
                </v-btn>
              </v-toolbar>
            </template>
            <template v-slot:item.ar_name="{ item }">
              <div>{{ item.ar_name }}</div>
            </template>
            <template v-slot:item.expires_at="{ item }">
              <v-menu
                :disabled="!item.has_expiration_date"
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
                    :disabled="!item.has_expiration_date"
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
                    @change="changeExpirationDate(item)"
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
            <template v-slot:item.unit_price="{ item }">
              <v-text-field
                v-model="item.unit_price"
                flat
                type="number"
                outlined
                autocomplete="off"
                hide-no-data
                hide-details
              ></v-text-field>
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
            <template v-slot:item.quantity="{ item }">
              <v-text-field
                type="number"
                hide-no-data
                autocomplete="off"
                single-line
                outlined
                v-model="item.quantity"
                :hide-details="item.hide_quantity_valid_message"
                :rules="item.quantity_valid"
              ></v-text-field>
            </template>
            <template v-slot:item.quantity_in_minor_unit="{ item }">
              <v-text-field
                autocomplete="off"
                disabled
                single-line
                flat
                hide-no-data
                hide-details
                solo-inverted
                outlined
                :value="quantity_in_minor_unit(item)"
              ></v-text-field>
            </template>

            <template v-slot:item.total="{ item }">
              <v-text-field
                disabled
                hide-no-data
                hide-details
                autocomplete="off"
                single-line
                outlined
                :value="total(item).toFixed(2)"
              ></v-text-field>
            </template>
            <template v-slot:item.action="{ item }">
              <v-icon color="red" small @click="deleteItem(item)"
                >mdi-delete</v-icon
              >
            </template>
          </v-data-table>
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
          text: "الكمية",
          align: "center",
          value: "quantity",
          sortable: false,
        },
        {
          text: "الوحدة",
          align: "center",
          value: "product_unit_id",
          sortable: false,
        },

        {
          text: "سعر الوحدة",
          align: "center",
          value: "unit_price",
          sortable: false,
        },

        {
          text: "الكمية و.ص",
          align: "center",
          value: "quantity_in_minor_unit",
          sortable: false,
        },

        {
          text: "القيمة",
          align: "center",
          value: "total",
          sortable: false,
        },

        { text: "تحكم ", align: "center", value: "action" },
      ],
      accounts: [],
      date: new Date().toISOString().substr(0, 10),
      issue_date_is_down: false,
      balance: {
        issue_date: new Date().toISOString().substr(0, 10),
        details: [],
      },
    };
  },
  created() {
    Account.showAccountsByType(3).then((response) => {
      this.accounts = response.data.accounts;
    });
  },
  watch: {
    name_search(val) {
      val &&
        val !== this.selected_product.ar_name &&
        this.getProducts(val, "name");
    },
  },
  methods: {
    product_unit_change(item) {
      item.hide_quantity_valid_message = true;
      item.quantity_valid = [true];

      let unit = item.units.find((elem) => elem.pivot.id == item.unit_id);

      item.unit_price = unit.pivot.bought_price;
    },
    getProducts(val, type) {
      if (val.length > 2) {
        this.loading = true;
        let params = { name: val };

        Product.billNameSearch(params, "input").then((response) => {
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

    changeExpirationDate(item) {
      console.log(item.expires_at);
      let occurrences = 0;
      let firstIndex = -1;

      for (let index = 0; index < this.balance.details.length; index++) {
        if (
          this.balance.details[index].barcode == item.barcode &&
          this.balance.details[index].expires_at == item.expires_at
        ) {
          if (firstIndex == -1) firstIndex = index;
          occurrences++;
          if (occurrences == 2) {
            this.balance.details[firstIndex].quantity +=
              this.balance.details[index].quantity;
            this.balance.details.splice(index, 1);
            return;
          }
        }
      }

      console.log(item);
    },
    expires_date(item) {
      item.expires_at_message = true;
      item.expires_at_valid = [true];
      if (item.expires_at == "*******")
        item.expires_at = new Date().toISOString().substr(0, 10);
    },
    submit() {
      this.balance.details.forEach((item) => {
        if (item.expires_at == "*******") {
          item.expires_at_message = false;
        }
      });

      if (!this.$refs.form.validate()) {
        console.log("this.balance.details");
        console.log(this.balance.details);
        console.log(this.$refs.form.rules);
        return;
      }

      if (this.balance.details.length == 0) {
        this.snackbar = true;
        return;
      }

      console.log(this.balance);
      console.log("this.balance");

      this.starter_dialog = true;
      Account.storeProductOpeningBalance(this.balance).then((response) => {
        this.starter_dialog = false;

        this.snackbar = true;
        this.snackbarText = "تم حفظ الفاتورة";
      });

      console.log(this.balance);
    },
    total(item) {
      item.total = item.quantity * item.unit_price;
      return item.total;
    },
    quantity_in_minor_unit(item) {
      let unit = item.units.find((elem) => elem.pivot.id == item.unit_id);
      item.quantity_in_minor_unit = item.quantity * unit.pivot.contains;
      return item.quantity_in_minor_unit;
    },
    deleteItem(item) {
      this.balance.details.splice(this.balance.details.indexOf(item), 1);
    },
    searchProductByBarcode() {
      let params = { barcode: this.searched_barcode };

      Product.billBarcodeSearch(params, "input").then((response) => {
        if (response.data.products.length == 0) {
          this.is_exists = [false || "الصنف غير موجود "];
          return;
        }
        this.is_exists = [true];
        this.selected_product = JSON.parse(
          JSON.stringify(response.data.products[0])
        );

        this.addProductToBalance();
      });
    },
    addProductToBalance(name) {
      if (this.selected_product.has_expiration_date) {
        this.selected_product.expires_at = "*******";
        this.selected_product.expires_at_valid = [false || "قم بتغيير التاريخ"];
      } else {
        this.selected_product.expires_at = "--";
        this.selected_product.expires_at_valid = [true];
      }

      this.showThisProduct(this.selected_product);
      return;
    },
    showThisProduct(selected_product) {
      selected_product.expires_at_message = true;
      selected_product.unit_id =
        selected_product.units[selected_product.main_unit_id - 1].pivot.id;

      selected_product.unit_price =
        selected_product.units[
          selected_product.main_unit_id - 1
        ].pivot.bought_price;

      selected_product.quantity = 1;

      selected_product["product_id"] = selected_product["id"]; // balance

      selected_product = JSON.parse(JSON.stringify(selected_product));
      this.balance.details.push(selected_product);
      return;
    },
  },
};
</script>

<style>
</style>