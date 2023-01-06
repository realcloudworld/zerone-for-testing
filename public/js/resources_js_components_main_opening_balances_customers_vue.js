"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_opening_balances_customers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/opening_balances/customers.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/opening_balances/customers.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Account */ "./resources/js/apis/Account.js");
/* harmony import */ var _apis_Person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apis/Person */ "./resources/js/apis/Person.js");
/* harmony import */ var _apis_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../apis/Product */ "./resources/js/apis/Product.js");
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    var _ref;

    return _ref = {
      type_id: "",
      people: [],
      persona: "عميل جديد",
      starter_dialog: false,
      snackbarColor: "",
      snackbar: false,
      snackbarText: "تأكد من تعبئة الحقول",
      snackbarTimeout: 2000,
      name_search: "",

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
      balance_exists: [],
      expires_at_valid: [function (v) {
        return v.has_expiration_date && v != "*******" || "قم بتغيير التاريخ";
      }],
      is_valid_date: [],
      vld_numbering: [function (v) {
        return /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية";
      }],
      searched_barcode: "",
      loading: false,
      found_products: [],
      selected_product: {
        expires_at: "",
        expires_at_message: ""
      }
    }, _defineProperty(_ref, "name_search", ""), _defineProperty(_ref, "accounts", []), _defineProperty(_ref, "date", new Date().toISOString().substr(0, 10)), _defineProperty(_ref, "issue_date_is_down", false), _defineProperty(_ref, "balance", {
      type_id: "",
      account_id: "",
      people: [{
        total: 0,
        person: {
          id: ""
        }
      }],
      issue_date: new Date().toISOString().substr(0, 10),
      details: []
    }), _ref;
  },
  created: function created() {
    var _this = this;

    this.createPage(this.$route, "new");
    _apis_Account__WEBPACK_IMPORTED_MODULE_0__.default.showAccountsByType(3).then(function (response) {
      _this.accounts = response.data.accounts;
    });
  },
  watch: {
    name_search: function name_search(val) {
      val && val !== this.selected_product.name && this.getProducts(val, "name");
    }
  },
  methods: {
    checkIfPersonSelectedBefor: function checkIfPersonSelectedBefor(person) {
      var sameunits = this.balance.people.filter(function (elem) {
        return elem.person.id == person.id;
      });

      if (sameunits.length <= 1) {
        return;
      }

      alert("الاسم موجود مسبقا!");
      this.balance.people.splice(person, 1);
      return;
      var indextodelete = this.balance.people.findIndex(function (elem) {
        return elem.person.id == person.id && elem.total == 0;
      });
      var notnulltotal = this.balance.people.filter(function (elem) {
        return elem.person.id == person.id && elem.total != 0;
      });
      this.balance.people.splice(this.balance.people.indexOf(sameunits[0]), 1);
    },
    createPage: function createPage(to, status) {
      var _this2 = this;

      this.route = to.fullPath.substr(this.$route.fullPath.lastIndexOf("/") + 1);
      console.log(this.route);
      console.log("to");

      if (this.route == "suppliers") {
        this.balance.type_id = 1;
        this.persona = "مورد";
      }

      if (this.route == "customers") {
        this.balance.type_id = 2;
        this.persona = "عميل";
      }

      _apis_Person__WEBPACK_IMPORTED_MODULE_1__.default.get({
        type_id: this.balance.type_id
      }).then(function (response) {
        console.log(response.data);
        _this2.people = response.data.filter(function (elem) {
          return elem.name != "افتراضي";
        });
      });
    },
    AddNewPerson: function AddNewPerson() {
      this.balance.people.push({
        id: Math.floor(Math.random(1, 100) * 100),
        total: 0,
        person: {
          id: ""
        }
      });
    },
    is_first: function is_first(item) {
      if (item.person.id != this.balance.people[0].person.id) return true;
      return false;
    },
    deleteItem: function deleteItem(item) {
      this.balance.people.splice(this.balance.people.indexOf(item), 1);
    },
    submit: function submit() {
      var _this3 = this;

      if (!this.$refs.form.validate()) {
        console.log("this.balance.details");
        console.log(this.balance.details);
        console.log(this.$refs.form.rules);
        return;
      }

      _apis_Account__WEBPACK_IMPORTED_MODULE_0__.default.storePeopleOpeningBalance(this.balance).then(function (response) {
        _this3.starter_dialog = false;
        _this3.snackbar = true;
        _this3.snackbarText = "تم حفظ الفاتورة";
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/apis/Person.js":
/*!*************************************!*\
  !*** ./resources/js/apis/Person.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("people" + "/", {
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

/***/ "./resources/js/components/main/opening_balances/customers.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/main/opening_balances/customers.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _customers_vue_vue_type_template_id_4ee8c182___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customers.vue?vue&type=template&id=4ee8c182& */ "./resources/js/components/main/opening_balances/customers.vue?vue&type=template&id=4ee8c182&");
/* harmony import */ var _customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customers.vue?vue&type=script&lang=js& */ "./resources/js/components/main/opening_balances/customers.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _customers_vue_vue_type_template_id_4ee8c182___WEBPACK_IMPORTED_MODULE_0__.render,
  _customers_vue_vue_type_template_id_4ee8c182___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/opening_balances/customers.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/opening_balances/customers.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/main/opening_balances/customers.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./customers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/opening_balances/customers.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/opening_balances/customers.vue?vue&type=template&id=4ee8c182&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/main/opening_balances/customers.vue?vue&type=template&id=4ee8c182& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customers_vue_vue_type_template_id_4ee8c182___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customers_vue_vue_type_template_id_4ee8c182___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_customers_vue_vue_type_template_id_4ee8c182___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./customers.vue?vue&type=template&id=4ee8c182& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/opening_balances/customers.vue?vue&type=template&id=4ee8c182&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/opening_balances/customers.vue?vue&type=template&id=4ee8c182&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/opening_balances/customers.vue?vue&type=template&id=4ee8c182& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
        "v-form",
        { ref: "form" },
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
            "v-row",
            { staticStyle: { padding: "100px" } },
            [
              _c(
                "v-col",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "6" } },
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
                                                label: "تاريخ القيد",
                                                "prepend-icon": "mdi-calendar"
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
                                                  _vm.issue_date_is_down = false
                                                }
                                              },
                                              model: {
                                                value: _vm.balance.issue_date,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.balance,
                                                    "issue_date",
                                                    $$v
                                                  )
                                                },
                                                expression: "balance.issue_date"
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
                                  }
                                },
                                model: {
                                  value: _vm.balance.issue_date,
                                  callback: function($$v) {
                                    _vm.$set(_vm.balance, "issue_date", $$v)
                                  },
                                  expression: "balance.issue_date"
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
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              "multi-line": "",
                              autocomplete: "off",
                              label: "الوصف"
                            },
                            model: {
                              value: _vm.balance.description,
                              callback: function($$v) {
                                _vm.$set(_vm.balance, "description", $$v)
                              },
                              expression: "balance.description"
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
                    [
                      _c(
                        "v-col",
                        { staticClass: "pa-0", attrs: { cols: "6" } },
                        [
                          _c("v-autocomplete", {
                            attrs: {
                              flat: "",
                              outlined: "",
                              "no-data": "",
                              "no-data-text": "",
                              "non-linear": "",
                              items: _vm.accounts,
                              "item-text": function(item) {
                                return item.account_code + " - " + item.ar_name
                              },
                              "item-value": "id",
                              prefix: " من حساب | ",
                              rules: _vm.required
                            },
                            model: {
                              value: _vm.balance.account_id,
                              callback: function($$v) {
                                _vm.$set(_vm.balance, "account_id", $$v)
                              },
                              expression: "balance.account_id"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-row")
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-container",
            { staticClass: "pa-2" },
            [
              _c("v-divider", { attrs: { inset: "" } }),
              _vm._v(" "),
              _vm._l(_vm.balance.people, function(element) {
                return _c(
                  "v-row",
                  { key: element.id },
                  [
                    _c(
                      "v-col",
                      { attrs: { cols: "12", sm: "6", md: "4" } },
                      [
                        _c("v-autocomplete", {
                          attrs: {
                            loading: _vm.loading,
                            items: _vm.people,
                            "item-text": "name",
                            "return-object": "",
                            flat: "",
                            "hide-no-data": "",
                            label: "اسم ال" + _vm.persona
                          },
                          on: {
                            change: function($event) {
                              return _vm.checkIfPersonSelectedBefor(
                                element.person
                              )
                            }
                          },
                          model: {
                            value: element.person,
                            callback: function($$v) {
                              _vm.$set(element, "person", $$v)
                            },
                            expression: "element.person"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { attrs: { cols: "12", sm: "6", md: "4" } },
                      [
                        _c("v-text-field", {
                          attrs: {
                            type: "number",
                            autocomplete: "off",
                            label: "الرصيد",
                            rules: _vm.is_exists
                          },
                          on: {
                            keydown: function($event) {
                              if (
                                !$event.type.indexOf("key") &&
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
                              return _vm.searchProductByBarcode("barcode")
                            }
                          },
                          model: {
                            value: element.total,
                            callback: function($$v) {
                              _vm.$set(element, "total", _vm._n($$v))
                            },
                            expression: "element.total"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm.is_first(element)
                      ? _c(
                          "v-col",
                          { attrs: { cols: "12", sm: "6", md: "4" } },
                          [
                            _c(
                              "v-icon",
                              {
                                attrs: { color: "red", small: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteItem(element)
                                  }
                                }
                              },
                              [_vm._v("mdi-delete")]
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { staticStyle: { "text-align": "start" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { elevation: "", color: "primary" },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.AddNewPerson("", "add")
                            }
                          }
                        },
                        [_vm._v("إضافة " + _vm._s(_vm.persona) + " جديد")]
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
                { staticStyle: { "padding-top": "100px" } },
                [
                  _c(
                    "v-col",
                    { staticStyle: { "text-align": "end" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { elevation: "", color: "primary" },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.submit.apply(null, arguments)
                            }
                          }
                        },
                        [_vm._v("حفظ الارصدة الافتتاحية")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            2
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