(self["webpackChunkvue_electron"] = self["webpackChunkvue_electron"] || []).push([["src_components_main_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/components/DrawerItems.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/components/DrawerItems.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_3__);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      which_expand: {},
      main_menu: [{
        name: "المشتريات",
        icon: "mdi-shopping",
        sub_menu: [{
          name: "الموردون",
          link: "/suppliers",
          icon: "mdi-account-supervisor"
        }, {
          name: "استيراد فواتير",
          link: "/import_purchases",
          icon: "mdi-account-supervisor"
        }, {
          name: "فاتورة مشتريات",
          link: "/purchase",
          icon: "mdi-receipt"
        }, {
          name: "مرتجع مشتريات",
          link: "/purchase_return",
          icon: "mdi-file-replace-outline"
        }, {
          name: "فواتير المشتريات والمرتجع",
          link: "/purchases",
          icon: "mdi-file-multiple-outline"
        }, // {
        //   name: "أوامر الشراء",
        //   link: "/orders",
        //   icon: "",
        // },
        {
          name: "سندات الموردين",
          link: "/receipts/supplier",
          icon: "mdi-file-document-multiple-outline"
        }]
      }, {
        name: "المبيعات",
        icon: "mdi-cart",
        sub_menu: [{
          name: "العملاء",
          link: "/customers",
          icon: "mdi-account-multiple-outline"
        }, {
          name: "فاتورة مبيعات",
          link: "/invoice",
          icon: "mdi-text-box"
        }, {
          name: "مرتجع مشتريات",
          link: "/purchase_return",
          icon: "mdi-file-replace-outline"
        }, {
          name: "فواتير المبيعات والمرتجع",
          link: "/invoices",
          icon: "mdi-file-refresh"
        }, {
          name: "سندات العملاء",
          link: "/receipts/customer",
          icon: "mdi-text-box-multiple-outline"
        }]
      }, {
        name: "الأصناف والخدمات",
        icon: "mdi-food",
        sub_menu: [{
          name: "الوحدات",
          link: "/units",
          icon: "mdi-unity"
        }, // {
        //   name: " الأنواع",
        //   link: "/types",
        //   icon: "",
        // },
        {
          name: "المجموعات",
          link: "/groups",
          icon: "mdi-group"
        }, {
          name: "إضافة صنف",
          link: "/product",
          icon: "mdi-expand-all-outline"
        }, {
          name: "إدارة الأصناف",
          link: "/products",
          icon: "mdi-manjaro"
        }, {
          name: "الجرد المخزني",
          link: "/stocktakes",
          icon: "mdi-store"
        }]
      }, {
        name: "الرواتب والموظفين",
        icon: "mdi-cash-multiple",
        sub_menu: [{
          name: "قائمة الموظفين",
          link: "/employees",
          icon: "mdi-account-group"
        }, // {
        //   name: " الأنواع",
        //   link: "/types",
        //   icon: "",
        // },
        {
          name: "مسير الرواتب",
          link: "/forms",
          icon: "mdi-table-account"
        }, {
          name: "السلف",
          link: "/product",
          icon: "mdi-cash-fast"
        }, {
          name: "المكافآت",
          link: "/products",
          icon: "mdi-gift"
        }, {
          name: "الخصومات",
          link: "/stocktakes",
          icon: "mdi-emoticon-sad-outline"
        }]
      }, {
        name: "المحاسبة",
        icon: "mdi-cash-register",
        sub_menu: [{
          name: "قيود حركة الأموال",
          link: "/money_transactions",
          icon: "mdi-cash-refund"
        }, {
          name: "حركة أموال",
          link: "/money_move",
          icon: "mdi-cash-fast"
        }, {
          name: "إضافة رأس مال",
          link: "/additional_money",
          icon: "mdi-city"
        }, {
          name: "إهلاك أصل ثابت",
          link: "/fixed_asset_depreciation",
          icon: "mdi-cassette"
        }, {
          name: "سحب المالك",
          link: "/owner_withdraw",
          icon: "mdi-tie"
        }, {
          name: "توزيع أرباح",
          link: "/distribute_profits",
          icon: "mdi-memory"
        }, {
          name: "الدليل المحاسبي",
          link: "/accounts",
          icon: "mdi-folder-open"
        }]
      }, {
        name: "الأرصدة الافتتاحية",
        icon: "mdi-source-fork",
        navigateable: true,
        sub_menu: [{
          name: " إدخال أرصدة حسابات",
          link: "/opening_balances/accounts",
          icon: ""
        }, {
          name: "إدخال أرصدة منتجات",
          link: "/opening_balances/products",
          icon: ""
        }, {
          name: "إدخال أرصدة عملاء",
          link: "/opening_balances/customers",
          icon: ""
        }, {
          name: "إدخال أرصدة موردين",
          link: "/opening_balances/suppliers",
          icon: ""
        }]
      }],
      under_menu: [{
        name: "الاعدادات",
        icon: "mdi-shopping",
        sub_menu: [{
          name: "إعدادت عامة",
          link: "/general_settings",
          icon: ""
        }, {
          name: " المستخدمون ",
          link: "/users",
          icon: ""
        }, {
          name: " إعادة ضبط",
          link: "/migrate",
          icon: ""
        }]
      }, {
        name: "المساعدة",
        icon: "mdi-shopping",
        sub_menu: [{
          name: "عن النظام",
          link: "/about",
          icon: ""
        }]
      }],
      admins: []
    };
  },
  created: function created() {
    var _this = this;

    this.main_menu.forEach(function (element) {
      _this.which_expand[element.name] = false;

      for (var index = 0; index < element.sub_menu.length; index++) {
        if (element.sub_menu[index].link == _this.$route.fullPath) {
          _this.which_expand[element.name] = true;
          break;
        }
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/dashboard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/dashboard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/Product */ "./src/apis/Product.js");
/* harmony import */ var _apis_Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apis/Dashboard */ "./src/apis/Dashboard.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      file_name: "اضغط هنا لاختيار ملف إكسل",

      /*------------------------------*/
      value: 0,
      query: false,
      show: true,
      interval: 0,

      /*------------------------------*/
      purchases: 0,
      invoices: 0,
      purchase_returns: 0,
      invoice_returns: 0,
      products: 0,
      suppliers: 0,
      customers: 0
    };
  },
  computed: {},
  watch: {},
  created: function created() {
    var _this = this;

    this.query = true;
    this.show = true;
    _apis_Dashboard__WEBPACK_IMPORTED_MODULE_2__["default"].index().then(function (response) {
      _this.query = false;
      _this.show = false;
      _this.purchases = response.data.purchases;
      _this.invoices = response.data.invoices;
      _this.purchase_returns = response.data.purchase_returns;
      _this.invoice_returns = response.data.invoice_returns;
      _this.products = response.data.products;
      _this.suppliers = response.data.suppliers;
      _this.customers = response.data.customers;
    });
  },
  methods: {
    submit: function submit() {
      var products = new FormData(this.$refs.form);
      var form = new FormData(document.getElementById("ProductsForm"));
      console.log(form);
      _apis_Product__WEBPACK_IMPORTED_MODULE_1__["default"].upload(products).then(function (response) {
        return console.log(response);
      }); //this.$refs.form.$el.submit();
    },
    productsUpload: function productsUpload(event) {
      var _files$;

      var files = event.target.files;
      var filename = (_files$ = files[0]) === null || _files$ === void 0 ? void 0 : _files$.name;

      if ((filename === null || filename === void 0 ? void 0 : filename.lastIndexOf(".")) <= 0) {
        return alert("add a valid file");
      }

      this.file_name = filename;
      console.log(filename); //alert("productsUpload");
      //Product.import().then((response) => console.log(response));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/User */ "./src/apis/User.js");
/* harmony import */ var _components_DrawerItems_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/DrawerItems.vue */ "./src/components/main/components/DrawerItems.vue");
/* harmony import */ var _dashboard_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.vue */ "./src/components/main/dashboard.vue");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    source: String
  },
  components: {
    DrawerItems: _components_DrawerItems_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Dashboard: _dashboard_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      onLine: null,
      items: [{
        title: "تعديل الملف الشخصي",
        link: "/"
      }, {
        title: "تسجيل الخروج",
        link: "logout"
      }],
      drawer: true,
      currentUser: "",
      home: true
    };
  },
  watch: {
    $route: function $route(to, from) {
      this.home = true;
      if (this.$route.fullPath != "/") this.home = false;
    }
  },
  methods: {
    status: function status(ele) {
      console.log(ele);
      console.log('ele');
      this.onLine = ele;
    },
    event: function event(ele) {
      console.log(ele);
    },
    newInvoice: function newInvoice() {
      if (this.$route.name != "invoice") this.$router.push("/invoice");
    },
    newPurchase: function newPurchase() {
      if (this.$route.name != "purchase") this.$router.push("/purchase");
    },
    onclick: function onclick(item) {
      if (item == "تسجيل الخروج") this.logout();
    },
    getUser: function getUser() {
      return _apis_User__WEBPACK_IMPORTED_MODULE_1__["default"].getUser();
    },
    logout: function logout() {
      var _this = this;

      _apis_User__WEBPACK_IMPORTED_MODULE_1__["default"].getUser().then(function () {
        localStorage.removeItem("token");

        _this.$router.push("login"); //this.currentUser = response.data;

      })["catch"](function (errors) {
        _this.errors = errors.response.data.errors;
      });
    }
  },
  created: function created() {
    if (this.$route.fullPath != "/") this.home = false;

    if (localStorage.getItem("token")) {
      this.$store.state.user = JSON.parse(localStorage.getItem("user"));
      return;
    }

    this.$router.push("login");
  }
});

/***/ }),

/***/ "./src/apis/Dashboard.js":
/*!*******************************!*\
  !*** ./src/apis/Dashboard.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./src/apis/Api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  index: function index() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/dashboard");
  }
});

/***/ }),

/***/ "./src/apis/Product.js":
/*!*****************************!*\
  !*** ./src/apis/Product.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Api */ "./src/apis/Api.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  upload: function upload(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_1__["default"].post("/excel/import/products", params);
  },
  isExist: function isExist(product) {
    return _Api__WEBPACK_IMPORTED_MODULE_1__["default"].get("/extra/product/exists/" + product.type + "/" + product.what_to_search);
  },
  create: function create() {
    return _Api__WEBPACK_IMPORTED_MODULE_1__["default"].get("/products/create");
  },
  store: function store(product) {
    return _Api__WEBPACK_IMPORTED_MODULE_1__["default"].post("/products", product);
  },
  update: function update(product) {
    return _Api__WEBPACK_IMPORTED_MODULE_1__["default"].put("/products", product);
  },
  postCreate: function postCreate(product) {
    return _Api__WEBPACK_IMPORTED_MODULE_1__["default"].post("/products/create", product);
  },
  get: function get(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_1__["default"].get("/products", {
      params: params
    });
  },
  search: function search(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_1__["default"].get("/products/search", {
      params: params
    });
  },
  billBarcodeSearch: function billBarcodeSearch(params, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_1__["default"].get("/extra/" + route + "/barcode/" + params.barcode);
  },
  billNameSearch: function billNameSearch(params, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_1__["default"].get("/extra/" + route + "/name/" + params.name);
  },
  invoiceBarcodeSearch: function invoiceBarcodeSearch(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_1__["default"].get("/extra/invoice/barcode/" + params.barcode + "/inventory_id/" + params.inventory_id);
  },
  stockTakeBarcodeSearch: function stockTakeBarcodeSearch(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_1__["default"].get("/extra/stocktake/barcode/" + params.barcode + "/inventory_id/" + params.inventory_id);
  },
  storeOpeningBalance: function storeOpeningBalance(balance) {
    return _Api__WEBPACK_IMPORTED_MODULE_1__["default"].post("/products/opening_balance", balance);
  },
  "delete": function _delete(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"]("/products", {
      params: params
    });
  }
});

/***/ }),

/***/ "./src/apis/User.js":
/*!**************************!*\
  !*** ./src/apis/User.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./src/apis/Api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  register: function register(form) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].post('/register', form);
  },
  login: function login(form) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].post('/login', form);
  },
  getUser: function getUser() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/user');
  },
  logout: function logout() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].post('/logout');
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es-x/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/create-html.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");

var quot = /"/g;
var replace = uncurryThis(''.replace);

// `CreateHTML` abstract operation
// https://tc39.es/ecma262/#sec-createhtml
module.exports = function (string, tag, attribute, value) {
  var S = toString(requireObjectCoercible(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + replace(toString(value), quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-html-forced.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/string-html-forced.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// check the existence of a method, lowercase
// of a tag and escaping quotes in arguments
module.exports = function (METHOD_NAME) {
  return fails(function () {
    var test = ''[METHOD_NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var FUNCTION_NAME_EXISTS = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").EXISTS);
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);

var FunctionPrototype = Function.prototype;
var functionToString = uncurryThis(FunctionPrototype.toString);
var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
var regExpExec = uncurryThis(nameRE.exec);
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !FUNCTION_NAME_EXISTS) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return regExpExec(nameRE, functionToString(this))[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.link.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.link.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createHTML = __webpack_require__(/*! ../internals/create-html */ "./node_modules/core-js/internals/create-html.js");
var forcedStringHTMLMethod = __webpack_require__(/*! ../internals/string-html-forced */ "./node_modules/core-js/internals/string-html-forced.js");

// `String.prototype.link` method
// https://tc39.es/ecma262/#sec-string.prototype.link
$({ target: 'String', proto: true, forced: forcedStringHTMLMethod('link') }, {
  link: function link(url) {
    return createHTML(this, 'a', 'href', url);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "./node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/dashboard.vue?vue&type=style&index=0&id=a2493664&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/dashboard.vue?vue&type=style&index=0&id=a2493664&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-application .mb-2[data-v-a2493664] {\r\n  margin-top: 12px !important;\r\n  align-self: flex-;\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/index.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/index.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.hand-point {\r\n  cursor: pointer;\n}\n.v-list-item:after {\r\n  content: none !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/dashboard.vue?vue&type=style&index=0&id=a2493664&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/dashboard.vue?vue&type=style&index=0&id=a2493664&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_a2493664_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=style&index=0&id=a2493664&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/dashboard.vue?vue&type=style&index=0&id=a2493664&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_a2493664_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_a2493664_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/index.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/index.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/index.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/main/components/DrawerItems.vue":
/*!********************************************************!*\
  !*** ./src/components/main/components/DrawerItems.vue ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DrawerItems_vue_vue_type_template_id_1b6f1e28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DrawerItems.vue?vue&type=template&id=1b6f1e28& */ "./src/components/main/components/DrawerItems.vue?vue&type=template&id=1b6f1e28&");
/* harmony import */ var _DrawerItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DrawerItems.vue?vue&type=script&lang=js& */ "./src/components/main/components/DrawerItems.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DrawerItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DrawerItems_vue_vue_type_template_id_1b6f1e28___WEBPACK_IMPORTED_MODULE_0__.render,
  _DrawerItems_vue_vue_type_template_id_1b6f1e28___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/main/components/DrawerItems.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/main/dashboard.vue":
/*!*******************************************!*\
  !*** ./src/components/main/dashboard.vue ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_vue_vue_type_template_id_a2493664_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=a2493664&scoped=true& */ "./src/components/main/dashboard.vue?vue&type=template&id=a2493664&scoped=true&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./src/components/main/dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _dashboard_vue_vue_type_style_index_0_id_a2493664_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.vue?vue&type=style&index=0&id=a2493664&scoped=true&lang=css& */ "./src/components/main/dashboard.vue?vue&type=style&index=0&id=a2493664&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_vue_vue_type_template_id_a2493664_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _dashboard_vue_vue_type_template_id_a2493664_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a2493664",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/main/dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/main/index.vue":
/*!***************************************!*\
  !*** ./src/components/main/index.vue ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4774750c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4774750c& */ "./src/components/main/index.vue?vue&type=template&id=4774750c&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/components/main/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ "./src/components/main/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4774750c___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_4774750c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/main/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/main/components/DrawerItems.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/components/main/components/DrawerItems.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DrawerItems.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/components/DrawerItems.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/main/dashboard.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/components/main/dashboard.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/main/index.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/components/main/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/main/dashboard.vue?vue&type=style&index=0&id=a2493664&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./src/components/main/dashboard.vue?vue&type=style&index=0&id=a2493664&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_a2493664_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=style&index=0&id=a2493664&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/dashboard.vue?vue&type=style&index=0&id=a2493664&scoped=true&lang=css&");


/***/ }),

/***/ "./src/components/main/index.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************!*\
  !*** ./src/components/main/index.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/index.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./src/components/main/components/DrawerItems.vue?vue&type=template&id=1b6f1e28&":
/*!***************************************************************************************!*\
  !*** ./src/components/main/components/DrawerItems.vue?vue&type=template&id=1b6f1e28& ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerItems_vue_vue_type_template_id_1b6f1e28___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerItems_vue_vue_type_template_id_1b6f1e28___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DrawerItems_vue_vue_type_template_id_1b6f1e28___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DrawerItems.vue?vue&type=template&id=1b6f1e28& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/components/DrawerItems.vue?vue&type=template&id=1b6f1e28&");


/***/ }),

/***/ "./src/components/main/dashboard.vue?vue&type=template&id=a2493664&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./src/components/main/dashboard.vue?vue&type=template&id=a2493664&scoped=true& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_a2493664_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_a2493664_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_a2493664_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=template&id=a2493664&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/dashboard.vue?vue&type=template&id=a2493664&scoped=true&");


/***/ }),

/***/ "./src/components/main/index.vue?vue&type=template&id=4774750c&":
/*!**********************************************************************!*\
  !*** ./src/components/main/index.vue?vue&type=template&id=4774750c& ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4774750c___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4774750c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4774750c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=4774750c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/index.vue?vue&type=template&id=4774750c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/components/DrawerItems.vue?vue&type=template&id=1b6f1e28&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/components/DrawerItems.vue?vue&type=template&id=1b6f1e28& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-list",
    { attrs: { dark: "" } },
    [
      _c(
        "v-list-item",
        {
          staticClass: "text-right align-self-start",
          attrs: { color: "black--text", to: "/" },
        },
        [
          _c(
            "v-list-item-icon",
            [_c("v-icon", [_vm._v("mdi-view-dashboard")])],
            1
          ),
          _vm._v(" "),
          _c("v-list-item-title", [_vm._v("لوحة التحكم")]),
        ],
        1
      ),
      _vm._v(" "),
      _vm._l(_vm.main_menu, function (main_item) {
        return _c(
          "v-list-group",
          {
            key: main_item.name,
            attrs: {
              value: _vm.which_expand[main_item.name],
              "prepend-icon": main_item.icon,
            },
            scopedSlots: _vm._u(
              [
                {
                  key: "activator",
                  fn: function () {
                    return [
                      _c(
                        "v-list-item-title",
                        [
                          main_item.navigateable
                            ? _c(
                                "router-link",
                                {
                                  staticStyle: { color: "white" },
                                  attrs: { to: "/opening_balances" },
                                },
                                [
                                  _vm._v(
                                    "\n          " +
                                      _vm._s(main_item.name) +
                                      "\n        "
                                  ),
                                ]
                              )
                            : _c("div", [
                                _vm._v(
                                  "\n          " +
                                    _vm._s(main_item.name) +
                                    "\n        "
                                ),
                              ]),
                        ],
                        1
                      ),
                    ]
                  },
                  proxy: true,
                },
              ],
              null,
              true
            ),
          },
          [
            _vm._v(" "),
            _vm._l(main_item.sub_menu, function (sub_item) {
              return _c(
                "v-list-item",
                {
                  key: sub_item.name,
                  attrs: { to: sub_item.link, link: "", exact: "" },
                },
                [
                  _c(
                    "v-list-item-icon",
                    [
                      _c("v-icon", [
                        _vm._v(
                          _vm._s(
                            sub_item.icon != ""
                              ? sub_item.icon
                              : "mdi-view-dashboard"
                          )
                        ),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-item-title", {
                    domProps: { textContent: _vm._s(sub_item.name) },
                  }),
                ],
                1
              )
            }),
          ],
          2
        )
      }),
      _vm._v(" "),
      _c(
        "v-list-item",
        {
          staticClass: "text-right align-self-start",
          attrs: { color: "black--text", to: "/reports" },
        },
        [
          _c(
            "v-list-item-icon",
            [_c("v-icon", [_vm._v("mdi-view-dashboard")])],
            1
          ),
          _vm._v(" "),
          _c("v-list-item-title", [_vm._v("التقارير")]),
        ],
        1
      ),
      _vm._v(" "),
      _vm._l(_vm.under_menu, function (main_item) {
        return _c(
          "v-list-group",
          {
            key: main_item.name,
            attrs: { "prepend-icon": main_item.icon },
            scopedSlots: _vm._u(
              [
                {
                  key: "activator",
                  fn: function () {
                    return [
                      _c("v-list-item-title", [
                        _vm._v(_vm._s(main_item.name) + " "),
                      ]),
                    ]
                  },
                  proxy: true,
                },
              ],
              null,
              true
            ),
          },
          [
            _vm._v(" "),
            _vm._l(main_item.sub_menu, function (sub_item) {
              return _c(
                "v-list-item",
                {
                  key: sub_item.name,
                  attrs: { to: sub_item.link, link: "", exact: "" },
                },
                [
                  _c(
                    "v-list-item-icon",
                    [
                      _c("v-icon", [
                        _vm._v(
                          _vm._s(
                            sub_item.icon != ""
                              ? sub_item.icon
                              : "mdi-view-dashboard"
                          )
                        ),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-item-title", {
                    domProps: { textContent: _vm._s(sub_item.name) },
                  }),
                ],
                1
              )
            }),
          ],
          2
        )
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/dashboard.vue?vue&type=template&id=a2493664&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/dashboard.vue?vue&type=template&id=a2493664&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "div",
        [
          _c(
            "v-col",
            { staticStyle: { height: "5px" } },
            [
              _c("v-progress-linear", {
                attrs: {
                  active: _vm.show,
                  indeterminate: _vm.query,
                  query: true,
                },
                model: {
                  value: _vm.value,
                  callback: function ($$v) {
                    _vm.value = $$v
                  },
                  expression: "value",
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "panel pa-10" },
        [
          _c("v-row", {
            staticClass: "pink--text",
            attrs: { justify: "center" },
          }),
          _vm._v(" "),
          _c("img", {
            staticClass: "ma-3",
            attrs: { src: "/logo.png", alt: "", width: "100", height: "128" },
          }),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "mb-3 pa-0", attrs: { justify: "center" } },
            [_vm._v(" نبراس للأنظمة المحاسبية")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-2 nopadding" },
              [
                _c(
                  "div",
                  { staticClass: "small-box bg-green whitecolor" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "small-box-footer",
                        attrs: { to: "/customers" },
                      },
                      [
                        _c("div", { staticClass: "inner" }, [
                          _c("h4", [
                            _c("span", { staticClass: "count-number" }, [
                              _vm._v(_vm._s(_vm.customers)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("عدد العملاء")]),
                        ]),
                        _vm._v(" "),
                        _c("p"),
                        _vm._v("\n            إدارة العملاء"),
                      ]
                    ),
                  ],
                  1
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-2 nopadding" },
              [
                _c(
                  "div",
                  { staticClass: "small-box bg-pase whitecolor" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "small-box-footer",
                        attrs: { to: "/products" },
                      },
                      [
                        _c("div", { staticClass: "inner" }, [
                          _c("h4", [
                            _c("span", { staticClass: "count-number" }, [
                              _vm._v(_vm._s(_vm.products)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("عدد الأصناف")]),
                        ]),
                        _vm._v(" "),
                        _c("p"),
                        _vm._v("\n            إدارة الأصناف"),
                      ]
                    ),
                  ],
                  1
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-2 nopadding" },
              [
                _c(
                  "div",
                  { staticClass: "small-box bg-bringal whitecolor" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "small-box-footer",
                        attrs: { to: "/suppliers" },
                      },
                      [
                        _c("div", { staticClass: "inner" }, [
                          _c("h4", [
                            _c("span", { staticClass: "count-number" }, [
                              _vm._v(_vm._s(_vm.suppliers)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("عدد الموردين")]),
                        ]),
                        _vm._v(" "),
                        _c("p"),
                        _vm._v("\n            إدارة الموردين"),
                      ]
                    ),
                  ],
                  1
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-2 nopadding" },
              [
                _c(
                  "div",
                  { staticClass: "small-box bg-darkgreen whitecolor" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "small-box-footer",
                        attrs: { to: "/purchases" },
                      },
                      [
                        _c("div", { staticClass: "inner" }, [
                          _c("h4", [
                            _c("span", { staticClass: "count-number" }, [
                              _vm._v(_vm._s(_vm.purchases)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("عدد فواتير المشتريات")]),
                        ]),
                        _vm._v(" "),
                        _c("p"),
                        _vm._v("\n            إدارة المشتريات"),
                      ]
                    ),
                  ],
                  1
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-2 nopadding" },
              [
                _c(
                  "div",
                  { staticClass: "small-box bg-pink whitecolor" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "small-box-footer",
                        attrs: { to: "/purchases" },
                      },
                      [
                        _c("div", { staticClass: "inner" }, [
                          _c("h4", [
                            _c("span", { staticClass: "count-number" }, [
                              _vm._v(_vm._s(_vm.purchase_returns)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("عدد مرتجعات المشتريات")]),
                        ]),
                        _vm._v(" "),
                        _c("p"),
                        _vm._v("\n            إدارة المرتجعات"),
                      ]
                    ),
                  ],
                  1
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-2 nopadding" },
              [
                _c(
                  "div",
                  { staticClass: "small-box bg-lightgreen whitecolor" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "small-box-footer",
                        attrs: { to: "/invoices" },
                      },
                      [
                        _c("div", { staticClass: "inner" }, [
                          _c("h4", [
                            _c("span", { staticClass: "count-number" }, [
                              _vm._v(_vm._s(_vm.invoice_returns)),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("عدد مرتجعات المبيعات")]),
                        ]),
                        _vm._v(" "),
                        _c("p"),
                        _vm._v("\n            إدارة المرتجعات"),
                      ]
                    ),
                  ],
                  1
                ),
              ]
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row jc-center" }, [
            _c(
              "div",
              { staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-2 nopadding" },
              [
                _c(
                  "div",
                  { staticClass: "panel panel-bd" },
                  [
                    _c("router-link", { attrs: { to: "/invoice" } }, [
                      _c("div", { staticClass: "panel-body" }, [
                        _c("div", { staticClass: "statistic-box" }, [
                          _c("h2", [
                            _c("span", { staticClass: "slight" }, [
                              _c("img", {
                                attrs: {
                                  src: "pos_invoice.png",
                                  height: "40",
                                  width: "40",
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "small",
                              staticStyle: {
                                "font-size": "17px",
                                "margin-top": "20px",
                                "text-align": "center",
                              },
                            },
                            [
                              _vm._v(
                                "\n                  إضافة مبيعات\n                "
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                  ],
                  1
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-2 nopadding" },
              [
                _c(
                  "div",
                  { staticClass: "panel panel-bd" },
                  [
                    _c("router-link", { attrs: { to: "/purchase" } }, [
                      _c("div", { staticClass: "panel-body" }, [
                        _c("div", { staticClass: "statistic-box" }, [
                          _c("h2", [
                            _c("span", { staticClass: "slight" }, [
                              _c("img", {
                                attrs: {
                                  src: "invoice.png",
                                  height: "40",
                                  width: "40",
                                },
                              }),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "small",
                              staticStyle: {
                                "font-size": "17px",
                                "margin-top": "20px",
                                "text-align": "center",
                              },
                            },
                            [
                              _vm._v(
                                "\n                  إضافة مشتريات\n                "
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                  ],
                  1
                ),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-2 nopadding" },
              [
                _c("div", { staticClass: "panel panel-bd" }, [
                  _c("div", { staticClass: "panel-body" }, [
                    _c("div", { staticClass: "statistic-box" }, [
                      _c("h2", [
                        _c("span", { staticClass: "slight" }, [
                          _c("img", {
                            attrs: {
                              src: "product.png",
                              height: "40",
                              width: "40",
                            },
                          }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "small",
                          staticStyle: {
                            "font-size": "17px",
                            "margin-top": "20px",
                            "text-align": "center",
                          },
                        },
                        [
                          _c("router-link", { attrs: { to: "/product" } }, [
                            _vm._v("إضافة صنف"),
                          ]),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-2 nopadding" },
              [
                _c("div", { staticClass: "panel panel-bd" }, [
                  _c("div", { staticClass: "panel-body" }, [
                    _c("div", { staticClass: "statistic-box" }, [
                      _c("h2", [
                        _c("span", { staticClass: "slight" }, [
                          _c("img", {
                            staticStyle: { transform: "scaleX(-1)" },
                            attrs: {
                              src: "payment.png",
                              height: "40",
                              width: "40",
                            },
                          }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "small",
                          staticStyle: {
                            "font-size": "17px",
                            "margin-top": "20px",
                            "text-align": "center",
                          },
                        },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: "/receipt/supplier" } },
                            [_vm._v("سند مورد")]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ]),
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-2 nopadding" },
              [
                _c("div", { staticClass: "panel panel-bd" }, [
                  _c("div", { staticClass: "panel-body" }, [
                    _c("div", { staticClass: "statistic-box" }, [
                      _c("h2", [
                        _c("span", { staticClass: "slight" }, [
                          _c("img", {
                            attrs: {
                              src: "payment.png",
                              height: "40",
                              width: "40",
                            },
                          }),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "small",
                          staticStyle: {
                            "font-size": "17px",
                            "margin-top": "20px",
                            "text-align": "center",
                          },
                        },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: "/receipt/customer" } },
                            [_vm._v("سند عميل")]
                          ),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ]),
              ]
            ),
          ]),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/index.vue?vue&type=template&id=4774750c&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/index.vue?vue&type=template&id=4774750c& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c(
        "v-app",
        { attrs: { id: "inspire" } },
        [
          _c(
            "v-navigation-drawer",
            {
              attrs: {
                app: "",
                right: _vm.$vuetify.rtl,
                dark: "",
                width: "250",
              },
              model: {
                value: _vm.drawer,
                callback: function ($$v) {
                  _vm.drawer = $$v
                },
                expression: "drawer",
              },
            },
            [
              _c(
                "v-list",
                { attrs: { dense: "" } },
                [
                  _c(
                    "v-list-item",
                    { staticStyle: { "flex-direction": "column" } },
                    [
                      _c(
                        "v-list-item-avatar",
                        { staticStyle: { "border-radius": "initial" } },
                        [
                          _c("img", {
                            staticClass: "ma-3",
                            attrs: { src: "/logo.png", alt: "", width: "60" },
                          }),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        { staticStyle: { "font-weight": "100" } },
                        [
                          _c(
                            "v-list-item-title",
                            { staticStyle: { "text-align": "center" } },
                            [
                              _vm._v(
                                "\n              نبراس للأنظمة المحاسبية\n            "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-subtitle",
                            { staticStyle: { "text-align": "center" } },
                            [_vm._v("ثقتك الكاملة")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c("drawer-items"),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item",
                { attrs: { link: "" }, on: { click: _vm.logout } },
                [
                  _c(
                    "v-list-item-action",
                    [
                      _c("v-icon", { attrs: { color: "red" } }, [
                        _vm._v("mdi-power"),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-title", { staticClass: "red--text" }, [
                        _vm._v("تسجيل الخروج"),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-app-bar",
            {
              directives: [
                {
                  name: "shortkey",
                  rawName: "v-shortkey",
                  value: ["alt", "n"],
                  expression: "['alt', 'n']",
                },
              ],
              attrs: { app: "", color: "pink", dark: "", height: "50" },
              on: { shortkey: _vm.newInvoice },
            },
            [
              _c("v-app-bar-nav-icon", {
                directives: [
                  {
                    name: "shortkey",
                    rawName: "v-shortkey",
                    value: ["alt", "p"],
                    expression: "['alt', 'p']",
                  },
                ],
                on: {
                  shortkey: _vm.newPurchase,
                  click: function ($event) {
                    $event.stopPropagation()
                    _vm.drawer = !_vm.drawer
                  },
                },
              }),
              _vm._v(" "),
              _c("v-toolbar-title", [_vm._v("صيدلية المجد")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v("\n      [\n      "),
              _c(
                "v-row",
                { staticStyle: { "font-size": "13px" } },
                [
                  _c(
                    "v-col",
                    { staticStyle: { "text-align": "center" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticStyle: { color: "white" },
                          attrs: { to: "/invoice" },
                        },
                        [_vm._v("\n            فاتورة مبيعات\n          ")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticStyle: { "text-align": "center" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticStyle: { color: "white" },
                          attrs: { to: "/purchase" },
                        },
                        [_vm._v("\n            فاتورة مشتريات\n          ")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticStyle: { "text-align": "center" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticStyle: { color: "white" },
                          attrs: { to: "/journal_entries" },
                        },
                        [_vm._v("\n            قيود اليومية\n          ")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v("\n      ]\n\n      "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-menu",
                {
                  attrs: { "offset-y": "" },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function (ref) {
                        var on = ref.on
                        var attrs = ref.attrs
                        return [
                          _c(
                            "v-btn",
                            _vm._g(
                              _vm._b(
                                { attrs: { icon: "" } },
                                "v-btn",
                                attrs,
                                false
                              ),
                              on
                            ),
                            [_c("v-icon", [_vm._v("mdi-dots-vertical")])],
                            1
                          ),
                        ]
                      },
                    },
                  ]),
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-list",
                    _vm._l(_vm.items, function (item, index) {
                      return _c(
                        "v-list-item",
                        { key: index },
                        [
                          _c(
                            "v-list-item-title",
                            {
                              staticClass: "hand-point",
                              on: {
                                click: function ($event) {
                                  return _vm.onclick(item.title)
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(item.title) +
                                  "\n            "
                              ),
                            ]
                          ),
                        ],
                        1
                      )
                    }),
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("v-main", [
            _c(
              "div",
              {
                staticStyle: {
                  margin: "0px",
                  padding: "0px",
                  width: "100%",
                  height: "100%",
                },
                attrs: { fluid: "" },
              },
              [
                _c(
                  "v-row",
                  { attrs: { align: "center", justify: "center" } },
                  [
                    _c(
                      "v-col",
                      { staticClass: "text-center" },
                      [
                        _vm.home
                          ? _c("dashboard")
                          : _c("router-view", {
                              staticClass: "main-view",
                              attrs: { name: "mainView" },
                            }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c(
            "v-footer",
            { attrs: { color: "pink", app: "" } },
            [
              _c("span", { staticClass: "white--text" }, [
                _vm._v("© " + _vm._s(new Date().getFullYear())),
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c("vue-internet-checker", {
                    on: { status: _vm.status, event: _vm.event },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticStyle: { "font-size": "13px", color: "white" } },
                [
                  _c("span", { staticClass: "px-2" }, [_vm._v("مرحبا: ")]),
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.$store.state.user.name) +
                      "\n      "
                  ),
                ]
              ),
              _vm._v(" "),
              _c("v-spacer"),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);