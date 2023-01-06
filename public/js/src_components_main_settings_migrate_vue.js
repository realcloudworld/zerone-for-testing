"use strict";
(self["webpackChunkvue_electron"] = self["webpackChunkvue_electron"] || []).push([["src_components_main_settings_migrate_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/migrate.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/migrate.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_Setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Setting */ "./src/apis/Setting.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      reset_now: false,
      value: 0,
      query: false,
      show: false
    };
  },
  methods: {
    reset: function reset() {
      var _this = this;

      this.reset_now = true, this.query = true;
      this.show = true;
      _apis_Setting__WEBPACK_IMPORTED_MODULE_0__["default"].migrate().then(function (response) {
        _this.query = false;
        _this.show = false;
        _this.reset_now = false, _this.$router.push("/login");
      });
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "./src/apis/Setting.js":
/*!*****************************!*\
  !*** ./src/apis/Setting.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./src/apis/Api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  migrate: function migrate() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].post("/settings/migrate");
  },
  store: function store(settings) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].post("/settings", settings);
  },
  productSettingsSave: function productSettingsSave(settings) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].post("/settings/product_settings/store", settings);
  },
  companySettingsSave: function companySettingsSave(settings) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].post("/settings/company_settings/store", settings);
  },
  isExist: function isExist(product) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/extra/product/exists/" + product.type + "/" + product.what_to_search);
  },
  create: function create() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/settings/create");
  },
  update: function update(product) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].put("/settings", product);
  },
  postCreate: function postCreate(product) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].post("/settings/create", product);
  },
  get: function get() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/settings");
  },
  search: function search(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/settings/search", {
      params: params
    });
  },
  billBarcodeSearch: function billBarcodeSearch(params, route) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/extra/" + route + "/barcode/" + params.barcode);
  },
  invoiceBarcodeSearch: function invoiceBarcodeSearch(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/extra/invoice/barcode/" + params.barcode + "/inventory_id/" + params.inventory_id);
  },
  stockTakeBarcodeSearch: function stockTakeBarcodeSearch(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/extra/stocktake/barcode/" + params.barcode + "/inventory_id/" + params.inventory_id);
  },
  "delete": function _delete(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/settings", {
      params: params
    });
  }
});

/***/ }),

/***/ "./src/components/main/settings/migrate.vue":
/*!**************************************************!*\
  !*** ./src/components/main/settings/migrate.vue ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _migrate_vue_vue_type_template_id_ef626a16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./migrate.vue?vue&type=template&id=ef626a16& */ "./src/components/main/settings/migrate.vue?vue&type=template&id=ef626a16&");
/* harmony import */ var _migrate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./migrate.vue?vue&type=script&lang=js& */ "./src/components/main/settings/migrate.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _migrate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _migrate_vue_vue_type_template_id_ef626a16___WEBPACK_IMPORTED_MODULE_0__.render,
  _migrate_vue_vue_type_template_id_ef626a16___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/main/settings/migrate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/main/settings/migrate.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/components/main/settings/migrate.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_migrate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./migrate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/migrate.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_migrate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/main/settings/migrate.vue?vue&type=template&id=ef626a16&":
/*!*********************************************************************************!*\
  !*** ./src/components/main/settings/migrate.vue?vue&type=template&id=ef626a16& ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_migrate_vue_vue_type_template_id_ef626a16___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_migrate_vue_vue_type_template_id_ef626a16___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_migrate_vue_vue_type_template_id_ef626a16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./migrate.vue?vue&type=template&id=ef626a16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/migrate.vue?vue&type=template&id=ef626a16&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/migrate.vue?vue&type=template&id=ef626a16&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/migrate.vue?vue&type=template&id=ef626a16& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.reset_now,
              expression: "reset_now",
            },
          ],
          staticStyle: { padding: "50px", color: "red" },
        },
        [
          _vm._v(
            "\n    انتظر من فضلكـ.. يجري إعادة ضبط النظام هذه العملية ستحذف كل العمليات\n    والمعاملات والفواتير السابقة\n  "
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.reset_now,
              expression: "!reset_now",
            },
          ],
          staticStyle: { padding: "50px", color: "red" },
        },
        [
          _vm._v("\n      إعادة ضبط النظام.. \n      "),
          _c("br"),
          _vm._v(
            "\n      هذه العملية ستؤدي إلى حذف كل العمليات والمعاملات والفواتير السابقة\n  "
          ),
        ]
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.reset_now,
              expression: "!reset_now",
            },
          ],
          on: { click: _vm.reset },
        },
        [_vm._v("\n    حذف كل شيء وإعادة ضبط النظام\n    \n  ")]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);