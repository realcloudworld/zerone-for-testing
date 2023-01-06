"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_receipts_receiptPrint_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receiptPrint.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receiptPrint.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Receipt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Receipt */ "./resources/js/apis/Receipt.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      title: [["سند استلام"], ["سند صرف"]],
      //----
      act: "",
      route: "",
      person_info: "معلومات المورد",
      person_type: "suppliers",
      persona: "المورد",
      //----
      receipt: {
        type_id: 1,
        payment_type_id: 1,
        person_company_name: "الحياة",
        person_name: "محمد الرحباني",
        person_phone01: "9282927891",
        person_email: "nibrascom@mail.com",
        reference: "REC012",
        is_input: "",
        company_name: "السري للصرافة والتحويلات",
        company_address: "اليمن - صنعاء - شارع التحرير",
        company_mobile: "+96775521104",
        company_website: "www.zerone.ye",
        account_ar_name: "النقدية في الصندوق",
        date: "12-21-2010",
        maturity_date: "12-21-2023",
        amount: 125.67,
        company_email: "dr.nibrascom@gmail.com",
        receipt_bills: [{
          id: 1,
          reference: "PUR012",
          type_id: 1,
          amount: 21,
          remaining_amount: 13,
          created_at: "20-12-2021"
        }, {
          id: 1,
          reference: "PUR012",
          type_id: 1,
          amount: 10,
          remaining_amount: 13,
          created_at: "20-12-2021"
        }, {
          id: 1,
          reference: "PUR012",
          type_id: 1,
          amount: 21,
          remaining_amount: 13,
          created_at: "20-12-2021"
        }]
      }
    };
  },
  methods: {
    used_amount: function used_amount() {
      var used = 0;
      this.receipt.receipt_bills.forEach(function (element) {
        used += element.amount;
      });
      return used.toFixed(2);
    },
    unused_amount: function unused_amount() {
      var used = 0;
      this.receipt.receipt_bills.forEach(function (element) {
        used += element.amount;
      });
      return this.receipt.amount - used;
    },
    receipt_type: function receipt_type() {},
    bill_type: function bill_type(item) {
      if (item.type_id == 1) return "فاتورة مشتريات";
    },
    receipt_title: function receipt_title() {
      var x0 = "مدفوعة لـ",
          x1 = "(المورد)";
      if (this.receipt.document_type_id == 2) x1 = "(العميل)";
      if (this.receipt.payment_type_id == 2) x0 = "مستلمة من ";
      return x0 + x1;
    },
    createPage: function createPage(to, status) {
      var _this = this;

      this.route = to.fullPath.replace(/^\/([^\/]*).*$/, "$1");

      if (this.route == "invoice") {
        this.act = "output";
        this.person_type = "customers";
        this.person_info = "معلومات العميل";
        this.persona = "العميل";
        this.receipt.document_type_id = 2;
        this.receipt.is_input = 0;
      }

      if (this.route == "purchase") {
        this.act = "input";
        console.log("sss");
        this.person_type = "suppliers";
        this.person_info = "معلومات المورد";
        this.persona = "المورد";
        this.receipt.document_type_id = 1;
        this.receipt.is_input = 1;
      }

      if (this.route == "invoice_return") {
        this.act = "input";
        this.return_receipt = true;
        this.person_type = "customers";
        this.person_info = "معلومات العميل";
        this.persona = "العميل";
        this.receipt.is_input = 1;
        this.receipt.document_type_id = 4;
      }

      if (this.route == "purchase_return") {
        this.act = "output";
        this.return_receipt = true;
        this.cols = 12;
        this.main_receipt = false;
        this.person_type = "customers";
        this.person_info = "معلومات المورد";
        this.persona = "المورد";
        this.receipt.document_type_id = 3;
        this.receipt.is_input = 0;
      }

      _apis_Receipt__WEBPACK_IMPORTED_MODULE_0__.default.print(this.$route.params.id, this.receipt.document_type_id).then(function (response) {
        _this.receipt = response.data;
      });
    }
  },
  created: function created() {
    this.createPage(this.$route, "new");
  }
});

/***/ }),

/***/ "./resources/js/apis/Receipt.js":
/*!**************************************!*\
  !*** ./resources/js/apis/Receipt.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  print: function print(id, document_type_id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/receipts/print/" + id, {
      params: {
        document_type_id: document_type_id
      }
    });
  },
  store: function store(receipt) {
    console.log('receipt', receipt);
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/receipts", receipt);
  },
  storeOne: function storeOne(receipt) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/receipts/one", receipt);
  },
  getOne: function getOne(id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/receipts/" + id);
  },
  create: function create(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/receipts/create", {
      params: params
    });
  },
  update: function update(receipt) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.put("/receipts", receipt);
  },
  "delete": function _delete(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/receipts", {
      params: params
    });
  },
  deleteSupDoc: function deleteSupDoc(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/receipts/sup_doc", {
      params: params
    });
  },
  getAll: function getAll(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/receipts/all", {
      params: params
    });
  },
  getNewReference: function getNewReference(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/receipts/new", {
      params: params
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receiptPrint.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receiptPrint.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/*! CSS Used from: Embedded */\n.company-info {\r\n  text-align: center;\r\n  font-size: 13px;\n}\n.receipt-info {\r\n  float: right;\r\n  font-size: 13px;\r\n  width: 40%;\n}\n.pdf-data {\r\n  color: #000000 !important;\n}\n.ar_content {\r\n  /*font-family: \"cairo\", sans-serif !important;*/\n}\r\n/*! CSS Used from: Embedded */\n.row:before,\r\n.row:after {\r\n  display: table;\r\n  content: \" \";\n}\n.row:after {\r\n  clear: both;\n}\n.col {\r\n  float: left;\r\n  position: relative;\r\n  min-height: 1px;\n}\n.ar .col {\r\n  float: right;\n}\n.col-xs-4 {\r\n  width: 33.33333333%;\n}\n.col-xs-6 {\r\n  width: 50%;\n}\n.col-xs-8 {\r\n  width: 66.66666667%;\n}\n.col-xs-12 {\r\n  width: 100%;\n}\n.mb5 {\r\n  margin-bottom: 0.313em;\n}\nthead {\r\n  display: table-header-group;\n}\ntr {\r\n  page-break-inside: avoid;\n}\n.content {\r\n  padding: 10mm;\r\n  /*font-family: Cairo !important;*/\n}\n.ar.content {\r\n  direction: rtl;\n}\n.pdf-header {\r\n  border-bottom: 1px solid #ddd;\r\n  padding-bottom: 6px;\n}\n.header-logo-container {\r\n  text-align: left;\n}\n.ar .header-logo-container {\r\n  text-align: right;\n}\n.header-info-container {\r\n  text-align: right;\r\n  line-height: 1em;\n}\n.ar .header-info-container {\r\n  text-align: left;\n}\n.header-org-info {\r\n  font-size: 9pt;\n}\n.invoice-title {\r\n  text-transform: uppercase;\r\n  font-size: 28px;\r\n  font-weight: 500;\r\n  margin-bottom: 0px;\r\n  margin-top: 0px;\r\n  line-height: 1.1em;\n}\n.pdf-brief {\r\n  margin-top: 10px;\n}\n.brief-field-title {\r\n  color: #8c979d;\r\n  font-weight: bold;\r\n  line-height: 1em;\n}\n.brief-invoice-container {\r\n  text-align: right;\n}\n.ar .brief-invoice-container {\r\n  text-align: left;\n}\n.document-info-field-title {\r\n  text-align: right;\r\n  width: 50%;\n}\n.document-info-field-value {\r\n  text-align: left;\r\n  width: 40%;\n}\n.ar .document-info-field-title {\r\n  text-align: left;\r\n  width: 50%;\n}\n.ar .document-info-field-value {\r\n  text-align: right;\r\n  width: 40%;\n}\n.document-info-wrapper {\r\n  float: right;\r\n  font-size: 8pt;\n}\n.ar .document-info-wrapper {\r\n  float: left;\n}\n.document-amount-container {\r\n  background-color: #ddd;\r\n  vertical-align: middle;\n}\n.document-amount-container td {\r\n  padding-top: 4px;\r\n  padding-bottom: 4px;\n}\n.pdf-data {\r\n  margin-top: 10px;\n}\n.data-table {\r\n  font-size: 9pt;\r\n  line-height: 1.1em;\n}\n.item-list-col-hash {\r\n  width: 3% !important;\r\n  text-align: left;\r\n  font-weight: bold;\n}\n.ar .item-list-col-hash {\r\n  text-align: right;\n}\n.row.additional-info {\r\n  margin-top: 20px;\n}\n.center-align-row td {\r\n  text-align: center;\r\n  vertical-align: middle;\n}\r\n/*! CSS Used from: Embedded */\n* {\r\n  box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\n}\n.page {\r\n  width: 210mm;\r\n  padding: 20mm;\r\n  margin: 10mm auto;\r\n  border: 1px #d3d3d3 solid;\r\n  border-radius: 5px;\r\n  background: white;\r\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n}\n@media print {\n.page {\r\n    margin: 0;\r\n    border: initial;\r\n    border-radius: initial;\r\n    width: initial;\r\n    min-height: initial;\r\n    box-shadow: initial;\r\n    background: initial;\r\n    page-break-after: always;\n}\n}\r\n/*! CSS Used fontfaces */\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receiptPrint.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receiptPrint.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_receiptPrint_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./receiptPrint.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receiptPrint.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_receiptPrint_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_receiptPrint_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/main/receipts/receiptPrint.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/main/receipts/receiptPrint.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _receiptPrint_vue_vue_type_template_id_6a24ae44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receiptPrint.vue?vue&type=template&id=6a24ae44& */ "./resources/js/components/main/receipts/receiptPrint.vue?vue&type=template&id=6a24ae44&");
/* harmony import */ var _receiptPrint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./receiptPrint.vue?vue&type=script&lang=js& */ "./resources/js/components/main/receipts/receiptPrint.vue?vue&type=script&lang=js&");
/* harmony import */ var _receiptPrint_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./receiptPrint.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/main/receipts/receiptPrint.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _receiptPrint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _receiptPrint_vue_vue_type_template_id_6a24ae44___WEBPACK_IMPORTED_MODULE_0__.render,
  _receiptPrint_vue_vue_type_template_id_6a24ae44___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/receipts/receiptPrint.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/receipts/receiptPrint.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/main/receipts/receiptPrint.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_receiptPrint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./receiptPrint.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receiptPrint.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_receiptPrint_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/receipts/receiptPrint.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/main/receipts/receiptPrint.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_receiptPrint_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./receiptPrint.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receiptPrint.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/main/receipts/receiptPrint.vue?vue&type=template&id=6a24ae44&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/main/receipts/receiptPrint.vue?vue&type=template&id=6a24ae44& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_receiptPrint_vue_vue_type_template_id_6a24ae44___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_receiptPrint_vue_vue_type_template_id_6a24ae44___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_receiptPrint_vue_vue_type_template_id_6a24ae44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./receiptPrint.vue?vue&type=template&id=6a24ae44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receiptPrint.vue?vue&type=template&id=6a24ae44&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receiptPrint.vue?vue&type=template&id=6a24ae44&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/receipts/receiptPrint.vue?vue&type=template&id=6a24ae44& ***!
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
    { staticClass: "page content ar" },
    [
      _c("div", { staticClass: "receipt-header" }, [
        _c("div", { staticClass: "company-info" }, [
          _c("h4", [_vm._v(_vm._s(_vm.receipt.company_name))]),
          _vm._v(" "),
          _c("div", [_vm._v(_vm._s(_vm.receipt.company_address))]),
          _vm._v(" "),
          _c("div", [_vm._v(_vm._s(_vm.receipt.company_mobile))]),
          _vm._v(" "),
          _c("div", [_vm._v(_vm._s(_vm.receipt.company_website))]),
          _vm._v(" "),
          _c("div", [_vm._v(_vm._s(_vm.receipt.company_email))])
        ])
      ]),
      _vm._v(" "),
      _c("div", [
        _c("div", { staticClass: "receipt-info" }, [
          _c("div", [
            _c("div", [
              _c("h4", [
                _vm._v(_vm._s(_vm.title[_vm.receipt.document_type_id][0]))
              ])
            ]),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              {
                staticStyle: {
                  width: "50%",
                  float: "right",
                  "padding-right": "10px"
                }
              },
              [
                _c("div", { staticStyle: { "text-align": "right" } }, [
                  _vm._v(_vm._s(_vm.receipt.reference))
                ]),
                _vm._v(" "),
                _c("div", { staticStyle: { "text-align": "right" } }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.receipt.date.split(" ")[0]) +
                      "\n          "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticStyle: { "text-align": "right" } }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.receipt.account_ar_name) +
                      "\n          "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticStyle: { "text-align": "right" } }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.receipt.amount.toFixed(2)) +
                      "\n          "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticStyle: { "text-align": "right" } }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.used_amount()) +
                      "\n          "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticStyle: { "text-align": "right" } }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.unused_amount()) +
                      "\n          "
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("div")
          ])
        ]),
        _vm._v(" "),
        _c("div", {
          staticStyle: { width: "20%", height: "1px", float: "right" }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "receipt-info" }, [
          _c("div", [
            _c("div", [
              _c("h4", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.receipt_title()) +
                    "\n          "
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              {
                staticStyle: {
                  width: "50%",
                  float: "right",
                  "padding-right": "10px"
                }
              },
              [
                _c("div", { staticStyle: { "text-align": "right" } }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.receipt.person_company_name) +
                      "\n          "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticStyle: { "text-align": "right" } }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.receipt.person_name) +
                      "\n          "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticStyle: { "text-align": "right" } }, [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.receipt.person_phone01) +
                      "\n          "
                  )
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", [
              _vm._v(
                "\n          " + _vm._s(_vm.receipt.person_email) + "\n        "
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticStyle: { clear: "both" } })
      ]),
      _vm._v(" "),
      _c("v-divider", { staticClass: "mb-8 mt-2" }),
      _vm._v(" "),
      _c("div", { staticClass: "row pdf-data" }, [
        _c("div", { staticClass: "col-xs-12" }, [
          _c(
            "table",
            {
              staticClass: "data-table",
              attrs: { cellpadding: "1", cellspacing: "5", width: "100%" }
            },
            [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "tbody",
                { staticClass: "center-align-row" },
                _vm._l(_vm.receipt.receipt_bills, function(receipt_bill) {
                  return _c("tr", { key: receipt_bill.id }, [
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          _vm.receipt.receipt_bills.indexOf(receipt_bill) + 1
                        )
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(receipt_bill.reference))]),
                    _vm._v(" "),
                    _c("td", [
                      _c("strong", { staticClass: "ar_content" }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.bill_type(receipt_bill)) +
                            "\n              "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(receipt_bill.amount) + " ريال")]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(receipt_bill.remaining_amount_at_all) + " ريال"
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(receipt_bill.created_at.split("T")[0]))
                    ])
                  ])
                }),
                0
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _vm._m(3)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { width: "50%", float: "right" } }, [
      _c("div", { staticStyle: { "text-align": "left" } }, [_vm._v("المرجع:")]),
      _vm._v(" "),
      _c("div", { staticStyle: { "text-align": "left" } }, [
        _vm._v("تاريخ الاصدار:")
      ]),
      _vm._v(" "),
      _c("div", { staticStyle: { "text-align": "left" } }, [_vm._v("الحساب:")]),
      _vm._v(" "),
      _c("div", { staticStyle: { "text-align": "left" } }, [
        _vm._v("قيمة السند:")
      ]),
      _vm._v(" "),
      _c("div", { staticStyle: { "text-align": "left" } }, [
        _vm._v("المبلغ المستخدم:")
      ]),
      _vm._v(" "),
      _c("div", { staticStyle: { "text-align": "left" } }, [
        _vm._v("المبلغ غير المستخدم:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { width: "50%", float: "right" } }, [
      _c("div", { staticStyle: { "text-align": "left" } }, [_vm._v("الشركة:")]),
      _vm._v(" "),
      _c("div", { staticStyle: { "text-align": "left" } }, [
        _vm._v("جهة الاتصال:")
      ]),
      _vm._v(" "),
      _c("div", { staticStyle: { "text-align": "left" } }, [
        _vm._v("رقم الهاتف:")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "ar_content" }, [
        _c("th", { staticClass: "item-list-col-hash" }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", [_vm._v("رقم المرجع")]),
        _vm._v(" "),
        _c("th", [_vm._v("النوع")]),
        _vm._v(" "),
        _c("th", [_vm._v("المبلغ")]),
        _vm._v(" "),
        _c("th", [_vm._v("المبلغ المستحق")]),
        _vm._v(" "),
        _c("th", [_vm._v("التاريخ")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row additional-info" }, [
      _c("div", { staticClass: "col-xs-12" })
    ])
  }
]
render._withStripped = true



/***/ })

}]);