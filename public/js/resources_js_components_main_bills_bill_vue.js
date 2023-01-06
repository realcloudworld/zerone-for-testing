(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_bills_bill_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Person */ "./resources/js/apis/Person.js");
/* harmony import */ var _apis_Country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apis/Country */ "./resources/js/apis/Country.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["dialog", "person", "cities", "operation", "route"],
  data: function data() {
    return {
      webSite: [function (v) {
        return !v || /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/.test(v) || "الرابط غير صحيح";
      }],
      vld_numbering: [function (v) {
        return !v || /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية";
      }],
      required: [function (value) {
        return !!value || "الحقل مطلوب.";
      }],
      vld_is_not_default: [function (v) {
        return !v || v != "افتراضي" || "غير متاح";
      }],
      vld_phone_number: [function (v) {
        return !v || /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/.test(v) || "أدخل رقما صحيحا";
      }],
      emailRules: [function (v) {
        return !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "ادخل البريد بشكل صحيح";
      }],
      isloading: false,
      title: "إضافة مورد جديد",
      countries: [],
      person_div_update: 0
    };
  },
  created: function created() {
    var _this = this;

    _apis_Country__WEBPACK_IMPORTED_MODULE_1__.default.loadCountries().then(function (response) {
      return _this.countries = response.data.countries;
    });
  },
  computed: {},
  methods: {
    loadCities: function loadCities() {
      this.$emit("changeCountry", this.person.country_id);
    },
    closeDialog: function closeDialog() {
      this.$emit("close_person_dialog");
    },
    savePerson: function savePerson() {
      var _this2 = this;

      if (!this.$refs.form.validate()) {
        return;
      }

      console.log(this.operation);
      console.log(this.route);
      this.isloading = "blue";

      if (this.operation == "add") {
        _apis_Person__WEBPACK_IMPORTED_MODULE_0__.default.store(this.person).then(function (response) {
          _this2.person["id"] = response.data;
          _this2.isloading = false;

          _this2.$emit("addUpdatePerson", _this2.person);
        });
        return;
      }

      if (this.operation == "update") {
        _apis_Person__WEBPACK_IMPORTED_MODULE_0__.default.update(this.person).then(function (response) {
          _this2.isloading = false;

          _this2.$emit("addUpdatePerson", _this2.person);
        });
        return;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/bill.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/bill.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Product */ "./resources/js/apis/Product.js");
/* harmony import */ var _loader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loader.vue */ "./resources/js/components/main/loader.vue");
/* harmony import */ var _apis_Bill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apis/Bill */ "./resources/js/apis/Bill.js");
/* harmony import */ var _products_product_info_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products/product-info.vue */ "./resources/js/components/main/products/product-info.vue");
/* harmony import */ var _payment_methods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment-methods */ "./resources/js/components/main/bills/payment-methods.vue");
/* harmony import */ var _AddUpdatePerson_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddUpdatePerson.vue */ "./resources/js/components/main/bills/AddUpdatePerson.vue");
/* harmony import */ var _apis_Country__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../apis/Country */ "./resources/js/apis/Country.js");
/* harmony import */ var _apis_Person__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../apis/Person */ "./resources/js/apis/Person.js");
/* harmony import */ var _apis_Account__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../apis/Account */ "./resources/js/apis/Account.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    loader: _loader_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    ProductInfo: _products_product_info_vue__WEBPACK_IMPORTED_MODULE_3__.default,
    PaymentMethod: _payment_methods__WEBPACK_IMPORTED_MODULE_4__.default,
    AddUpdatePerson: _AddUpdatePerson_vue__WEBPACK_IMPORTED_MODULE_5__.default
  },
  data: function data() {
    var _new_bill;

    return {
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
      act: "input",
      bill_number_to_search: "",
      return_bill: false,
      cols: 10,
      main_bill: true,
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
      title: [[,], ["فاتورة مشتريات جديدة", "تعديل فاتورة مشتريات"], ["فاتورة مبيعات جديدة", "تعديل فاتورة مبيعات"], ["مرودوات مشتريات جديدة", "تعديل مرودوات مشتريات"], ["مرودوات مبيعات جديدة", "تعديل مرودوات مبيعات"]],
      //----
      person_info: "معلومات المورد",
      person_type: "suppliers",
      persona: "المورد",
      //----
      is_new_bill: true,
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
      discount_types: [{
        id: 1,
        ar_name: "%",
        en_name: "%"
      }, {
        id: 2,
        ar_name: "قيمة",
        en_name: "amount"
      }],
      add_update_person_dialog: false,
      passed_person: "",
      operation: "add",
      cities: [],
      people: [],
      name_search: "",
      loading: false,
      found_products: [],
      selected_product: [],
      header: [{
        text: "اسم الصنف",
        align: "center",
        value: "ar_name",
        width: 300,
        sortable: false
      }, {
        text: "الصلاحية",
        align: "center",
        value: "expires_at",
        sortable: false,
        width: 100
      }, {
        text: "الكمية",
        align: "center",
        value: "quantity",
        sortable: false
      }, {
        text: "الوحدة",
        align: "center",
        value: "product_unit_id",
        sortable: false
      }, {
        text: "سعر الوحدة",
        align: "center",
        value: "unit_price",
        sortable: false
      }, {
        text: "الكمية و.ص",
        align: "center",
        value: "quantity_in_minor_unit",
        sortable: false
      }, {
        text: "الخصم",
        align: "center",
        value: "discount",
        sortable: false,
        width: 100
      }, {
        text: "الاجمالي قبل الضريبة",
        align: "center",
        value: "total_befor_tax",
        sortable: false
      }, {
        text: "الضريبة % ",
        align: "center",
        value: "tax",
        sortable: false
      }, {
        text: "قيمة الضريبة",
        align: "center",
        value: "tax_value",
        sortable: false
      }, {
        text: "القيمة",
        align: "center",
        value: "total",
        sortable: false
      }, {
        text: "تحكم ",
        align: "center",
        value: "action"
      }],
      payment_conditions: [],
      new_bill: (_new_bill = {
        is_input: 1,
        document_type_id: "",
        person_id: 1,
        only_cash: true,
        payment_condition_id: 10,
        payment_methods: [{
          account_id: "",
          amount: 0,
          description: ""
        }, {
          account_id: "",
          amount: 0,
          description: ""
        }, {
          account_id: "",
          amount: 0,
          description: ""
        }],
        paid_amount: 0,
        remaining_amount: 0,
        additional_expenses: 0,
        total_without_products_tax: 0,
        total_tax: 0,
        total_amount: 0,
        patch_number: Math.floor(Math.random() * (99999 - 10000 + 1) + 10000),
        details: [],
        reference: "",
        description: ""
      }, _defineProperty(_new_bill, "person_id", ""), _defineProperty(_new_bill, "issue_date", new Date().toISOString().substr(0, 10)), _defineProperty(_new_bill, "maturity_date", new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000)), _new_bill),
      bill: {
        person_id: 1,
        is_input: 1,
        document_type_id: 1,
        only_cash: true,
        payment_condition_id: 10,
        payment_methods: [{
          account_id: "",
          amount: 0,
          description: ""
        }, {
          account_id: "",
          amount: 0,
          description: ""
        }, {
          account_id: "",
          amount: 0,
          description: ""
        }],
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
        maturity_date: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000).toISOString().substr(0, 10)
      },

      /*------------------dateTime----------------------*/
      date: new Date().toISOString().substr(0, 10),
      issue_date_is_down: false,
      maturity_date_is_down: false,
      formatted_issue_date: this.formatDate(new Date().toISOString().substr(0, 10)),

      /*-------------------validators---------------------------*/
      vld_minlingth_one: [function (v) {
        return v.length >= 1 || "أدخل قيمة";
      }],
      vld_selected: [function (v) {
        return v > 0 || "أدخل قيمة";
      }],
      required: [function (value) {
        return !!value || "الحقل مطلوب.";
      }],
      isunique: [],
      is_exists: [],
      bill_exists: [],
      expires_at_valid: [function (v) {
        return v.has_expiration_date && v != "*******" || "قم بتغيير التاريخ";
      }],
      is_valid_date: [],
      vld_numbering: [function (v) {
        return /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية";
      }]
    };
  },
  watch: {
    ready: function ready() {},
    name_search: function name_search(val) {
      val && val !== this.selected_product.ar_name && this.getProducts(val, "name");
    },
    $route: function $route(to, from) {
      console.log("from");
      console.log(to);
      this.createPage(to, "old");
    }
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    // alert(1);
    next();
  },
  methods: {
    disagree: function disagree() {
      this.dialog = false;
      this.selected_product = "";
    },
    quantity_clicked: function quantity_clicked(item) {
      item.hide_quantity_valid_message = true;
      item.quantity_valid = [true];
    },
    endIntersect: function endIntersect(entries, observer, isIntersecting) {},
    getBillByHittingBillNumber: function getBillByHittingBillNumber() {
      var _this = this;

      //this.title = "تعديل فاتورة رقم " + this.$route.params.id;
      _apis_Bill__WEBPACK_IMPORTED_MODULE_2__.default.get(this.bill_number_to_search, {
        document_type_id: this.bill.document_type_id - 2,
        "return": 1
      }
      /*
      1 - purchase
      2 - invoice
      3 - purchase return 
      4 - invoice  return 
      */
      ).then(function (response) {
        if (Array.isArray(response.data)) {
          _this.bill_exists = [ false || "الفاتورة غير موجود "];
          return 0;
        }

        _this.bill_exists = [true];
        _this.bill = response.data.bill;

        if (_this.route == "purchase_return") {
          _this.bill.document_type_id = 3;
          _this.bill.is_input = 0;
        } //purcase return


        if (_this.route == "invoice_return") {
          _this.bill.document_type_id = 4; //purcase return

          _this.bill.is_input = 1;
        }

        console.log(_this.bill);
        _this.bill.issue_date = _this.bill.issue_date.split(" ")[0];
        _this.bill.maturity_date = _this.bill.maturity_date.split(" ")[0];

        _this.bill.details.forEach(function (elem) {
          if (elem.expires_at) elem.expires_at = elem.expires_at.split(" ")[0];
        });

        if (_this.bill.payment_methods.length != 0) {} else _this.bill.payment_methods = [{
          account_id: "",
          amount: 0,
          description: ""
        }, {
          account_id: "",
          amount: 0,
          description: ""
        }, {
          account_id: "",
          amount: 0,
          description: ""
        }];

        _this.people = response.data.people;
        _this.additional_expenses_from_accounts = response.data.accounts.accounts;
        console.log(response.data.accounts.accounts);
      });
    },
    expires_date: function expires_date(item) {
      item.expires_at_message = true;
      item.expires_at_valid = [true];
      if (item.expires_at == "*******") item.expires_at = new Date().toISOString().substr(0, 10);
    },
    agreeToAdd: function agreeToAdd() {
      var _this2 = this;

      // this.agree = true;
      this.index_of_selected_product = this.sets.findIndex(function (elem) {
        return elem.id == _this2.selected_elem_fromSet;
      });
      console.log(this.index_of_selected_product);
      var selected_product = JSON.parse(JSON.stringify(this.selected_product));
      console.log(selected_product);
      selected_product["details"][0] = selected_product["details"][this.index_of_selected_product];
      this.showThisProduct(selected_product);
      console.log("index");
      console.log("index");
      window.removeEventListener("keydown", this.functionToAddProduct);
      var input_barcode = document.getElementById("barcode");
      this.$nextTick(function () {
        input_barcode.focus();
      });
      this.dialog = false;
      this.agree = false;
      return; //e.preventDefault();

      console.log(selectedElm);
      selectedElm = selectedElm[action[e.key] + "ElementSibling"]; // loop if top/bottom edges reached or "home"/"end" keys clicked

      if (!selectedElm || e.key == "Home" || e.key == "End") {
        goToStart = action[e.key] == "next" || e.key == "Home";
        selectedElm = listElm.children[goToStart ? 0 : listElm.children.length - 1];
      }

      selectedElm.focus();
      return; // Mark first list item

      this.$nextTick(function () {
        listElm.firstElementChild.focus();
        var selectedElm = document.activeElement,
            goToStart,
            // map actions to event's key
        action = {
          ArrowUp: "previous",
          Up: "previous",
          ArrowDown: "next",
          Down: "next"
        };

        _this2.functionToAddProduct = function (e) {};

        window.addEventListener("keydown", _this2.functionToAddProduct);
      }); // Event listener
    },
    showThisProduct: function showThisProduct(selected_product) {
      this.selected_product = "";
      this.searched_barcode = "";
      var gg;
      if (this.route == "purchase") selected_product.tax = selected_product.bought_tax;
      if (this.route == "invoice") selected_product.tax = selected_product.sold_tax;
      if (this.route != "purchase") if ((gg = this.bill.details.findIndex(function (elem) {
        console.log(elem.id, "----", selected_product.id);
        console.log(elem.expires_at.split(" ")[0], "----", selected_product["details"][0].expires_at.split(" ")[0]);
        return elem.id == selected_product.id && elem.expires_at.split(" ")[0] == selected_product["details"][0].expires_at.split(" ")[0];
      })) >= 0) {
        this.bill.details[gg].quantity++;
        return;
      }
      selected_product.expires_at_message = true;
      selected_product.hide_quantity_valid_message = true;
      selected_product.quantity_valid = [true];
      console.log("selected_product");
      console.log(selected_product); //this.dialog = true;

      selected_product["document_type_id"] = this.bill.document_type_id;
      selected_product.unit_id = selected_product.units[selected_product.main_unit_id - 1].pivot.id;

      if (this.route == "purchase" || this.route == "purchase_return") {
        selected_product.unit_price = selected_product.units[selected_product.main_unit_id - 1].pivot.bought_price;
      }

      if (this.route == "invoice" || this.route == "invoice_return") {
        selected_product.unit_price = selected_product.units[selected_product.main_unit_id - 1].pivot.sold_price;
      }

      selected_product.quantity = 1;
      selected_product["product_id"] = selected_product["id"]; // bill

      if (this.act == "input") {
        if (selected_product.has_expiration_date) {
          selected_product.expires_at = "*******";
          selected_product.expires_at_valid = [ false || "قم بتغيير التاريخ"];
        } else {
          selected_product.expires_at = "--";
          selected_product.expires_at_valid = [true];
        }
      } else {
        selected_product.expires_at = selected_product.details[0].expires_at;
        selected_product.current_quantity = selected_product.details[0].quantity_in_minor_unit / selected_product.units[selected_product.main_unit_id - 1].pivot.contains;
        selected_product.actual_quantity = selected_product.current_quantity;
        selected_product.actual_quantity_in_minor_unit = parseInt(selected_product.actual_quantity * selected_product.units[selected_product.main_unit_id - 1].pivot.contains);
      }

      selected_product = JSON.parse(JSON.stringify(selected_product));
      this.bill.details.push(selected_product);
      return;
    },
    close_person_dialog: function close_person_dialog() {
      this.add_update_person_dialog = false;
    },
    changeExpirationDate: function changeExpirationDate(item) {
      console.log(item.expires_at);
      var occurrences = 0;
      var firstIndex = -1;

      for (var index = 0; index < this.bill.details.length; index++) {
        if (this.bill.details[index].barcode == item.barcode && this.bill.details[index].expires_at == item.expires_at) {
          if (firstIndex == -1) firstIndex = index;
          occurrences++;

          if (occurrences == 2) {
            this.bill.details[firstIndex].quantity += this.bill.details[index].quantity;
            this.bill.details.splice(index, 1);
            return;
          }
        }
      }

      console.log(item);
    },
    addays: function addays(date, days) {
      var result = new Date(date);
      result.setDate(result.getDate() + +days);
      return result;
    },
    getDays: function getDays() {
      this.bill.payment_condition_id = parseInt((new Date(this.bill.maturity_date) - new Date(this.bill.issue_date)) / (1000 * 60 * 60 * 24), 10);
    },
    getMaturityDate: function getMaturityDate() {
      this.bill.maturity_date = this.addays(this.bill.issue_date, this.bill.payment_condition_id).toISOString().substr(0, 10);
    },
    personInfo: function personInfo() {
      var _this3 = this;

      return this.people.find(function (elem) {
        return elem.id == _this3.bill.person_id;
      });
    },
    changeDateFormat: function changeDateFormat() {
      var chunks = this.bill.test_date.match(/.{1,2}/g);
      if (chunks[1].length == 1) chunks[1] = "0" + chunks[1];
      var date = "20" + chunks[0] + "-" + chunks[1] + "-01";

      if (!isNaN(Date.parse(date))) {
        console.log(Date.parse(date));
        this.bill.test_date = date;
        this.is_valid_date = [];
        return;
      }

      this.is_valid_date = ["التاريخ غير صحيح"];
    },
    addPersonToList: function addPersonToList(person) {
      this.add_update_person_dialog = false;
      this.people.push(person);
      this.bill.person_id = person.id;
    },
    loadCities: function loadCities(country_id) {
      var _this4 = this;

      this.cities = [];
      _apis_Country__WEBPACK_IMPORTED_MODULE_6__.default.loadCities(country_id).then(function (response) {
        return _this4.cities = response.data.cities;
      });
    },
    addPerson: function addPerson() {
      this.add_update_person_dialog = true;
      this.operation = "add";
      if (this.person_type == "suppliers") this.passed_person = {
        type_id: 1
      };
      if (this.person_type == "customers") this.passed_person = {
        type_id: 2
      };
    },
    addProductToBill: function addProductToBill(name) {
      var _this5 = this;

      //-----processing  for output document
      if (this.act == "input") {
        this.selected_product.expires_at = "*******";
        this.showThisProduct(this.selected_product);
        return;
      } //-----processing  for output document


      if (this.selected_product.details.length == 0) {
        this.no_product_dialog = true;
        this.searched_barcode = "";
        return;
      }

      if (this.selected_product.details.length == 1) {
        this.showThisProduct(this.selected_product);
        return;
      }

      var products_grouped = false;

      if (products_grouped) {
        this.selected_product.details[0].quantity_in_minor_unit = this.selected_product.quantity_in_minor_unit; // this.selected_product.details[0].quantity_in_minor_unit =
        //   this.selected_product.details.reduce(
        //     (a, b) => +a + +b.quantity_in_minor_unit,
        //     0
        //   );

        console.log("this.selected_product");
        console.log(this.selected_product);
        this.showThisProduct(this.selected_product);
        return;
      }

      var first = false;
      if (name) first = true;
      this.sets = this.selected_product.details;
      this.dialog = true;
      this.$nextTick().then(function () {
        var listElm = document.querySelector("ul"); // Mark first list item

        _this5.$nextTick(function () {
          listElm.firstElementChild.focus();
          var selectedElm = document.activeElement,
              goToStart,
              // map actions to event's key
          action = {
            ArrowUp: "previous",
            Up: "previous",
            ArrowDown: "next",
            Down: "next"
          };

          _this5.functionToAddProduct = function (e) {
            if (e.key === "Enter" && _this5.dialog && !first) {
              var parent = selectedElm.parentNode;
              console.log(parent);
              console.log(selectedElm);
              _this5.index_of_selected_product = Array.prototype.indexOf.call(listElm.children, selectedElm);
              var selected_product = JSON.parse(JSON.stringify(_this5.selected_product));
              console.log(selected_product);
              selected_product["details"][0] = selected_product["details"][_this5.index_of_selected_product];

              _this5.showThisProduct(selected_product);

              console.log("index");
              console.log("index");
              window.removeEventListener("keydown", _this5.functionToAddProduct);
              console.log("input_barcode");
              console.log(input_barcode);
              console.log("input_barcode");
              var input_barcode = document.getElementById("barcode"); // this.$nextTick(() => {
              //   input_barcode.focus();
              // });

              console.log("selectedElm");
              console.log(selectedElm);
              console.log("selectedElm");
              _this5.dialog = false;
              _this5.agree = false;
              return;
            } //e.preventDefault();


            if (e.key !== "Enter") {
              console.log(selectedElm);
              selectedElm = selectedElm[action[e.key] + "ElementSibling"]; // loop if top/bottom edges reached or "home"/"end" keys clicked

              if (!selectedElm || e.key == "Home" || e.key == "End") {
                goToStart = action[e.key] == "next" || e.key == "Home";
                selectedElm = listElm.children[goToStart ? 0 : listElm.children.length - 1];
              }

              selectedElm.focus();
              first = false;
            }
          };

          window.addEventListener("keydown", _this5.functionToAddProduct);
        }); // Event listener

      }); //CHECK IF PRODUCT HAS EXPIRATION DATE --> ADD QUANTITY
      // if (!selected_product.has_expiration_date) {
      //   let index = this.bill.details.findIndex(
      //     (elem) => elem.barcode == selected_product.barcode
      //   );
      //   if (index != -1) {
      //     this.bill.details[index].quantity++;
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
      // selected_product["document_type_id"] = 1; // bill
      // selected_product["product_id"] = selected_product["id"]; // bill
      // this.bill.details.push(selected_product);
    },
    searchProductByBarcode: function searchProductByBarcode() {
      var _this6 = this;

      var params = {
        barcode: this.searched_barcode
      };
      var extra_route = this.act;
      _apis_Product__WEBPACK_IMPORTED_MODULE_0__.default.billBarcodeSearch(params, extra_route).then(function (response) {
        if (response.data.products.length == 0) {
          _this6.is_exists = [ false || "الصنف غير موجود "];
          _this6.searched_barcode = "";
          return;
        }

        _this6.is_exists = [true];
        _this6.selected_product = JSON.parse(JSON.stringify(response.data.products[0]));

        _this6.addProductToBill();
      });
    },
    remaining_amount: function remaining_amount() {
      return this.bill.remaining_amount = this.bill.total_amount - this.bill.paid_amount;
    },
    payAllCash: function payAllCash() {
      this.bill.paid_amount = this.bill.total_amount.toFixed(2);
      this.bill.payment_methods = [{
        account_id: "",
        amount: 0,
        description: ""
      }, {
        account_id: "",
        amount: 0,
        description: ""
      }, {
        account_id: "",
        amount: 0,
        description: ""
      }];
    },
    paymentMethods: function paymentMethods(payments) {
      this.bill.payment_methods = payments.payment_methods;
      this.bill.paid_amount = payments.paid_amount;
      this.bill.only_cash = false;
    },
    show_product_dialog: function show_product_dialog(item) {
      this.product_info_dialog = true;
      console.log(item);
      this.product_info_product = item;
    },
    product_unit_change: function product_unit_change(item) {
      item.hide_quantity_valid_message = true;
      item.quantity_valid = [true];
      var unit = item.units.find(function (elem) {
        return elem.pivot.id == item.unit_id;
      });
      item.unit_price = unit.pivot.bought_price;
    },
    total_tax: function total_tax() {
      this.bill.total_tax = this.bill.details.reduce(function (a, b) {
        return +a + +b.tax_value;
      }, 0);
      return this.bill.total_tax;
    },
    total_amount: function total_amount() {
      this.bill.total_amount = this.total_without_products_tax() + this.total_tax();
      return this.bill.total_amount;
    },
    total_without_products_tax: function total_without_products_tax() {
      return this.bill.details.reduce(function (a, b) {
        return +a + +b.total_befor_tax;
      }, 0);
    },
    total: function total(item) {
      item.total = this.tax_value(item) + this.total_befor_tax(item);
      return item.total;
    },
    tax_value: function tax_value(item) {
      item.tax_value = this.total_befor_tax(item) * item.tax / 100;
      return item.tax_value;
    },
    total_befor_tax: function total_befor_tax(item) {
      if (item.discount_type_id == 1) {
        item.total_befor_tax = item.quantity * item.unit_price - item.quantity * item.unit_price * item.discount / 100;
        return item.total_befor_tax;
      }

      item.total_befor_tax = item.quantity * item.unit_price - item.discount;
      return item.total_befor_tax;
    },
    quantity_in_minor_unit: function quantity_in_minor_unit(item) {
      var unit = item.units.find(function (elem) {
        return elem.pivot.id == item.unit_id;
      });
      item.quantity_in_minor_unit = item.quantity * unit.pivot.contains;
      return item.quantity_in_minor_unit;
    },
    deleteItem: function deleteItem(item) {
      this.bill.details.splice(this.bill.details.indexOf(item), 1);
    },
    getProducts: function getProducts(val, type) {
      var _this7 = this;

      if (val.length > 2) {
        this.loading = true;
        var params = {
          name: val
        };
        var extra_route = this.act;
        _apis_Product__WEBPACK_IMPORTED_MODULE_0__.default.billNameSearch(params, extra_route).then(function (response) {
          if (response.data.products.length == 0) {
            _this7.is_exists = [ false || "الصنف غير موجود "];
            return;
          }

          _this7.loading = false;
          console.log("hi", response.data);
          _this7.found_products = JSON.parse(JSON.stringify(response.data.products));
          _this7.is_exists = [true];
        });
      }
    },
    // addProductToBill() {
    //   console.log("this.selected_product");
    //   console.log(this.selected_product);
    //   console.log("this.selected_product");
    //   this.selected_product.main_unit_id =
    //     this.selected_product.main_bought_unit_id;
    //   this.showThisProduct(this.selected_product);
    // },
    checkExicting: function checkExicting() {},
    suspend: function suspend() {
      var bill = JSON.parse(JSON.stringify(this.bill));
      this.$store.state.suspended_bills.push(bill);
    },
    return_suspended_bill: function return_suspended_bill() {
      console.log(this.$store.state.suspended_bills[0]);
      this.bill = this.$store.state.suspended_bills[0];
    },
    submit: function submit() {
      var _this8 = this;

      this.bill.total_without_products_tax = this.total_without_products_tax();
      this.bill.details.forEach(function (item) {
        if (item.expires_at == "*******" && item.has_expiration_date) item.expires_at_message = false;
      });

      if (!this.$refs.form.validate()) {
        console.log("this.bill.details");
        console.log(this.bill.details);
        console.log(this.$refs.form.rules);
        return;
      } // this.expires_at_message = false;
      //this.$router.go(0); reload page if needed

      /* remove zero amount or not account methods */
      // this.bill.payment_methods = this.bill.payment_methods.filter(
      //     (elem) => elem.account_id != "" && elem.credit != 0
      // );


      if (this.bill.details.length == 0) {
        this.snackbar = true;
        return;
      }

      console.log(this.bill);
      console.log("this.bill");

      if (this.people.find(function (elem) {
        return elem.id == _this8.bill.person_id;
      })["name"] == "افتراضي" && this.bill.paid_amount != this.bill.total_amount) {
        this.snackbarText = "فاتورة " + this.persona + " الافتراضي يجب أن تكون نقدا";
        this.snackbarTimeout = 3000;
        this.snackbar = true;
        return;
      }

      this.starter_dialog = true;
      if (this.is_new_bill) _apis_Bill__WEBPACK_IMPORTED_MODULE_2__.default.store(this.bill).then(function (response) {
        _this8.starter_dialog = false;
        console.log(!response.data.valid);
        console.log(!response.data.message["0"]);

        if (!response.data.valid) {
          if (!response.data.message["0"]) _this8.isunique = [ false || "الرقم مستخدم سابقا."];else _this8.isunique = [true];

          for (var index = 1; index < response.data.message.length; index++) {
            _this8.bill.details[response.data.message[index]].hide_quantity_valid_message = false;
            _this8.bill.details[response.data.message[index]].quantity_valid = [ false || "غير متوفرة"];
          }

          _this8.snackbarText = "تحقق من صحة الحقول";
          _this8.snackbarTimeout = 3000;
          _this8.snackbar = true;
          return;
        }

        _this8.snackbar = true;
        _this8.snackbarText = "تم حفظ الفاتورة";
      });else _apis_Bill__WEBPACK_IMPORTED_MODULE_2__.default.update(this.bill).then(function (response) {
        _this8.starter_dialog = false;
        _this8.snackbar = true;
        _this8.snackbarText = "تم حفظ الفاتورة";
        console.log(response.data);
      });
      console.log(this.bill);
    },

    /*------------------dateTime----------------------*/
    formatDate: function formatDate(date) {
      if (!date) return null;

      var _date$split = date.split("-"),
          _date$split2 = _slicedToArray(_date$split, 3),
          year = _date$split2[0],
          month = _date$split2[1],
          day = _date$split2[2];

      return "".concat(month, "/").concat(day, "/").concat(year);
    },
    parseDate: function parseDate(date) {
      if (!date) return null;

      var _date$split3 = date.split("/"),
          _date$split4 = _slicedToArray(_date$split3, 3),
          month = _date$split4[0],
          day = _date$split4[1],
          year = _date$split4[2];

      return "".concat(year, "-").concat(month.padStart(2, "0"), "-").concat(day.padStart(2, "0"));
    },
    createPage: function createPage(to, status) {
      var _this9 = this;

      this.bill.details = [], this.query = true;
      this.show = true;
      this.route = to.fullPath.replace(/^\/([^\/]*).*$/, "$1");
      console.log("patho");
      console.log(this.route.split("/"));

      if (this.route == "invoice") {
        this.return_bill = false;
        this.act = "output";
        this.person_type = "customers";
        this.person_info = "معلومات العميل";
        this.persona = "العميل";
        this.bill.document_type_id = 2;
        this.bill.is_input = 0;
        this.new_bill.document_type_id = 2;
      }

      if (this.route == "purchase") {
        this.return_bill = false;
        this.act = "input";
        console.log("sss");
        this.person_type = "suppliers";
        this.person_info = "معلومات المورد";
        this.persona = "المورد";
        this.bill.document_type_id = 1;
        this.bill.is_input = 1;
        this.new_bill.document_type_id = 1;
      }

      if (this.route == "invoice_return") {
        this.act = "input";
        this.return_bill = true;
        this.person_type = "customers";
        this.person_info = "معلومات العميل";
        this.persona = "العميل";
        this.bill.is_input = 1;
        this.bill.document_type_id = 4;
        this.new_bill.document_type_id = 4;
      }

      if (this.route == "purchase_return") {
        this.act = "output";
        this.return_bill = true;
        this.cols = 12;
        this.main_bill = false;
        this.person_type = "customers";
        this.person_info = "معلومات المورد";
        this.persona = "المورد";
        this.bill.document_type_id = 3;
        this.bill.is_input = 0;
        this.new_bill.document_type_id = 3;
      } // if (route == "nibra")
      //   Person = (await import("../../../apis/Person")).default;


      var id = this.$route.params.id;
      if (id) this.is_new_bill = false; //this.title = "تعديل فاتورة رقم " + this.$route.params.id;
      else id = -1;
      _apis_Bill__WEBPACK_IMPORTED_MODULE_2__.default.get(id, {
        document_type_id: this.bill.document_type_id,
        "return": 0
      }).then(function (response) {
        _this9.query = false;
        _this9.show = false;
        _this9.people = response.data.people;
        _this9.additional_expenses_from_accounts = response.data.accounts.accounts;

        if (response.data.bill.is_new) {
          _this9.bill.reference = response.data.bill.reference;
          return;
        }

        _this9.bill = response.data.bill;
        console.log(_this9.bill);
        _this9.bill.issue_date = _this9.bill.issue_date.split(" ")[0];
        _this9.bill.maturity_date = _this9.bill.maturity_date.split(" ")[0];

        _this9.bill.details.forEach(function (elem) {
          if (elem.expires_at) elem.expires_at = elem.expires_at.split(" ")[0];
        });

        if (_this9.bill.payment_methods.length != 0) {} else _this9.bill.payment_methods = [{
          account_id: "",
          amount: 0,
          description: ""
        }, {
          account_id: "",
          amount: 0,
          description: ""
        }, {
          account_id: "",
          amount: 0,
          description: ""
        }];

        console.log(response.data.accounts.accounts);
      }); // if (route == "nibras")
      //   Person = (await import("../../../apis/Person")).default;
      // console.log(this.$route);
      //this.createPage(this.$route, "new");
    }
  },
  created: function created() {
    var _this10 = this;

    _apis_Account__WEBPACK_IMPORTED_MODULE_8__.default.cashAndBanks().then(function (response) {
      return _this10.additional_expenses_from_accounts = response.data.accounts;
    });
    this.createPage(this.$route, "new");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/payment-methods.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/payment-methods.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["total", "accounts", "payment_methods"],
  data: function data() {
    return {
      /*-------------------validators---------------------------*/
      vld_minlingth_one: [function (v) {
        return v.length >= 1 || "أدخل قيمة";
      }],
      required: [function (value) {
        return !!value || "الحقل مطلوب.";
      }],
      isunique: [],
      vld_numbering: [function (v) {
        return /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية";
      }],
      dialog: false,

      /*-------------------validators---------------------------*/
      payment_methods_header: [{
        text: "م",
        align: "center",
        width: "10px",
        sortable: false,
        value: "id"
      }, {
        text: "الدفع عبر...",
        align: "center",
        value: "ar_name",
        sortable: false
      }, {
        text: "رقم الحساب",
        align: "center",
        value: "account_code",
        sortable: false
      }, {
        text: " القيمة",
        align: "center",
        value: "amount",
        sortable: false
      }, {
        text: "ملاحظات",
        align: "center",
        value: "description",
        sortable: false
      }, {
        text: "تحكم ",
        align: "center",
        value: "actions",
        sortable: false
      }]
    };
  },
  computed: {
    remaining_amount: function remaining_amount(v) {
      return v.total - v.paid_amount;
    },
    paid_amount: function paid_amount(v) {
      return v.payment_methods.reduce(function (a, b) {
        return +a + +b.amount;
      }, 0);
    }
  },
  methods: {
    setMethodsIfEmpty: function setMethodsIfEmpty() {},
    addPaymentMethod: function addPaymentMethod() {
      this.payment_methods.push({
        account_id: "",
        amount: 0,
        description: ""
      });
    },
    deletPaymentMethod: function deletPaymentMethod(item) {
      var index = this.payment_methods.indexOf(item);
      this.payment_methods.splice(index, 1);
    },
    emitPayments: function emitPayments() {
      this.$emit("payment_methods", {
        payment_methods: this.payment_methods,
        paid_amount: this.paid_amount
      });
      this.dialog = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/loader.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/loader.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Import component
 // Import stylesheet


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['isLoading'],
  data: function data() {
    return {
      loaderOpacity: 0.5,
      fullPage: true
    };
  },
  components: {
    Loading: (vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default())
  },
  methods: {
    onCancel: function onCancel() {
      console.log("User cancelled the loader.");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["product", "prdct_forms", "prdct_taxes", "prdct_types", "dialog"],
  mounted: function mounted() {
    var _this = this;

    window.addEventListener("resize", function () {
      _this.windowHeight = window.innerHeight;
      console.log(_this.windowHeight);
    });
  },
  data: function data() {
    return {
      windowHeight: 0,
      product_units_headers: [{
        text: " افتراضية البيع ",
        align: "center",
        sortable: false,
        value: "main_sold_unit_id"
      }, {
        text: " افتراضية الشراء ",
        align: "center",
        sortable: false,
        value: "main_bought_unit_id"
      }, {
        text: " الوحدة",
        align: "center",
        sortable: false,
        value: "ar_name"
      }, {
        text: "تساوي",
        align: "center",
        sortable: false,
        value: "equals"
      }, {
        text: "عدد",
        align: "center",
        sortable: false,
        value: "contains"
      }, {
        text: "من الوحدة",
        align: "center",
        sortable: false,
        value: "from_unit"
      }, {
        text: "سعر الشراء",
        align: "center",
        sortable: false,
        value: "bought_price"
      }, {
        text: "سعر البيع",
        align: "center",
        sortable: false,
        value: "sold_price"
      }, {
        text: "الباركود",
        align: "center",
        sortable: false,
        value: "barcode",
        width: "150"
      }],
      tab: null,
      items: ["بيانات أساسية", "الوحدات", "المجموعات", "التصنيف", "الموردين"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      editedIndex: -1,
      emailRules: [function (v) {
        return !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "ادخل البريد بشكل صحيح";
      }],
      vld_minlingth: [function (v) {
        return !v || (v === null || v === void 0 ? void 0 : v.length) >= 2 || "أدخل أكثر من حرفين";
      }],
      vld_minlingth_noEmpty: [function (v) {
        return (v === null || v === void 0 ? void 0 : v.length) >= 2 || "أدخل أكثر من حرفين";
      }],
      vld_numbering: [function (v) {
        return !v || /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية";
      }],
      vld_numbering_noEmpty: [function (v) {
        return /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية";
      }],
      formTitle: "",
      new_product: {
        name: "",
        mobile: "",
        tel: "",
        email: "",
        company: "",
        notes: ""
      },
      edited_product: {
        name: "",
        mobile: "",
        tel: "",
        email: "",
        company: "",
        notes: ""
      }
    };
  },
  methods: {
    close: function close() {
      //this.$parent.$data.product_info_dialog = false;
      this.$emit("dialogFalse");
    },
    emit_product: function emit_product() {},
    save: function save(item) {
      var _this2 = this;

      if (this.$refs.form.validate()) {
        var product = Object.assign({}, item);
        item.flag = "addproducts";
        item.filename = "products";
        axios.post("router.php", item).then(function (response) {
          _this2.$emit("product", product);

          console.log(response.data);
        });
        this.$refs.form.reset();
        this.close();
      }
    },
    update: function update(item) {
      var _this3 = this;

      if (this.$refs.form.validate()) {
        var product = Object.assign({}, item);
        console.log("item");
        item.flag = "updateproducts";
        item.filename = "products";
        axios.post("router.php", item).then(function (response) {
          _this3.$emit("product", product);

          console.log(response.data);
        });
        this.$refs.form.reset();
        this.close();
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/apis/Bill.js":
/*!***********************************!*\
  !*** ./resources/js/apis/Bill.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  store: function store(bill) {
    console.log("bill", bill);
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/bills", bill);
  },
  get: function get(id, params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/bills" + "/" + id, {
      params: params
    });
  },
  print: function print(id, document_type_id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/bills/print/" + id, {
      params: {
        document_type_id: document_type_id
      }
    });
  },
  getAll: function getAll(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/bills" + "/all", {
      params: params
    });
  },
  update: function update(bill) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.put("/bills", bill);
  },
  "delete": function _delete(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/bills", {
      params: params
    });
  },
  getNewReference: function getNewReference(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/bills/new", {
      params: params
    });
  }
});

/***/ }),

/***/ "./resources/js/apis/Country.js":
/*!**************************************!*\
  !*** ./resources/js/apis/Country.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loadCountries: function loadCountries(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/countries", {
      params: params
    });
  },
  loadCities: function loadCities(country_id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/cities/" + country_id);
  }
});

/***/ }),

/***/ "./resources/js/apis/Person.js":
/*!*************************************!*\
  !*** ./resources/js/apis/Person.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  store: function store(person) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("people", person);
  },
  update: function update(person) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.put("people", person);
  },
  postCreate: function postCreate(person) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("people" + "/create", person);
  },
  getOne: function getOne(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("people" + "/getOne", {
      params: params
    });
  },
  get: function get(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("people", {
      params: params
    });
  },
  getByProductID: function getByProductID(id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("people" + "/product/" + id);
  },
  search: function search(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("people" + "/search", {
      params: params
    });
  },
  barcodeSearch: function barcodeSearch(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/router/" + params.barcode);
  },
  "delete": function _delete(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("people", {
      params: params
    });
  }
});

/***/ }),

/***/ "./resources/js/apis/Product.js":
/*!**************************************!*\
  !*** ./resources/js/apis/Product.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  isExist: function isExist(product) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/product/exists/" + product.type + "/" + product.what_to_search);
  },
  create: function create() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/products/create");
  },
  store: function store(product) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/products", product);
  },
  update: function update(product) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.put("/products", product);
  },
  postCreate: function postCreate(product) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/products/create", product);
  },
  get: function get(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/products/", {
      params: params
    });
  },
  search: function search(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/products/search", {
      params: params
    });
  },
  billBarcodeSearch: function billBarcodeSearch(params, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/" + route + "/barcode/" + params.barcode);
  },
  billNameSearch: function billNameSearch(params, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/" + route + "/name/" + params.name);
  },
  invoiceBarcodeSearch: function invoiceBarcodeSearch(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/invoice/barcode/" + params.barcode + "/inventory_id/" + params.inventory_id);
  },
  stockTakeBarcodeSearch: function stockTakeBarcodeSearch(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/stocktake/barcode/" + params.barcode + "/inventory_id/" + params.inventory_id);
  },
  storeOpeningBalance: function storeOpeningBalance(balance) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/products/opening_balance", balance);
  },
  "delete": function _delete(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/products/", {
      params: params
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loading-overlay/dist/vue-loading.css":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loading-overlay/dist/vue-loading.css ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vld-shown {\n  overflow: hidden;\n}\n\n.vld-overlay {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  align-items: center;\n  display: none;\n  justify-content: center;\n  overflow: hidden;\n  z-index: 9999;\n}\n\n.vld-overlay.is-active {\n  display: flex;\n}\n\n.vld-overlay.is-full-page {\n  z-index: 9999;\n  position: fixed;\n}\n\n.vld-overlay .vld-background {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background: #fff;\n  opacity: 0.5;\n}\n\n.vld-overlay .vld-icon, .vld-parent {\n  position: relative;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.first-level {\r\n  background: rgb(255, 222, 228);\n}\n.second-level {\r\n  background: rgb(233, 233, 233);\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/bill.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/bill.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-application--wrap > .container {\r\n  margin: 0;\n}\n.v-text-field.v-text-field--enclosed .v-text-field__details,\r\n.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)\r\n  > .v-input__control\r\n  > .v-input__slot {\r\n  padding: 0px;\n}\n.bill-footer {\r\n  min-width: 0;\r\n  overflow: hidden;\n}\n.purchas-extra-expense :after,\r\n.purchas-extra-expense :before {\r\n  display: none;\n}\n.purchas-extra-expense .v-text-field__details {\r\n  display: none;\n}\n.text-red input {\r\n  color: red !important;\n}\n.bill-info .v-text-field__prefix {\r\n  margin-right: 10px;\n}\r\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\n}\n.v-application ol,\r\n.v-application ul {\r\n  padding-left: 0;\n}\nul {\r\n  list-style: none;\r\n  border: 1px solid silver;\r\n  max-height: 170px;\r\n  padding: 0;\r\n  margin: 0;\r\n  scroll-behavior: smooth; /* nice smooth movement */\r\n  overflow: hidden; /* set to hidden by OP's request */\n}\nul > div {\r\n  padding: 0.5em;\r\n  margin: 0;\n}\nul > div:focus {\r\n  background: #e91e63;\r\n  outline: none;\n}\n.theme--light.v-subheader {\r\n  background: rgb(255, 231, 243);\r\n  justify-content: center;\n}\n.first-level {\r\n  background: rgb(103, 133, 196);\r\n  justify-content: center;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate)\r\n  .v-icon {\r\n  color: rgb(111, 98, 228) !important;\n}\n.row {\r\n  margin: 0 !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/vue-loading-overlay/dist/vue-loading.css":
/*!***************************************************************!*\
  !*** ./node_modules/vue-loading-overlay/dist/vue-loading.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./vue-loading.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loading-overlay/dist/vue-loading.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUpdatePerson.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/bill.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/bill.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_bill_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./bill.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/bill.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_bill_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_bill_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product-info.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/main/bills/AddUpdatePerson.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/main/bills/AddUpdatePerson.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddUpdatePerson_vue_vue_type_template_id_27d75cde___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddUpdatePerson.vue?vue&type=template&id=27d75cde& */ "./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=template&id=27d75cde&");
/* harmony import */ var _AddUpdatePerson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddUpdatePerson.vue?vue&type=script&lang=js& */ "./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=script&lang=js&");
/* harmony import */ var _AddUpdatePerson_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddUpdatePerson.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _AddUpdatePerson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddUpdatePerson_vue_vue_type_template_id_27d75cde___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddUpdatePerson_vue_vue_type_template_id_27d75cde___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/bills/AddUpdatePerson.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/bills/bill.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/main/bills/bill.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bill_vue_vue_type_template_id_77db7985___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bill.vue?vue&type=template&id=77db7985& */ "./resources/js/components/main/bills/bill.vue?vue&type=template&id=77db7985&");
/* harmony import */ var _bill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bill.vue?vue&type=script&lang=js& */ "./resources/js/components/main/bills/bill.vue?vue&type=script&lang=js&");
/* harmony import */ var _bill_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bill.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/main/bills/bill.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _bill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _bill_vue_vue_type_template_id_77db7985___WEBPACK_IMPORTED_MODULE_0__.render,
  _bill_vue_vue_type_template_id_77db7985___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/bills/bill.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/bills/payment-methods.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/main/bills/payment-methods.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _payment_methods_vue_vue_type_template_id_183e65dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-methods.vue?vue&type=template&id=183e65dd& */ "./resources/js/components/main/bills/payment-methods.vue?vue&type=template&id=183e65dd&");
/* harmony import */ var _payment_methods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-methods.vue?vue&type=script&lang=js& */ "./resources/js/components/main/bills/payment-methods.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _payment_methods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _payment_methods_vue_vue_type_template_id_183e65dd___WEBPACK_IMPORTED_MODULE_0__.render,
  _payment_methods_vue_vue_type_template_id_183e65dd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/bills/payment-methods.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/loader.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/main/loader.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _loader_vue_vue_type_template_id_f18340a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.vue?vue&type=template&id=f18340a4& */ "./resources/js/components/main/loader.vue?vue&type=template&id=f18340a4&");
/* harmony import */ var _loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.vue?vue&type=script&lang=js& */ "./resources/js/components/main/loader.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _loader_vue_vue_type_template_id_f18340a4___WEBPACK_IMPORTED_MODULE_0__.render,
  _loader_vue_vue_type_template_id_f18340a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/loader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/products/product-info.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/main/products/product-info.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _product_info_vue_vue_type_template_id_b36f5868___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-info.vue?vue&type=template&id=b36f5868& */ "./resources/js/components/main/products/product-info.vue?vue&type=template&id=b36f5868&");
/* harmony import */ var _product_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-info.vue?vue&type=script&lang=js& */ "./resources/js/components/main/products/product-info.vue?vue&type=script&lang=js&");
/* harmony import */ var _product_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-info.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _product_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _product_info_vue_vue_type_template_id_b36f5868___WEBPACK_IMPORTED_MODULE_0__.render,
  _product_info_vue_vue_type_template_id_b36f5868___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/products/product-info.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUpdatePerson.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/bills/bill.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/main/bills/bill.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./bill.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/bill.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_bill_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/bills/payment-methods.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/main/bills/payment-methods.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_methods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payment-methods.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/payment-methods.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_methods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/loader.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/main/loader.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./loader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/loader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/products/product-info.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/main/products/product-info.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product-info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUpdatePerson.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/main/bills/bill.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/main/bills/bill.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_bill_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./bill.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/bill.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product-info.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=template&id=27d75cde&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=template&id=27d75cde& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_template_id_27d75cde___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_template_id_27d75cde___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_template_id_27d75cde___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUpdatePerson.vue?vue&type=template&id=27d75cde& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=template&id=27d75cde&");


/***/ }),

/***/ "./resources/js/components/main/bills/bill.vue?vue&type=template&id=77db7985&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/main/bills/bill.vue?vue&type=template&id=77db7985& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bill_vue_vue_type_template_id_77db7985___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bill_vue_vue_type_template_id_77db7985___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_bill_vue_vue_type_template_id_77db7985___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./bill.vue?vue&type=template&id=77db7985& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/bill.vue?vue&type=template&id=77db7985&");


/***/ }),

/***/ "./resources/js/components/main/bills/payment-methods.vue?vue&type=template&id=183e65dd&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/main/bills/payment-methods.vue?vue&type=template&id=183e65dd& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_methods_vue_vue_type_template_id_183e65dd___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_methods_vue_vue_type_template_id_183e65dd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_methods_vue_vue_type_template_id_183e65dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payment-methods.vue?vue&type=template&id=183e65dd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/payment-methods.vue?vue&type=template&id=183e65dd&");


/***/ }),

/***/ "./resources/js/components/main/loader.vue?vue&type=template&id=f18340a4&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/main/loader.vue?vue&type=template&id=f18340a4& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_template_id_f18340a4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_template_id_f18340a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_template_id_f18340a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./loader.vue?vue&type=template&id=f18340a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/loader.vue?vue&type=template&id=f18340a4&");


/***/ }),

/***/ "./resources/js/components/main/products/product-info.vue?vue&type=template&id=b36f5868&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/main/products/product-info.vue?vue&type=template&id=b36f5868& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_template_id_b36f5868___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_template_id_b36f5868___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_template_id_b36f5868___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product-info.vue?vue&type=template&id=b36f5868& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=template&id=b36f5868&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=template&id=27d75cde&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/AddUpdatePerson.vue?vue&type=template&id=27d75cde& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { "max-width": "800px", persistent: "" },
      model: {
        value: _vm.dialog,
        callback: function($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog"
      }
    },
    [
      _c(
        "v-card",
        { attrs: { loading: _vm.isloading } },
        [
          _c(
            "v-card-title",
            [
              _c(
                "v-row",
                [
                  _c("v-col", [_vm._v(" " + _vm._s(_vm.title))]),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticStyle: { "text-align": "end" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: {
                            click: function($event) {
                              return _vm.closeDialog()
                            }
                          }
                        },
                        [_vm._v("\n            إلغاء\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: {
                            click: function($event) {
                              return _vm.savePerson()
                            }
                          }
                        },
                        [_vm._v("\n            حفظ\n          ")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-form",
                    { ref: "form" },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", lg: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "اسم المورد *",
                                  rules: _vm.required.concat(
                                    _vm.vld_is_not_default
                                  )
                                },
                                model: {
                                  value: _vm.person.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.person, "name", $$v)
                                  },
                                  expression: "person.name"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", lg: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "اسم الشركة*",
                                  rules: _vm.vld_is_not_default,
                                  required: ""
                                },
                                model: {
                                  value: _vm.person.company_name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.person, "company_name", $$v)
                                  },
                                  expression: "person.company_name"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", lg: "6" } },
                            [
                              _c("v-autocomplete", {
                                attrs: {
                                  items: _vm.countries,
                                  "item-text": "en_name",
                                  "item-value": "id",
                                  prefix: "البلد |",
                                  autocomplete: "off",
                                  placeholder: "اختر البلد"
                                },
                                on: { change: _vm.loadCities },
                                model: {
                                  value: _vm.person.country_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.person, "country_id", $$v)
                                  },
                                  expression: "person.country_id"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", lg: "6" } },
                            [
                              _c("v-autocomplete", {
                                attrs: {
                                  items: _vm.cities,
                                  "item-text": "en_name",
                                  "item-value": "id",
                                  prefix: "المدينة |",
                                  autocomplete: "off",
                                  placeholder: "اختر المدينة"
                                },
                                model: {
                                  value: _vm.person.city_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.person, "city_id", $$v)
                                  },
                                  expression: "person.city_id"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-textarea", {
                                attrs: {
                                  rows: "2",
                                  label: "العنوان",
                                  required: ""
                                },
                                model: {
                                  value: _vm.person.address,
                                  callback: function($$v) {
                                    _vm.$set(_vm.person, "address", $$v)
                                  },
                                  expression: "person.address"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", lg: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "رقم الاتصال الأساسي",
                                  required: "",
                                  rules: _vm.vld_phone_number,
                                  type: "ltr"
                                },
                                model: {
                                  value: _vm.person.phone01,
                                  callback: function($$v) {
                                    _vm.$set(_vm.person, "phone01", $$v)
                                  },
                                  expression: "person.phone01"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", lg: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "رقم الاتصال الثانوي",
                                  rules: _vm.vld_phone_number,
                                  required: "",
                                  type: "ltr"
                                },
                                model: {
                                  value: _vm.person.phone02,
                                  callback: function($$v) {
                                    _vm.$set(_vm.person, "phone02", $$v)
                                  },
                                  expression: "person.phone02"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", lg: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "البريد الالكتروني",
                                  rules: _vm.emailRules,
                                  required: "",
                                  type: "ltr"
                                },
                                model: {
                                  value: _vm.person.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.person, "email", $$v)
                                  },
                                  expression: "person.email"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", lg: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  label: "الموقع الالكتروني",
                                  rules: _vm.webSite,
                                  type: "ltr",
                                  required: ""
                                },
                                model: {
                                  value: _vm.person.website,
                                  callback: function($$v) {
                                    _vm.$set(_vm.person, "website", $$v)
                                  },
                                  expression: "person.website"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", lg: "6" } },
                            [
                              _c("v-text-field", {
                                attrs: { label: "الرقم الضريبي", required: "" },
                                model: {
                                  value: _vm.person.tax_number,
                                  callback: function($$v) {
                                    _vm.$set(_vm.person, "tax_number", $$v)
                                  },
                                  expression: "person.tax_number"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", lg: "6" } },
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { staticStyle: { "text-align": "end" } },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.closeDialog()
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                    إلغاء\n                  "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.savePerson()
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                    حفظ\n                  "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-card-actions", [_c("v-spacer")], 1)
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/bill.vue?vue&type=template&id=77db7985&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/bill.vue?vue&type=template&id=77db7985& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var this$1 = this
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-form",
    { ref: "form" },
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { staticStyle: { height: "10px" } },
            [
              _c("v-progress-linear", {
                attrs: {
                  active: _vm.show,
                  indeterminate: _vm.query,
                  query: true
                },
                model: {
                  value: _vm.value,
                  callback: function($$v) {
                    _vm.value = $$v
                  },
                  expression: "value"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "v-dialog",
            {
              attrs: { "hide-overlay": "", persistent: "", width: "300" },
              model: {
                value: _vm.starter_dialog,
                callback: function($$v) {
                  _vm.starter_dialog = $$v
                },
                expression: "starter_dialog"
              }
            },
            [
              _c(
                "v-card",
                { attrs: { color: "primary", dark: "" } },
                [
                  _c(
                    "v-card-text",
                    [
                      _vm._v("\n          انتظر قليلاً!\n          "),
                      _c("v-progress-linear", {
                        staticClass: "mb-0",
                        attrs: { indeterminate: "", color: "pink" }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-snackbar",
            {
              attrs: {
                color: _vm.snackbarColor,
                centered: "",
                transition: "scale-transition",
                timeout: _vm.snackbarTimeout
              },
              scopedSlots: _vm._u([
                {
                  key: "action",
                  fn: function(ref) {
                    var attrs = ref.attrs
                    return [
                      _c(
                        "v-btn",
                        _vm._b(
                          {
                            attrs: { color: "blue", text: "" },
                            on: {
                              click: function($event) {
                                _vm.snackbar = false
                              }
                            }
                          },
                          "v-btn",
                          attrs,
                          false
                        ),
                        [_vm._v("\n          Close\n        ")]
                      )
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.snackbar,
                callback: function($$v) {
                  _vm.snackbar = $$v
                },
                expression: "snackbar"
              }
            },
            [_vm._v("\n      " + _vm._s(_vm.snackbarText) + "\n\n      ")]
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: { "max-width": "290" },
              model: {
                value: _vm.no_product_dialog,
                callback: function($$v) {
                  _vm.no_product_dialog = $$v
                },
                expression: "no_product_dialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [_vm._v(" الصنف غير موجود ")]),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _vm._v(
                      "\n          الصنف لم يتم شراؤه من قبل أو أن المخزون قد نفد\n        "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "green darken-1", text: "" },
                          on: {
                            click: function($event) {
                              _vm.no_product_dialog = false
                            }
                          }
                        },
                        [_vm._v("\n            اغلق\n          ")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: { "max-width": "600px", persistent: "" },
              model: {
                value: _vm.dialog,
                callback: function($$v) {
                  _vm.dialog = $$v
                },
                expression: "dialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "p",
                    {
                      staticStyle: {
                        margin: "0 10px",
                        "font-size": "14px",
                        padding: "10px"
                      }
                    },
                    [
                      _vm._v(
                        "\n          قم باختيار الصنف المناسب واضغط موافق\n        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _c(
                      "ul",
                      _vm._l(_vm.sets, function(set) {
                        return _c(
                          "div",
                          {
                            key: set.id + "d",
                            attrs: { tabIndex: "-1" },
                            on: {
                              blur: function($event) {
                                _vm.selected_elem_fromSet = set.id
                              }
                            }
                          },
                          [
                            _c(
                              "v-row",
                              [
                                _c("v-col", [
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(set.id) +
                                      "\n                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("v-col", [
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(_vm.selected_product.ar_name) +
                                      "\n                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("v-col", [
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(set.sum_quantity_in_minor_unit) +
                                      "\n                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("v-col", [
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(
                                        set.expires_at &&
                                          set.expires_at.split(" ")[0]
                                      ) +
                                      "\n                "
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      }),
                      0
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "green darken-1", text: "" },
                          on: { click: _vm.disagree }
                        },
                        [_vm._v("\n            Disagree\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "green darken-1", text: "" },
                          on: { click: _vm.agreeToAdd }
                        },
                        [_vm._v("\n            Agree\n          ")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("add-update-person", {
            attrs: {
              route: _vm.person_type,
              dialog: _vm.add_update_person_dialog,
              person: _vm.passed_person,
              operation: _vm.operation,
              cities: _vm.cities
            },
            on: {
              addUpdatePerson: _vm.addPersonToList,
              changeCountry: _vm.loadCities,
              close_person_dialog: _vm.close_person_dialog
            }
          }),
          _vm._v(" "),
          _c(
            "product-info",
            {
              attrs: {
                dialog: _vm.product_info_dialog,
                product: _vm.product_info_product,
                prdct_forms: _vm.prdct_forms,
                prdct_taxes: _vm.prdct_taxes,
                prdct_types: _vm.prdct_types
              },
              on: {
                dialogFalse: function($event) {
                  _vm.product_info_dialog = false
                }
              }
            },
            [
              _c("span", { attrs: { slot: "title" }, slot: "title" }, [
                _vm._v(" معلومات الصنف")
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "v-card",
            { attrs: { "max-width": "100%" } },
            [
              _c(
                "v-card-title",
                [
                  _c(
                    "v-toolbar",
                    { attrs: { flat: "", color: "white" } },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "3" } },
                            [
                              _c("v-toolbar-title", [
                                _vm._v(
                                  _vm._s(
                                    !_vm.$route.params.id
                                      ? _vm.title[_vm.bill.document_type_id][0]
                                      : _vm.title[_vm.bill.document_type_id][1]
                                  )
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.return_bill
                            ? _c(
                                "v-col",
                                { attrs: { cols: "7" } },
                                [
                                  _c(
                                    "v-radio-group",
                                    {
                                      model: {
                                        value: _vm.return_source,
                                        callback: function($$v) {
                                          _vm.return_source = $$v
                                        },
                                        expression: "return_source"
                                      }
                                    },
                                    [
                                      _c(
                                        "v-row",
                                        { staticClass: "pa-0" },
                                        [
                                          _c(
                                            "v-col",
                                            {
                                              staticClass: "pa-0 mt-7",
                                              attrs: { cols: "1" }
                                            },
                                            [
                                              _c("v-radio", {
                                                attrs: { value: "1" }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            {
                                              staticClass: "pa-0 mt-6",
                                              attrs: { cols: "7" }
                                            },
                                            [
                                              _c("v-text-field", {
                                                staticClass: "bill-info",
                                                attrs: {
                                                  placeholder: "رقم الفاتورة",
                                                  outlined: "",
                                                  autocomplete: "off",
                                                  prefix:
                                                    " برقم فاتورة الشراء | ",
                                                  rules: _vm.bill_exists
                                                },
                                                on: {
                                                  click: function($event) {
                                                    _vm.return_source = "1"
                                                  },
                                                  keydown: function($event) {
                                                    if (
                                                      !$event.type.indexOf(
                                                        "key"
                                                      ) &&
                                                      _vm._k(
                                                        $event.keyCode,
                                                        "enter",
                                                        13,
                                                        $event.key,
                                                        "Enter"
                                                      )
                                                    ) {
                                                      return null
                                                    }
                                                    return _vm.getBillByHittingBillNumber()
                                                  }
                                                },
                                                model: {
                                                  value:
                                                    _vm.bill_number_to_search,
                                                  callback: function($$v) {
                                                    _vm.bill_number_to_search = $$v
                                                  },
                                                  expression:
                                                    "bill_number_to_search"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            {
                                              staticClass: "pa-0 pr-1 mt-7",
                                              attrs: { cols: "4" }
                                            },
                                            [
                                              _c("v-radio", {
                                                attrs: {
                                                  value: "2",
                                                  label: "اختيار حر للمنتجات"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            {
                              staticStyle: {
                                "text-align": "end",
                                "font-size": "13px"
                              }
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticStyle: { color: "black" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$router.push("/dashboard")
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                اغلاق\n                "
                                  ),
                                  _c("v-icon", [_vm._v(" mdi-close-box ")])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticStyle: { color: "black" },
                                  on: {
                                    click: function($event) {
                                      return _vm.$router.back()
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                رجوع\n                "
                                  ),
                                  _c("v-icon", [
                                    _vm._v(" mdi-arrow-left-bold ")
                                  ])
                                ],
                                1
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-container",
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pa-0",
                                      attrs: { cols: "12" }
                                    },
                                    [
                                      _c("v-text-field", {
                                        staticClass: "bill-info",
                                        attrs: {
                                          type: "ltr",
                                          outlined: "",
                                          autocomplete: "off",
                                          prefix: " رقم الفاتورة | ",
                                          rules: _vm.required.concat(
                                            _vm.isunique
                                          )
                                        },
                                        on: {
                                          blur: function($event) {
                                            return _vm.checkExicting()
                                          },
                                          click: function($event) {
                                            _vm.isunique = [true]
                                          }
                                        },
                                        model: {
                                          value: _vm.bill.reference,
                                          callback: function($$v) {
                                            _vm.$set(_vm.bill, "reference", $$v)
                                          },
                                          expression: "bill.reference"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                   false
                                    ? 0
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pa-0",
                                      attrs: { cols: "12" }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          autocomplete: "off",
                                          label: "الوصف"
                                        },
                                        model: {
                                          value: _vm.bill.description,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.bill,
                                              "description",
                                              $$v
                                            )
                                          },
                                          expression: "bill.description"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pa-0",
                                      attrs: { cols: "12" }
                                    },
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: _vm.cols } },
                                            [
                                              _c("v-autocomplete", {
                                                attrs: {
                                                  items: _vm.people,
                                                  "item-text": function(item) {
                                                    if (
                                                      this$1.route == "purchase"
                                                    ) {
                                                      return (
                                                        item.company_name +
                                                        " : " +
                                                        item.name
                                                      )
                                                    } else {
                                                      return item.name
                                                    }
                                                  },
                                                  "item-value": "id",
                                                  rules: _vm.vld_selected,
                                                  label: _vm.persona
                                                },
                                                model: {
                                                  value: _vm.bill.person_id,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.bill,
                                                      "person_id",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "bill.person_id"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _vm.main_bill
                                            ? _c(
                                                "v-col",
                                                { attrs: { cols: "2" } },
                                                [
                                                  _c(
                                                    "v-btn",
                                                    {
                                                      attrs: {
                                                        elevation: "0",
                                                        dark: ""
                                                      },
                                                      on: {
                                                        click: _vm.addPerson
                                                      }
                                                    },
                                                    [
                                                      _c("v-icon", [
                                                        _vm._v(" mdi-plus ")
                                                      ])
                                                    ],
                                                    1
                                                  )
                                                ],
                                                1
                                              )
                                            : _vm._e()
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pa-0",
                                      attrs: { cols: "12" }
                                    },
                                    [
                                      _c(
                                        "v-menu",
                                        {
                                          ref: "issue_date",
                                          attrs: {
                                            "close-on-content-click": false,
                                            transition: "scale-transition",
                                            "offset-y": "",
                                            "max-width": "290px",
                                            "min-width": "auto"
                                          },
                                          scopedSlots: _vm._u([
                                            {
                                              key: "activator",
                                              fn: function(ref) {
                                                var on = ref.on
                                                var attrs = ref.attrs
                                                return [
                                                  _c(
                                                    "v-text-field",
                                                    _vm._g(
                                                      _vm._b(
                                                        {
                                                          attrs: {
                                                            label:
                                                              "تاريخ الاصدار",
                                                            "prepend-icon":
                                                              "mdi-calendar"
                                                          },
                                                          on: {
                                                            keydown: function(
                                                              $event
                                                            ) {
                                                              if (
                                                                !$event.type.indexOf(
                                                                  "key"
                                                                ) &&
                                                                _vm._k(
                                                                  $event.keyCode,
                                                                  "enter",
                                                                  13,
                                                                  $event.key,
                                                                  "Enter"
                                                                )
                                                              ) {
                                                                return null
                                                              }
                                                              _vm.issue_date_is_down = false
                                                            },
                                                            change: _vm.getDays
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.bill
                                                                .issue_date,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.bill,
                                                                "issue_date",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "bill.issue_date"
                                                          }
                                                        },
                                                        "v-text-field",
                                                        attrs,
                                                        false
                                                      ),
                                                      on
                                                    )
                                                  )
                                                ]
                                              }
                                            }
                                          ]),
                                          model: {
                                            value: _vm.issue_date_is_down,
                                            callback: function($$v) {
                                              _vm.issue_date_is_down = $$v
                                            },
                                            expression: "issue_date_is_down"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("v-date-picker", {
                                            attrs: { "no-title": "" },
                                            on: {
                                              input: function($event) {
                                                _vm.issue_date_is_down = false
                                              },
                                              change: _vm.getDays
                                            },
                                            model: {
                                              value: _vm.bill.issue_date,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.bill,
                                                  "issue_date",
                                                  $$v
                                                )
                                              },
                                              expression: "bill.issue_date"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pa-0",
                                      attrs: { cols: "12" }
                                    },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          type: "number",
                                          label: "الدفع بعد ",
                                          suffix: "يوم"
                                        },
                                        on: { change: _vm.getMaturityDate },
                                        model: {
                                          value: _vm.bill.payment_condition_id,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.bill,
                                              "payment_condition_id",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "bill.payment_condition_id"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pa-0",
                                      attrs: { cols: "12" }
                                    },
                                    [
                                      _c(
                                        "v-menu",
                                        {
                                          ref: "maturity_date",
                                          attrs: {
                                            "close-on-content-click": false,
                                            transition: "scale-transition",
                                            "offset-y": "",
                                            "max-width": "290px",
                                            "min-width": "auto"
                                          },
                                          scopedSlots: _vm._u([
                                            {
                                              key: "activator",
                                              fn: function(ref) {
                                                var on = ref.on
                                                var attrs = ref.attrs
                                                return [
                                                  _c(
                                                    "v-text-field",
                                                    _vm._g(
                                                      _vm._b(
                                                        {
                                                          attrs: {
                                                            label:
                                                              "تاريخ الاستحقاق",
                                                            "prepend-icon":
                                                              "mdi-calendar"
                                                          },
                                                          on: {
                                                            keydown: function(
                                                              $event
                                                            ) {
                                                              if (
                                                                !$event.type.indexOf(
                                                                  "key"
                                                                ) &&
                                                                _vm._k(
                                                                  $event.keyCode,
                                                                  "enter",
                                                                  13,
                                                                  $event.key,
                                                                  "Enter"
                                                                )
                                                              ) {
                                                                return null
                                                              }
                                                              _vm.maturity_date_is_down = false
                                                            },
                                                            change: _vm.getDays
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.bill
                                                                .maturity_date,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.bill,
                                                                "maturity_date",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "bill.maturity_date"
                                                          }
                                                        },
                                                        "v-text-field",
                                                        attrs,
                                                        false
                                                      ),
                                                      on
                                                    )
                                                  )
                                                ]
                                              }
                                            }
                                          ]),
                                          model: {
                                            value: _vm.maturity_date_is_down,
                                            callback: function($$v) {
                                              _vm.maturity_date_is_down = $$v
                                            },
                                            expression: "maturity_date_is_down"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("v-date-picker", {
                                            attrs: { "no-title": "" },
                                            on: {
                                              input: function($event) {
                                                _vm.maturity_date_is_down = false
                                              },
                                              change: _vm.getDays
                                            },
                                            model: {
                                              value: _vm.bill.maturity_date,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.bill,
                                                  "maturity_date",
                                                  $$v
                                                )
                                              },
                                              expression: "bill.maturity_date"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            [
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-title",
                                    {
                                      staticStyle: { background: "lightgray" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(_vm.person_info) +
                                          "\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-row",
                                        [
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", lg: "6" } },
                                            [_vm._v(" الاسم ")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", lg: "6" } },
                                            [
                                              _vm._v(
                                                "\n                      " +
                                                  _vm._s(
                                                    _vm.personInfo() &&
                                                      _vm.personInfo().name
                                                  ) +
                                                  "\n                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", lg: "6" } },
                                            [_vm._v(" اسم الشركة ")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", lg: "6" } },
                                            [
                                              _vm._v(
                                                "\n                      " +
                                                  _vm._s(
                                                    _vm.personInfo() &&
                                                      _vm.personInfo()
                                                        .company_name
                                                  ) +
                                                  "\n                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", lg: "6" } },
                                            [_vm._v(" الهاتف ")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", lg: "6" } },
                                            [
                                              _vm._v(
                                                "\n                      " +
                                                  _vm._s(
                                                    _vm.personInfo() &&
                                                      _vm.personInfo().phone01
                                                  ) +
                                                  " "
                                              )
                                            ]
                                          ),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", lg: "6" } },
                                            [_vm._v(" البريد الالكتروني ")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            { attrs: { cols: "12", lg: "6" } },
                                            [
                                              _vm._v(
                                                "\n                      " +
                                                  _vm._s(
                                                    _vm.personInfo() &&
                                                      _vm.personInfo().email
                                                  ) +
                                                  "\n                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value:
                                                    _vm.personInfo() &&
                                                    _vm.personInfo().tax_number,
                                                  expression:
                                                    "personInfo() && personInfo().tax_number"
                                                }
                                              ],
                                              attrs: { cols: "12", lg: "6" }
                                            },
                                            [
                                              _vm._v(
                                                "\n                      الرقم الضريبي\n                    "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value:
                                                    _vm.personInfo() &&
                                                    _vm.personInfo().tax_number,
                                                  expression:
                                                    "personInfo() && personInfo().tax_number"
                                                }
                                              ],
                                              attrs: { cols: "12", lg: "6" }
                                            },
                                            [
                                              _vm._v(
                                                "\n                      " +
                                                  _vm._s(
                                                    _vm.personInfo() &&
                                                      _vm.personInfo()
                                                        .tax_number
                                                  ) +
                                                  "\n                    "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", { attrs: { inset: "" } }),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-data-table",
                            {
                              staticClass: "elevation-1",
                              attrs: {
                                "disable-pagination": "",
                                headers: _vm.header,
                                items: _vm.bill.details,
                                "hide-default-footer": true,
                                "item-key": _vm.toString(
                                  Math.floor(Math.random(1, 100) * 100)
                                )
                              },
                              scopedSlots: _vm._u(
                                [
                                  !_vm.return_bill || _vm.return_source != "1"
                                    ? {
                                        key: "top",
                                        fn: function() {
                                          return [
                                            _c(
                                              "v-toolbar",
                                              {
                                                attrs: {
                                                  flat: "",
                                                  color: "white"
                                                }
                                              },
                                              [
                                                _c("v-toolbar-title", [
                                                  _vm._v("قائمة الأصناف")
                                                ]),
                                                _vm._v(" "),
                                                _c("v-divider", {
                                                  staticClass: "mx-4",
                                                  attrs: {
                                                    inset: "",
                                                    vertical: ""
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  {
                                                    attrs: {
                                                      cols: "12",
                                                      sm: "6",
                                                      md: "4"
                                                    }
                                                  },
                                                  [
                                                    _c("v-autocomplete", {
                                                      attrs: {
                                                        loading: _vm.loading,
                                                        items:
                                                          _vm.found_products,
                                                        "item-text": "ar_name",
                                                        "return-object": "",
                                                        "search-input":
                                                          _vm.name_search,
                                                        flat: "",
                                                        "hide-no-data": "",
                                                        label: "اسم الصنف"
                                                      },
                                                      on: {
                                                        "update:searchInput": function(
                                                          $event
                                                        ) {
                                                          _vm.name_search = $event
                                                        },
                                                        "update:search-input": function(
                                                          $event
                                                        ) {
                                                          _vm.name_search = $event
                                                        },
                                                        change: function(
                                                          $event
                                                        ) {
                                                          return _vm.addProductToBill(
                                                            true
                                                          )
                                                        }
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.selected_product,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.selected_product = $$v
                                                        },
                                                        expression:
                                                          "selected_product"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  {
                                                    attrs: {
                                                      cols: "12",
                                                      sm: "6",
                                                      md: "4"
                                                    }
                                                  },
                                                  [
                                                    _c("v-text-field", {
                                                      attrs: {
                                                        type: "barcode",
                                                        id: "barcode",
                                                        autocomplete: "off",
                                                        label: "الباركود",
                                                        rules: _vm.is_exists
                                                      },
                                                      on: {
                                                        keydown: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            !$event.type.indexOf(
                                                              "key"
                                                            ) &&
                                                            _vm._k(
                                                              $event.keyCode,
                                                              "enter",
                                                              13,
                                                              $event.key,
                                                              "Enter"
                                                            )
                                                          ) {
                                                            return null
                                                          }
                                                          return _vm.searchProductByBarcode(
                                                            "barcode"
                                                          )
                                                        }
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.searched_barcode,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.searched_barcode = $$v
                                                        },
                                                        expression:
                                                          "searched_barcode"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("v-spacer")
                                              ],
                                              1
                                            )
                                          ]
                                        },
                                        proxy: true
                                      }
                                    : null,
                                  {
                                    key: "item.ar_name",
                                    fn: function(ref) {
                                      var item = ref.item
                                      return [
                                        _c("div", [
                                          _vm._v(_vm._s(item.ar_name))
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "a",
                                          {
                                            on: {
                                              click: function($event) {
                                                return _vm.show_product_dialog(
                                                  item
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("v-icon", [
                                              _vm._v(" mdi-information ")
                                            ])
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  },
                                  {
                                    key: "item.expires_at",
                                    fn: function(ref) {
                                      var item = ref.item
                                      return [
                                        _c(
                                          "v-menu",
                                          {
                                            ref: "maturity_date",
                                            attrs: {
                                              disabled:
                                                _vm.act != "input" ||
                                                !item.has_expiration_date,
                                              "close-on-content-click": false,
                                              transition: "scale-transition",
                                              "offset-y": ""
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "activator",
                                                  fn: function(ref) {
                                                    var on = ref.on
                                                    var attrs = ref.attrs
                                                    return [
                                                      item.has_expiration_date
                                                        ? _c(
                                                            "v-text-field",
                                                            _vm._g(
                                                              _vm._b(
                                                                {
                                                                  attrs: {
                                                                    disabled:
                                                                      _vm.act !=
                                                                        "input" ||
                                                                      !item.has_expiration_date,
                                                                    flat: "",
                                                                    outlined:
                                                                      "",
                                                                    autocomplete:
                                                                      "off",
                                                                    "hide-no-data":
                                                                      "",
                                                                    "hide-details":
                                                                      item.expires_at_message,
                                                                    rules:
                                                                      item.expires_at_valid
                                                                  },
                                                                  on: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.expires_date(
                                                                        item
                                                                      )
                                                                    },
                                                                    keydown: function(
                                                                      $event
                                                                    ) {
                                                                      if (
                                                                        !$event.type.indexOf(
                                                                          "key"
                                                                        ) &&
                                                                        _vm._k(
                                                                          $event.keyCode,
                                                                          "enter",
                                                                          13,
                                                                          $event.key,
                                                                          "Enter"
                                                                        )
                                                                      ) {
                                                                        return null
                                                                      }
                                                                      item.expires_at_is_down = false
                                                                    },
                                                                    change: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.changeExpirationDate(
                                                                        item
                                                                      )
                                                                    }
                                                                  },
                                                                  model: {
                                                                    value: item.expires_at.split(
                                                                      " "
                                                                    )[0],
                                                                    callback: function(
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        item.expires_at.split(
                                                                          " "
                                                                        ),
                                                                        0,
                                                                        $$v
                                                                      )
                                                                    },
                                                                    expression:
                                                                      "item.expires_at.split(' ')[0]"
                                                                  }
                                                                },
                                                                "v-text-field",
                                                                attrs,
                                                                false
                                                              ),
                                                              on
                                                            )
                                                          )
                                                        : _c("v-text-field", {
                                                            attrs: {
                                                              disabled: "",
                                                              value: "--",
                                                              flat: "",
                                                              outlined: "",
                                                              autocomplete:
                                                                "off",
                                                              "hide-no-data":
                                                                "",
                                                              "hide-details": ""
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.expires_date(
                                                                  item
                                                                )
                                                              }
                                                            }
                                                          })
                                                    ]
                                                  }
                                                }
                                              ],
                                              null,
                                              true
                                            ),
                                            model: {
                                              value: item.expires_at_is_down,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  item,
                                                  "expires_at_is_down",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "item.expires_at_is_down"
                                            }
                                          },
                                          [
                                            _vm._v(" "),
                                            _c("v-date-picker", {
                                              attrs: { "no-title": "" },
                                              on: {
                                                input: function($event) {
                                                  item.expires_at_is_down = false
                                                },
                                                change: function($event) {
                                                  return _vm.changeExpirationDate(
                                                    item
                                                  )
                                                }
                                              },
                                              model: {
                                                value: item.expires_at,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    item,
                                                    "expires_at",
                                                    $$v
                                                  )
                                                },
                                                expression: "item.expires_at"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  },
                                  {
                                    key: "item.unit_price",
                                    fn: function(ref) {
                                      var item = ref.item
                                      return [
                                        _c("v-text-field", {
                                          attrs: {
                                            flat: "",
                                            type: "number",
                                            outlined: "",
                                            autocomplete: "off",
                                            "hide-no-data": "",
                                            "hide-details": ""
                                          },
                                          model: {
                                            value: item.unit_price,
                                            callback: function($$v) {
                                              _vm.$set(item, "unit_price", $$v)
                                            },
                                            expression: "item.unit_price"
                                          }
                                        })
                                      ]
                                    }
                                  },
                                  {
                                    key: "item.tax",
                                    fn: function(ref) {
                                      var item = ref.item
                                      return [
                                        _c("v-text-field", {
                                          attrs: {
                                            type: "number",
                                            flat: "",
                                            "hide-no-data": "",
                                            "hide-details": "",
                                            outlined: "",
                                            autocomplete: "off"
                                          },
                                          model: {
                                            value: item.tax,
                                            callback: function($$v) {
                                              _vm.$set(item, "tax", $$v)
                                            },
                                            expression: "item.tax"
                                          }
                                        })
                                      ]
                                    }
                                  },
                                  {
                                    key: "item.tax_value",
                                    fn: function(ref) {
                                      var item = ref.item
                                      return [
                                        _c("v-text-field", {
                                          attrs: {
                                            flat: "",
                                            disabled: "",
                                            "hide-no-data": "",
                                            "hide-details": "",
                                            outlined: "",
                                            autocomplete: "off",
                                            value: _vm
                                              .tax_value(item)
                                              .toFixed(2)
                                          }
                                        })
                                      ]
                                    }
                                  },
                                  {
                                    key: "item.discount",
                                    fn: function(ref) {
                                      var item = ref.item
                                      return [
                                        _c(
                                          "v-row",
                                          { staticClass: "justify-center" },
                                          [
                                            _c(
                                              "v-col",
                                              {
                                                staticClass: "pl-0",
                                                attrs: { cols: "6" }
                                              },
                                              [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    flat: "",
                                                    type: "number",
                                                    "hide-no-data": "",
                                                    "hide-details": "",
                                                    outlined: "",
                                                    autocomplete: "off"
                                                  },
                                                  model: {
                                                    value: item.discount,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        item,
                                                        "discount",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "item.discount"
                                                  }
                                                })
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "v-col",
                                              {
                                                staticClass: "pr-0",
                                                attrs: { cols: "6" }
                                              },
                                              [
                                                _c("v-autocomplete", {
                                                  attrs: {
                                                    items: _vm.discount_types,
                                                    "item-text": "ar_name",
                                                    "item-value": "id",
                                                    "cache-items": "",
                                                    "append-icon": "",
                                                    flat: "",
                                                    "hide-no-data": "",
                                                    "hide-details": "",
                                                    "solo-inverted": "",
                                                    outlined: ""
                                                  },
                                                  model: {
                                                    value:
                                                      item.discount_type_id,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        item,
                                                        "discount_type_id",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "item.discount_type_id"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  },
                                  {
                                    key: "item.action",
                                    fn: function(ref) {
                                      var item = ref.item
                                      return [
                                        _c(
                                          "v-icon",
                                          {
                                            attrs: { color: "red", small: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.deleteItem(item)
                                              }
                                            }
                                          },
                                          [_vm._v("mdi-delete")]
                                        )
                                      ]
                                    }
                                  },
                                  {
                                    key: "item.product_unit_id",
                                    fn: function(ref) {
                                      var item = ref.item
                                      return [
                                        _c("v-autocomplete", {
                                          attrs: {
                                            items: item.units,
                                            "item-text": "ar_name",
                                            "item-value": "pivot.id",
                                            "cache-items": "",
                                            flat: "",
                                            "hide-no-data": "",
                                            "hide-details": "",
                                            "solo-inverted": "",
                                            outlined: ""
                                          },
                                          on: {
                                            change: function($event) {
                                              return _vm.product_unit_change(
                                                item
                                              )
                                            }
                                          },
                                          model: {
                                            value: item.unit_id,
                                            callback: function($$v) {
                                              _vm.$set(item, "unit_id", $$v)
                                            },
                                            expression: "item.unit_id"
                                          }
                                        })
                                      ]
                                    }
                                  },
                                  {
                                    key: "item.quantity",
                                    fn: function(ref) {
                                      var item = ref.item
                                      return [
                                        _c("v-text-field", {
                                          attrs: {
                                            type: "number",
                                            "hide-no-data": "",
                                            autocomplete: "off",
                                            "single-line": "",
                                            outlined: "",
                                            "hide-details":
                                              item.hide_quantity_valid_message,
                                            rules: item.quantity_valid
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.quantity_clicked(item)
                                            }
                                          },
                                          model: {
                                            value: item.quantity,
                                            callback: function($$v) {
                                              _vm.$set(item, "quantity", $$v)
                                            },
                                            expression: "item.quantity"
                                          }
                                        })
                                      ]
                                    }
                                  },
                                  {
                                    key: "item.quantity_in_minor_unit",
                                    fn: function(ref) {
                                      var item = ref.item
                                      return [
                                        _c("v-text-field", {
                                          attrs: {
                                            autocomplete: "off",
                                            disabled: "",
                                            "single-line": "",
                                            flat: "",
                                            "hide-no-data": "",
                                            "hide-details": "",
                                            "solo-inverted": "",
                                            outlined: "",
                                            value: _vm.quantity_in_minor_unit(
                                              item
                                            )
                                          }
                                        })
                                      ]
                                    }
                                  },
                                  {
                                    key: "item.total_befor_tax",
                                    fn: function(ref) {
                                      var item = ref.item
                                      return [
                                        _c("v-text-field", {
                                          attrs: {
                                            disabled: "",
                                            "hide-no-data": "",
                                            "hide-details": "",
                                            autocomplete: "off",
                                            "single-line": "",
                                            outlined: "",
                                            value: _vm
                                              .total_befor_tax(item)
                                              .toFixed(2)
                                          }
                                        })
                                      ]
                                    }
                                  },
                                  {
                                    key: "item.total",
                                    fn: function(ref) {
                                      var item = ref.item
                                      return [
                                        _c("v-text-field", {
                                          attrs: {
                                            disabled: "",
                                            "hide-no-data": "",
                                            "hide-details": "",
                                            autocomplete: "off",
                                            "single-line": "",
                                            outlined: "",
                                            value: _vm.total(item).toFixed(2)
                                          }
                                        })
                                      ]
                                    }
                                  },
                                  {
                                    key: "footer",
                                    fn: function() {
                                      return [
                                        _c("v-divider", {
                                          staticClass: "mx-4",
                                          attrs: { inset: "" }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "v-toolbar",
                                          {
                                            attrs: { flat: "", color: "white" }
                                          },
                                          [
                                            _c("v-toolbar-title", [
                                              _vm._v("الإجمالي")
                                            ]),
                                            _vm._v(" "),
                                            _c("v-divider", {
                                              staticClass: "mx-4",
                                              attrs: { inset: "", vertical: "" }
                                            }),
                                            _vm._v(" "),
                                            _c("v-spacer")
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "bill-footer" },
                                          [
                                            _c(
                                              "v-row",
                                              [
                                                _c(
                                                  "v-col",
                                                  {
                                                    attrs: {
                                                      cols: "12",
                                                      lg: "6"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "v-row",
                                                      {
                                                        attrs: {
                                                          justify: "start"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-col",
                                                          {
                                                            staticStyle: {
                                                              "text-align":
                                                                "end",
                                                              "border-bottom":
                                                                "1px solid lightgray"
                                                            },
                                                            attrs: {
                                                              cols: "12",
                                                              lg: "5"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                          الاجمالي قبل الضريبة:\n                        "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-col",
                                                          {
                                                            staticStyle: {
                                                              "text-align":
                                                                "start",
                                                              "border-bottom":
                                                                "1px solid lightgray"
                                                            },
                                                            attrs: {
                                                              cols: "12",
                                                              lg: "5"
                                                            }
                                                          },
                                                          [
                                                            _c("div", {
                                                              domProps: {
                                                                innerHTML: _vm._s(
                                                                  _vm
                                                                    .total_without_products_tax()
                                                                    .toFixed(2)
                                                                )
                                                              }
                                                            })
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-row",
                                                      {
                                                        attrs: {
                                                          justify: "start"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-col",
                                                          {
                                                            staticStyle: {
                                                              "text-align":
                                                                "end",
                                                              "border-bottom":
                                                                "1px solid lightgray"
                                                            },
                                                            attrs: {
                                                              cols: "12",
                                                              lg: "5"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                          قيمة الضريبة:\n                        "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-col",
                                                          {
                                                            staticStyle: {
                                                              "text-align":
                                                                "start",
                                                              "border-bottom":
                                                                "1px solid lightgray"
                                                            },
                                                            attrs: {
                                                              cols: "12",
                                                              lg: "5"
                                                            }
                                                          },
                                                          [
                                                            _c("div", {
                                                              domProps: {
                                                                innerHTML: _vm._s(
                                                                  _vm
                                                                    .total_tax()
                                                                    .toFixed(2)
                                                                )
                                                              }
                                                            })
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-row",
                                                      {
                                                        attrs: {
                                                          justify: "start"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-col",
                                                          {
                                                            staticStyle: {
                                                              "text-align":
                                                                "end",
                                                              "font-size":
                                                                "1.5rem"
                                                            },
                                                            attrs: {
                                                              cols: "12",
                                                              lg: "5"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                          المجموع:\n                        "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-col",
                                                          {
                                                            staticStyle: {
                                                              "text-align":
                                                                "start",
                                                              "font-size":
                                                                "1.5rem"
                                                            },
                                                            attrs: { cols: "6" }
                                                          },
                                                          [
                                                            _c("div", {
                                                              domProps: {
                                                                innerHTML: _vm._s(
                                                                  _vm
                                                                    .total_amount()
                                                                    .toFixed(2)
                                                                )
                                                              }
                                                            })
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-col",
                                                  {
                                                    attrs: {
                                                      cols: "12",
                                                      lg: "5"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "v-row",
                                                      {
                                                        attrs: {
                                                          justify: "start"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-col",
                                                          {
                                                            staticStyle: {
                                                              "text-align":
                                                                "end",
                                                              "border-bottom":
                                                                "1px solid lightgray",
                                                              color: "green"
                                                            },
                                                            attrs: {
                                                              cols: "12",
                                                              lg: "4"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticStyle: {
                                                                  "margin-top":
                                                                    "10px"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "المدفوع:"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-col",
                                                          {
                                                            staticStyle: {
                                                              "text-align":
                                                                "start",
                                                              "border-bottom":
                                                                "1px solid lightgray"
                                                            },
                                                            attrs: {
                                                              cols: "12",
                                                              lg: "4"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              [
                                                                _c(
                                                                  "v-text-field",
                                                                  {
                                                                    attrs: {
                                                                      outlined:
                                                                        "",
                                                                      flat: "",
                                                                      "no-data":
                                                                        "",
                                                                      "no-data-text":
                                                                        "",
                                                                      "non-linear":
                                                                        ""
                                                                    },
                                                                    on: {
                                                                      change: function(
                                                                        $event
                                                                      ) {
                                                                        _vm.bill
                                                                          .only_cash ==
                                                                          true
                                                                      }
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm.bill
                                                                          .paid_amount,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.bill,
                                                                          "paid_amount",
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "bill.paid_amount"
                                                                    }
                                                                  }
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-col",
                                                          {
                                                            attrs: {
                                                              cols: "12",
                                                              lg: "4"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "payment-method",
                                                              {
                                                                attrs: {
                                                                  total:
                                                                    _vm.bill
                                                                      .total_amount,
                                                                  accounts:
                                                                    _vm.additional_expenses_from_accounts,
                                                                  payment_methods:
                                                                    _vm.bill
                                                                      .payment_methods
                                                                },
                                                                on: {
                                                                  payment_methods:
                                                                    _vm.paymentMethods
                                                                }
                                                              }
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      ],
                                                      1
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-row",
                                                      {
                                                        attrs: {
                                                          justify: "start"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "v-col",
                                                          {
                                                            staticStyle: {
                                                              "text-align":
                                                                "end",
                                                              "border-bottom":
                                                                "1px solid lightgray",
                                                              color: "green"
                                                            },
                                                            attrs: {
                                                              cols: "12",
                                                              lg: "4"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              {
                                                                staticStyle: {
                                                                  "margin-top":
                                                                    "10px"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "الباقي :"
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-col",
                                                          {
                                                            staticStyle: {
                                                              "text-align":
                                                                "start",
                                                              "border-bottom":
                                                                "1px solid lightgray"
                                                            },
                                                            attrs: {
                                                              cols: "12",
                                                              lg: "4"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "div",
                                                              [
                                                                _c(
                                                                  "v-text-field",
                                                                  {
                                                                    staticClass:
                                                                      "purchas-extra-expense text-red",
                                                                    attrs: {
                                                                      flat: "",
                                                                      disabled:
                                                                        "",
                                                                      "no-data":
                                                                        "",
                                                                      "no-data-text":
                                                                        "",
                                                                      "non-linear":
                                                                        "",
                                                                      value: _vm
                                                                        .remaining_amount()
                                                                        .toFixed(
                                                                          2
                                                                        )
                                                                    }
                                                                  }
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-col",
                                                          {
                                                            attrs: {
                                                              cols: "12",
                                                              lg: "4"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "v-btn",
                                                              {
                                                                attrs: {
                                                                  elevation:
                                                                    "0",
                                                                  dark: ""
                                                                },
                                                                on: {
                                                                  click:
                                                                    _vm.payAllCash
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                            دفع الكل نقدا!\n                          "
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c("div", {
                                              staticStyle: { height: "30px" }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    },
                                    proxy: true
                                  }
                                ],
                                null,
                                true
                              )
                            },
                            [
                              _c("template", { slot: "no-data" }, [
                                _c("div", { staticStyle: { color: "red" } }, [
                                  _vm._v("قم باختيار الأصناف")
                                ])
                              ])
                            ],
                            2
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "btn btn-info m-b-5 m-r-2 white--text",
                      attrs: { color: "text--white", text: "" },
                      on: {
                        click: function($event) {
                          return _vm.submit()
                        }
                      }
                    },
                    [
                      _c("v-icon", { staticClass: "white--text" }, [
                        _vm._v("mdi-plus-box")
                      ]),
                      _vm._v("حفظ وإضافة صنف جديد\n        ")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "btn btn-info m-b-5 m-r-2 white--text",
                      attrs: { color: "text--white", text: "" },
                      on: {
                        click: function($event) {
                          return _vm.suspend()
                        }
                      }
                    },
                    [
                      _c("v-icon", { staticClass: "white--text" }, [
                        _vm._v("mdi-plus-box")
                      ]),
                      _vm._v("تعليق\n        ")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "btn btn-info m-b-5 m-r-2 white--text",
                      attrs: { color: "text--white", text: "" },
                      on: {
                        click: function($event) {
                          return _vm.return_suspended_bill()
                        }
                      }
                    },
                    [
                      _c("v-icon", { staticClass: "white--text" }, [
                        _vm._v("mdi-plus-box")
                      ]),
                      _vm._v("احضار المعلقات\n        ")
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/payment-methods.vue?vue&type=template&id=183e65dd&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/bills/payment-methods.vue?vue&type=template&id=183e65dd& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-dialog",
        {
          attrs: { scrollable: "", "max-width": "1000px" },
          scopedSlots: _vm._u([
            {
              key: "activator",
              fn: function(ref) {
                var on = ref.on
                var attrs = ref.attrs
                return [
                  _c(
                    "v-btn",
                    _vm._g(
                      _vm._b(
                        {
                          attrs: { elevation: "0", dark: "" },
                          on: { click: _vm.setMethodsIfEmpty }
                        },
                        "v-btn",
                        attrs,
                        false
                      ),
                      on
                    ),
                    [_vm._v("\n        طريقة الدفع!..\n      ")]
                  )
                ]
              }
            }
          ]),
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _vm._v(" "),
          _c(
            "v-card",
            { attrs: { flat: "" } },
            [
              _c(
                "v-card-text",
                [
                  _c("v-data-table", {
                    attrs: {
                      headers: _vm.payment_methods_header,
                      items: _vm.payment_methods,
                      "hide-default-footer": ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "top",
                        fn: function() {
                          return [
                            _c(
                              "v-toolbar",
                              { attrs: { flat: "", color: "white" } },
                              [
                                _c(
                                  "v-toolbar-title",
                                  [
                                    _c(
                                      "v-row",
                                      { staticClass: "justify-space-between" },
                                      [
                                        _c(
                                          "v-col",
                                          [
                                            _vm._v(
                                              "\n                    حدد طريقة الدفع والمبلغ المستلم\n                    "
                                            ),
                                            _c("v-divider", {
                                              staticClass: "mx-4",
                                              attrs: { inset: "", vertical: "" }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          [
                                            _c(
                                              "v-icon",
                                              {
                                                on: {
                                                  click: _vm.addPaymentMethod
                                                }
                                              },
                                              [_vm._v(" mdi-plus ")]
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-spacer")
                              ],
                              1
                            )
                          ]
                        },
                        proxy: true
                      },
                      {
                        key: "item.id",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("div", [
                              _vm._v(
                                "\n              " +
                                  _vm._s(
                                    _vm.payment_methods.indexOf(item) + 1
                                  ) +
                                  "\n            "
                              )
                            ])
                          ]
                        }
                      },
                      {
                        key: "item.ar_name",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("v-autocomplete", {
                              attrs: {
                                items: _vm.accounts,
                                "item-text": "ar_name",
                                "item-value": "id",
                                "append-icon": "",
                                outlined: "",
                                "single-line": ""
                              },
                              model: {
                                value: item.account_id,
                                callback: function($$v) {
                                  _vm.$set(item, "account_id", $$v)
                                },
                                expression: "item.account_id"
                              }
                            })
                          ]
                        }
                      },
                      {
                        key: "item.account_code",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("v-text-field", {
                              attrs: {
                                autocomplete: "off",
                                "single-line": "",
                                outlined: "",
                                disabled: "",
                                value:
                                  _vm.accounts.find(function(elem) {
                                    return elem.id == item.account_id
                                  }) &&
                                  _vm.accounts.find(function(elem) {
                                    return elem.id == item.account_id
                                  })["account_code"]
                              }
                            })
                          ]
                        }
                      },
                      {
                        key: "item.amount",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("v-text-field", {
                              attrs: {
                                type: "number",
                                disabled: item.account_id == 0,
                                autocomplete: "off",
                                rules: _vm.vld_numbering,
                                "single-line": "",
                                outlined: ""
                              },
                              model: {
                                value: item.amount,
                                callback: function($$v) {
                                  _vm.$set(item, "amount", $$v)
                                },
                                expression: "item.amount"
                              }
                            })
                          ]
                        }
                      },
                      {
                        key: "item.description",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("v-text-field", {
                              attrs: {
                                autocomplete: "off",
                                rules: _vm.vld_numbering,
                                "single-line": "",
                                outlined: ""
                              },
                              model: {
                                value: item.description,
                                callback: function($$v) {
                                  _vm.$set(item, "description", $$v)
                                },
                                expression: "item.description"
                              }
                            })
                          ]
                        }
                      },
                      {
                        key: "item.actions",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "v-icon",
                              {
                                staticStyle: { "margin-bottom": "20px" },
                                attrs: { color: "red", small: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.deletPaymentMethod(item)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n              mdi-delete\n            "
                                )
                              ]
                            )
                          ]
                        }
                      },
                      {
                        key: "footer",
                        fn: function() {
                          return [
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  {
                                    staticStyle: { "text-align": "center" },
                                    attrs: { cols: "12", lg: "4" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                المطلوب\n              "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  {
                                    staticStyle: { "text-align": "center" },
                                    attrs: { cols: "12", lg: "4" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                المدفوع\n              "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  {
                                    staticStyle: { "text-align": "center" },
                                    attrs: { cols: "12", lg: "4" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                الباقي\n              "
                                    )
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  {
                                    staticStyle: { "text-align": "center" },
                                    attrs: { cols: "12", lg: "4" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(_vm.total.toFixed(2)) +
                                        "\n              "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  {
                                    staticStyle: { "text-align": "center" },
                                    attrs: { cols: "12", lg: "4" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(_vm.paid_amount.toFixed(2)) +
                                        "\n              "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  {
                                    staticStyle: { "text-align": "center" },
                                    attrs: { cols: "12", lg: "4" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(
                                          _vm.remaining_amount.toFixed(2)
                                        ) +
                                        "\n              "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ]
                        },
                        proxy: true
                      }
                    ])
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("\n          إلغاء\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: {
                        click: function($event) {
                          return _vm.emitPayments()
                        }
                      }
                    },
                    [_vm._v("\n          حفظ\n        ")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/loader.vue?vue&type=template&id=f18340a4&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/loader.vue?vue&type=template&id=f18340a4& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vld-parent" },
    [
      _c("loading", {
        attrs: {
          active: _vm.isLoading,
          "can-cancel": false,
          "on-cancel": _vm.onCancel,
          "is-full-page": true,
          blur: "",
          opacity: _vm.loaderOpacity
        },
        on: {
          "update:active": function($event) {
            _vm.isLoading = $event
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=template&id=b36f5868&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=template&id=b36f5868& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-dialog",
    {
      attrs: { scrollable: "", "max-width": "1000px", persistent: "" },
      model: {
        value: _vm.dialog,
        callback: function($$v) {
          _vm.dialog = $$v
        },
        expression: "dialog"
      }
    },
    [
      _c(
        "v-card",
        [
          _c(
            "v-card-title",
            { staticClass: "my-3 pa-0" },
            [
              _c(
                "v-row",
                { staticStyle: { "font-size": "14px" } },
                [
                  _c(
                    "v-col",
                    {
                      staticClass: "align-self-center",
                      staticStyle: { "border-left": "1px solid" },
                      attrs: { cols: "12", lg: "3" }
                    },
                    [
                      _vm._t("title", function() {
                        return [_vm._v(" new product ")]
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "align-self-center",
                      attrs: { cols: "12", lg: "5" }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c("v-col", [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.product.ar_name) +
                                "\n            "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c("v-col", [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.product.en_name) +
                                "\n            "
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.windowHeight >= 0
                    ? _c(
                        "v-col",
                        { attrs: { cols: "12", lg: "4" } },
                        [
                          _c(
                            "v-row",
                            { staticClass: "justify-center" },
                            [
                              _c(
                                "v-col",
                                [
                                  _c("v-barcode", {
                                    staticStyle: { direction: "ltr" },
                                    attrs: {
                                      value: _vm.product.barcode,
                                      width: "1",
                                      height: "50",
                                      displayValue: "",
                                      format: "EAN13"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            { staticStyle: { height: "400px" } },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "6", lg: "3" } },
                    [
                      _c("v-checkbox", {
                        staticClass: "nib",
                        staticStyle: {
                          "white-space": "nowrap",
                          "margin-left": "5px",
                          "margin-right": "5px"
                        },
                        attrs: {
                          disabled: "",
                          color: "#e91e63",
                          label: "المنتج نشط"
                        },
                        model: {
                          value: _vm.product.is_active,
                          callback: function($$v) {
                            _vm.$set(_vm.product, "is_active", $$v)
                          },
                          expression: "product.is_active"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6", lg: "2" } },
                    [
                      _c("v-checkbox", {
                        staticStyle: {
                          "white-space": "nowrap",
                          "margin-left": "5px",
                          "margin-right": "5px"
                        },
                        attrs: {
                          disabled: "",
                          color: "#e91e63",
                          label: "قابل للاسترجاع"
                        },
                        model: {
                          value: _vm.product.is_returnable,
                          callback: function($$v) {
                            _vm.$set(_vm.product, "is_returnable", $$v)
                          },
                          expression: "product.is_returnable"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6", lg: "3" } },
                    [
                      _c("v-checkbox", {
                        staticStyle: {
                          "white-space": "nowrap",
                          "margin-left": "5px",
                          "margin-right": "5px"
                        },
                        attrs: {
                          disabled: "",
                          color: "#e91e63",
                          label: "الصنف مجاني"
                        },
                        model: {
                          value: _vm.product.is_free,
                          callback: function($$v) {
                            _vm.$set(_vm.product, "is_free", $$v)
                          },
                          expression: "product.is_free"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6", lg: "2" } },
                    [
                      _c("v-checkbox", {
                        staticStyle: {
                          "white-space": "nowrap",
                          "margin-left": "5px",
                          "margin-right": "5px"
                        },
                        attrs: {
                          disabled: "",
                          color: "#e91e63",
                          label: "السماح بالبونص"
                        },
                        model: {
                          value: _vm.product.is_bonus,
                          callback: function($$v) {
                            _vm.$set(_vm.product, "is_bonus", $$v)
                          },
                          expression: "product.is_bonus"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6", lg: "2" } },
                    [
                      _c("v-checkbox", {
                        staticStyle: {
                          "white-space": "nowrap",
                          "margin-left": "5px",
                          "margin-right": "5px"
                        },
                        attrs: {
                          disabled: "",
                          color: "#e91e63",
                          label: "لديه تاريخ انتهاء"
                        },
                        model: {
                          value: _vm.product.has_expiration_date,
                          callback: function($$v) {
                            _vm.$set(_vm.product, "has_expiration_date", $$v)
                          },
                          expression: "product.has_expiration_date"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-tabs",
                {
                  attrs: {
                    "background-color": "transparent",
                    color: "basil",
                    "gv-row": ""
                  },
                  model: {
                    value: _vm.tab,
                    callback: function($$v) {
                      _vm.tab = $$v
                    },
                    expression: "tab"
                  }
                },
                _vm._l(_vm.items, function(item) {
                  return _c("v-tab", { key: item.id }, [
                    _vm._v("\n          " + _vm._s(item) + "\n        ")
                  ])
                }),
                1
              ),
              _vm._v(" "),
              _c(
                "v-tabs-items",
                {
                  model: {
                    value: _vm.tab,
                    callback: function($$v) {
                      _vm.tab = $$v
                    },
                    expression: "tab"
                  }
                },
                [
                  _c(
                    "v-tab-item",
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { cols: "12", lg: "6" } },
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticStyle: {
                                        "border-left": "1px solid",
                                        margin: "2px"
                                      },
                                      attrs: { cols: "6", lg: "3" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  الرقم التسلسلي\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-col", [
                                    _vm._v(
                                      " " +
                                        _vm._s(_vm.product.serial_number) +
                                        " "
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticStyle: {
                                        "border-left": "1px solid",
                                        margin: "2px"
                                      },
                                      attrs: { cols: "6", lg: "3" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  نوع الصنف\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-col", [
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(
                                          _vm.prdct_types.find(function(elem) {
                                            return (
                                              elem.id ==
                                              _vm.product.prdct_type_id
                                            )
                                          })
                                            ? _vm.prdct_types.find(function(
                                                elem
                                              ) {
                                                return (
                                                  elem.id ==
                                                  _vm.product.prdct_type_id
                                                )
                                              })["ar_name"]
                                            : ""
                                        ) +
                                        "\n                "
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticStyle: {
                                        "border-left": "1px solid",
                                        margin: "2px"
                                      },
                                      attrs: { cols: "6", lg: "3" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  مجموعات الصنف\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    _vm._l(_vm.product.groups, function(item) {
                                      return _c("span", { key: item.id }, [
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(item.ar_name) +
                                            "،\n                  "
                                        )
                                      ])
                                    }),
                                    0
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12", lg: "6" } },
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticStyle: {
                                        "border-left": "1px solid",
                                        margin: "2px"
                                      },
                                      attrs: { cols: "6", lg: "3" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  حد التنبيه الأدني\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-col", [
                                    _vm._v(
                                      " " + _vm._s(_vm.product.min_alert) + " "
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticStyle: {
                                        "border-left": "1px solid",
                                        margin: "2px"
                                      },
                                      attrs: { cols: "6", lg: "3" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  حد التنبيه الأعلى\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-col", [
                                    _vm._v(
                                      " " + _vm._s(_vm.product.max_alert) + " "
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticStyle: {
                                        "border-left": "1px solid",
                                        margin: "2px"
                                      },
                                      attrs: { cols: "6", lg: "3" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                  فترة الركود\n                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-col", [
                                    _vm._v(
                                      " " +
                                        _vm._s(_vm.product.stagnation_period) +
                                        " "
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-tab-item",
                    [
                      _c("div", { staticStyle: { height: "60px" } }),
                      _vm._v(" "),
                      _c("v-data-table", {
                        attrs: {
                          headers: _vm.product_units_headers,
                          items: _vm.product.units,
                          "hide-default-footer": ""
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "item.main_sold_unit_id",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm.product.units.indexOf(item) + 1 ==
                                _vm.product.main_sold_unit_id
                                  ? _c("v-icon", { attrs: { small: "" } }, [
                                      _vm._v("mdi-check")
                                    ])
                                  : _vm._e()
                              ]
                            }
                          },
                          {
                            key: "item.main_bought_unit_id",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm.product.units.indexOf(item) + 1 ==
                                _vm.product.main_bought_unit_id
                                  ? _c("v-icon", { attrs: { small: "" } }, [
                                      _vm._v("mdi-check")
                                    ])
                                  : _vm._e()
                              ]
                            }
                          },
                          {
                            key: "item.contains",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(item.pivot.contains) +
                                    "\n            "
                                )
                              ]
                            }
                          },
                          {
                            key: "item.equals",
                            fn: function(ref) {
                              var item = ref.item
                              return [_vm._v(" = ")]
                            }
                          },
                          {
                            key: "item.from_unit",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      _vm.product.units[0] &&
                                        _vm.product.units[0].ar_name
                                    ) +
                                    "\n            "
                                )
                              ]
                            }
                          },
                          {
                            key: "item.bought_price",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(item.pivot.bought_price) +
                                    "\n            "
                                )
                              ]
                            }
                          },
                          {
                            key: "item.sold_price",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(item.pivot.sold_price) +
                                    "\n            "
                                )
                              ]
                            }
                          },
                          {
                            key: "item.barcode",
                            fn: function(ref) {
                              var item = ref.item
                              return [
                                _vm._v(
                                  "\n              " +
                                    _vm._s(item.pivot.barcode) +
                                    "\n            "
                                )
                              ]
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-container",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: false,
                      expression: "false"
                    }
                  ]
                },
                [
                  _c(
                    "v-row",
                    [
                      _c("v-col", { attrs: { cols: "6", sm: "6", md: "4" } }, [
                        _c("div", { staticStyle: { display: "flex" } }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: { "font-size": "14px", float: "left" }
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.product) +
                                "\n            "
                            )
                          ]
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "blue darken-1", text: "" },
                  on: { click: _vm.close }
                },
                [_vm._v("الغاء")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue-loading-overlay/dist/vue-loading.min.js ***!
  \******************************************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}("undefined"!=typeof self?self:this,(function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";i.r(e);var n="undefined"!=typeof window?window.HTMLElement:Object,r={mounted:function(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function a(t,e,i,n,r,a,o,s){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=i,u._compiled=!0),n&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),o?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=l):r&&(l=s?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:u}}var o=a({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,s=a({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,l=a({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,u=a({name:"vue-loading",mixins:[r],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,n],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!1},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,blur:{type:String,default:"2px"},opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:o,Dots:s,Bars:l},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},disableScroll:function(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vld-shown")},enableScroll:function(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vld-shown")},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t},isActive:function(t){t?this.disableScroll():this.enableScroll()}},computed:{bgStyle:function(){return{background:this.backgroundColor,opacity:this.opacity,backdropFilter:"blur(".concat(this.blur,")")}}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:t.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[i("div",{staticClass:"vld-background",style:t.bgStyle,on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),i("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[i(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])}),[],!1,null,null,null).exports,c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,a={programmatic:!0},o=Object.assign({},e,n,a),s=new(t.extend(u))({el:document.createElement("div"),propsData:o}),l=Object.assign({},i,r);return Object.keys(l).map((function(t){s.$slots[t]=l[t]})),s}}};i(0);u.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=c(t,e,i);t.$loading=n,t.prototype.$loading=n};e.default=u}]).default}));

/***/ })

}]);