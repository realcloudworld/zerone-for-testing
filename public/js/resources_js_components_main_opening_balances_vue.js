"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_opening_balances_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/opening_balances.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/opening_balances.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../apis/Account */ "./resources/js/apis/Account.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      is_valid_date: [],
      vld_numbering: [function (v) {
        return /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية";
      }],
      vld_match: [true],
      table_loading: false,
      isloading: false,
      operation: "add",
      dialog: false,
      search: "",
      opening_balance: {
        ar_name: ""
      },
      opening_balances: [],
      opening_balances_header: [{
        text: " رقم القيد ",
        align: "center",
        sortable: false,
        value: "document_id"
      }, {
        text: "الوصف ",
        align: "center",
        sortable: false,
        value: "description"
      }, {
        text: "التاريخ",
        align: "center",
        sortable: false,
        value: "created_at"
      }, {
        text: "القيمة الاجمالية ",
        align: "center",
        sortable: false,
        value: "credit"
      }, {
        text: "الخيارات",
        align: "center",
        sortable: false,
        value: "actions",
        width: 110
      }]
    };
  },
  methods: {
    saveOpeningBalance: function saveOpeningBalance() {},
    showDialog: function showDialog(item) {},
    canBeModefied: function canBeModefied(item) {},
    canBeDeleted: function canBeDeleted(item) {},
    deleteOpening_balance: function deleteOpening_balance(item) {
      var _this = this;

      this.table_loading = true;
      _apis_Account__WEBPACK_IMPORTED_MODULE_0__.default.deleteOpeningBalance(item.id).then(function (response) {
        _this.table_loading = false;
        _this.opening_balances = response.data.opening_balances;
      });
    }
  },
  created: function created() {
    var _this2 = this;

    this.table_loading = true;
    _apis_Account__WEBPACK_IMPORTED_MODULE_0__.default.getOpeningBalance().then(function (response) {
      _this2.table_loading = false;
      _this2.opening_balances = [];
      response.data.forEach(function (element) {
        console.log(element);

        var index = _this2.opening_balances.findIndex(function (elem) {
          return elem.document_id == element.document_id;
        });

        console.log(index);

        if (index >= 0) {
          _this2.opening_balances[index].credit += element.credit;
          _this2.opening_balances[index].debit += element.debit;
          return;
        }

        _this2.opening_balances.push(element);
      });
      console.log(_this2.opening_balances);
    });
  }
});

/***/ }),

/***/ "./resources/js/components/main/opening_balances.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/main/opening_balances.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _opening_balances_vue_vue_type_template_id_03a8130e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./opening_balances.vue?vue&type=template&id=03a8130e& */ "./resources/js/components/main/opening_balances.vue?vue&type=template&id=03a8130e&");
/* harmony import */ var _opening_balances_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./opening_balances.vue?vue&type=script&lang=js& */ "./resources/js/components/main/opening_balances.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _opening_balances_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _opening_balances_vue_vue_type_template_id_03a8130e___WEBPACK_IMPORTED_MODULE_0__.render,
  _opening_balances_vue_vue_type_template_id_03a8130e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/opening_balances.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/opening_balances.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/main/opening_balances.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_opening_balances_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./opening_balances.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/opening_balances.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_opening_balances_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/opening_balances.vue?vue&type=template&id=03a8130e&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/main/opening_balances.vue?vue&type=template&id=03a8130e& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_opening_balances_vue_vue_type_template_id_03a8130e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_opening_balances_vue_vue_type_template_id_03a8130e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_opening_balances_vue_vue_type_template_id_03a8130e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./opening_balances.vue?vue&type=template&id=03a8130e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/opening_balances.vue?vue&type=template&id=03a8130e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/opening_balances.vue?vue&type=template&id=03a8130e&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/opening_balances.vue?vue&type=template&id=03a8130e& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { "margin-top": "20px" } },
    [
      _c(
        "v-row",
        [
          _c(
            "v-dialog",
            {
              attrs: { persistent: "", "max-width": "600px" },
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
                  _c("v-card-title", [
                    _c("span", { staticClass: "text-h5" }, [
                      _vm._v("User Profile")
                    ])
                  ]),
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
                                    attrs: {
                                      label: "اسم الوحدة العربي",
                                      rules: _vm.is_exists
                                    },
                                    model: {
                                      value: _vm.opening_balance.ar_name,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.opening_balance,
                                          "ar_name",
                                          $$v
                                        )
                                      },
                                      expression: "opening_balance.ar_name"
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
                                    attrs: { label: "الاختصار العربي" },
                                    model: {
                                      value:
                                        _vm.opening_balance
                                          .ar_opening_balance_representation,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.opening_balance,
                                          "ar_opening_balance_representation",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "opening_balance.ar_opening_balance_representation"
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
                                    attrs: { label: "اسم الوحدة بالانجليزي" },
                                    model: {
                                      value: _vm.opening_balance.en_name,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.opening_balance,
                                          "en_name",
                                          $$v
                                        )
                                      },
                                      expression: "opening_balance.en_name"
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
                                    attrs: { label: "الاختصار  بالانجليزي" },
                                    model: {
                                      value:
                                        _vm.opening_balance
                                          .en_opening_balance_representation,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.opening_balance,
                                          "en_opening_balance_representation",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "opening_balance.en_opening_balance_representation"
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
                      ),
                      _vm._v(" "),
                      _c("small", [_vm._v("*indicates required field")])
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
                        [_vm._v("\n            الغاء\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: { click: _vm.saveOpeningBalance }
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
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("v-data-table", {
        attrs: {
          headers: _vm.opening_balances_header,
          items: _vm.opening_balances,
          "item-key": "id",
          search: _vm.search,
          loading: _vm.table_loading
        },
        scopedSlots: _vm._u([
          {
            key: "item.created_at",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n      " + _vm._s(item.created_at.split("T")[0]) + "\n    "
                )
              ]
            }
          },
          {
            key: "top",
            fn: function() {
              return [
                _c(
                  "v-toolbar",
                  { attrs: { flat: "", color: "white" } },
                  [
                    _c("v-toolbar-title", [_vm._v("الارصدة الافتتاحية")]),
                    _vm._v(" "),
                    _c("v-divider", {
                      staticClass: "mx-4",
                      attrs: { inset: "", vertical: "" }
                    }),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c("v-btn", { staticStyle: { margin: "2px" } }, [
                      _vm._v("\n          أرصدة العملاء\n        ")
                    ]),
                    _vm._v(" "),
                    _c("v-btn", { staticStyle: { margin: "2px" } }, [
                      _vm._v("\n          أرصدة الموردين\n        ")
                    ]),
                    _vm._v(" "),
                    _c("v-btn", { staticStyle: { margin: "2px" } }, [
                      _vm._v("\n          أرصدة المنتجات\n        ")
                    ]),
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
            key: "item.actions",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-tooltip",
                  {
                    attrs: { bottom: "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _c(
                                "v-btn",
                                {
                                  attrs: { icon: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteOpening_balance(item)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "v-icon",
                                    _vm._g(
                                      _vm._b(
                                        {
                                          staticClass: "outlined font-size-12"
                                        },
                                        "v-icon",
                                        attrs,
                                        false
                                      ),
                                      on
                                    ),
                                    [_vm._v("mdi-delete")]
                                  )
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  },
                  [
                    _vm._v(" "),
                    _c("span", { staticStyle: { "font-size": "10px" } }, [
                      _vm._v("إضافة حساب فرعي")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "v-tooltip",
                  {
                    attrs: { bottom: "" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "activator",
                          fn: function(ref) {
                            var on = ref.on
                            var attrs = ref.attrs
                            return [
                              _vm.canBeModefied(item)
                                ? _c(
                                    "v-btn",
                                    {
                                      attrs: { icon: "" },
                                      on: {
                                        click: function($event) {
                                          $event.stopPropagation()
                                          return _vm.showDialog(item)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              staticClass:
                                                "outlined font-size-12"
                                            },
                                            "v-icon",
                                            attrs,
                                            false
                                          ),
                                          on
                                        ),
                                        [_vm._v("mdi-pencil")]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  },
                  [
                    _vm._v(" "),
                    _c("span", { staticStyle: { "font-size": "10px" } }, [
                      _vm._v("تعديل الحساب")
                    ])
                  ]
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);