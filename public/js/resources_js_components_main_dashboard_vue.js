"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_dashboard_vue"],{

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

/***/ "./resources/js/components/main/dashboard.vue?vue&type=style&index=0&id=6a7e41c9&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/main/dashboard.vue?vue&type=style&index=0&id=6a7e41c9&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_6a7e41c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dashboard.vue?vue&type=style&index=0&id=6a7e41c9&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/dashboard.vue?vue&type=style&index=0&id=6a7e41c9&scoped=true&lang=css&");


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



/***/ })

}]);