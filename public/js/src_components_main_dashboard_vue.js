(self["webpackChunkvue_electron"] = self["webpackChunkvue_electron"] || []).push([["src_components_main_dashboard_vue"],{

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

/***/ "./src/components/main/dashboard.vue?vue&type=style&index=0&id=a2493664&scoped=true&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./src/components/main/dashboard.vue?vue&type=style&index=0&id=a2493664&scoped=true&lang=css& ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_a2493664_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=style&index=0&id=a2493664&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/dashboard.vue?vue&type=style&index=0&id=a2493664&scoped=true&lang=css&");


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



/***/ })

}]);