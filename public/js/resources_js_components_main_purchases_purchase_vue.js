(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_documents_document_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


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
        text: " ???????????????? ?????????? ",
        align: "center",
        sortable: false,
        value: "main_sold_unit_id"
      }, {
        text: " ???????????????? ???????????? ",
        align: "center",
        sortable: false,
        value: "main_bought_unit_id"
      }, {
        text: " ????????????",
        align: "center",
        sortable: false,
        value: "ar_name"
      }, {
        text: "??????????",
        align: "center",
        sortable: false,
        value: "equals"
      }, {
        text: "??????",
        align: "center",
        sortable: false,
        value: "contains"
      }, {
        text: "???? ????????????",
        align: "center",
        sortable: false,
        value: "from_unit"
      }, {
        text: "?????? ????????????",
        align: "center",
        sortable: false,
        value: "bought_price"
      }, {
        text: "?????? ??????????",
        align: "center",
        sortable: false,
        value: "sold_price"
      }, {
        text: "????????????????",
        align: "center",
        sortable: false,
        value: "barcode",
        width: "150"
      }],
      tab: null,
      items: ["???????????? ????????????", "??????????????", "??????????????????", "??????????????", "????????????????"],
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      editedIndex: -1,
      emailRules: [function (v) {
        return !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "???????? ???????????? ???????? ????????";
      }],
      vld_minlingth: [function (v) {
        return !v || (v === null || v === void 0 ? void 0 : v.length) >= 2 || "???????? ???????? ???? ??????????";
      }],
      vld_minlingth_noEmpty: [function (v) {
        return (v === null || v === void 0 ? void 0 : v.length) >= 2 || "???????? ???????? ???? ??????????";
      }],
      vld_numbering: [function (v) {
        return !v || /^-?\d+\.?\d*$/.test(v) || "???????? ???????? ??????????";
      }],
      vld_numbering_noEmpty: [function (v) {
        return /^-?\d+\.?\d*$/.test(v) || "???????? ???????? ??????????";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/AddUpdatePerson.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/AddUpdatePerson.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["dialog", "person", "cities", "operation"],
  data: function data() {
    return {
      isloading: false,
      title: "?????????? ???????? ????????",
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
      this.$parent.$data.add_update_person_dialog = false;
    },
    savePerson: function savePerson() {
      var _this2 = this;

      console.log(this.operation);
      this.isloading = "blue";

      if (this.operation == "add") {
        _apis_Person__WEBPACK_IMPORTED_MODULE_0__.default.store(this.person).then(function (response) {
          _this2.person["id"] = response.data;
          _this2.$parent.$data.add_update_person_dialog = false;
          _this2.isloading = false;

          _this2.$emit("addUpdatePerson", _this2.person);
        });
        return;
      }

      if (this.operation == "update") {
        _apis_Person__WEBPACK_IMPORTED_MODULE_0__.default.update(this.person).then(function (response) {
          _this2.$parent.$data.add_update_person_dialog = false;
          _this2.isloading = false;

          _this2.$emit("addUpdatePerson", _this2.person);
        });
        return;
      }
    },
    onParentChange: function onParentChange() {
      var _this3 = this;

      var parent = this.$store.state.persons.find(function (elem) {
        return elem.id == _this3.person.parent_id;
      });
      console.log(parent.type_id);
      var parent_type_code = this.$store.state.person_types.find(function (elem) {
        return elem.id == parent.type_id;
      }).type_code;
      console.log(parent_type_code);
      this.person.level = parseInt(parent.level + 1);
      this.person_types = this.$store.state.person_types.filter(function (elem) {
        var length = 2;

        if (parent.level >= 2) {
          length = 4;
        } //alert(length);


        return elem.type_code.toString().startsWith(parent_type_code.toString()) && elem.type_code.toString().length == length;
      });
    },
    bgblue: function bgblue(item) {
      if (Math.ceil(Math.log10(item.person_code + 1)) <= 2) {
        $("#nib" + item.person_code).parent().addClass("first-level");
      } else if (Math.ceil(Math.log10(item.person_code + 1)) <= 3) {
        $("#nib" + item.person_code).parent().addClass("second-level");
      }

      if (this.person_div_update == 0) this.person_div_update += 1;
      return "";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/payment-methods.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/payment-methods.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["total", "accounts", "payment_methods"],
  data: function data() {
    return {
      /*-------------------validators---------------------------*/
      vld_minlingth_one: [function (v) {
        return v.length >= 1 || "???????? ????????";
      }],
      required: [function (value) {
        return !!value || "?????????? ??????????.";
      }],
      isunique: [],
      vld_numbering: [function (v) {
        return /^-?\d+\.?\d*$/.test(v) || "???????? ???????? ??????????";
      }],
      dialog: false,

      /*-------------------validators---------------------------*/
      payment_methods_header: [{
        text: "??",
        align: "center",
        width: "10px",
        sortable: false,
        value: "id"
      }, {
        text: "?????????? ??????...",
        align: "center",
        value: "ar_name",
        sortable: false
      }, {
        text: "?????? ????????????",
        align: "center",
        value: "account_code",
        sortable: false
      }, {
        text: " ????????????",
        align: "center",
        value: "credit",
        sortable: false
      }, {
        text: "??????????????",
        align: "center",
        value: "description",
        sortable: false
      }, {
        text: "???????? ",
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
        return +a + +b.credit;
      }, 0);
    }
  },
  methods: {
    setMethodsIfEmpty: function setMethodsIfEmpty() {},
    addPaymentMethod: function addPaymentMethod() {
      this.payment_methods.push({
        account_id: "",
        credit: 0,
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/document.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/document.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apis/Product */ "./resources/js/apis/Product.js");
/* harmony import */ var _apis_Document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apis/Document */ "./resources/js/apis/Document.js");
/* harmony import */ var _products_product_info_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products/product-info.vue */ "./resources/js/components/main/products/product-info.vue");
/* harmony import */ var _payment_methods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./payment-methods */ "./resources/js/components/main/documents/payment-methods.vue");
/* harmony import */ var _AddUpdatePerson_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddUpdatePerson.vue */ "./resources/js/components/main/documents/AddUpdatePerson.vue");
/* harmony import */ var _apis_Country__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../apis/Country */ "./resources/js/apis/Country.js");
/* harmony import */ var _apis_Person__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../apis/Person */ "./resources/js/apis/Person.js");
/* harmony import */ var _apis_Account__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../apis/Account */ "./resources/js/apis/Account.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ProductInfo: _products_product_info_vue__WEBPACK_IMPORTED_MODULE_3__.default,
    PaymentMethod: _payment_methods__WEBPACK_IMPORTED_MODULE_4__.default,
    AddUpdatePerson: _AddUpdatePerson_vue__WEBPACK_IMPORTED_MODULE_5__.default
  },
  data: function data() {
    return {
      route: window.location.pathname.replace(/^\/([^\/]*).*$/, "$1"),
      title: "???????????? ???????? ??????????",
      //----
      person_info: "?????????????? ????????????",
      person_type: "suppliers",
      persona: "????????????",
      //----
      is_new_document: true,
      additional_expenses_from_accounts: [],
      additional_expenses_from_account_id: "",
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
        ar_name: "????????",
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
        text: "?????? ??????????",
        align: "center",
        value: "ar_name",
        width: 300,
        sortable: false
      }, {
        text: "????????????????",
        align: "center",
        value: "expires_at",
        sortable: false,
        width: 100
      }, {
        text: "????????????",
        align: "center",
        value: "quantity",
        sortable: false
      }, {
        text: "????????????",
        align: "center",
        value: "product_unit_id",
        sortable: false
      }, {
        text: "?????? ????????????",
        align: "center",
        value: "unit_price",
        sortable: false
      }, {
        text: "???????????? ??.??",
        align: "center",
        value: "quantity_in_minor_unit",
        sortable: false
      }, {
        text: "?????? ????????????",
        align: "center",
        value: "discount",
        sortable: false,
        width: 100
      }, {
        text: "???????????????? ?????? ??????????????",
        align: "center",
        value: "total_befor_tax",
        sortable: false
      }, {
        text: "?????????????? % ",
        align: "center",
        value: "bought_tax",
        sortable: false
      }, {
        text: "???????? ??????????????",
        align: "center",
        value: "tax_value",
        sortable: false
      }, {
        text: "????????????",
        align: "center",
        value: "total",
        sortable: false
      }, {
        text: "???????? ",
        align: "center",
        value: "action"
      }],
      payment_conditions: [],
      new_document: {
        only_cash: true,
        payment_condition_id: 0,
        payment_methods: [{
          account_id: "",
          credit: 0,
          description: ""
        }, {
          account_id: "",
          credit: 0,
          description: ""
        }, {
          account_id: "",
          credit: 0,
          description: ""
        }],
        paid_amount: 0,
        remaining_amount: 0,
        additional_expenses: 100,
        total_without_products_vat: 0,
        total_vat: 0,
        total_amount: 0,
        patch_number: Math.floor(Math.random() * (99999 - 10000 + 1) + 10000),
        details: [],
        reference: "",
        description: "",
        person_id: "",
        issue_date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
        maturity_date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10)
      },
      document: {
        only_cash: true,
        payment_condition_id: 0,
        payment_methods: [{
          account_id: "",
          credit: 0,
          description: ""
        }, {
          account_id: "",
          credit: 0,
          description: ""
        }, {
          account_id: "",
          credit: 0,
          description: ""
        }],
        paid_amount: 0,
        remaining_amount: 0,
        additional_expenses: 100,
        total_without_products_vat: 0,
        total_vat: 0,
        total_amount: 0,
        patch_number: Math.floor(Math.random() * (99999 - 10000 + 1) + 10000),
        details: [],
        reference: "",
        description: "",
        person_id: "",
        issue_date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
        maturity_date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10)
      },

      /*------------------dateTime----------------------*/
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      issue_date_is_down: false,
      maturity_date_is_down: false,
      formatted_issue_date: this.formatDate(new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10)),

      /*-------------------validators---------------------------*/
      vld_minlingth_one: [function (v) {
        return v.length >= 1 || "???????? ????????";
      }],
      vld_selected: [function (v) {
        return v > 0 || "???????? ????????";
      }],
      required: [function (value) {
        return !!value || "?????????? ??????????.";
      }],
      isunique: [],
      is_exists: [],
      is_valid_date: [],
      vld_numbering: [function (v) {
        return /^-?\d+\.?\d*$/.test(v) || "???????? ???????? ??????????";
      }]
    };
  },
  watch: {
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
    alert(1);
    next();
  },
  methods: {
    logo: function logo(item) {
      var occurrences = 0;
      var firstIndex = -1;

      for (var index = 0; index < this.document.details.length; index++) {
        if (this.document.details[index].barcode == item.barcode && this.document.details[index].expires_at == item.expires_at) {
          if (firstIndex == -1) firstIndex = index;
          occurrences++;

          if (occurrences == 2) {
            this.document.details[firstIndex].quantity += this.document.details[index].quantity;
            this.document.details.splice(index, 1);
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
      this.document.payment_condition_id = parseInt((new Date(this.document.maturity_date) - new Date(this.document.issue_date)) / (1000 * 60 * 60 * 24), 10);
    },
    getMaturityDate: function getMaturityDate() {
      this.document.maturity_date = this.addays(this.document.issue_date, this.document.payment_condition_id).toISOString().substr(0, 10);
    },
    personInfo: function personInfo() {
      var _this = this;

      return this.people.find(function (elem) {
        return elem.id == _this.document.person_id;
      });
    },
    changeDateFormat: function changeDateFormat() {
      var chunks = this.document.test_date.match(/.{1,2}/g);
      if (chunks[1].length == 1) chunks[1] = "0" + chunks[1];
      var date = "20" + chunks[0] + "-" + chunks[1] + "-01";

      if (!isNaN(Date.parse(date))) {
        console.log(Date.parse(date));
        this.document.test_date = date;
        this.is_valid_date = [];
        return;
      }

      this.is_valid_date = ["?????????????? ?????? ????????"];
    },
    addPersonToList: function addPersonToList(person) {
      this.people.push(person);
      this.document.person_id = person.id;
    },
    loadCities: function loadCities(country_id) {
      var _this2 = this;

      this.cities = [];
      _apis_Country__WEBPACK_IMPORTED_MODULE_6__.default.loadCities(country_id).then(function (response) {
        return _this2.cities = response.data.cities;
      });
    },
    addPerson: function addPerson() {
      this.add_update_person_dialog = true;
      this.operation = "add";
      this.passed_person = {};
    },
    searchAndAddToDocument: function searchAndAddToDocument() {
      var _this3 = this;

      var params = {
        barcode: this.searched_barcode
      };
      _apis_Product__WEBPACK_IMPORTED_MODULE_1__.default.documentBarcodeSearch(params, this.route).then(function (response) {
        if (response.data.products.length == 0) {
          _this3.is_exists = [ false || "?????????? ?????? ?????????? "];
          return;
        }

        _this3.is_exists = [true];
        var selected_product = response.data.products[0]; //CHECK IF PRODUCT HAS EXPIRATION DATE --> ADD QUANTITY

        if (!selected_product.has_expiration_date) {
          var index = _this3.document.details.findIndex(function (elem) {
            return elem.barcode == selected_product.barcode;
          });

          if (index != -1) {
            _this3.document.details[index].quantity++;
            return;
          }
        } //this.found_products = response.data.products;
        //-----add


        selected_product.unit_id = selected_product.units[selected_product.main_bought_unit_id - 1].pivot.id;
        selected_product.unit_price = selected_product.units[selected_product.main_bought_unit_id - 1].pivot.bought_price;
        selected_product.quantity = 1; //---------

        selected_product["document_type_id"] = 1; // document

        selected_product["product_id"] = selected_product["id"]; // document

        _this3.document.details.push(selected_product);
      });
    },
    remaining_amount: function remaining_amount() {
      return this.document.remaining_amount = this.document.total_amount - this.document.paid_amount;
    },
    payAllCash: function payAllCash() {
      this.document.paid_amount = this.document.total_amount.toFixed(2);
      this.document.payment_methods = [{
        account_id: "",
        credit: 0,
        description: ""
      }, {
        account_id: "",
        credit: 0,
        description: ""
      }, {
        account_id: "",
        credit: 0,
        description: ""
      }];
    },
    paymentMethods: function paymentMethods(payments) {
      this.document.payment_methods = payments.payment_methods;
      this.document.paid_amount = payments.paid_amount;
      this.document.only_cash = false;
    },
    show_product_dialog: function show_product_dialog(item) {
      this.product_info_dialog = true;
      console.log(item);
      this.product_info_product = item;
    },
    product_unit_change: function product_unit_change(item) {
      var unit = item.units.find(function (elem) {
        return elem.pivot.id == item.unit_id;
      });
      item.unit_price = unit.pivot.bought_price;
    },
    total_vat: function total_vat() {
      this.document.total_vat = this.document.details.reduce(function (a, b) {
        return +a + +b.tax_value;
      }, 0);
      return this.document.total_vat;
    },
    total_amount: function total_amount() {
      this.document.total_amount = this.total_without_products_vat() + this.total_vat();
      return this.document.total_amount;
    },
    total_without_products_vat: function total_without_products_vat() {
      return this.document.details.reduce(function (a, b) {
        return +a + +b.total_befor_tax;
      }, 0);
    },
    total: function total(item) {
      item.total = this.tax_value(item) + this.total_befor_tax(item);
      return item.total;
    },
    tax_value: function tax_value(item) {
      item.tax_value = this.total_befor_tax(item) * item.bought_tax / 100;
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
      this.document.details.splice(this.document.details.indexOf(item), 1);
    },
    getProducts: function getProducts(val, type) {
      var _this4 = this;

      if (val.length > 2) {
        this.loading = true;
        var params = "";
        if (type == "barcode") params = {
          barcode: val
        };else params = {
          name: val
        }; // Simulated ajax query ajax

        _apis_Product__WEBPACK_IMPORTED_MODULE_1__.default.search(params).then(function (response) {
          _this4.loading = false;
          console.log("hi", response.data);

          if (response.data.length !== 0) {
            _this4.found_products = JSON.parse(JSON.stringify(response.data.products));
          }
        });
      }
    },
    addProductToDocument: function addProductToDocument() {
      console.log(this.document.details);
      console.log("seles", this.selected_product); //set defaultid from main purchsedid

      this.selected_product.unit_id = this.selected_product.units[this.selected_product.main_bought_unit_id - 1].pivot.id;
      this.selected_product.unit_price = this.selected_product.units[this.selected_product.main_bought_unit_id - 1].pivot.bought_price;
      this.selected_product.quantity = 1;
      console.log("nnj", this.selected_product.unit_id);
      this.document.details.push(JSON.parse(JSON.stringify(this.selected_product)));
      console.log("nib", this.document.details);
      this.selected_product = [];
    },
    checkExicting: function checkExicting() {},
    submit: function submit() {
      //this.$router.go(0); reload page if needed

      /* remove zero amount or not account methods */
      // this.document.payment_methods = this.document.payment_methods.filter(
      //     (elem) => elem.account_id != "" && elem.credit != 0
      // );
      if (this.is_new_document) _apis_Document__WEBPACK_IMPORTED_MODULE_2__.default.store(this.document, this.route + "s").then(function (response) {
        return console.log(response.data);
      });else _apis_Document__WEBPACK_IMPORTED_MODULE_2__.default.update(this.document, this.route + "s").then(function (response) {
        return console.log(response.data);
      });
      console.log(this.document);
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
      var _this5 = this;

      var params = to.params;
      console.log();

      if (Object.keys(params).length != 0) {
        alert(1212);
        this.is_new_document = false;
        this.title = "?????????? ???????????? ?????? " + params.id;
        _apis_Document__WEBPACK_IMPORTED_MODULE_2__.default.get(params.id, this.route + "s").then(function (response) {
          _this5.document = response.data.document;
          console.log(_this5.document);
          _this5.document.issue_date = _this5.document.issue_date.split(" ")[0];
          _this5.document.maturity_date = _this5.document.maturity_date.split(" ")[0];

          _this5.document.details.forEach(function (elem) {
            if (elem.expires_at) elem.expires_at = elem.expires_at.split(" ")[0];
          });

          if (_this5.document.payment_methods.length == 0) _this5.document.payment_methods = [{
            account_id: "",
            credit: 0,
            description: ""
          }, {
            account_id: "",
            credit: 0,
            description: ""
          }, {
            account_id: "",
            credit: 0,
            description: ""
          }];
          _this5.people = response.data.people;
          _this5.additional_expenses_from_accounts = response.data.accounts.accounts;
          console.log(response.data.accounts.accounts);
        });
      } else {
        alert(1212);

        if (status == "new") {
          alert(222);
          _apis_Person__WEBPACK_IMPORTED_MODULE_7__.default.get({}, this.route).then(function (response) {
            return _this5.people = response.data;
          });
          _apis_Account__WEBPACK_IMPORTED_MODULE_8__.default.cashAndBanks().then(function (response) {
            return _this5.additional_expenses_from_accounts = response.data.accounts;
          });
        } else {
          this.document = JSON.parse(JSON.stringify(this.new_document));
          this.$refs.form.reset();
        }
      }
    }
  },
  created: function created() {
    var _this6 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_this6.route == "invoice") {
                _this6.person_type = "customers";
                _this6.person_info = "?????????????? ????????????";
                _this6.persona = "????????????";
              } // if (route == "nibra")
              //   Person = (await import("../../../apis/Person")).default;


              if (_this6.$route.params.id) {
                _this6.is_new_document = false;
                _this6.title = "?????????? ???????????? ?????? " + _this6.$route.params.id;
                _apis_Document__WEBPACK_IMPORTED_MODULE_2__.default.get(_this6.$route.params.id, route + "s").then(function (response) {
                  _this6.document = response.data.document;
                  console.log(_this6.document);
                  _this6.document.issue_date = _this6.document.issue_date.split(" ")[0];
                  _this6.document.maturity_date = _this6.document.maturity_date.split(" ")[0];

                  _this6.document.document_details.forEach(function (elem) {
                    if (elem.expires_at) elem.expires_at = elem.expires_at.split(" ")[0];
                  });

                  if (_this6.document.payment_methods.length == 0) _this6.document.payment_methods = [{
                    account_id: "",
                    debit: 0,
                    description: ""
                  }, {
                    account_id: "",
                    debit: 0,
                    description: ""
                  }, {
                    account_id: "",
                    debit: 0,
                    description: ""
                  }];
                  _this6.people = response.data.people;
                  _this6.additional_expenses_from_accounts = response.data.accounts.accounts;
                  console.log(response.data.accounts.accounts);
                });
              } else {
                _apis_Person__WEBPACK_IMPORTED_MODULE_7__.default.get({}, _this6.person_type).then(function (response) {
                  return _this6.people = response.data;
                });
                _apis_Account__WEBPACK_IMPORTED_MODULE_8__.default.cashAndBanks().then(function (response) {
                  return _this6.additional_expenses_from_accounts = response.data.accounts;
                });
              } // if (route == "nibras")
              //   Person = (await import("../../../apis/Person")).default;
              // console.log(this.$route);
              //this.createPage(this.$route, "new");


            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
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

/***/ "./resources/js/apis/Document.js":
/*!***************************************!*\
  !*** ./resources/js/apis/Document.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  store: function store(document, route) {
    console.log("document", document);
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/" + route, document);
  },
  get: function get(id, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/" + route + "/" + id);
  },
  getAll: function getAll(params, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/" + route + "/all", {
      params: params
    });
  },
  update: function update(document, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.put("/" + route, document);
  },
  "delete": function _delete(params, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/" + route, {
      params: params
    });
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
  store: function store(supplier, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/" + route, supplier);
  },
  update: function update(supplier, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.put("/" + route, supplier);
  },
  postCreate: function postCreate(supplier, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/" + route + "/create", supplier);
  },
  getOne: function getOne(params, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/" + route + "/getOne", {
      params: params
    });
  },
  get: function get(params, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/" + route, {
      params: params
    });
  },
  getByProductID: function getByProductID(id, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/" + route + "/product/" + id);
  },
  search: function search(params, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/" + route + "/search", {
      params: params
    });
  },
  barcodeSearch: function barcodeSearch(params, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/router/" + params.barcode);
  },
  "delete": function _delete(params, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/" + route + "/", {
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
  documentBarcodeSearch: function documentBarcodeSearch(params, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/" + route + "/barcode/" + params.barcode);
  },
  invoiceBarcodeSearch: function invoiceBarcodeSearch(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/invoice/barcode/" + params.barcode + "/inventory_id/" + params.inventory_id);
  },
  stockTakeBarcodeSearch: function stockTakeBarcodeSearch(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/stocktake/barcode/" + params.barcode + "/inventory_id/" + params.inventory_id);
  },
  "delete": function _delete(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/products/", {
      params: params
    });
  }
});

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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/AddUpdatePerson.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/AddUpdatePerson.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/document.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/document.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-application--wrap > .container {\r\n  margin: 0;\n}\n.v-text-field.v-text-field--enclosed .v-text-field__details,\r\n.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)\r\n  > .v-input__control\r\n  > .v-input__slot {\r\n  padding: 0px;\n}\n.document-footer {\r\n  min-width: 0;\r\n  overflow: hidden;\n}\n.purchas-extra-expense :after,\r\n.purchas-extra-expense :before {\r\n  display: none;\n}\n.purchas-extra-expense .v-text-field__details {\r\n  display: none;\n}\n.text-red input {\r\n  color: red !important;\n}\n.document-info .v-text-field__prefix {\r\n  margin-right: 10px;\n}\r\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\n}\r\n\r\n/* Firefox */\ninput[type=\"number\"] {\r\n  -moz-appearance: textfield;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/AddUpdatePerson.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/AddUpdatePerson.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUpdatePerson.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/AddUpdatePerson.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/document.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/document.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_document_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./document.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/document.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_document_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_document_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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

/***/ "./resources/js/components/main/documents/AddUpdatePerson.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/main/documents/AddUpdatePerson.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddUpdatePerson_vue_vue_type_template_id_9bce4b52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddUpdatePerson.vue?vue&type=template&id=9bce4b52& */ "./resources/js/components/main/documents/AddUpdatePerson.vue?vue&type=template&id=9bce4b52&");
/* harmony import */ var _AddUpdatePerson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddUpdatePerson.vue?vue&type=script&lang=js& */ "./resources/js/components/main/documents/AddUpdatePerson.vue?vue&type=script&lang=js&");
/* harmony import */ var _AddUpdatePerson_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddUpdatePerson.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/main/documents/AddUpdatePerson.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _AddUpdatePerson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddUpdatePerson_vue_vue_type_template_id_9bce4b52___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddUpdatePerson_vue_vue_type_template_id_9bce4b52___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/documents/AddUpdatePerson.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/documents/payment-methods.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/main/documents/payment-methods.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _payment_methods_vue_vue_type_template_id_437a22ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-methods.vue?vue&type=template&id=437a22ba& */ "./resources/js/components/main/documents/payment-methods.vue?vue&type=template&id=437a22ba&");
/* harmony import */ var _payment_methods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-methods.vue?vue&type=script&lang=js& */ "./resources/js/components/main/documents/payment-methods.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _payment_methods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _payment_methods_vue_vue_type_template_id_437a22ba___WEBPACK_IMPORTED_MODULE_0__.render,
  _payment_methods_vue_vue_type_template_id_437a22ba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/documents/payment-methods.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/documents/document.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/main/documents/document.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _document_vue_vue_type_template_id_d36e570e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document.vue?vue&type=template&id=d36e570e& */ "./resources/js/components/main/documents/document.vue?vue&type=template&id=d36e570e&");
/* harmony import */ var _document_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document.vue?vue&type=script&lang=js& */ "./resources/js/components/main/documents/document.vue?vue&type=script&lang=js&");
/* harmony import */ var _document_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./document.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/main/documents/document.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _document_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _document_vue_vue_type_template_id_d36e570e___WEBPACK_IMPORTED_MODULE_0__.render,
  _document_vue_vue_type_template_id_d36e570e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/documents/document.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

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

/***/ "./resources/js/components/main/documents/AddUpdatePerson.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/main/documents/AddUpdatePerson.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUpdatePerson.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/AddUpdatePerson.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/documents/payment-methods.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/main/documents/payment-methods.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_methods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payment-methods.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/payment-methods.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_methods_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/documents/document.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/main/documents/document.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_document_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./document.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/document.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_document_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/components/main/documents/AddUpdatePerson.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/main/documents/AddUpdatePerson.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUpdatePerson.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/AddUpdatePerson.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/main/documents/document.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/main/documents/document.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_document_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./document.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/document.vue?vue&type=style&index=0&lang=css&");


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

/***/ "./resources/js/components/main/documents/AddUpdatePerson.vue?vue&type=template&id=9bce4b52&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/main/documents/AddUpdatePerson.vue?vue&type=template&id=9bce4b52& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_template_id_9bce4b52___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_template_id_9bce4b52___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdatePerson_vue_vue_type_template_id_9bce4b52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUpdatePerson.vue?vue&type=template&id=9bce4b52& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/AddUpdatePerson.vue?vue&type=template&id=9bce4b52&");


/***/ }),

/***/ "./resources/js/components/main/documents/payment-methods.vue?vue&type=template&id=437a22ba&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/main/documents/payment-methods.vue?vue&type=template&id=437a22ba& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_methods_vue_vue_type_template_id_437a22ba___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_methods_vue_vue_type_template_id_437a22ba___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_payment_methods_vue_vue_type_template_id_437a22ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./payment-methods.vue?vue&type=template&id=437a22ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/payment-methods.vue?vue&type=template&id=437a22ba&");


/***/ }),

/***/ "./resources/js/components/main/documents/document.vue?vue&type=template&id=d36e570e&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/main/documents/document.vue?vue&type=template&id=d36e570e& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_document_vue_vue_type_template_id_d36e570e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_document_vue_vue_type_template_id_d36e570e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_document_vue_vue_type_template_id_d36e570e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./document.vue?vue&type=template&id=d36e570e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/document.vue?vue&type=template&id=d36e570e&");


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
                                      height: "50"
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
                          label: "???????????? ??????"
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
                          label: "???????? ??????????????????"
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
                          label: "?????????? ??????????"
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
                          label: "???????????? ??????????????"
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
                          label: "???????? ?????????? ????????????"
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
                                        "\n                  ?????????? ????????????????\n                "
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
                                        "\n                  ?????? ??????????\n                "
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
                                        "\n                  ?????????????? ??????????\n                "
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
                                            "??\n                  "
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
                                        "\n                  ???? ?????????????? ????????????\n                "
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
                                        "\n                  ???? ?????????????? ????????????\n                "
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
                                        "\n                  ???????? ????????????\n                "
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
                [_vm._v("??????????")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/AddUpdatePerson.vue?vue&type=template&id=9bce4b52&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/AddUpdatePerson.vue?vue&type=template&id=9bce4b52& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
                        [_vm._v("\n            ??????????\n          ")]
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
                        [_vm._v("\n            ??????\n          ")]
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
                        { attrs: { cols: "12", lg: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: { label: "?????? ???????????? *", required: "" },
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
                            attrs: { label: "?????? ????????????*", required: "" },
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
                              prefix: "?????????? |",
                              autocomplete: "off"
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
                              prefix: "?????????????? |",
                              autocomplete: "off"
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
                              label: "??????????????",
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
                              label: "?????? ?????????????? ??????????????",
                              required: ""
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
                              label: "?????? ?????????????? ??????????????",
                              required: ""
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
                            attrs: { label: "???????????? ????????????????????", required: "" },
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
                            attrs: { label: "???????????? ????????????????????", required: "" },
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
                            attrs: { label: "?????????? ??????????????", required: "" },
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
                                        "\n                  ??????????\n                "
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
                                        "\n                  ??????\n                "
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/payment-methods.vue?vue&type=template&id=437a22ba&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/payment-methods.vue?vue&type=template&id=437a22ba& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
                    [_vm._v("\n        ?????????? ??????????!..\n      ")]
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
                                              "\n                    ?????? ?????????? ?????????? ?????????????? ??????????????\n                    "
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
                        key: "item.credit",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c("v-text-field", {
                              attrs: {
                                disabled: item.account_id == 0,
                                autocomplete: "off",
                                rules: _vm.vld_numbering,
                                "single-line": "",
                                outlined: ""
                              },
                              model: {
                                value: item.credit,
                                callback: function($$v) {
                                  _vm.$set(item, "credit", $$v)
                                },
                                expression: "item.credit"
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
                                      "\n                ??????????????\n              "
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
                                      "\n                ??????????????\n              "
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
                                      "\n                ????????????\n              "
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
                    [_vm._v("\n          ??????????\n        ")]
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
                    [_vm._v("\n          ??????\n        ")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/document.vue?vue&type=template&id=d36e570e&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/documents/document.vue?vue&type=template&id=d36e570e& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("v-form", { ref: "form" }, [
    _c(
      "div",
      [
        _c("add-update-person", {
          attrs: {
            dialog: _vm.add_update_person_dialog,
            person: _vm.passed_person,
            operation: _vm.operation,
            cities: _vm.cities
          },
          on: {
            addUpdatePerson: _vm.addPersonToList,
            changeCountry: _vm.loadCities
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
              _vm._v(" ?????????????? ??????????")
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
                  "v-row",
                  {
                    staticClass: "justify-space-between",
                    attrs: { justify: "center", align: "center" }
                  },
                  [
                    _c("v-col", { attrs: { cols: "12" } }, [
                      _vm._v(" " + _vm._s(_vm.title) + " ")
                    ])
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
                  "router-link",
                  {
                    staticClass: "btn btn-info m-b-5 m-r-2",
                    attrs: { to: "/document/1" }
                  },
                  [
                    _c("v-icon", { staticClass: "white--text" }, [
                      _vm._v("mdi-view-module")
                    ]),
                    _vm._v("?????????? ????????????????\n        ")
                  ],
                  1
                ),
                _vm._v(" "),
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
                                      staticClass: "document-info",
                                      attrs: {
                                        outlined: "",
                                        autocomplete: "off",
                                        prefix: " ?????? ???????????????? | ",
                                        rules: _vm.required.concat(_vm.isunique)
                                      },
                                      on: {
                                        blur: function($event) {
                                          return _vm.checkExicting()
                                        }
                                      },
                                      model: {
                                        value: _vm.document.reference,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.document,
                                            "reference",
                                            $$v
                                          )
                                        },
                                        expression: "document.reference"
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
                                        label: "??????????"
                                      },
                                      model: {
                                        value: _vm.document.description,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.document,
                                            "description",
                                            $$v
                                          )
                                        },
                                        expression: "document.description"
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
                                          { attrs: { cols: "10" } },
                                          [
                                            _c("v-autocomplete", {
                                              attrs: {
                                                items: _vm.people,
                                                "item-text": function(item) {
                                                  if (
                                                    this$1.route == "document"
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
                                                value: _vm.document.person_id,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.document,
                                                    "person_id",
                                                    $$v
                                                  )
                                                },
                                                expression: "document.person_id"
                                              }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
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
                                                on: { click: _vm.addPerson }
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
                                                            "?????????? ??????????????",
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
                                                            _vm.document
                                                              .issue_date,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.document,
                                                              "issue_date",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "document.issue_date"
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
                                            value: _vm.document.issue_date,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.document,
                                                "issue_date",
                                                $$v
                                              )
                                            },
                                            expression: "document.issue_date"
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
                                        label: "?????????? ?????? ",
                                        suffix: "??????"
                                      },
                                      on: { change: _vm.getMaturityDate },
                                      model: {
                                        value:
                                          _vm.document.payment_condition_id,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.document,
                                            "payment_condition_id",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "document.payment_condition_id"
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
                                                            "?????????? ??????????????????",
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
                                                            _vm.document
                                                              .maturity_date,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.document,
                                                              "maturity_date",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "document.maturity_date"
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
                                            value: _vm.document.maturity_date,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.document,
                                                "maturity_date",
                                                $$v
                                              )
                                            },
                                            expression: "document.maturity_date"
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
                                  { staticStyle: { background: "lightgray" } },
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
                                          [_vm._v(" ?????????? ")]
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
                                          [_vm._v(" ?????? ???????????? ")]
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
                                          [_vm._v(" ???????????? ")]
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
                                          [_vm._v(" ???????????? ???????????????????? ")]
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
                                                " "
                                            )
                                          ]
                                        ),
                                        _c(
                                          "v-col",
                                          { attrs: { cols: "12", lg: "6" } },
                                          [_vm._v(" ?????????? ?????????????? ")]
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
                                                    _vm.personInfo().tax_number
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
                              items: _vm.document.details,
                              "hide-default-footer": true,
                              "item-key": _vm.toString(
                                Math.floor(Math.random(1, 100) * 100)
                              )
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
                                        _c("v-toolbar-title", [
                                          _vm._v("?????????? ??????????????")
                                        ]),
                                        _vm._v(" "),
                                        _c("v-divider", {
                                          staticClass: "mx-4",
                                          attrs: { inset: "", vertical: "" }
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
                                                items: _vm.found_products,
                                                "item-text": "ar_name",
                                                "return-object": "",
                                                "search-input": _vm.name_search,
                                                flat: "",
                                                "hide-no-data": "",
                                                label: "?????? ??????????"
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
                                                change: _vm.addProductToDocument
                                              },
                                              model: {
                                                value: _vm.selected_product,
                                                callback: function($$v) {
                                                  _vm.selected_product = $$v
                                                },
                                                expression: "selected_product"
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
                                                autocomplete: "off",
                                                label: "????????????????",
                                                rules: _vm.is_exists
                                              },
                                              on: {
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
                                                  return _vm.searchAndAddToDocument.apply(
                                                    null,
                                                    arguments
                                                  )
                                                }
                                              },
                                              model: {
                                                value: _vm.searched_barcode,
                                                callback: function($$v) {
                                                  _vm.searched_barcode = $$v
                                                },
                                                expression: "searched_barcode"
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
                              },
                              {
                                key: "item.ar_name",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _c("div", [_vm._v(_vm._s(item.ar_name))]),
                                    _vm._v(" "),
                                    _c(
                                      "a",
                                      {
                                        on: {
                                          click: function($event) {
                                            return _vm.show_product_dialog(item)
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
                                          disabled: !item.has_expiration_date,
                                          "close-on-content-click": false,
                                          transition: "scale-transition",
                                          "offset-y": ""
                                        },
                                        on: {
                                          change: function($event) {
                                            return _vm.logo(item)
                                          }
                                        },
                                        scopedSlots: _vm._u(
                                          [
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
                                                            disabled: !item.has_expiration_date,
                                                            flat: "",
                                                            outlined: "",
                                                            autocomplete: "off",
                                                            "hide-no-data": "",
                                                            "hide-details": ""
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
                                                              item.expires_at_is_down = false
                                                            },
                                                            change: function(
                                                              $event
                                                            ) {
                                                              return _vm.logo(
                                                                item
                                                              )
                                                            }
                                                          },
                                                          model: {
                                                            value:
                                                              item.expires_at,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                item,
                                                                "expires_at",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "item.expires_at"
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
                                          expression: "item.expires_at_is_down"
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
                                              return _vm.logo(item)
                                            }
                                          },
                                          model: {
                                            value: item.expires_at,
                                            callback: function($$v) {
                                              _vm.$set(item, "expires_at", $$v)
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
                                key: "item.sold_price",
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
                                        value: item.sold_price,
                                        callback: function($$v) {
                                          _vm.$set(item, "sold_price", $$v)
                                        },
                                        expression: "item.sold_price"
                                      }
                                    })
                                  ]
                                }
                              },
                              {
                                key: "item.bought_tax",
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
                                        value: item.bought_tax,
                                        callback: function($$v) {
                                          _vm.$set(item, "bought_tax", $$v)
                                        },
                                        expression: "item.bought_tax"
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
                                        value: _vm.tax_value(item).toFixed(2)
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
                                              on: {
                                                change: function($event) {
                                                  return _vm.llll(item)
                                                }
                                              },
                                              model: {
                                                value: item.discount_type_id,
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
                                          return _vm.product_unit_change(item)
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
                                        "hide-details": "",
                                        autocomplete: "off",
                                        "single-line": "",
                                        outlined: ""
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
                                        value: _vm.quantity_in_minor_unit(item)
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
                                      { attrs: { flat: "", color: "white" } },
                                      [
                                        _c("v-toolbar-title", [
                                          _vm._v("????????????????")
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
                                      { staticClass: "document-footer" },
                                      [
                                        _c(
                                          "v-row",
                                          [
                                            _c(
                                              "v-col",
                                              {
                                                attrs: { cols: "12", lg: "6" }
                                              },
                                              [
                                                _c(
                                                  "v-row",
                                                  {
                                                    attrs: { justify: "start" }
                                                  },
                                                  [
                                                    _c(
                                                      "v-col",
                                                      {
                                                        staticStyle: {
                                                          "text-align": "end",
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
                                                          "\n                          ???????????????? ?????? ??????????????:\n                        "
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-col",
                                                      {
                                                        staticStyle: {
                                                          "text-align": "start",
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
                                                                .total_without_products_vat()
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
                                                    attrs: { justify: "start" }
                                                  },
                                                  [
                                                    _c(
                                                      "v-col",
                                                      {
                                                        staticStyle: {
                                                          "text-align": "end",
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
                                                          "\n                          ???????? ??????????????:\n                        "
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-col",
                                                      {
                                                        staticStyle: {
                                                          "text-align": "start",
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
                                                                .total_vat()
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
                                                    attrs: { justify: "start" }
                                                  },
                                                  [
                                                    _c(
                                                      "v-col",
                                                      {
                                                        staticStyle: {
                                                          "text-align": "end",
                                                          color: "red"
                                                        },
                                                        attrs: {
                                                          cols: "12",
                                                          lg: "5"
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
                                                              "???????????? ????????????:"
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
                                                          "text-align": "start"
                                                        },
                                                        attrs: {
                                                          cols: "12",
                                                          lg: "5"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          [
                                                            _c("v-text-field", {
                                                              attrs: {
                                                                flat: "",
                                                                outlined: "",
                                                                "no-data": "",
                                                                "no-data-text":
                                                                  "",
                                                                "non-linear": ""
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.document
                                                                    .additional_expenses,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.document,
                                                                    "additional_expenses",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "document.additional_expenses"
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-row",
                                                  {
                                                    attrs: { justify: "start" }
                                                  },
                                                  [
                                                    _c(
                                                      "v-col",
                                                      {
                                                        staticStyle: {
                                                          "text-align": "end",
                                                          "border-bottom":
                                                            "1px solid lightgray",
                                                          color: "red"
                                                        },
                                                        attrs: {
                                                          cols: "12",
                                                          lg: "5"
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
                                                          [_vm._v("???? ????????:")]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-col",
                                                      {
                                                        staticStyle: {
                                                          "text-align": "start",
                                                          "border-bottom":
                                                            "1px solid lightgray"
                                                        },
                                                        attrs: {
                                                          cols: "12",
                                                          lg: "5"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          [
                                                            _c(
                                                              "v-autocomplete",
                                                              {
                                                                attrs: {
                                                                  flat: "",
                                                                  outlined: "",
                                                                  "no-data": "",
                                                                  "no-data-text":
                                                                    "",
                                                                  "non-linear":
                                                                    "",
                                                                  items:
                                                                    _vm.additional_expenses_from_accounts,
                                                                  "item-text":
                                                                    "ar_name",
                                                                  "item-value":
                                                                    "id"
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.document
                                                                      .additional_expenses_from_account_id,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.document,
                                                                      "additional_expenses_from_account_id",
                                                                      $$v
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "\n                                document.additional_expenses_from_account_id\n                              "
                                                                }
                                                              }
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-row",
                                                  {
                                                    attrs: { justify: "start" }
                                                  },
                                                  [
                                                    _c(
                                                      "v-col",
                                                      {
                                                        staticStyle: {
                                                          "text-align": "end",
                                                          "font-size": "1.5rem"
                                                        },
                                                        attrs: {
                                                          cols: "12",
                                                          lg: "5"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                          ??????????????:\n                        "
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-col",
                                                      {
                                                        staticStyle: {
                                                          "text-align": "start",
                                                          "font-size": "1.5rem"
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
                                                attrs: { cols: "12", lg: "5" }
                                              },
                                              [
                                                _c(
                                                  "v-row",
                                                  {
                                                    attrs: { justify: "start" }
                                                  },
                                                  [
                                                    _c(
                                                      "v-col",
                                                      {
                                                        staticStyle: {
                                                          "text-align": "end",
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
                                                          [_vm._v("??????????????:")]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-col",
                                                      {
                                                        staticStyle: {
                                                          "text-align": "start",
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
                                                            _c("v-text-field", {
                                                              attrs: {
                                                                outlined: "",
                                                                flat: "",
                                                                "no-data": "",
                                                                "no-data-text":
                                                                  "",
                                                                "non-linear": ""
                                                              },
                                                              on: {
                                                                change: function(
                                                                  $event
                                                                ) {
                                                                  _vm.document
                                                                    .only_cash ==
                                                                    true
                                                                }
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.document
                                                                    .paid_amount,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.document,
                                                                    "paid_amount",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "document.paid_amount"
                                                              }
                                                            })
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
                                                        _c("payment-method", {
                                                          attrs: {
                                                            total:
                                                              _vm.document
                                                                .total_amount,
                                                            accounts:
                                                              _vm.additional_expenses_from_accounts,
                                                            payment_methods:
                                                              _vm.document
                                                                .payment_methods
                                                          },
                                                          on: {
                                                            payment_methods:
                                                              _vm.paymentMethods
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
                                                  "v-row",
                                                  {
                                                    attrs: { justify: "start" }
                                                  },
                                                  [
                                                    _c(
                                                      "v-col",
                                                      {
                                                        staticStyle: {
                                                          "text-align": "end",
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
                                                          [_vm._v("???????????? :")]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-col",
                                                      {
                                                        staticStyle: {
                                                          "text-align": "start",
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
                                                            _c("v-text-field", {
                                                              staticClass:
                                                                "purchas-extra-expense text-red",
                                                              attrs: {
                                                                flat: "",
                                                                disabled: "",
                                                                "no-data": "",
                                                                "no-data-text":
                                                                  "",
                                                                "non-linear":
                                                                  "",
                                                                value: _vm
                                                                  .remaining_amount()
                                                                  .toFixed(2)
                                                              }
                                                            })
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
                                                              elevation: "0",
                                                              dark: ""
                                                            },
                                                            on: {
                                                              click:
                                                                _vm.payAllCash
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                            ?????? ???????? ????????!\n                          "
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
                            ])
                          },
                          [
                            _c("template", { slot: "no-data" }, [
                              _vm._v(" ???????? ???????????? ?????????????? ")
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
                    _vm._v("?????? ???????????? ?????? ????????\n        ")
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);