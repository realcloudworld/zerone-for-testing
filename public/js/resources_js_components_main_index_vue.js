"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/dashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/dashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../apis/Dashboard */ "./resources/js/apis/Dashboard.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      purchases: 0,
      invoices: 0,
      products: 0,
      suppliers: 0,
      customers: 0
    };
  },
  computed: {},
  watch: {},
  created: function created() {
    var _this = this;

    _apis_Dashboard__WEBPACK_IMPORTED_MODULE_0__.default.index().then(function (response) {
      _this.purchases = response.data.purchases;
      _this.invoices = response.data.invoices;
      _this.products = response.data.products;
      _this.suppliers = response.data.suppliers;
      _this.customers = response.data.customers;
    });
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../apis/User */ "./resources/js/apis/User.js");
/* harmony import */ var _components_DrawerItems_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/DrawerItems.vue */ "./resources/js/components/main/components/DrawerItems.vue");
/* harmony import */ var _dashboard_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.vue */ "./resources/js/components/main/dashboard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    source: String
  },
  components: {
    DrawerItems: _components_DrawerItems_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    Dashboard: _dashboard_vue__WEBPACK_IMPORTED_MODULE_2__.default
  },
  data: function data() {
    return {
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
    onclick: function onclick(item) {
      if (item == "تسجيل الخروج") this.logout();
    },
    getUser: function getUser() {
      return _apis_User__WEBPACK_IMPORTED_MODULE_0__.default.getUser();
    },
    logout: function logout() {
      var _this = this;

      _apis_User__WEBPACK_IMPORTED_MODULE_0__.default.getUser().then(function (response) {
        localStorage.removeItem("token");

        _this.$router.push("login"); //this.currentUser = response.data;

      })["catch"](function (errors) {
        _this.errors = errors.response.data.errors;
        console.log(errors.response.data);
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

/***/ "./resources/js/apis/Dashboard.js":
/*!****************************************!*\
  !*** ./resources/js/apis/Dashboard.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  index: function index() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/dashboard");
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/dashboard.vue?vue&type=style&index=0&id=6a7e41c9&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/dashboard.vue?vue&type=style&index=0&id=6a7e41c9&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-application .mb-2[data-v-6a7e41c9] {\r\n  margin-top: 12px !important;\r\n  align-self: flex-;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/index.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/index.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.hand-point {\r\n  cursor: pointer;\n}\n.v-list-item:after {\r\n  content: none !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/dashboard.vue?vue&type=style&index=0&id=6a7e41c9&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/dashboard.vue?vue&type=style&index=0&id=6a7e41c9&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_6a7e41c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=style&index=0&id=6a7e41c9&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/dashboard.vue?vue&type=style&index=0&id=6a7e41c9&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_6a7e41c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_6a7e41c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/index.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/index.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/index.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/main/dashboard.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/main/dashboard.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dashboard_vue_vue_type_template_id_6a7e41c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=6a7e41c9&scoped=true& */ "./resources/js/components/main/dashboard.vue?vue&type=template&id=6a7e41c9&scoped=true&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/main/dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _dashboard_vue_vue_type_style_index_0_id_6a7e41c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.vue?vue&type=style&index=0&id=6a7e41c9&scoped=true&lang=css& */ "./resources/js/components/main/dashboard.vue?vue&type=style&index=0&id=6a7e41c9&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _dashboard_vue_vue_type_template_id_6a7e41c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _dashboard_vue_vue_type_template_id_6a7e41c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6a7e41c9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/index.vue":
/*!************************************************!*\
  !*** ./resources/js/components/main/index.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_1deb0787___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1deb0787& */ "./resources/js/components/main/index.vue?vue&type=template&id=1deb0787&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/main/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/main/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _index_vue_vue_type_template_id_1deb0787___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_1deb0787___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/dashboard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/main/dashboard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/main/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/dashboard.vue?vue&type=style&index=0&id=6a7e41c9&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/main/dashboard.vue?vue&type=style&index=0&id=6a7e41c9&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_6a7e41c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=style&index=0&id=6a7e41c9&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/dashboard.vue?vue&type=style&index=0&id=6a7e41c9&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/main/index.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/main/index.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/index.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/main/dashboard.vue?vue&type=template&id=6a7e41c9&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/main/dashboard.vue?vue&type=template&id=6a7e41c9&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_6a7e41c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_6a7e41c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_6a7e41c9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=template&id=6a7e41c9&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/dashboard.vue?vue&type=template&id=6a7e41c9&scoped=true&");


/***/ }),

/***/ "./resources/js/components/main/index.vue?vue&type=template&id=1deb0787&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/main/index.vue?vue&type=template&id=1deb0787& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1deb0787___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1deb0787___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1deb0787___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=1deb0787& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/index.vue?vue&type=template&id=1deb0787&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/dashboard.vue?vue&type=template&id=6a7e41c9&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/dashboard.vue?vue&type=template&id=6a7e41c9&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
        "v-container",
        { staticClass: "panel pa-10" },
        [
          _c("v-row", { attrs: { justify: "center" } }, [
            _vm._v("مرحبا بك في نظام إدارة الصيدليات")
          ]),
          _vm._v(" "),
          _c(
            "v-row",
            { staticClass: "pink--text", attrs: { justify: "center" } },
            [_vm._v("0.1 betaVersion")]
          ),
          _vm._v(" "),
          _c("img", {
            staticClass: "ma-3",
            attrs: { src: "logo.png", alt: "", width: "100", height: "128" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-3" }, [
              _c(
                "div",
                { staticClass: "small-box bg-green whitecolor" },
                [
                  _c("div", { staticClass: "inner" }, [
                    _c("h4", [
                      _c("span", { staticClass: "count-number" }, [
                        _vm._v(_vm._s(_vm.customers))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v("عدد العملاء")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "icon" }, [
                    _c("i", { staticClass: "fa fa-users" })
                  ]),
                  _vm._v(" "),
                  _c("p"),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "small-box-footer",
                      attrs: { to: "/customermanagement" }
                    },
                    [_vm._v("إدارة العملاء")]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-3" }, [
              _c(
                "div",
                { staticClass: "small-box bg-pase whitecolor" },
                [
                  _c("div", { staticClass: "inner" }, [
                    _c("h4", [
                      _c("span", { staticClass: "count-number" }, [
                        _vm._v(_vm._s(_vm.products))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v("عدد الأصناف")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "icon" }, [
                    _c("i", { staticClass: "fa fa-shopping-bag" })
                  ]),
                  _vm._v(" "),
                  _c("p"),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "small-box-footer",
                      attrs: { to: "/drugclassmanagement" }
                    },
                    [_vm._v("إدارة الأصناف")]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-3" }, [
              _c(
                "div",
                { staticClass: "small-box bg-bringal whitecolor" },
                [
                  _c("div", { staticClass: "inner" }, [
                    _c("h4", [
                      _c("span", { staticClass: "count-number" }, [
                        _vm._v(_vm._s(_vm.suppliers))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v("عدد الموردين")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "icon" }, [
                    _c("i", { staticClass: "fa fa-user" })
                  ]),
                  _vm._v(" "),
                  _c("p"),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "small-box-footer",
                      attrs: { to: "/companymanagement" }
                    },
                    [_vm._v("إدارة الموردين")]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-3" }, [
              _c(
                "div",
                { staticClass: "small-box bg-darkgreen whitecolor" },
                [
                  _c("div", { staticClass: "inner" }, [
                    _c("h4", [
                      _c("span", { staticClass: "count-number" }, [
                        _vm._v(_vm._s(_vm.invoices))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("p", [_vm._v("عدد الفواتير")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "icon" }, [
                    _c("i", { staticClass: "fa fa-money" })
                  ]),
                  _vm._v(" "),
                  _c("p"),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "small-box-footer",
                      attrs: { to: "/invoicemanagement" }
                    },
                    [_vm._v("إدارة الفواتير")]
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-3" }, [
              _c(
                "div",
                { staticClass: "panel panel-bd" },
                [
                  _c("router-link", { attrs: { to: "/invoice" } }, [
                    _c("div", { staticClass: "panel-body" }, [
                      _c("div", { staticClass: "statistic-box" }, [
                        _c("h2", [
                          _c(
                            "span",
                            {
                              staticClass: "slight",
                              staticStyle: { "margin-left": "70px" }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  src:
                                    "https://pharmacyv5.bdtask.com/pharmacare_v9.2_demo/my-assets/image/pos_invoice.png",
                                  height: "40",
                                  width: "40"
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "small",
                            staticStyle: {
                              "font-size": "17px",
                              "margin-top": "20px",
                              "text-align": "center"
                            }
                          },
                          [
                            _vm._v(
                              "\n                  إضافة فاتورة بيع\n                "
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-3" }, [
              _c(
                "div",
                { staticClass: "panel panel-bd" },
                [
                  _c("router-link", { attrs: { to: "/purchase" } }, [
                    _c("div", { staticClass: "panel-body" }, [
                      _c("div", { staticClass: "statistic-box" }, [
                        _c("h2", [
                          _c(
                            "span",
                            {
                              staticClass: "slight",
                              staticStyle: { "margin-left": "70px" }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  src:
                                    "https://pharmacyv5.bdtask.com/pharmacare_v9.2_demo/my-assets/image/invoice.png",
                                  height: "40",
                                  width: "40"
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "small",
                            staticStyle: {
                              "font-size": "17px",
                              "margin-top": "20px",
                              "text-align": "center"
                            }
                          },
                          [
                            _vm._v(
                              "\n                  إضافة مشتريات\n                "
                            )
                          ]
                        )
                      ])
                    ])
                  ])
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-6 col-lg-3" }, [
              _c("div", { staticClass: "panel panel-bd" }, [
                _c("div", { staticClass: "panel-body" }, [
                  _c("div", { staticClass: "statistic-box" }, [
                    _c("h2", [
                      _c(
                        "span",
                        {
                          staticClass: "slight",
                          staticStyle: { "margin-left": "70px" }
                        },
                        [
                          _c("img", {
                            attrs: {
                              src:
                                "https://pharmacyv5.bdtask.com/pharmacare_v9.2_demo/my-assets/image/product.png",
                              height: "40",
                              width: "40"
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "small",
                        staticStyle: {
                          "font-size": "17px",
                          "margin-top": "20px",
                          "text-align": "center"
                        }
                      },
                      [
                        _c(
                          "router-link",
                          { attrs: { to: "/addUpdatedrugclass" } },
                          [_vm._v("إضافة صنف")]
                        )
                      ],
                      1
                    )
                  ])
                ])
              ])
            ])
          ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/index.vue?vue&type=template&id=1deb0787&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/index.vue?vue&type=template&id=1deb0787& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
                width: "225"
              },
              model: {
                value: _vm.drawer,
                callback: function($$v) {
                  _vm.drawer = $$v
                },
                expression: "drawer"
              }
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
                            attrs: { src: "/logo.png", alt: "", width: "60" }
                          })
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
                                "\n              قاف للأنظمة المحاسبية\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-subtitle",
                            { staticStyle: { "text-align": "center" } },
                            [_vm._v("ثقتك الكاملة")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c("drawer-items")
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
                        _vm._v("mdi-power")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item-content",
                    [
                      _c("v-list-item-title", { staticClass: "red--text" }, [
                        _vm._v("logout")
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
            "v-app-bar",
            { attrs: { app: "", color: "pink", dark: "", height: "50" } },
            [
              _c("v-app-bar-nav-icon", {
                on: {
                  click: function($event) {
                    $event.stopPropagation()
                    _vm.drawer = !_vm.drawer
                  }
                }
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
                          attrs: { to: "/invoice" }
                        },
                        [_vm._v("\n            فاتورة مبيعات\n          ")]
                      )
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
                          attrs: { to: "/purchase" }
                        },
                        [_vm._v("\n            فاتورة مشتريات\n          ")]
                      )
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
                          attrs: { to: "/journal_entries" }
                        },
                        [_vm._v("\n            قيود اليومية\n          ")]
                      )
                    ],
                    1
                  )
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
                      fn: function(ref) {
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
                          )
                        ]
                      }
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-list",
                    _vm._l(_vm.items, function(item, index) {
                      return _c(
                        "v-list-item",
                        { key: index },
                        [
                          _c(
                            "v-list-item-title",
                            {
                              staticClass: "hand-point",
                              on: {
                                click: function($event) {
                                  return _vm.onclick(item.title)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(item.title) +
                                  "\n            "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    }),
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-main", [
            _c(
              "div",
              {
                staticStyle: { margin: "0px", padding: "0px", width: "100%" },
                attrs: { fluid: "" }
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
                              attrs: { name: "mainView" }
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
          ]),
          _vm._v(" "),
          _c(
            "v-footer",
            { attrs: { color: "pink", app: "" } },
            [
              _c("span", { staticClass: "white--text" }, [
                _vm._v("© " + _vm._s(new Date().getFullYear()))
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "div",
                { staticStyle: { "font-size": "13px", color: "white" } },
                [
                  _c("span", { staticClass: "px-2" }, [_vm._v("مرحبا: ")]),
                  _vm._v(
                    "\n\n        " +
                      _vm._s(_vm.$store.state.user.name) +
                      "\n      "
                  )
                ]
              ),
              _vm._v(" "),
              _c("v-spacer")
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



/***/ })

}]);