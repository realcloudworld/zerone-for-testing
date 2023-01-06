"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_opening_balances_products_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/opening_balances/products.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/opening_balances/products.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Account */ "./resources/js/apis/Account.js");
/* harmony import */ var _apis_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apis/Product */ "./resources/js/apis/Product.js");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    var _ref;

    return _ref = {
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
    }, _defineProperty(_ref, "name_search", ""), _defineProperty(_ref, "header", [{
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
      text: "القيمة",
      align: "center",
      value: "total",
      sortable: false
    }, {
      text: "تحكم ",
      align: "center",
      value: "action"
    }]), _defineProperty(_ref, "accounts", []), _defineProperty(_ref, "date", new Date().toISOString().substr(0, 10)), _defineProperty(_ref, "issue_date_is_down", false), _defineProperty(_ref, "balance", {
      issue_date: new Date().toISOString().substr(0, 10),
      details: []
    }), _ref;
  },
  created: function created() {
    var _this = this;

    _apis_Account__WEBPACK_IMPORTED_MODULE_0__.default.showAccountsByType(3).then(function (response) {
      _this.accounts = response.data.accounts;
    });
  },
  watch: {
    name_search: function name_search(val) {
      val && val !== this.selected_product.ar_name && this.getProducts(val, "name");
    }
  },
  methods: {
    product_unit_change: function product_unit_change(item) {
      item.hide_quantity_valid_message = true;
      item.quantity_valid = [true];
      var unit = item.units.find(function (elem) {
        return elem.pivot.id == item.unit_id;
      });
      item.unit_price = unit.pivot.bought_price;
    },
    getProducts: function getProducts(val, type) {
      var _this2 = this;

      if (val.length > 2) {
        this.loading = true;
        var params = {
          name: val
        };
        _apis_Product__WEBPACK_IMPORTED_MODULE_1__.default.billNameSearch(params, "input").then(function (response) {
          if (response.data.products.length == 0) {
            _this2.is_exists = [ false || "الصنف غير موجود "];
            return;
          }

          _this2.loading = false;
          console.log("hi", response.data);
          _this2.found_products = JSON.parse(JSON.stringify(response.data.products));
          _this2.is_exists = [true];
        });
      }
    },
    changeExpirationDate: function changeExpirationDate(item) {
      console.log(item.expires_at);
      var occurrences = 0;
      var firstIndex = -1;

      for (var index = 0; index < this.balance.details.length; index++) {
        if (this.balance.details[index].barcode == item.barcode && this.balance.details[index].expires_at == item.expires_at) {
          if (firstIndex == -1) firstIndex = index;
          occurrences++;

          if (occurrences == 2) {
            this.balance.details[firstIndex].quantity += this.balance.details[index].quantity;
            this.balance.details.splice(index, 1);
            return;
          }
        }
      }

      console.log(item);
    },
    expires_date: function expires_date(item) {
      item.expires_at_message = true;
      item.expires_at_valid = [true];
      if (item.expires_at == "*******") item.expires_at = new Date().toISOString().substr(0, 10);
    },
    submit: function submit() {
      var _this3 = this;

      this.balance.details.forEach(function (item) {
        if (item.expires_at == "*******") {
          item.expires_at_message = false;
        }
      });

      if (!this.$refs.form.validate()) {
        console.log("this.balance.details");
        console.log(this.balance.details);
        console.log(this.$refs.form.rules);
        return;
      }

      if (this.balance.details.length == 0) {
        this.snackbar = true;
        return;
      }

      console.log(this.balance);
      console.log("this.balance");
      this.starter_dialog = true;
      _apis_Account__WEBPACK_IMPORTED_MODULE_0__.default.storeProductOpeningBalance(this.balance).then(function (response) {
        _this3.starter_dialog = false;
        _this3.snackbar = true;
        _this3.snackbarText = "تم حفظ الفاتورة";
      });
      console.log(this.balance);
    },
    total: function total(item) {
      item.total = item.quantity * item.unit_price;
      return item.total;
    },
    quantity_in_minor_unit: function quantity_in_minor_unit(item) {
      var unit = item.units.find(function (elem) {
        return elem.pivot.id == item.unit_id;
      });
      item.quantity_in_minor_unit = item.quantity * unit.pivot.contains;
      return item.quantity_in_minor_unit;
    },
    deleteItem: function deleteItem(item) {
      this.balance.details.splice(this.balance.details.indexOf(item), 1);
    },
    searchProductByBarcode: function searchProductByBarcode() {
      var _this4 = this;

      var params = {
        barcode: this.searched_barcode
      };
      _apis_Product__WEBPACK_IMPORTED_MODULE_1__.default.billBarcodeSearch(params, "input").then(function (response) {
        if (response.data.products.length == 0) {
          _this4.is_exists = [ false || "الصنف غير موجود "];
          return;
        }

        _this4.is_exists = [true];
        _this4.selected_product = JSON.parse(JSON.stringify(response.data.products[0]));

        _this4.addProductToBalance();
      });
    },
    addProductToBalance: function addProductToBalance(name) {
      if (this.selected_product.has_expiration_date) {
        this.selected_product.expires_at = "*******";
        this.selected_product.expires_at_valid = [ false || "قم بتغيير التاريخ"];
      } else {
        this.selected_product.expires_at = "--";
        this.selected_product.expires_at_valid = [true];
      }

      this.showThisProduct(this.selected_product);
      return;
    },
    showThisProduct: function showThisProduct(selected_product) {
      selected_product.expires_at_message = true;
      selected_product.unit_id = selected_product.units[selected_product.main_unit_id - 1].pivot.id;
      selected_product.unit_price = selected_product.units[selected_product.main_unit_id - 1].pivot.bought_price;
      selected_product.quantity = 1;
      selected_product["product_id"] = selected_product["id"]; // balance

      selected_product = JSON.parse(JSON.stringify(selected_product));
      this.balance.details.push(selected_product);
      return;
    }
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

/***/ "./resources/js/components/main/opening_balances/products.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/main/opening_balances/products.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _products_vue_vue_type_template_id_0398262c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.vue?vue&type=template&id=0398262c& */ "./resources/js/components/main/opening_balances/products.vue?vue&type=template&id=0398262c&");
/* harmony import */ var _products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.vue?vue&type=script&lang=js& */ "./resources/js/components/main/opening_balances/products.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _products_vue_vue_type_template_id_0398262c___WEBPACK_IMPORTED_MODULE_0__.render,
  _products_vue_vue_type_template_id_0398262c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/opening_balances/products.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/opening_balances/products.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/main/opening_balances/products.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/opening_balances/products.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/opening_balances/products.vue?vue&type=template&id=0398262c&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/main/opening_balances/products.vue?vue&type=template&id=0398262c& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_0398262c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_0398262c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_products_vue_vue_type_template_id_0398262c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./products.vue?vue&type=template&id=0398262c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/opening_balances/products.vue?vue&type=template&id=0398262c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/opening_balances/products.vue?vue&type=template&id=0398262c&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/opening_balances/products.vue?vue&type=template&id=0398262c& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
            [
              _c("v-divider", { attrs: { inset: "" } }),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c(
                    "v-data-table",
                    {
                      staticClass: "elevation-1",
                      staticStyle: {
                        width: "100%",
                        "font-weight": "initial",
                        "font-size": "14px",
                        "min-height": "400px"
                      },
                      attrs: {
                        "disable-pagination": "",
                        headers: _vm.header,
                        items: _vm.balance.details,
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
                                    _vm._v("قائمة الأصناف")
                                  ]),
                                  _vm._v(" "),
                                  _c("v-divider", {
                                    staticClass: "mx-4",
                                    attrs: { inset: "", vertical: "" }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", sm: "6", md: "4" } },
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
                                          change: function($event) {
                                            return _vm.addProductToBalance(true)
                                          }
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
                                    { attrs: { cols: "12", sm: "6", md: "4" } },
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
                                            return _vm.searchProductByBarcode(
                                              "barcode"
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
                          key: "footer",
                          fn: function() {
                            return [
                              _c("div", { staticStyle: { height: "100px" } }),
                              _vm._v(" "),
                              _c("v-divider", {
                                staticClass: "mx-4",
                                attrs: { inset: "" }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-toolbar",
                                { attrs: { flat: "", color: "white" } },
                                [
                                  _c("v-divider", {
                                    staticClass: "mx-4",
                                    attrs: { inset: "", vertical: "" }
                                  }),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass:
                                        "btn btn-info m-b-5 m-r-2 white--text",
                                      attrs: { color: "text--white", text: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.submit()
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-icon",
                                        { staticClass: "white--text" },
                                        [_vm._v("mdi-plus-box")]
                                      ),
                                      _vm._v("حفظ\n              ")
                                    ],
                                    1
                                  )
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
                            return [_c("div", [_vm._v(_vm._s(item.ar_name))])]
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
                                                          disabled: !item.has_expiration_date,
                                                          flat: "",
                                                          outlined: "",
                                                          autocomplete: "off",
                                                          "hide-no-data": "",
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
                                                    autocomplete: "off",
                                                    "hide-no-data": "",
                                                    "hide-details": ""
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
                                      _vm.$set(item, "expires_at_is_down", $$v)
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
                                        return _vm.changeExpirationDate(item)
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
                                  autocomplete: "off",
                                  "single-line": "",
                                  outlined: "",
                                  "hide-details":
                                    item.hide_quantity_valid_message,
                                  rules: item.quantity_valid
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
                        }
                      ])
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);