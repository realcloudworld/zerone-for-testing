(self["webpackChunkvue_electron"] = self["webpackChunkvue_electron"] || []).push([["src_components_main_settings_GeneralSettings_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/GeneralSettings.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/GeneralSettings.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_Setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apis/Setting */ "./src/apis/Setting.js");
/* harmony import */ var _generalSettings_ProductSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generalSettings/ProductSettings */ "./src/components/main/settings/generalSettings/ProductSettings.vue");
/* harmony import */ var _generalSettings_PurchaseSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generalSettings/PurchaseSettings */ "./src/components/main/settings/generalSettings/PurchaseSettings.vue");
/* harmony import */ var _generalSettings_CompanySettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generalSettings/CompanySettings */ "./src/components/main/settings/generalSettings/CompanySettings.vue");
/* harmony import */ var _apis_Country__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../apis/Country */ "./src/apis/Country.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    ProductSettings: _generalSettings_ProductSettings__WEBPACK_IMPORTED_MODULE_2__["default"],
    PurchaseSettings: _generalSettings_PurchaseSettings__WEBPACK_IMPORTED_MODULE_3__["default"],
    CompanySettings: _generalSettings_CompanySettings__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      /*------------------------------*/
      value: 0,
      query: false,
      show: true,
      interval: 0,

      /*------------------------------*/
      cities: [],
      companySettingsOptions: {
        country_id: ""
      },
      productSettingsOptions: {
        sold_discount_is_active: false,
        sold_discount: 5,
        sold_discount_type_id: 1
      },

      /* tabs ----------------------------*/
      tab: null,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      /* tabs ----------------------------*/

    };
  },
  methods: {
    loadCities: function loadCities(country_id) {
      var _this = this;

      this.cities = [];
      _apis_Country__WEBPACK_IMPORTED_MODULE_5__["default"].loadCities(country_id).then(function (response) {
        _this.cities = response.data.cities;
        "cities", JSON.stringify(_this.cities);
      });
    },
    productSettingsMethod: function productSettingsMethod(item) {
      this.productSettingsOptions = item;
    },
    companySettingsMethod: function companySettingsMethod(item) {
      this.companySettingsOptions = item;
      var data = {
        product_settings: this.productSettingsOptions,
        company_settings: this.companySettingsOptions
      };
      "general_response", JSON.stringify(data);
    }
  },
  created: function created() {
    var _this2 = this;

    this.query = true;
    this.show = true;
    _apis_Setting__WEBPACK_IMPORTED_MODULE_1__["default"].get().then(function (response) {
      _this2.query = false;
      _this2.show = false;
      if (response.data.product_settings) _this2.productSettingsOptions = response.data.product_settings;

      if (response.data.company_settings) {
        _this2.companySettingsOptions = response.data.company_settings;

        _this2.loadCities(_this2.companySettingsOptions.country_id);
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/generalSettings/CompanySettings.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/generalSettings/CompanySettings.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apis_Country__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../apis/Country */ "./src/apis/Country.js");
/* harmony import */ var _apis_Setting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../apis/Setting */ "./src/apis/Setting.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["companySettingsOptions", "cities"],
  data: function data() {
    return {
      starter_dialog: false,
      webSite: [function (v) {
        return !v || /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/.test(v) || "الرابط غير صحيح";
      }],
      vld_numbering: [function (v) {
        return !v || /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية";
      }],
      required: [function (value) {
        return !!value || "الحقل مطلوب.";
      }],
      vld_is_not_default: [function (v) {
        return !v || v != "افتراضي" || "غير متاح";
      }],
      vld_phone_number: [function (v) {
        return !v || /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/.test(v) || "أدخل رقما صحيحا";
      }],
      emailRules: [function (v) {
        return !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "ادخل البريد بشكل صحيح";
      }],
      countries: []
    };
  },
  methods: {
    loadCities: function loadCities() {
      this.$emit("changeCountry", this.companySettingsOptions.country_id);
    },
    submit: function submit() {
      var _this = this;

      this.starter_dialog = true;
      _apis_Setting__WEBPACK_IMPORTED_MODULE_4__["default"].store({
        company: this.companySettingsOptions
      }).then(function (elem) {
        _this.starter_dialog = false;
      });
    },
    emitcompanySettings: function emitcompanySettings() {
      this.$emit("companySettingsMethod", this.companySettingsOptions);
    }
  },
  created: function created() {
    var _this2 = this;

    var countries = JSON.parse(localStorage.getItem("countries"));

    if (countries) {
      this.countries = countries;
      return;
    }

    _apis_Country__WEBPACK_IMPORTED_MODULE_3__["default"].loadCountries().then(function (response) {
      localStorage.setItem("countries", JSON.stringify(response.data.countries));
      _this2.countries = response.data.countries;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/generalSettings/ProductSettings.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/generalSettings/ProductSettings.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_Setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../apis/Setting */ "./src/apis/Setting.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["productSettingsOptions"],
  data: function data() {
    return {
      discount_types: [{
        id: 1,
        ar_name: "%",
        en_name: "%"
      }, {
        id: 2,
        ar_name: "قيمة",
        en_name: "amount"
      }]
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      _apis_Setting__WEBPACK_IMPORTED_MODULE_0__["default"].store({
        product: this.productSettingsOptions
      }).then(function (elem) {
        _this.emitProductSettings();
      });
    },
    emitProductSettings: function emitProductSettings() {
      this.$emit("productSettingsMethod", this.productSettingsOptions);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/generalSettings/PurchaseSettings.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/generalSettings/PurchaseSettings.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./src/apis/Country.js":
/*!*****************************!*\
  !*** ./src/apis/Country.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./src/apis/Api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  loadCountries: function loadCountries(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/countries", {
      params: params
    });
  },
  loadCities: function loadCities(country_id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get("/extra/cities/" + country_id);
  }
});

/***/ }),

/***/ "./src/apis/Setting.js":
/*!*****************************!*\
  !*** ./src/apis/Setting.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/***/ "./node_modules/core-js/internals/array-slice.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/array-slice.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis([].slice);


/***/ }),

/***/ "./node_modules/core-js/internals/function-apply.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/function-apply.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;

// eslint-disable-next-line es-x/no-reflect -- safe
module.exports = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function () {
  return call.apply(apply, arguments);
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

/***/ "./node_modules/core-js/modules/es.json.stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.json.stringify.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var apply = __webpack_require__(/*! ../internals/function-apply */ "./node_modules/core-js/internals/function-apply.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var arraySlice = __webpack_require__(/*! ../internals/array-slice */ "./node_modules/core-js/internals/array-slice.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

var $stringify = getBuiltIn('JSON', 'stringify');
var exec = uncurryThis(/./.exec);
var charAt = uncurryThis(''.charAt);
var charCodeAt = uncurryThis(''.charCodeAt);
var replace = uncurryThis(''.replace);
var numberToString = uncurryThis(1.0.toString);

var tester = /[\uD800-\uDFFF]/g;
var low = /^[\uD800-\uDBFF]$/;
var hi = /^[\uDC00-\uDFFF]$/;

var WRONG_SYMBOLS_CONVERSION = !NATIVE_SYMBOL || fails(function () {
  var symbol = getBuiltIn('Symbol')();
  // MS Edge converts symbol values to JSON as {}
  return $stringify([symbol]) != '[null]'
    // WebKit converts symbol values to JSON as null
    || $stringify({ a: symbol }) != '{}'
    // V8 throws on boxed symbols
    || $stringify(Object(symbol)) != '{}';
});

// https://github.com/tc39/proposal-well-formed-stringify
var ILL_FORMED_UNICODE = fails(function () {
  return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
    || $stringify('\uDEAD') !== '"\\udead"';
});

var stringifyWithSymbolsFix = function (it, replacer) {
  var args = arraySlice(arguments);
  var $replacer = replacer;
  if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
  if (!isArray(replacer)) replacer = function (key, value) {
    if (isCallable($replacer)) value = call($replacer, this, key, value);
    if (!isSymbol(value)) return value;
  };
  args[1] = replacer;
  return apply($stringify, null, args);
};

var fixIllFormed = function (match, offset, string) {
  var prev = charAt(string, offset - 1);
  var next = charAt(string, offset + 1);
  if ((exec(low, match) && !exec(hi, next)) || (exec(hi, match) && !exec(low, prev))) {
    return '\\u' + numberToString(charCodeAt(match, 0), 16);
  } return match;
};

if ($stringify) {
  // `JSON.stringify` method
  // https://tc39.es/ecma262/#sec-json.stringify
  $({ target: 'JSON', stat: true, arity: 3, forced: WRONG_SYMBOLS_CONVERSION || ILL_FORMED_UNICODE }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = arraySlice(arguments);
      var result = apply(WRONG_SYMBOLS_CONVERSION ? stringifyWithSymbolsFix : $stringify, null, args);
      return ILL_FORMED_UNICODE && typeof result == 'string' ? replace(result, tester, fixIllFormed) : result;
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

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.v-tab {\r\n  letter-spacing: 0 !important;\n}\r\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GeneralSettings.vue?vue&type=style&index=0&lang=css& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/components/main/settings/GeneralSettings.vue":
/*!**********************************************************!*\
  !*** ./src/components/main/settings/GeneralSettings.vue ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GeneralSettings_vue_vue_type_template_id_216c6c55___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneralSettings.vue?vue&type=template&id=216c6c55& */ "./src/components/main/settings/GeneralSettings.vue?vue&type=template&id=216c6c55&");
/* harmony import */ var _GeneralSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneralSettings.vue?vue&type=script&lang=js& */ "./src/components/main/settings/GeneralSettings.vue?vue&type=script&lang=js&");
/* harmony import */ var _GeneralSettings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GeneralSettings.vue?vue&type=style&index=0&lang=css& */ "./src/components/main/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GeneralSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GeneralSettings_vue_vue_type_template_id_216c6c55___WEBPACK_IMPORTED_MODULE_0__.render,
  _GeneralSettings_vue_vue_type_template_id_216c6c55___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/main/settings/GeneralSettings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/main/settings/generalSettings/CompanySettings.vue":
/*!**************************************************************************!*\
  !*** ./src/components/main/settings/generalSettings/CompanySettings.vue ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanySettings_vue_vue_type_template_id_c42bc4f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanySettings.vue?vue&type=template&id=c42bc4f4& */ "./src/components/main/settings/generalSettings/CompanySettings.vue?vue&type=template&id=c42bc4f4&");
/* harmony import */ var _CompanySettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanySettings.vue?vue&type=script&lang=js& */ "./src/components/main/settings/generalSettings/CompanySettings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompanySettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanySettings_vue_vue_type_template_id_c42bc4f4___WEBPACK_IMPORTED_MODULE_0__.render,
  _CompanySettings_vue_vue_type_template_id_c42bc4f4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/main/settings/generalSettings/CompanySettings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/main/settings/generalSettings/ProductSettings.vue":
/*!**************************************************************************!*\
  !*** ./src/components/main/settings/generalSettings/ProductSettings.vue ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductSettings_vue_vue_type_template_id_13d192f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductSettings.vue?vue&type=template&id=13d192f8& */ "./src/components/main/settings/generalSettings/ProductSettings.vue?vue&type=template&id=13d192f8&");
/* harmony import */ var _ProductSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductSettings.vue?vue&type=script&lang=js& */ "./src/components/main/settings/generalSettings/ProductSettings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductSettings_vue_vue_type_template_id_13d192f8___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductSettings_vue_vue_type_template_id_13d192f8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/main/settings/generalSettings/ProductSettings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/main/settings/generalSettings/PurchaseSettings.vue":
/*!***************************************************************************!*\
  !*** ./src/components/main/settings/generalSettings/PurchaseSettings.vue ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PurchaseSettings_vue_vue_type_template_id_066da124___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PurchaseSettings.vue?vue&type=template&id=066da124& */ "./src/components/main/settings/generalSettings/PurchaseSettings.vue?vue&type=template&id=066da124&");
/* harmony import */ var _PurchaseSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PurchaseSettings.vue?vue&type=script&lang=js& */ "./src/components/main/settings/generalSettings/PurchaseSettings.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PurchaseSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PurchaseSettings_vue_vue_type_template_id_066da124___WEBPACK_IMPORTED_MODULE_0__.render,
  _PurchaseSettings_vue_vue_type_template_id_066da124___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/main/settings/generalSettings/PurchaseSettings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/main/settings/GeneralSettings.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/components/main/settings/GeneralSettings.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GeneralSettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/GeneralSettings.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/main/settings/generalSettings/CompanySettings.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./src/components/main/settings/generalSettings/CompanySettings.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CompanySettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/generalSettings/CompanySettings.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/main/settings/generalSettings/ProductSettings.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./src/components/main/settings/generalSettings/ProductSettings.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductSettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/generalSettings/ProductSettings.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/main/settings/generalSettings/PurchaseSettings.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./src/components/main/settings/generalSettings/PurchaseSettings.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PurchaseSettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/generalSettings/PurchaseSettings.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/main/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./src/components/main/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GeneralSettings.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./src/components/main/settings/GeneralSettings.vue?vue&type=template&id=216c6c55&":
/*!*****************************************************************************************!*\
  !*** ./src/components/main/settings/GeneralSettings.vue?vue&type=template&id=216c6c55& ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_template_id_216c6c55___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_template_id_216c6c55___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_template_id_216c6c55___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./GeneralSettings.vue?vue&type=template&id=216c6c55& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/GeneralSettings.vue?vue&type=template&id=216c6c55&");


/***/ }),

/***/ "./src/components/main/settings/generalSettings/CompanySettings.vue?vue&type=template&id=c42bc4f4&":
/*!*********************************************************************************************************!*\
  !*** ./src/components/main/settings/generalSettings/CompanySettings.vue?vue&type=template&id=c42bc4f4& ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySettings_vue_vue_type_template_id_c42bc4f4___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySettings_vue_vue_type_template_id_c42bc4f4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySettings_vue_vue_type_template_id_c42bc4f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CompanySettings.vue?vue&type=template&id=c42bc4f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/generalSettings/CompanySettings.vue?vue&type=template&id=c42bc4f4&");


/***/ }),

/***/ "./src/components/main/settings/generalSettings/ProductSettings.vue?vue&type=template&id=13d192f8&":
/*!*********************************************************************************************************!*\
  !*** ./src/components/main/settings/generalSettings/ProductSettings.vue?vue&type=template&id=13d192f8& ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSettings_vue_vue_type_template_id_13d192f8___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSettings_vue_vue_type_template_id_13d192f8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductSettings_vue_vue_type_template_id_13d192f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductSettings.vue?vue&type=template&id=13d192f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/generalSettings/ProductSettings.vue?vue&type=template&id=13d192f8&");


/***/ }),

/***/ "./src/components/main/settings/generalSettings/PurchaseSettings.vue?vue&type=template&id=066da124&":
/*!**********************************************************************************************************!*\
  !*** ./src/components/main/settings/generalSettings/PurchaseSettings.vue?vue&type=template&id=066da124& ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseSettings_vue_vue_type_template_id_066da124___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseSettings_vue_vue_type_template_id_066da124___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseSettings_vue_vue_type_template_id_066da124___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PurchaseSettings.vue?vue&type=template&id=066da124& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/generalSettings/PurchaseSettings.vue?vue&type=template&id=066da124&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/GeneralSettings.vue?vue&type=template&id=216c6c55&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/GeneralSettings.vue?vue&type=template&id=216c6c55& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
        "div",
        [
          _c(
            "v-col",
            { staticStyle: { height: "50px" } },
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
              _c("v-toolbar-title", [_vm._v("الاعدادات العامة")]),
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
      _c(
        "v-card",
        [
          _c(
            "v-tabs",
            {
              attrs: { centered: "", "icons-and-text": "" },
              model: {
                value: _vm.tab,
                callback: function ($$v) {
                  _vm.tab = $$v
                },
                expression: "tab",
              },
            },
            [
              _c("v-tabs-slider"),
              _vm._v(" "),
              _c(
                "v-tab",
                [
                  _vm._v("\n        إعدادات الشركة\n        "),
                  _c("v-icon", [_vm._v("mdi-phone")]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-tab",
                [
                  _vm._v("\n        المنتجات\n        "),
                  _c("v-icon", [_vm._v("mdi-phone")]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-tab",
                [
                  _vm._v("\n        فواتير المشتريات\n        "),
                  _c("v-icon", [_vm._v("mdi-heart")]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-tab",
                [
                  _vm._v("\n        فواتير المبيعات\n        "),
                  _c("v-icon", [_vm._v("mdi-account-box")]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-tabs-items",
            {
              model: {
                value: _vm.tab,
                callback: function ($$v) {
                  _vm.tab = $$v
                },
                expression: "tab",
              },
            },
            [
              _c(
                "v-tab-item",
                [
                  _c(
                    "v-card",
                    { attrs: { flat: "", "min-height": "500" } },
                    [
                      _c("company-settings", {
                        attrs: {
                          cities: _vm.cities,
                          companySettingsOptions: _vm.companySettingsOptions,
                        },
                        on: {
                          changeCountry: _vm.loadCities,
                          companySettingsMethod: _vm.companySettingsMethod,
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
                "v-tab-item",
                [
                  _c(
                    "v-card",
                    { attrs: { flat: "", "min-height": "500" } },
                    [
                      _c("product-settings", {
                        attrs: {
                          productSettingsOptions: _vm.productSettingsOptions,
                        },
                        on: {
                          productSettingsMethod: _vm.productSettingsMethod,
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
                "v-tab-item",
                [
                  _c(
                    "v-card",
                    { attrs: { flat: "", "min-height": "500" } },
                    [_c("purchase-settings")],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-tab-item",
                [
                  _c(
                    "v-card",
                    { attrs: { flat: "", "min-height": "500" } },
                    [_c("product-settings")],
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/generalSettings/CompanySettings.vue?vue&type=template&id=c42bc4f4&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/generalSettings/CompanySettings.vue?vue&type=template&id=c42bc4f4& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    "v-row",
    { staticClass: "mx-3" },
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
                  _vm._v("\n        انتظر قليلاً!\n        "),
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
        "v-col",
        [
          _c(
            "v-row",
            [
              _c(
                "v-toolbar",
                { attrs: { flat: "", color: "white" } },
                [
                  _c(
                    "v-toolbar-title",
                    { staticStyle: { "font-size": "14px", color: "crimson" } },
                    [_vm._v("اعدادات الشركة")]
                  ),
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
          _c(
            "v-row",
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", lg: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: { label: "اسم الشركة*", required: "" },
                        model: {
                          value: _vm.companySettingsOptions.company_name,
                          callback: function ($$v) {
                            _vm.$set(
                              _vm.companySettingsOptions,
                              "company_name",
                              $$v
                            )
                          },
                          expression: "companySettingsOptions.company_name",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", lg: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: { label: "جهة الاتصال *", required: "" },
                        model: {
                          value: _vm.companySettingsOptions.name,
                          callback: function ($$v) {
                            _vm.$set(_vm.companySettingsOptions, "name", $$v)
                          },
                          expression: "companySettingsOptions.name",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", lg: "6" } },
                    [
                      _c("v-autocomplete", {
                        attrs: {
                          items: _vm.countries,
                          "item-text": "en_name",
                          "item-value": "id",
                          prefix: "البلد |",
                          autocomplete: "off",
                        },
                        on: { change: _vm.loadCities },
                        model: {
                          value: _vm.companySettingsOptions.country_id,
                          callback: function ($$v) {
                            _vm.$set(
                              _vm.companySettingsOptions,
                              "country_id",
                              $$v
                            )
                          },
                          expression: "companySettingsOptions.country_id",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", lg: "6" } },
                    [
                      _c("v-autocomplete", {
                        attrs: {
                          items: _vm.cities,
                          "item-text": "en_name",
                          "item-value": "id",
                          prefix: "المدينة |",
                          autocomplete: "off",
                        },
                        model: {
                          value: _vm.companySettingsOptions.city_id,
                          callback: function ($$v) {
                            _vm.$set(_vm.companySettingsOptions, "city_id", $$v)
                          },
                          expression: "companySettingsOptions.city_id",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c("v-textarea", {
                        attrs: { rows: "2", label: "العنوان", required: "" },
                        model: {
                          value: _vm.companySettingsOptions.address,
                          callback: function ($$v) {
                            _vm.$set(_vm.companySettingsOptions, "address", $$v)
                          },
                          expression: "companySettingsOptions.address",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", lg: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          type: "ltr",
                          rules: _vm.vld_phone_number,
                          label: "رقم الاتصال الأساسي",
                          required: "",
                        },
                        model: {
                          value: _vm.companySettingsOptions.phone01,
                          callback: function ($$v) {
                            _vm.$set(_vm.companySettingsOptions, "phone01", $$v)
                          },
                          expression: "companySettingsOptions.phone01",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", lg: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: { label: "رقم الاتصال الثانوي", required: "" },
                        model: {
                          value: _vm.companySettingsOptions.phone02,
                          callback: function ($$v) {
                            _vm.$set(_vm.companySettingsOptions, "phone02", $$v)
                          },
                          expression: "companySettingsOptions.phone02",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", lg: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          type: "ltr",
                          label: "البريد الالكتروني",
                          required: "",
                          rules: _vm.emailRules,
                        },
                        model: {
                          value: _vm.companySettingsOptions.email,
                          callback: function ($$v) {
                            _vm.$set(_vm.companySettingsOptions, "email", $$v)
                          },
                          expression: "companySettingsOptions.email",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", lg: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: {
                          type: "ltr",
                          label: "الموقع الالكتروني",
                          required: "",
                          rules: _vm.webSite,
                        },
                        model: {
                          value: _vm.companySettingsOptions.website,
                          callback: function ($$v) {
                            _vm.$set(_vm.companySettingsOptions, "website", $$v)
                          },
                          expression: "companySettingsOptions.website",
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-col",
        { attrs: { cols: "12" } },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "btn btn-info m-b-5 m-r-2 white--text",
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
                      _vm._v("حفظ\n        "),
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/generalSettings/ProductSettings.vue?vue&type=template&id=13d192f8&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/generalSettings/ProductSettings.vue?vue&type=template&id=13d192f8& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    "v-row",
    { staticClass: "mx-3" },
    [
      _c(
        "v-col",
        [
          _c(
            "v-row",
            [
              _c(
                "v-toolbar",
                { attrs: { flat: "", color: "white" } },
                [
                  _c(
                    "v-toolbar-title",
                    { staticStyle: { "font-size": "14px", color: "crimson" } },
                    [_vm._v("اعدادات المنتجات")]
                  ),
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
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12", lg: "4" } },
                [
                  _c("v-checkbox", {
                    staticStyle: {
                      "white-space": "nowrap",
                      "margin-left": "5px",
                      "margin-right": "5px",
                      "margin-top": "0px",
                    },
                    attrs: {
                      color: "#e91e63",
                      label: "اعتماد خصم البيع لجميع المنتجات",
                    },
                    model: {
                      value: _vm.productSettingsOptions.sold_discount_is_active,
                      callback: function ($$v) {
                        _vm.$set(
                          _vm.productSettingsOptions,
                          "sold_discount_is_active",
                          $$v
                        )
                      },
                      expression:
                        "productSettingsOptions.sold_discount_is_active",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "6", lg: "2" } },
                [
                  _c("v-text-field", {
                    attrs: { autocomplete: "off", label: "خصم عند البيع" },
                    model: {
                      value: _vm.productSettingsOptions.sold_discount,
                      callback: function ($$v) {
                        _vm.$set(
                          _vm.productSettingsOptions,
                          "sold_discount",
                          $$v
                        )
                      },
                      expression: "productSettingsOptions.sold_discount",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "6", lg: "2" } },
                [
                  _c("v-autocomplete", {
                    attrs: {
                      label: "طريقة الحساب",
                      items: _vm.discount_types,
                      "item-text": "ar_name",
                      "item-value": "id",
                    },
                    model: {
                      value: _vm.productSettingsOptions.sold_discount_type_id,
                      callback: function ($$v) {
                        _vm.$set(
                          _vm.productSettingsOptions,
                          "sold_discount_type_id",
                          $$v
                        )
                      },
                      expression:
                        "productSettingsOptions.sold_discount_type_id",
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
                "v-col",
                { attrs: { cols: "12", lg: "4" } },
                [
                  _c("v-checkbox", {
                    staticStyle: {
                      "white-space": "nowrap",
                      "margin-left": "5px",
                      "margin-right": "5px",
                      "margin-top": "0px",
                    },
                    attrs: {
                      color: "#e91e63",
                      label: "اعتماد خصم الشراء لجميع المنتجات",
                    },
                    model: {
                      value:
                        _vm.productSettingsOptions.purchase_discount_is_active,
                      callback: function ($$v) {
                        _vm.$set(
                          _vm.productSettingsOptions,
                          "purchase_discount_is_active",
                          $$v
                        )
                      },
                      expression:
                        "productSettingsOptions.purchase_discount_is_active",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "6", lg: "2" } },
                [
                  _c("v-text-field", {
                    attrs: { autocomplete: "off", label: "خصم عند الشراء" },
                    model: {
                      value: _vm.productSettingsOptions.purchase_discount,
                      callback: function ($$v) {
                        _vm.$set(
                          _vm.productSettingsOptions,
                          "purchase_discount",
                          $$v
                        )
                      },
                      expression: "productSettingsOptions.purchase_discount",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "6", lg: "2" } },
                [
                  _c("v-autocomplete", {
                    attrs: {
                      label: "طريقة الحساب",
                      items: _vm.discount_types,
                      "item-text": "ar_name",
                      "item-value": "id",
                    },
                    model: {
                      value:
                        _vm.productSettingsOptions.purchase_discount_type_id,
                      callback: function ($$v) {
                        _vm.$set(
                          _vm.productSettingsOptions,
                          "purchase_discount_type_id",
                          $$v
                        )
                      },
                      expression:
                        "productSettingsOptions.purchase_discount_type_id",
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
        { attrs: { cols: "12" } },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                [
                  _c(
                    "v-btn",
                    {
                      staticClass: "btn btn-info m-b-5 m-r-2 white--text",
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
                      _vm._v("حفظ\n        "),
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/generalSettings/PurchaseSettings.vue?vue&type=template&id=066da124&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/main/settings/generalSettings/PurchaseSettings.vue?vue&type=template&id=066da124& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [_vm._v("purchase")])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);