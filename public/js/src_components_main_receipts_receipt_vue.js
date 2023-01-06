(self["webpackChunkvue_electron"] = self["webpackChunkvue_electron"] || []).push([["src_components_main_receipts_receipt_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/receipts/receipt.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/receipts/receipt.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_system_zerone_for_testing_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apis_Bill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../apis/Bill */ "./src/apis/Bill.js");
/* harmony import */ var _apis_Receipt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../apis/Receipt */ "./src/apis/Receipt.js");







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _receipt, _ref;

    return _ref = {
      starter_dialog: false,
      title: "سند مورد جديد",
      //----
      person_info: "معلومات المورد",
      person_type: "suppliers",
      persona: "المورد",
      //----
      route: "",
      from_accounts: [],
      types: [{
        id: 1,
        ar_name: "صرف"
      }, {
        id: 2,
        ar_name: "استلام"
      }],

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
      people: [],
      supplier: "",
      receipts: [],
      bills: [],
      headers: [{
        text: "م",
        align: "center",
        width: "5",
        sortable: false,
        value: "id"
      }, {
        text: "رقم الفاتورة",
        align: "center",
        value: "reference"
      }, {
        text: "تاريخ الاصدار",
        align: "center",
        sortable: false,
        value: "issue_date"
      }, {
        text: "تاريخ الاستحقاق",
        align: "center",
        sortable: false,
        value: "maturity_date"
      }, {
        text: "قيمة الفاتورة",
        align: "center",
        value: "total_amount"
      }, {
        text: "الباقي",
        align: "center",
        value: "remaining_amount_at_all"
      }]
    }, (0,C_system_zerone_for_testing_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "supplier", ""), (0,C_system_zerone_for_testing_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "date_is_down", false), (0,C_system_zerone_for_testing_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "receipt", (_receipt = {
      person_id: "",
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
      reference: ""
    }, (0,C_system_zerone_for_testing_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_receipt, "person_id", ""), (0,C_system_zerone_for_testing_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_receipt, "account_id", ""), (0,C_system_zerone_for_testing_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_receipt, "document_type_id", ""), (0,C_system_zerone_for_testing_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_receipt, "payment_type_id", ""), (0,C_system_zerone_for_testing_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_receipt, "description", ""), (0,C_system_zerone_for_testing_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_receipt, "amount", ""), _receipt)), _ref;
  },
  methods: {
    getBills: function getBills() {
      var _this = this;

      var bill_document_type_id = 1;
      if (this.route == "supplier" && this.receipt.payment_type_id == 1) bill_document_type_id = 1;else if (this.route == "supplier" && this.receipt.payment_type_id == 2) bill_document_type_id = 3;else if (this.route == "customer" && this.receipt.payment_type_id == 1) bill_document_type_id = 2;else if (this.route == "customer" && this.receipt.payment_type_id == 2) bill_document_type_id = 4;
      if (!this.receipt.person_id) return;
      _apis_Bill__WEBPACK_IMPORTED_MODULE_7__["default"].getAll({
        person_id: this.receipt.person_id,
        status_id: 0,
        search: {
          company_name: "",
          reference: "",
          minimum: "",
          maximum: "",
          status_id: "",
          date_from: "",
          date_to: "",
          payment_type_id: 1,
          document_type_id: bill_document_type_id
        }
      }).then(function (response) {
        return _this.bills = response.data.data;
      });
    },
    personInfo: function personInfo() {
      var _this2 = this;

      return this.people && this.people.find(function (elem) {
        return elem.id == _this2.receipt.person_id;
      });
    },
    checkExicting: function checkExicting() {},
    submit: function submit() {
      var _this3 = this;

      /* remove zero amount or not account methods */
      // this.bill.payment_methods = this.bill.payment_methods.filter(
      //   (elem) => elem.account_id != "" && elem.credit != 0
      // );
      this.starter_dialog = true;
      _apis_Receipt__WEBPACK_IMPORTED_MODULE_8__["default"].store(this.receipt).then(function (response) {
        _this3.starter_dialog = false;
      });
    },
    createPage: function createPage(to, status) {
      var _this4 = this;

      this.route = to.fullPath.substr(this.$route.fullPath.lastIndexOf("/") + 1);

      if (this.route == "supplier") {
        this.title = "سند مورد جديد";
        this.person_type = "supplier";
        this.person_info = "معلومات المورد";
        this.persona = "المورد";
        this.receipt.document_type_id = 5;
        this.receipt.payment_type_id = 1;
        this.document_type_id = 1; // فاتورة مشتريات افتراضيا
      }

      if (this.route == "customer") {
        this.title = "سند عميل جديد";
        this.person_type = "customers";
        this.person_info = "معلومات العميل";
        this.persona = "العميل";
        this.receipt.document_type_id = 6;
        this.receipt.payment_type_id = 2;
        this.document_type_id = 1; // فاتورة مبيعات افتراضيا
      }

      _apis_Receipt__WEBPACK_IMPORTED_MODULE_8__["default"].create({
        document_type_id: this.receipt.document_type_id
      }).then(function (response) {
        _this4.people = response.data.people.filter(function (elem) {
          return elem.name != "افتراضي";
        });
        _this4.from_accounts = response.data.accounts.accounts;
        _this4.receipt.reference = response.data.receipt.reference;
      });
    }
  },
  watch: {
    $route: function $route(to, from) {
      this.createPage(to, "old");
    }
  },
  created: function created() {
    this.route = this.$route.fullPath.substr(this.$route.fullPath.lastIndexOf("/") + 1);
    this.createPage(this.$route, "new");
  }
});

/***/ }),

/***/ "./src/apis/Bill.js":
/*!**************************!*\
  !*** ./src/apis/Bill.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./src/apis/Api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  upload: function upload(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].post("/excel/import/purchases", params);
  },
  store: function store(bill) {
    console.log("bill", bill);
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].post("/bills", bill);
  },
  get: function get(id, params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/bills" + "/" + id, {
      params: params
    });
  },
  print: function print(id, document_type_id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/bills/print/" + id, {
      params: {
        document_type_id: document_type_id
      }
    });
  },
  getAll: function getAll(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/bills" + "/all", {
      params: params
    });
  },
  update: function update(bill) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].put("/bills", bill);
  },
  "delete": function _delete(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/bills", {
      params: params
    });
  },
  getNewReference: function getNewReference(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/bills/new", {
      params: params
    });
  }
});

/***/ }),

/***/ "./src/apis/Receipt.js":
/*!*****************************!*\
  !*** ./src/apis/Receipt.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./src/apis/Api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  print: function print(id, document_type_id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/receipts/print/" + id, {
      params: {
        document_type_id: document_type_id
      }
    });
  },
  store: function store(receipt) {
    console.log('receipt', receipt);
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].post("/receipts", receipt);
  },
  storeOne: function storeOne(receipt) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].post("/receipts/one", receipt);
  },
  getOne: function getOne(id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/receipts/" + id);
  },
  create: function create(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/receipts/create", {
      params: params
    });
  },
  update: function update(receipt) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].put("/receipts", receipt);
  },
  "delete": function _delete(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/receipts", {
      params: params
    });
  },
  deleteSupDoc: function deleteSupDoc(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/receipts/sup_doc", {
      params: params
    });
  },
  getAll: function getAll(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/receipts/all", {
      params: params
    });
  },
  getNewReference: function getNewReference(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/receipts/new", {
      params: params
    });
  }
});

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var regexpFlags = __webpack_require__(/*! ../internals/regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getInternalState = (__webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js").get);
var UNSUPPORTED_DOT_ALL = __webpack_require__(/*! ../internals/regexp-unsupported-dot-all */ "./node_modules/core-js/internals/regexp-unsupported-dot-all.js");
var UNSUPPORTED_NCG = __webpack_require__(/*! ../internals/regexp-unsupported-ncg */ "./node_modules/core-js/internals/regexp-unsupported-ncg.js");

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt = uncurryThis(''.charAt);
var indexOf = uncurryThis(''.indexOf);
var replace = uncurryThis(''.replace);
var stringSlice = uncurryThis(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call(nativeExec, re1, 'a');
  call(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice(match.input, charsAdded);
        match[0] = stringSlice(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      call(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp = global.RegExp;

var UNSUPPORTED_Y = fails(function () {
  var re = $RegExp('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y || fails(function () {
  return !$RegExp('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y || fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

module.exports = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y
};


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-unsupported-dot-all.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-unsupported-dot-all.js ***!
  \**********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-unsupported-ncg.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-unsupported-ncg.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global.RegExp;

module.exports = fails(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $find = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").find);
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


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

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var exec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.test.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.test.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var DELEGATES_TO_EXEC = function () {
  var execCalled = false;
  var re = /[ac]/;
  re.exec = function () {
    execCalled = true;
    return /./.exec.apply(this, arguments);
  };
  return re.test('abc') === true && execCalled;
}();

var Error = global.Error;
var un$Test = uncurryThis(/./.test);

// `RegExp.prototype.test` method
// https://tc39.es/ecma262/#sec-regexp.prototype.test
$({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
  test: function (str) {
    var exec = this.exec;
    if (!isCallable(exec)) return un$Test(this, str);
    var result = call(exec, this, str);
    if (result !== null && !isObject(result)) {
      throw new Error('RegExp exec method returned something other than an Object or null');
    }
    return !!result;
  }
});


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/receipts/receipt.vue?vue&type=style&index=0&id=26058e1a&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/receipts/receipt.vue?vue&type=style&index=0&id=26058e1a&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-card__title[data-v-26058e1a] {\r\n  padding: 2px;\r\n  padding-right: 20px;\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/receipts/receipt.vue?vue&type=style&index=0&id=26058e1a&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/receipts/receipt.vue?vue&type=style&index=0&id=26058e1a&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_style_index_0_id_26058e1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./receipt.vue?vue&type=style&index=0&id=26058e1a&scoped=true&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/receipts/receipt.vue?vue&type=style&index=0&id=26058e1a&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_style_index_0_id_26058e1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_style_index_0_id_26058e1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/main/receipts/receipt.vue":
/*!**************************************************!*\
  !*** ./src/components/main/receipts/receipt.vue ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _receipt_vue_vue_type_template_id_26058e1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./receipt.vue?vue&type=template&id=26058e1a&scoped=true& */ "./src/components/main/receipts/receipt.vue?vue&type=template&id=26058e1a&scoped=true&");
/* harmony import */ var _receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./receipt.vue?vue&type=script&lang=js& */ "./src/components/main/receipts/receipt.vue?vue&type=script&lang=js&");
/* harmony import */ var _receipt_vue_vue_type_style_index_0_id_26058e1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./receipt.vue?vue&type=style&index=0&id=26058e1a&scoped=true&lang=css& */ "./src/components/main/receipts/receipt.vue?vue&type=style&index=0&id=26058e1a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _receipt_vue_vue_type_template_id_26058e1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _receipt_vue_vue_type_template_id_26058e1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "26058e1a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/main/receipts/receipt.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/main/receipts/receipt.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/components/main/receipts/receipt.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./receipt.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/receipts/receipt.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/main/receipts/receipt.vue?vue&type=style&index=0&id=26058e1a&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./src/components/main/receipts/receipt.vue?vue&type=style&index=0&id=26058e1a&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_style_index_0_id_26058e1a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./receipt.vue?vue&type=style&index=0&id=26058e1a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/receipts/receipt.vue?vue&type=style&index=0&id=26058e1a&scoped=true&lang=css&");


/***/ }),

/***/ "./src/components/main/receipts/receipt.vue?vue&type=template&id=26058e1a&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/components/main/receipts/receipt.vue?vue&type=template&id=26058e1a&scoped=true& ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_template_id_26058e1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_template_id_26058e1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_receipt_vue_vue_type_template_id_26058e1a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./receipt.vue?vue&type=template&id=26058e1a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/receipts/receipt.vue?vue&type=template&id=26058e1a&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/receipts/receipt.vue?vue&type=template&id=26058e1a&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/receipts/receipt.vue?vue&type=template&id=26058e1a&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { padding: "10px", "padding-top": "50px" } },
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            [
              _c(
                "v-toolbar",
                { attrs: { flat: "", color: "white" } },
                [
                  _c("v-toolbar-title", [_vm._v(" " + _vm._s(_vm.title))]),
                  _vm._v(" "),
                  _c("v-divider", {
                    staticClass: "mx-4",
                    attrs: { inset: "", vertical: "" },
                  }),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
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
                callback: function ($$v) {
                  _vm.starter_dialog = $$v
                },
                expression: "starter_dialog",
              },
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
                        attrs: { indeterminate: "", color: "pink" },
                      }),
                    ],
                    1
                  ),
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
                "v-col",
                { attrs: { cols: "12", lg: "6" } },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        {
                          staticClass: "pt-0 pb-0",
                          attrs: { cols: "12", lg: "10" },
                        },
                        [
                          _c("v-text-field", {
                            staticClass: "receipt-info",
                            attrs: {
                              outlined: "",
                              autocomplete: "off",
                              prefix: " رقم السند | ",
                            },
                            on: {
                              blur: function ($event) {
                                return _vm.checkExicting()
                              },
                            },
                            model: {
                              value: _vm.receipt.reference,
                              callback: function ($$v) {
                                _vm.$set(_vm.receipt, "reference", $$v)
                              },
                              expression: "receipt.reference",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "pt-0 pb-0",
                          attrs: { cols: "12", lg: "10" },
                        },
                        [
                          _c("v-autocomplete", {
                            attrs: {
                              items: _vm.people,
                              "item-text": "name",
                              "item-value": "id",
                              outlined: "",
                              rules: _vm.vld_selected,
                              prefix: _vm.persona + "|",
                            },
                            on: { change: _vm.getBills },
                            model: {
                              value: _vm.receipt.person_id,
                              callback: function ($$v) {
                                _vm.$set(_vm.receipt, "person_id", $$v)
                              },
                              expression: "receipt.person_id",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "pt-0 pb-0",
                          attrs: { cols: "12", lg: "10" },
                        },
                        [
                          _c("v-autocomplete", {
                            attrs: {
                              flat: "",
                              outlined: "",
                              "no-data": "",
                              "no-data-text": "",
                              prefix: " الحساب | ",
                              "non-linear": "",
                              items: _vm.from_accounts,
                              "item-text": "ar_name",
                              "item-value": "id",
                            },
                            model: {
                              value: _vm.receipt.account_id,
                              callback: function ($$v) {
                                _vm.$set(_vm.receipt, "account_id", $$v)
                              },
                              expression: "receipt.account_id",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "pt-0 pb-0",
                          attrs: { cols: "12", lg: "10" },
                        },
                        [
                          _c("v-autocomplete", {
                            staticClass: "receipt-info",
                            attrs: {
                              outlined: "",
                              autocomplete: "off",
                              items: _vm.types,
                              "item-text": "ar_name",
                              "item-value": "id",
                              prefix: " النوع | ",
                            },
                            on: {
                              change: function ($event) {
                                return _vm.getBills()
                              },
                            },
                            model: {
                              value: _vm.receipt.payment_type_id,
                              callback: function ($$v) {
                                _vm.$set(_vm.receipt, "payment_type_id", $$v)
                              },
                              expression: "receipt.payment_type_id",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "pt-0 pb-0",
                          attrs: { cols: "12", lg: "10" },
                        },
                        [
                          _c("v-text-field", {
                            staticClass: "receipt-info",
                            attrs: {
                              outlined: "",
                              autocomplete: "off",
                              prefix: " الوصف | ",
                            },
                            on: {
                              blur: function ($event) {
                                return _vm.checkExicting()
                              },
                            },
                            model: {
                              value: _vm.receipt.description,
                              callback: function ($$v) {
                                _vm.$set(_vm.receipt, "description", $$v)
                              },
                              expression: "receipt.description",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass: "pt-0 pb-0",
                          attrs: { cols: "12", lg: "10" },
                        },
                        [
                          _c(
                            "v-menu",
                            {
                              ref: "date",
                              attrs: {
                                "close-on-content-click": false,
                                transition: "scale-transition",
                                "offset-y": "",
                                "max-width": "290px",
                                "min-width": "auto",
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function (ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-text-field",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              attrs: {
                                                outlined: "",
                                                prefix: " التاريخ | ",
                                              },
                                              on: {
                                                keydown: function ($event) {
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
                                                  _vm.date_is_down = false
                                                },
                                              },
                                              model: {
                                                value: _vm.receipt.date,
                                                callback: function ($$v) {
                                                  _vm.$set(
                                                    _vm.receipt,
                                                    "date",
                                                    $$v
                                                  )
                                                },
                                                expression: "receipt.date",
                                              },
                                            },
                                            "v-text-field",
                                            attrs,
                                            false
                                          ),
                                          on
                                        )
                                      ),
                                    ]
                                  },
                                },
                              ]),
                              model: {
                                value: _vm.date_is_down,
                                callback: function ($$v) {
                                  _vm.date_is_down = $$v
                                },
                                expression: "date_is_down",
                              },
                            },
                            [
                              _vm._v(" "),
                              _c("v-date-picker", {
                                attrs: { "no-title": "" },
                                on: {
                                  input: function ($event) {
                                    _vm.date_is_down = false
                                  },
                                },
                                model: {
                                  value: _vm.receipt.date,
                                  callback: function ($$v) {
                                    _vm.$set(_vm.receipt, "date", $$v)
                                  },
                                  expression: "receipt.date",
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
                        "v-col",
                        {
                          staticClass: "pt-0 pb-0",
                          attrs: { cols: "12", lg: "10" },
                        },
                        [
                          _c("v-text-field", {
                            staticClass: "receipt-info",
                            attrs: {
                              outlined: "",
                              autocomplete: "off",
                              prefix: " المبلغ | ",
                            },
                            on: {
                              blur: function ($event) {
                                return _vm.checkExicting()
                              },
                            },
                            model: {
                              value: _vm.receipt.amount,
                              callback: function ($$v) {
                                _vm.$set(_vm.receipt, "amount", $$v)
                              },
                              expression: "receipt.amount",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", lg: "6" } },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-card",
                        {
                          staticStyle: { width: "100%", "margin-left": "20px" },
                        },
                        [
                          _c(
                            "v-card-title",
                            { staticStyle: { background: "lightgray" } },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(_vm.person_info) +
                                  "\n            "
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", lg: "6" } },
                                    [_vm._v(" الاسم ")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", lg: "6" } },
                                    [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(
                                            _vm.personInfo() &&
                                              _vm.personInfo().name
                                          ) +
                                          "\n                "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", lg: "6" } },
                                    [_vm._v(" الهاتف ")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", lg: "6" } },
                                    [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(
                                            _vm.personInfo() &&
                                              _vm.personInfo().phone01
                                          ) +
                                          " "
                                      ),
                                    ]
                                  ),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", lg: "6" } },
                                    [_vm._v(" البريد الالكتروني ")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", lg: "6" } },
                                    [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(
                                            _vm.personInfo() &&
                                              _vm.personInfo().email
                                          ) +
                                          " "
                                      ),
                                    ]
                                  ),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", lg: "6" } },
                                    [_vm._v(" الرقم الضريبي ")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", lg: "6" } },
                                    [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(
                                            _vm.personInfo() &&
                                              _vm.personInfo().tax_number
                                          ) +
                                          "\n                "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c("v-checkbox", {
                            attrs: {
                              color: "#e91e63",
                              label: "سداد تلقائي للفواتير بحسب الأقدمية",
                            },
                            model: {
                              value: _vm.receipt.allocate_dynamically,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.receipt,
                                  "allocate_dynamically",
                                  $$v
                                )
                              },
                              expression: "receipt.allocate_dynamically",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticStyle: {
                            "text-align": "end",
                            "padding-left": "25px",
                          },
                          attrs: { cols: "12" },
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass:
                                "btn btn-info m-b-5 m-r-2 white--text",
                              attrs: { color: "text--white", text: "" },
                              on: {
                                click: function ($event) {
                                  return _vm.submit()
                                },
                              },
                            },
                            [
                              _c("v-icon", { staticClass: "white--text" }, [
                                _vm._v("mdi-plus-box"),
                              ]),
                              _vm._v("حفظ\n            "),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("v-row"),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "px-10", staticStyle: { "font-size": "16px" } },
        [_vm._v("\n    الفواتير التي لم تحصل جزئيا أو كليا\n  ")]
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { staticClass: "pt-10", staticStyle: { "font-size": "16px" } },
        [
          _c("v-data-table", {
            staticClass: "elevation-1",
            staticStyle: { width: "100%" },
            attrs: {
              "hide-default-footer": "",
              headers: _vm.headers,
              items: _vm.bills,
            },
            scopedSlots: _vm._u([
              {
                key: "top",
                fn: function () {
                  return undefined
                },
                proxy: true,
              },
              {
                key: "item.issue_date",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n        " +
                        _vm._s(
                          item.issue_date && item.issue_date.split(" ")[0]
                        ) +
                        "\n      "
                    ),
                  ]
                },
              },
              {
                key: "item.maturity_date",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n        " +
                        _vm._s(
                          item.maturity_date && item.maturity_date.split(" ")[0]
                        ) +
                        "\n      "
                    ),
                  ]
                },
              },
              {
                key: "item.remainder",
                fn: function (ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n        " +
                        _vm._s(item.remainder.toFixed(3)) +
                        "\n      "
                    ),
                  ]
                },
              },
              {
                key: "item.payment_status",
                fn: function (ref) {
                  var item = ref.item
                  return [_vm._v(" paid ")]
                },
              },
            ]),
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

}]);