"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_products_inventory_transfers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/inventory_transfers.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/inventory_transfers.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Product */ "./resources/js/apis/Product.js");
/* harmony import */ var _apis_InventoryTransfer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apis/InventoryTransfer */ "./resources/js/apis/InventoryTransfer.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      someVariableUnderYourControl: 1,
      is_new_stock: true,
      index_of_selected_product: "",
      selected_item: [],
      sets: [],
      dialog: false,
      account_div_update: 0,
      revenue_accounts: [],
      expense_accounts: [],
      inventories: [],
      take_expense_account: [],
      name_search: "",
      searched_barcode: "",
      found_products: [],
      loading: false,
      selected_product: [],
      stock_header: [{
        text: "?????? ??????????????",
        align: "center",
        value: "bill_type_id",
        sortable: false
      }, {
        text: "?????? ??????????????",
        align: "center",
        value: "bill_id",
        sortable: false
      }, {
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
        text: "???????????? ???? ????????????",
        align: "center",
        value: "current_quantity",
        sortable: false
      }, {
        text: "???????????? ??????????????",
        align: "center",
        value: "actual_quantity",
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
        text: "?????????? ??????????",
        align: "center",
        value: "total",
        sortable: false
      }, {
        text: "???????? ",
        align: "center",
        value: "action"
      }],
      inventory_transfers: {
        stocktake_details: [],
        inventory_id: "",
        date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
        revenue_account_id: "",
        expense_account_id: "",
        description: ""
      },

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
      }],
      people: [{
        header: "Group 1"
      }, {
        name: "Sandra Adams"
      }, {
        name: "Ali Connors"
      }, {
        name: "Trevor Hansen"
      }, {
        name: "Tucker Smith"
      }, {
        divider: true
      }, {
        header: "Group 2"
      }, {
        name: "Britta Holt",
        group: "Group 2"
      }, {
        name: "Jane Smith ",
        group: "Group 2"
      }, {
        name: "John Smith",
        group: "Group 2"
      }, {
        name: "Sandra Williams",
        group: "Group 2"
      }],
      friends: ""
    };
  },
  methods: {
    bgblue: function bgblue(item) {
      if (item.id == "owners" || item.id == "revenues" || item.id == "expenses") $("#nib" + item.id).parent().addClass("first-level");
      if (this.account_div_update == 0) this.account_div_update += 1;
      return "";
    },
    deleteItem: function deleteItem(item) {
      this.inventory_transfers.stocktake_details.splice(this.inventory_transfers.stocktake_details.indexOf(item), 1);
    },
    actual_quantity_change: function actual_quantity_change(item) {
      var unit = item.units.find(function (elem) {
        return elem.pivot.id == item.unit_id;
      });
      console.log(unit);
      console.log("unit");
      item.actual_quantity_in_minor_unit = parseInt(item.actual_quantity * unit.pivot.contains);
      console.log(item.actual_quantity_in_minor_unit);
    },
    product_unit_change: function product_unit_change(item) {
      //alert(1)
      var unit = item.units.find(function (elem) {
        return elem.pivot.id == item.unit_id;
      });
      item.unit_price = unit.pivot.bought_price;
      item.current_quantity = parseInt(item.details[0].quantity_in_minor_unit / unit.pivot.contains);
      item.actual_quantity = item.current_quantity;
      item.actual_quantity_in_minor_unit = parseInt(item.actual_quantity * unit.pivot.contains);
      this.someVariableUnderYourControl++;
    },
    getProducts: function getProducts(val, type) {
      var _this = this;

      if (val.length > 2) {
        this.loading = true;
        var params = "";
        if (type == "barcode") params = {
          barcode: val,
          inventory_id: this.inventory_transfers.inventory_id
        };else params = {
          name: val,
          inventory_id: this.inventory_transfers.inventory_id
        }; // Simulated ajax query ajax

        _apis_Product__WEBPACK_IMPORTED_MODULE_0__.default.search(params).then(function (response) {
          _this.loading = false;
          console.log("hi", response.data);

          if (response.data.length !== 0) {
            _this.found_products = JSON.parse(JSON.stringify(response.data.products));
          }
        });
      }
    },
    submit: function submit() {
      console.log("this.inventory_transfers");
      console.log(this.inventory_transfers);
      console.log("this.inventory_transfers");
      if (this.is_new_stock) _apis_InventoryTransfer__WEBPACK_IMPORTED_MODULE_1__.default.store(this.inventory_transfers).then(function (response) {
        return console.log(response.data);
      });else _apis_InventoryTransfer__WEBPACK_IMPORTED_MODULE_1__.default.update(this.inventory_transfers).then(function (response) {
        return console.log(response.data);
      });
      console.log(this.inventory_transfers);
    },
    showThisProduct: function showThisProduct(selected_product) {
      if (this.inventory_transfers.stocktake_details.findIndex(function (elem) {
        return elem.id == selected_product.id;
      }) >= 0) return;
      selected_product.unit_id = selected_product.units[selected_product.main_bought_unit_id - 1].pivot.id;
      selected_product.unit_price = selected_product.units[selected_product.main_bought_unit_id - 1].pivot.bought_price;
      selected_product.quantity = 1;
      selected_product.current_quantity = selected_product.details[0].quantity_in_minor_unit / selected_product.units[selected_product.main_bought_unit_id - 1].pivot.contains;
      selected_product.actual_quantity = selected_product.current_quantity;
      selected_product.actual_quantity_in_minor_unit = parseInt(selected_product.actual_quantity * selected_product.units[selected_product.main_bought_unit_id - 1].pivot.contains);
      this.inventory_transfers.stocktake_details.unshift(selected_product);
      return;
    },
    searchAndAddToStockTackes: function searchAndAddToStockTackes() {
      var _this2 = this;

      var params = {
        barcode: this.searched_barcode,
        inventory_id: 1
      };
      _apis_Product__WEBPACK_IMPORTED_MODULE_0__.default.inventory_transfersBarcodeSearch(params).then(function (response) {
        if (response.data.products.length == 0) {
          _this2.is_exists = [ false || "?????????? ?????? ?????????? "];
          return;
        }

        _this2.is_exists = [true];
        response.data.products[0].actual_quantity = 0;
        response.data.products[0].actual_quantity_in_minor_unit = 0;
        _this2.selected_item = JSON.parse(JSON.stringify(response.data.products[0]));
        if (_this2.selected_item.details.length == 0) return;

        if (_this2.selected_item.details.length == 1) {
          _this2.showThisProduct(_this2.selected_item);
        }

        var products_grouped = true;

        if (products_grouped) {
          _this2.selected_item.details[0].quantity_in_minor_unit = _this2.selected_item.quantity_in_minor_unit; // this.selected_item.details[0].quantity_in_minor_unit =
          //   this.selected_item.details.reduce(
          //     (a, b) => +a + +b.quantity_in_minor_unit,
          //     0
          //   );

          console.log("this.selected_item");
          console.log(_this2.selected_item);

          _this2.showThisProduct(_this2.selected_item);

          return;
        }

        _this2.sets = _this2.selected_item.details;
        _this2.dialog = true;

        _this2.$nextTick().then(function () {
          var listElm = bill.querySelector("ul"); // Mark first list item

          _this2.$nextTick(function () {
            listElm.firstElementChild.focus();
            var selectedElm = bill.activeElement,
                goToStart,
                // map actions to event's key
            action = {
              ArrowUp: "previous",
              Up: "previous",
              ArrowDown: "next",
              Down: "next"
            };

            var f = function f(e) {
              if (e.key === "Enter") {
                var parent = selectedElm.parentNode;
                console.log(parent);
                console.log(selectedElm);
                _this2.index_of_selected_product = Array.prototype.indexOf.call(listElm.children, selectedElm);
                var selected_item = JSON.parse(JSON.stringify(_this2.selected_item));
                console.log(selected_item);
                selected_item["details"][0] = selected_item["details"][_this2.index_of_selected_product];

                _this2.showThisProduct(selected_item);

                console.log("index");
                console.log("index");
                window.removeEventListener("keydown", f);
                console.log("input_barcode");
                console.log(input_barcode);
                console.log("input_barcode");
                var input_barcode = bill.getElementById("barcode");

                _this2.$nextTick(function () {
                  input_barcode.focus();
                });

                console.log("selectedElm");
                console.log(selectedElm);
                console.log("selectedElm");
                _this2.dialog = false;
                return;
              } //e.preventDefault();


              console.log(selectedElm);
              selectedElm = selectedElm[action[e.key] + "ElementSibling"]; // loop if top/bottom edges reached or "home"/"end" keys clicked

              if (!selectedElm || e.key == "Home" || e.key == "End") {
                goToStart = action[e.key] == "next" || e.key == "Home";
                selectedElm = listElm.children[goToStart ? 0 : listElm.children.length - 1];
              }

              selectedElm.focus();
            };

            window.addEventListener("keydown", f);
          }); // Event listener

        }); //-----add
        //---------
        //selected_product["bill_type_id"] = 1; // bill
        //selected_product["product_id"] = selected_product["id"]; // bill

      });
    },
    addProductToBill: function addProductToBill() {
      console.log(this.bill.details);
      console.log("seles", this.selected_product); //set defaultid from main purchsedid

      this.selected_product.unit_id = this.selected_product.units[this.selected_product.main_bought_unit_id - 1].pivot.id;
      this.selected_product.unit_price = this.selected_product.units[this.selected_product.main_bought_unit_id - 1].pivot.bought_price;
      this.selected_product.quantity = 1;
      console.log("nnj", this.selected_product.unit_id);
      this.bill.details.unshift(JSON.parse(JSON.stringify(this.selected_product)));
      console.log("nib", this.bill.details);
      this.selected_product = [];
    }
  },
  created: function created() {
    var _this3 = this;

    _apis_InventoryTransfer__WEBPACK_IMPORTED_MODULE_1__.default.create().then(function (response) {
      _this3.revenue_accounts = [{
        header: "???????????? ???????? ????????????"
      }].concat(_toConsumableArray(response.data[3]), [{
        divider: true
      }, {
        header: "???????????? ??????????????????"
      }], _toConsumableArray(response.data[4]));
      console.log(_this3.revenue_accounts);
      _this3.expense_accounts = [{
        header: "???????????? ???????? ????????????"
      }].concat(_toConsumableArray(response.data[3]), [{
        divider: true
      }, {
        header: "???????????? ??????????????????"
      }], _toConsumableArray(response.data[5]));
      _this3.inventories = response.data["inventories"];
    });
  },
  watch: {
    name_search: function name_search(val) {
      val && val !== this.selected_product.ar_name && this.getProducts(val, "name");
    }
  }
});

/***/ }),

/***/ "./resources/js/apis/InventoryTransfer.js":
/*!************************************************!*\
  !*** ./resources/js/apis/InventoryTransfer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  create: function create() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/inventory_transfers/create");
  },
  store: function store(inventory_transfer) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/inventory_transfers", inventory_transfer);
  },
  update: function update(inventory_transfer) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.put("/inventory_transfers", inventory_transfer);
  },
  postCreate: function postCreate(inventory_transfer) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/inventory_transfers/create", inventory_transfer);
  },
  get: function get(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/inventory_transfers/", {
      params: params
    });
  },
  search: function search(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/inventory_transfers/search", {
      params: params
    });
  },
  documentBarcodeSearch: function documentBarcodeSearch(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/document/barcode/" + params.barcode);
  },
  invoiceBarcodeSearch: function invoiceBarcodeSearch(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/invoice/barcode/" + params.barcode);
  },
  "delete": function _delete(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/inventory_transfers/", {
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/inventory_transfers.vue?vue&type=style&index=0&id=3975e975&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/inventory_transfers.vue?vue&type=style&index=0&id=3975e975&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-application ol[data-v-3975e975],\r\n.v-application ul[data-v-3975e975] {\r\n  padding-left: 0;\n}\nul[data-v-3975e975] {\r\n  list-style: none;\r\n  border: 1px solid silver;\r\n  max-height: 170px;\r\n  padding: 0;\r\n  margin: 0;\r\n  scroll-behavior: smooth; /* nice smooth movement */\r\n  overflow: hidden; /* set to hidden by OP's request */\n}\nli[data-v-3975e975] {\r\n  padding: 0.5em;\r\n  margin: 0;\n}\nli[data-v-3975e975]:focus {\r\n  background: lightsalmon;\r\n  outline: none;\n}\n.theme--light.v-subheader[data-v-3975e975] {\r\n  background: rgb(255, 231, 243);\r\n  justify-content: center;\n}\n.first-level[data-v-3975e975] {\r\n  background: rgb(103, 133, 196);\r\n  justify-content: center;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/inventory_transfers.vue?vue&type=style&index=0&id=3975e975&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/inventory_transfers.vue?vue&type=style&index=0&id=3975e975&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_transfers_vue_vue_type_style_index_0_id_3975e975_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./inventory_transfers.vue?vue&type=style&index=0&id=3975e975&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/inventory_transfers.vue?vue&type=style&index=0&id=3975e975&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_transfers_vue_vue_type_style_index_0_id_3975e975_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_transfers_vue_vue_type_style_index_0_id_3975e975_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/main/products/inventory_transfers.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/main/products/inventory_transfers.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inventory_transfers_vue_vue_type_template_id_3975e975_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inventory_transfers.vue?vue&type=template&id=3975e975&scoped=true& */ "./resources/js/components/main/products/inventory_transfers.vue?vue&type=template&id=3975e975&scoped=true&");
/* harmony import */ var _inventory_transfers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inventory_transfers.vue?vue&type=script&lang=js& */ "./resources/js/components/main/products/inventory_transfers.vue?vue&type=script&lang=js&");
/* harmony import */ var _inventory_transfers_vue_vue_type_style_index_0_id_3975e975_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory_transfers.vue?vue&type=style&index=0&id=3975e975&scoped=true&lang=css& */ "./resources/js/components/main/products/inventory_transfers.vue?vue&type=style&index=0&id=3975e975&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _inventory_transfers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _inventory_transfers_vue_vue_type_template_id_3975e975_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _inventory_transfers_vue_vue_type_template_id_3975e975_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3975e975",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/products/inventory_transfers.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/products/inventory_transfers.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/main/products/inventory_transfers.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_transfers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./inventory_transfers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/inventory_transfers.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_transfers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/products/inventory_transfers.vue?vue&type=style&index=0&id=3975e975&scoped=true&lang=css&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/main/products/inventory_transfers.vue?vue&type=style&index=0&id=3975e975&scoped=true&lang=css& ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_transfers_vue_vue_type_style_index_0_id_3975e975_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./inventory_transfers.vue?vue&type=style&index=0&id=3975e975&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/inventory_transfers.vue?vue&type=style&index=0&id=3975e975&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/main/products/inventory_transfers.vue?vue&type=template&id=3975e975&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/main/products/inventory_transfers.vue?vue&type=template&id=3975e975&scoped=true& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_transfers_vue_vue_type_template_id_3975e975_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_transfers_vue_vue_type_template_id_3975e975_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inventory_transfers_vue_vue_type_template_id_3975e975_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./inventory_transfers.vue?vue&type=template&id=3975e975&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/inventory_transfers.vue?vue&type=template&id=3975e975&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/inventory_transfers.vue?vue&type=template&id=3975e975&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/inventory_transfers.vue?vue&type=template&id=3975e975&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    [
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "600px", persistent: "" },
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
                "p",
                {
                  staticStyle: {
                    margin: "0 10px",
                    "font-size": "14px",
                    padding: "10pxz"
                  }
                },
                [
                  _vm._v(
                    "\n        ???? ?????????????? ?????????? ?????????????? ?????????? ??????????\n      "
                  )
                ]
              ),
              _vm._v(" "),
              _c("v-card-text", [
                _c(
                  "ul",
                  _vm._l(_vm.sets, function(set) {
                    return _c(
                      "li",
                      { key: set + "d", attrs: { tabIndex: "-1" } },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(
                              set.id +
                                " - " +
                                set.bill_type_id +
                                " - " +
                                set.bill_id +
                                set.expires_at
                            ) +
                            "\n          "
                        )
                      ]
                    )
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", text: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("\n          Disagree\n        ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", text: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("\n          Agree\n        ")]
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
        "v-card",
        [
          _c("v-card-title", [
            _c(
              "span",
              { key: _vm.someVariableUnderYourControl, staticClass: "text-h5" },
              [_vm._v("\n        ?????? ??????????????\n      ")]
            )
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
                    { staticClass: "justify-space-between" },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", lg: "5" } },
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { staticClass: "pa-0", attrs: { cols: "12" } },
                                [
                                  _c("v-autocomplete", {
                                    attrs: {
                                      flat: "",
                                      outlined: "",
                                      "no-data": "",
                                      "no-data-text": "",
                                      "non-linear": "",
                                      items: _vm.inventories,
                                      "item-text": "ar_name",
                                      "item-value": "id",
                                      prefix: " ???? ???????????? | "
                                    },
                                    model: {
                                      value:
                                        _vm.inventory_transfers.inventory_id,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.inventory_transfers,
                                          "inventory_id",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "inventory_transfers.inventory_id"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { staticClass: "pa-0", attrs: { cols: "12" } },
                                [
                                  _c("v-autocomplete", {
                                    attrs: {
                                      flat: "",
                                      outlined: "",
                                      "no-data": "",
                                      "no-data-text": "",
                                      "non-linear": "",
                                      items: _vm.inventories,
                                      "item-text": "ar_name",
                                      "item-value": "id",
                                      prefix: " ?????? ???????????? | "
                                    },
                                    model: {
                                      value:
                                        _vm.inventory_transfers.inventory_id,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.inventory_transfers,
                                          "inventory_id",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "inventory_transfers.inventory_id"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { staticClass: "pa-0", attrs: { cols: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      outlined: "",
                                      prefix: " ?????????????? | "
                                    },
                                    model: {
                                      value: _vm.inventory_transfers.date,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.inventory_transfers,
                                          "date",
                                          $$v
                                        )
                                      },
                                      expression: "inventory_transfers.date"
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
                        "v-col",
                        { attrs: { cols: "12", lg: "5" } },
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { staticClass: "pa-0", attrs: { cols: "12" } },
                                [
                                  _c("v-textarea", {
                                    attrs: {
                                      rows: "3",
                                      outlined: "",
                                      prefix: " ??????????* | "
                                    },
                                    model: {
                                      value:
                                        _vm.inventory_transfers.description,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.inventory_transfers,
                                          "description",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "inventory_transfers.description"
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
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-row", [_c("small", [_vm._v("*indicates required field")])]),
              _vm._v(" "),
              _c(
                "v-row",
                [
                  _c(
                    "v-data-table",
                    {
                      staticClass: "elevation-1",
                      staticStyle: { width: "100%" },
                      attrs: {
                        "disable-pagination": "",
                        headers: _vm.stock_header,
                        items: _vm.inventory_transfers.stocktake_details,
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
                                          change: _vm.addProductToBill
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
                                          id: "barcode",
                                          autocomplete: "off",
                                          label: "????????????????",
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
                                            return _vm.searchAndAddToStockTackes.apply(
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
                            return [_c("div", [_vm._v(_vm._s(item.ar_name))])]
                          }
                        },
                        {
                          key: "item.expires_at",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _vm._v(
                                "\n            " +
                                  _vm._s(
                                    item.expires_at &&
                                      item.expires_at.split(" ")[0]
                                  ) +
                                  "\n          "
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
                                  "no-filter": "",
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
                          key: "item.bill_id",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _vm._v(
                                "\n            " +
                                  _vm._s(item.details[0].bill_id) +
                                  "\n          "
                              )
                            ]
                          }
                        },
                        {
                          key: "item.bill_type_id",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _vm._v(
                                "\n            " +
                                  _vm._s(item.details[0].bill_type_id) +
                                  "\n          "
                              )
                            ]
                          }
                        },
                        {
                          key: "item.current_quantity",
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
                                  outlined: ""
                                },
                                model: {
                                  value: item.current_quantity,
                                  callback: function($$v) {
                                    _vm.$set(item, "current_quantity", $$v)
                                  },
                                  expression: "item.current_quantity"
                                }
                              })
                            ]
                          }
                        },
                        {
                          key: "item.actual_quantity",
                          fn: function(ref) {
                            var item = ref.item
                            return [
                              _c("v-text-field", {
                                attrs: {
                                  type: "number",
                                  min: "0",
                                  "hide-no-data": "",
                                  "hide-details": "",
                                  autocomplete: "off",
                                  "single-line": "",
                                  outlined: ""
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.actual_quantity_change(item)
                                  }
                                },
                                model: {
                                  value: item.actual_quantity,
                                  callback: function($$v) {
                                    _vm.$set(item, "actual_quantity", $$v)
                                  },
                                  expression: "item.actual_quantity"
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
                              _vm._v(
                                "\n            " +
                                  _vm._s(
                                    (item.actual_quantity -
                                      item.current_quantity) *
                                      item.unit_price
                                  ) +
                                  "\n          "
                              )
                            ]
                          }
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
                [_vm._v("\n        ??????????\n      ")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "blue darken-1", text: "" },
                  on: { click: _vm.submit }
                },
                [_vm._v(" ?????? ")]
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