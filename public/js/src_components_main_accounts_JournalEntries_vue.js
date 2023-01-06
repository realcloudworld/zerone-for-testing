(self["webpackChunkvue_electron"] = self["webpackChunkvue_electron"] || []).push([["src_components_main_accounts_JournalEntries_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/accounts/JournalEntries.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/accounts/JournalEntries.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apis_Account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apis/Account */ "./src/apis/Account.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      value: 0,
      query: true,
      show: true,
      documents: [{
        name: "",
        date: "",
        accounts: [{
          ar_name: "",
          detail: "",
          debit: 0,
          credit: 0
        }]
      }]
    };
  },
  methods: {
    debit_sum: function debit_sum(document) {
      var sum_of_debits = 0;
      document.accounts.forEach(function (element) {
        sum_of_debits += +element.debit;
      });
      return sum_of_debits;
    },
    credit_sum: function credit_sum(document) {
      var sum_of_credits = 0;
      document.accounts.forEach(function (element) {
        sum_of_credits += +element.credit;
      });
      return sum_of_credits;
    }
  },
  created: function created() {
    var _this = this;

    _apis_Account__WEBPACK_IMPORTED_MODULE_2__["default"].getJurnalEntries().then(function (response) {
      _this.documents = response.data;
      _this.query = false;
      _this.show = false;
    });
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

/***/ "./src/components/main/accounts/JournalEntries.vue":
/*!*********************************************************!*\
  !*** ./src/components/main/accounts/JournalEntries.vue ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JournalEntries_vue_vue_type_template_id_75542b08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JournalEntries.vue?vue&type=template&id=75542b08& */ "./src/components/main/accounts/JournalEntries.vue?vue&type=template&id=75542b08&");
/* harmony import */ var _JournalEntries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JournalEntries.vue?vue&type=script&lang=js& */ "./src/components/main/accounts/JournalEntries.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _JournalEntries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _JournalEntries_vue_vue_type_template_id_75542b08___WEBPACK_IMPORTED_MODULE_0__.render,
  _JournalEntries_vue_vue_type_template_id_75542b08___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/main/accounts/JournalEntries.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/main/accounts/JournalEntries.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/components/main/accounts/JournalEntries.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JournalEntries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JournalEntries.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/accounts/JournalEntries.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JournalEntries_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/main/accounts/JournalEntries.vue?vue&type=template&id=75542b08&":
/*!****************************************************************************************!*\
  !*** ./src/components/main/accounts/JournalEntries.vue?vue&type=template&id=75542b08& ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JournalEntries_vue_vue_type_template_id_75542b08___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JournalEntries_vue_vue_type_template_id_75542b08___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JournalEntries_vue_vue_type_template_id_75542b08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./JournalEntries.vue?vue&type=template&id=75542b08& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/accounts/JournalEntries.vue?vue&type=template&id=75542b08&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/accounts/JournalEntries.vue?vue&type=template&id=75542b08&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/accounts/JournalEntries.vue?vue&type=template&id=75542b08& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
        "v-row",
        [
          _c(
            "v-toolbar",
            { attrs: { flat: "", color: "white" } },
            [
              _c("v-toolbar-title", [_vm._v("دفتر القيود اليومية")]),
              _vm._v(" "),
              _c("v-divider", {
                staticClass: "mx-4",
                attrs: { inset: "", vertical: "" },
              }),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-spacer"),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticStyle: { height: "10px" } }),
      _vm._v(" "),
      _vm._l(_vm.documents, function (document) {
        return _c(
          "v-row",
          {
            key: document.accounts[0].id,
            staticClass: "ma-2",
            staticStyle: {
              "font-size": "small",
              border: "1px solid lightgrey",
            },
          },
          [
            _c(
              "v-col",
              [
                _c(
                  "v-row",
                  {
                    staticStyle: {
                      background: "#ffeaf5",
                      "border-bottom": "1px solid lightgrey",
                    },
                  },
                  [
                    _c("v-col", [
                      _vm._v(
                        " " +
                          _vm._s(document.name) +
                          " رقم: " +
                          _vm._s(document.reference) +
                          " "
                      ),
                    ]),
                    _vm._v(" "),
                    _c("v-col", [
                      _vm._v(" تاريخ العملية: " + _vm._s(document.date) + " "),
                    ]),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-row",
                  { staticStyle: { background: "#ffeae0" } },
                  [
                    _c("v-col", [_vm._v("الحساب")]),
                    _vm._v(" "),
                    _c("v-col", [_vm._v("التفصيل")]),
                    _vm._v(" "),
                    _c("v-col", [_vm._v("مدين")]),
                    _vm._v(" "),
                    _c("v-col", [_vm._v("دائن")]),
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._l(document.accounts, function (account) {
                  return _c(
                    "v-row",
                    {
                      key: account.id,
                      staticClass: "father-account",
                      staticStyle: { background: "#eaf3f2" },
                    },
                    [
                      _c(
                        "v-col",
                        {
                          staticStyle: {
                            "text-align": "start",
                            "border-top": "1px solid white",
                            "border-left": "1px solid white",
                          },
                        },
                        [
                          _vm._v(
                            _vm._s(account.account_code) +
                              " - " +
                              _vm._s(account.ar_name)
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticStyle: {
                            "border-top": "1px solid white",
                            "border-left": "1px solid white",
                          },
                        },
                        [_vm._v("\n          " + _vm._s(account.detail))]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticStyle: {
                            "border-top": "1px solid white",
                            "border-left": "1px solid white",
                          },
                        },
                        [
                          _vm._v(
                            "\n          " + _vm._s(account.debit.toFixed(2))
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticStyle: {
                            "border-top": "1px solid white",
                            "border-left": "1px solid white",
                          },
                        },
                        [
                          _vm._v(
                            "\n          " + _vm._s(account.credit.toFixed(2))
                          ),
                        ]
                      ),
                    ],
                    1
                  )
                }),
                _vm._v(" "),
                _c(
                  "v-row",
                  [
                    _c("v-col", [_vm._v("المجموع")]),
                    _vm._v(" "),
                    _c("v-col"),
                    _vm._v(" "),
                    _c("v-col", [
                      _vm._v(_vm._s(_vm.debit_sum(document).toFixed(2))),
                    ]),
                    _vm._v(" "),
                    _c("v-col", [
                      _vm._v(_vm._s(_vm.credit_sum(document).toFixed(2)) + " "),
                    ]),
                  ],
                  1
                ),
              ],
              2
            ),
          ],
          1
        )
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);