"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_main_settings_users_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/AddUpdateUser.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/AddUpdateUser.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Person */ "./resources/js/apis/Person.js");
/* harmony import */ var _apis_Country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apis/Country */ "./resources/js/apis/Country.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["dialog", "person", "cities", "operation", "route"],
  data: function data() {
    return {
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
      isloading: false,
      title: "إضافة مورد جديد",
      countries: [],
      person_div_update: 0
    };
  },
  created: function created() {
    var _this = this;

    _apis_Country__WEBPACK_IMPORTED_MODULE_1__.default.loadCountries().then(function (response) {
      return _this.countries = response.data.countries;
    });
  },
  computed: {},
  methods: {
    loadCities: function loadCities() {
      this.$emit("changeCountry", this.person.country_id);
    },
    closeDialog: function closeDialog() {
      this.$emit("close_person_dialog");
    },
    savePerson: function savePerson() {
      var _this2 = this;

      if (!this.$refs.form.validate()) {
        return;
      }

      console.log(this.operation);
      console.log(this.route);
      this.isloading = "blue";

      if (this.operation == "add") {
        _apis_Person__WEBPACK_IMPORTED_MODULE_0__.default.store(this.person).then(function (response) {
          _this2.person["id"] = response.data;
          _this2.isloading = false;

          _this2.$emit("addUpdatePerson", _this2.person);
        });
        return;
      }

      if (this.operation == "update") {
        _apis_Person__WEBPACK_IMPORTED_MODULE_0__.default.update(this.person).then(function (response) {
          _this2.isloading = false;

          _this2.$emit("addUpdatePerson", _this2.person);
        });
        return;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/users.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/users.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apis_Person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../apis/Person */ "./resources/js/apis/Person.js");
/* harmony import */ var _apis_Country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../apis/Country */ "./resources/js/apis/Country.js");
/* harmony import */ var _user_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-info */ "./resources/js/components/main/settings/user-info.vue");
/* harmony import */ var _AddUpdateUser_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddUpdateUser.vue */ "./resources/js/components/main/settings/AddUpdateUser.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    userInfo: _user_info__WEBPACK_IMPORTED_MODULE_2__.default,
    AddUpdateUser: _AddUpdateUser_vue__WEBPACK_IMPORTED_MODULE_3__.default
  },
  data: function data() {
    var _ref;

    return _ref = {
      route: "",
      user: "user",
      type_id: 4,
      //1 user
      loading: false,
      dialog: false,
      user_status: [{
        is_user_active: 1,
        status: "نشط"
      }, {
        is_user_active: 0,
        status: "غير نشط"
      }],
      cities: [],
      //-------etched data-----------------f
      operation: "add",
      users: [],
      add_update_user_dialog: false,
      passed_user: "",
      //-----------------------------------//
      user_info_user: "",
      user_info_dialog: false,
      search: {
        company_name: "",
        name: "",
        phone: "",
        is_user_active: "",
        type_id: this.type_id
      },
      options: {},
      status: "salam",
      title: "إدارة الموردين",
      //---
      users_total: 20
    }, _defineProperty(_ref, "loading", true), _defineProperty(_ref, "headers", [{
      text: "م",
      align: "center",
      width: "5",
      sortable: false,
      value: "id"
    }, {
      text: "الاسم",
      align: "center",
      sortable: false,
      value: "name"
    }, {
      text: "البريد",
      align: "center",
      value: "email"
    }, {
      text: "رقم الاتصال",
      align: "center",
      value: "phone01"
    }, {
      text: "	الدور الوظيفي",
      align: "center",
      value: "role"
    }, {
      text: "الحالة ",
      align: "center",
      value: "status"
    }, {
      text: "التحكم ",
      align: "center",
      value: "actions"
    }]), _ref;
  },
  computed: {
    params: function params(nv) {
      return _objectSpread({}, this.options);
    }
  },
  watch: {
    params: {
      handler: function handler() {
        var _this = this;

        this.getDataFromApi().then(function (response) {
          _this.dataProcessing(response);
        });
      },
      deep: true
    },
    $route: function $route(to, from) {
      var _this2 = this;

      this.createPage(to, "old");
      this.getDataFromApi().then(function (response) {
        _this2.dataProcessing(response);
      });
    }
  },
  // mounted() {
  //   this.getDataFromApi().then((data) => {
  //     this.users = data.response;
  //   });
  // },
  methods: {
    is_default_user: function is_default_user(item) {
      if (item.name == "افتراضي") return true;
      return false;
    },
    dataProcessing: function dataProcessing(response) {
      console.log(response);
      alert(1);
      this.users = response.data;
    },
    adduserToList: function adduserToList(user) {
      console.log("user");
      user.credit = 0;
      user.debit = 0;
      user.arrears = 0;
      user.is_user_active = 1;
      user.deletable = true;
      if (this.operation == "add") this.users.push(user);else if (this.operation == "update") {// this.users.splice(
        //   this.users.indexOf((elem) => elem.id == user.id),
        //   1,
        //   user
        // );
      }
      this.add_update_user_dialog = false;
    },
    close_user_dialog: function close_user_dialog() {
      this.add_update_user_dialog = false;
    },
    findusers: function findusers() {
      var _this3 = this;

      this.getDataFromApi().then(function (response) {
        _this3.dataProcessing(response);
      });
    },
    searchReset: function searchReset() {
      var _this4 = this;

      this.search = {
        company_name: "",
        name: "",
        phone: "",
        is_user_active: "",
        type_id: this.type_id
      };
      this.getDataFromApi().then(function (response) {
        _this4.dataProcessing(response);
      });
    },
    loadCities: function loadCities(country_id) {
      var _this5 = this;

      this.cities = [];
      _apis_Country__WEBPACK_IMPORTED_MODULE_1__.default.loadCities(country_id).then(function (response) {
        return _this5.cities = response.data.cities;
      });
    },
    AddUpdateUser: function AddUpdateUser(item, operation) {
      this.operation = operation;

      if (operation == "add") {
        this.passed_user = {
          type_id: this.type_id
        };
      }

      if (operation == "update") {
        this.loadCities(item.country_id);
        this.passed_user = item;
        console.log("item", item);
        console.log("item", this.cities);
      }

      this.add_update_user_dialog = true;
    },
    show_user_dialog: function show_user_dialog(item) {
      this.user_info_dialog = true;
      console.log(item);
      this.user_info_user = item;
    },
    deleteuser: function deleteuser(item) {
      var _this6 = this;

      if (!item.deletable) {
        this.dialog = true;
        return;
      }

      this.loading = true;
      var _this$options = this.options,
          sortBy = _this$options.sortBy,
          sortDesc = _this$options.sortDesc,
          page = _this$options.page,
          itemsPerPage = _this$options.itemsPerPage; //let search = this.search.trim().toLowerCase();

      var user_id = item.id;
      _apis_Person__WEBPACK_IMPORTED_MODULE_0__.default.delete({
        user_id: user_id,
        page: page,
        itemsPerPage: itemsPerPage,
        search: this.search
      }).then(function (response) {
        _this6.loading = false;

        _this6.dataProcessing(response);
      });
    },
    getDataFromApi: function getDataFromApi() {
      var _this7 = this;

      this.loading = true;
      return new Promise(function (resolve, reject) {
        var _this7$options = _this7.options,
            sortBy = _this7$options.sortBy,
            sortDesc = _this7$options.sortDesc,
            page = _this7$options.page,
            itemsPerPage = _this7$options.itemsPerPage; // let search = this.search.trim().toLowerCase();

        _apis_Person__WEBPACK_IMPORTED_MODULE_0__.default.get({
          type_id: _this7.type_id,
          page: page,
          itemsPerPage: itemsPerPage,
          search: _this7.search
        }).then(function (response) {
          _this7.loading = false;
          resolve(response);
        });
      });
    },
    createPage: function createPage(to, status) {
      this.route = to.fullPath.substr(this.$route.fullPath.lastIndexOf("/") + 1);
      console.log(this.route);
      console.log("to");

      if (this.route == "suppliers") {
        this.type_id = 1;
        this.search.type_id = 1; // سند مورد

        this.company_name = "اسم المورد";
        this.title = "قائمة الموردين";
        this.user_type = "supplier";
        this.user_info = "معلومات المورد";
        this.usera = "مورد";
      }

      if (this.route == "customers") {
        this.type_id = 2;
        this.search.type_id = 2; // سند من عميل

        this.company_name = "اسم العميل";
        this.title = "قائمة العملاء";
        this.user_type = "customer";
        this.user_info = "معلومات العميل";
        this.usera = "عميل";
      }
    }
  },
  created: function created() {
    this.type_id = 4;
    this.search.type_id = 4; // سند مورد

    this.company_name = "اسم المورد";
    this.title = "قائمة الموردين";
    this.user_type = "supplier";
    this.user_info = "معلومات المورد";
    this.usera = "مورد";
  }
});

/***/ }),

/***/ "./resources/js/apis/Country.js":
/*!**************************************!*\
  !*** ./resources/js/apis/Country.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  loadCountries: function loadCountries(params) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/countries", {
      params: params
    });
  },
  loadCities: function loadCities(country_id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/cities/" + country_id);
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
    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("people", {
      params: params
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/AddUpdateUser.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/AddUpdateUser.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.first-level {\r\n  background: rgb(255, 222, 228);\n}\n.second-level {\r\n  background: rgb(233, 233, 233);\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/AddUpdateUser.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/AddUpdateUser.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUpdateUser.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/AddUpdateUser.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/main/settings/AddUpdateUser.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/main/settings/AddUpdateUser.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddUpdateUser_vue_vue_type_template_id_7b31d144___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddUpdateUser.vue?vue&type=template&id=7b31d144& */ "./resources/js/components/main/settings/AddUpdateUser.vue?vue&type=template&id=7b31d144&");
/* harmony import */ var _AddUpdateUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddUpdateUser.vue?vue&type=script&lang=js& */ "./resources/js/components/main/settings/AddUpdateUser.vue?vue&type=script&lang=js&");
/* harmony import */ var _AddUpdateUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddUpdateUser.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/main/settings/AddUpdateUser.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _AddUpdateUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddUpdateUser_vue_vue_type_template_id_7b31d144___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddUpdateUser_vue_vue_type_template_id_7b31d144___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/settings/AddUpdateUser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/settings/user-info.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/main/settings/user-info.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns
var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_0__.default)(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "resources/js/components/main/settings/user-info.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/settings/users.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/main/settings/users.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _users_vue_vue_type_template_id_8d770d92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.vue?vue&type=template&id=8d770d92& */ "./resources/js/components/main/settings/users.vue?vue&type=template&id=8d770d92&");
/* harmony import */ var _users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.vue?vue&type=script&lang=js& */ "./resources/js/components/main/settings/users.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _users_vue_vue_type_template_id_8d770d92___WEBPACK_IMPORTED_MODULE_0__.render,
  _users_vue_vue_type_template_id_8d770d92___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/main/settings/users.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/main/settings/AddUpdateUser.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/main/settings/AddUpdateUser.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUpdateUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/AddUpdateUser.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/settings/users.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/main/settings/users.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/users.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/main/settings/AddUpdateUser.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/main/settings/AddUpdateUser.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUpdateUser.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/AddUpdateUser.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/main/settings/AddUpdateUser.vue?vue&type=template&id=7b31d144&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/main/settings/AddUpdateUser.vue?vue&type=template&id=7b31d144& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateUser_vue_vue_type_template_id_7b31d144___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateUser_vue_vue_type_template_id_7b31d144___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUpdateUser_vue_vue_type_template_id_7b31d144___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUpdateUser.vue?vue&type=template&id=7b31d144& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/AddUpdateUser.vue?vue&type=template&id=7b31d144&");


/***/ }),

/***/ "./resources/js/components/main/settings/users.vue?vue&type=template&id=8d770d92&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/main/settings/users.vue?vue&type=template&id=8d770d92& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_template_id_8d770d92___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_template_id_8d770d92___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_users_vue_vue_type_template_id_8d770d92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./users.vue?vue&type=template&id=8d770d92& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/users.vue?vue&type=template&id=8d770d92&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/AddUpdateUser.vue?vue&type=template&id=7b31d144&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/AddUpdateUser.vue?vue&type=template&id=7b31d144& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    "v-dialog",
    {
      attrs: { "max-width": "800px", persistent: "" },
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
          _c(
            "v-card-title",
            [
              _c(
                "v-row",
                [
                  _c("v-col", [_vm._v(" " + _vm._s(_vm.title))]),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { staticStyle: { "text-align": "end" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: {
                            click: function($event) {
                              return _vm.closeDialog()
                            }
                          }
                        },
                        [_vm._v("\n            إلغاء\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: {
                            click: function($event) {
                              return _vm.savePerson()
                            }
                          }
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
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-container",
                [
                  _c(
                    "v-form",
                    { ref: "form" },
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
                                  label: "اسم المورد *",
                                  rules: _vm.required.concat(
                                    _vm.vld_is_not_default
                                  )
                                },
                                model: {
                                  value: _vm.person.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.person, "name", $$v)
                                  },
                                  expression: "person.name"
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
                                attrs: {
                                  label: "اسم الشركة*",
                                  rules: _vm.vld_is_not_default,
                                  required: ""
                                },
                                model: {
                                  value: _vm.person.company_name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.person, "company_name", $$v)
                                  },
                                  expression: "person.company_name"
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
                              _c("v-autocomplete", {
                                attrs: {
                                  items: _vm.countries,
                                  "item-text": "en_name",
                                  "item-value": "id",
                                  prefix: "البلد |",
                                  autocomplete: "off",
                                  placeholder: "اختر البلد"
                                },
                                on: { change: _vm.loadCities },
                                model: {
                                  value: _vm.person.country_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.person, "country_id", $$v)
                                  },
                                  expression: "person.country_id"
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
                              _c("v-autocomplete", {
                                attrs: {
                                  items: _vm.cities,
                                  "item-text": "en_name",
                                  "item-value": "id",
                                  prefix: "المدينة |",
                                  autocomplete: "off",
                                  placeholder: "اختر المدينة"
                                },
                                model: {
                                  value: _vm.person.city_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.person, "city_id", $$v)
                                  },
                                  expression: "person.city_id"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { cols: "12" } },
                            [
                              _c("v-textarea", {
                                attrs: {
                                  rows: "2",
                                  label: "العنوان",
                                  required: ""
                                },
                                model: {
                                  value: _vm.person.address,
                                  callback: function($$v) {
                                    _vm.$set(_vm.person, "address", $$v)
                                  },
                                  expression: "person.address"
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
                                attrs: {
                                  label: "رقم الاتصال الأساسي",
                                  required: "",
                                  rules: _vm.vld_phone_number,
                                  type: "ltr"
                                },
                                model: {
                                  value: _vm.person.phone01,
                                  callback: function($$v) {
                                    _vm.$set(_vm.person, "phone01", $$v)
                                  },
                                  expression: "person.phone01"
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
                                attrs: {
                                  label: "رقم الاتصال الثانوي",
                                  rules: _vm.vld_phone_number,
                                  required: "",
                                  type: "ltr"
                                },
                                model: {
                                  value: _vm.person.phone02,
                                  callback: function($$v) {
                                    _vm.$set(_vm.person, "phone02", $$v)
                                  },
                                  expression: "person.phone02"
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
                                attrs: {
                                  label: "البريد الالكتروني",
                                  rules: _vm.emailRules,
                                  required: "",
                                  type: "ltr"
                                },
                                model: {
                                  value: _vm.person.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.person, "email", $$v)
                                  },
                                  expression: "person.email"
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
                                attrs: {
                                  label: "الموقع الالكتروني",
                                  rules: _vm.webSite,
                                  type: "ltr",
                                  required: ""
                                },
                                model: {
                                  value: _vm.person.website,
                                  callback: function($$v) {
                                    _vm.$set(_vm.person, "website", $$v)
                                  },
                                  expression: "person.website"
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
                                attrs: { label: "الرقم الضريبي", required: "" },
                                model: {
                                  value: _vm.person.tax_number,
                                  callback: function($$v) {
                                    _vm.$set(_vm.person, "tax_number", $$v)
                                  },
                                  expression: "person.tax_number"
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
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    { staticStyle: { "text-align": "end" } },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.closeDialog()
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                    إلغاء\n                  "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.savePerson()
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                    حفظ\n                  "
                                          )
                                        ]
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
          _c("v-card-actions", [_c("v-spacer")], 1)
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/users.vue?vue&type=template&id=8d770d92&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/settings/users.vue?vue&type=template&id=8d770d92& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
      _c("add-update-user", {
        attrs: {
          route: _vm.route,
          dialog: _vm.add_update_user_dialog,
          user: _vm.passed_user,
          operation: _vm.operation,
          cities: _vm.cities
        },
        on: {
          addUpdateUser: _vm.adduserToList,
          changeCountry: _vm.loadCities,
          close_user_dialog: _vm.close_user_dialog
        }
      }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "600px" },
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
              _c("v-card-title", [
                _c("span", { staticClass: "text-h5" }, [_vm._v("تنبيه!")])
              ]),
              _vm._v(" "),
              _c("v-card-text", { staticClass: "text--primary" }, [
                _vm._v(
                  "\n        لايمكن حذف هذا المورد لوجود تعاملات مالية معه\n      "
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
                      attrs: { color: "blue darken-1", text: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("\n          إلغاء\n        ")]
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
        staticClass: "elevation-1",
        attrs: {
          headers: _vm.headers,
          items: _vm.users,
          options: _vm.options,
          "server-items-length": _vm.users_total,
          loading: _vm.loading
        },
        on: {
          "update:options": function($event) {
            _vm.options = $event
          }
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
                    _c(
                      "v-row",
                      { staticClass: "py-2" },
                      [
                        _c(
                          "v-col",
                          [
                            _c(
                              "v-row",
                              [
                                _c(
                                  "v-col",
                                  [
                                    _c("v-toolbar-title", [
                                      _vm._v(_vm._s(_vm.title))
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  [
                                    _c("v-divider", {
                                      staticClass: "mx-4",
                                      attrs: { inset: "", vertical: "" }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          elevation: "",
                                          color: "primary"
                                        },
                                        on: {
                                          click: function($event) {
                                            $event.stopPropagation()
                                            return _vm.AddUpdateUser("", "add")
                                          }
                                        }
                                      },
                                      [_vm._v("إضافة " + _vm._s(_vm.usera))]
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
                          "v-col",
                          {
                            staticStyle: {
                              "text-align": "end",
                              "font-size": "13px"
                            }
                          },
                          [
                            _c(
                              "a",
                              {
                                staticStyle: { color: "black" },
                                on: {
                                  click: function($event) {
                                    return _vm.$router.push("/dashboard")
                                  }
                                }
                              },
                              [
                                _vm._v("\n              اغلاق\n              "),
                                _c("v-icon", [_vm._v(" mdi-close-box ")])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticStyle: { color: "black" },
                                on: {
                                  click: function($event) {
                                    return _vm.$router.back()
                                  }
                                }
                              },
                              [
                                _vm._v("\n              رجوع\n              "),
                                _c("v-icon", [_vm._v(" mdi-arrow-left-bold ")])
                              ],
                              1
                            )
                          ]
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
                  { staticClass: "py-2" },
                  [
                    _c(
                      "v-col",
                      { attrs: { cols: "12", lg: "3" } },
                      [
                        _c("v-text-field", {
                          staticClass: "mx-4",
                          attrs: { label: "اسم الشركة" },
                          model: {
                            value: _vm.search.company_name,
                            callback: function($$v) {
                              _vm.$set(_vm.search, "company_name", $$v)
                            },
                            expression: "search.company_name"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { attrs: { cols: "12", lg: "3" } },
                      [
                        _c("v-text-field", {
                          staticClass: "mx-4",
                          attrs: { label: "جهة الاتصال" },
                          model: {
                            value: _vm.search.name,
                            callback: function($$v) {
                              _vm.$set(_vm.search, "name", $$v)
                            },
                            expression: "search.name"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { attrs: { cols: "12", lg: "3" } },
                      [
                        _c("v-text-field", {
                          staticClass: "mx-4",
                          attrs: { label: "رقم الاتصال" },
                          model: {
                            value: _vm.search.phone,
                            callback: function($$v) {
                              _vm.$set(_vm.search, "phone", $$v)
                            },
                            expression: "search.phone"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-col",
                      { attrs: { cols: "12", lg: "3" } },
                      [
                        _c("v-autocomplete", {
                          attrs: {
                            items: _vm.user_status,
                            "item-text": "status",
                            "item-value": "is_user_active",
                            label: "الحالة"
                          },
                          model: {
                            value: _vm.search.is_user_active,
                            callback: function($$v) {
                              _vm.$set(_vm.search, "is_user_active", $$v)
                            },
                            expression: "search.is_user_active"
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
                        _c(
                          "v-row",
                          [
                            _c(
                              "v-col",
                              { attrs: { cols: "2" } },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { elevation: "", color: "primary" },
                                    on: { click: _vm.findusers }
                                  },
                                  [_vm._v("البحث")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-col",
                              { attrs: { cols: "2" } },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { elevation: "", color: "primary" },
                                    on: {
                                      click: function($event) {
                                        $event.stopPropagation()
                                        return _vm.searchReset.apply(
                                          null,
                                          arguments
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v("إعادة تعيين")]
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
              ]
            },
            proxy: true
          },
          {
            key: "item.name",
            fn: function(ref) {
              var item = ref.item
              return [_vm._v("\n      " + _vm._s(item.name) + "\n    ")]
            }
          },
          {
            key: "item.balance",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n      " +
                    _vm._s((item.credit - item.debit).toFixed(2)) +
                    "\n    "
                )
              ]
            }
          },
          {
            key: "item.status",
            fn: function(ref) {
              var item = ref.item
              return [
                _vm._v(
                  "\n      " +
                    _vm._s(
                      _vm.user_status.find(function(elem) {
                        return elem.is_user_active == item.is_user_active
                      })["status"]
                    ) +
                    "\n    "
                )
              ]
            }
          },
          {
            key: "item.actions",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-btn",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.is_default_user(item),
                        expression: "!is_default_user(item)"
                      }
                    ],
                    attrs: { icon: "" },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.AddUpdateUser(item, "update")
                      }
                    }
                  },
                  [
                    _c(
                      "v-icon",
                      {
                        staticClass: "outlined font-size-12",
                        attrs: { small: "" }
                      },
                      [_vm._v("mdi-pencil")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  { attrs: { to: _vm.route + "/" + item.id } },
                  [_c("v-icon", { attrs: { small: "" } }, [_vm._v("mdi-eye")])],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.is_default_user(item),
                        expression: "!is_default_user(item)"
                      }
                    ],
                    attrs: { icon: "" },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.deleteuser(item, "update")
                      }
                    }
                  },
                  [
                    _c(
                      "v-icon",
                      {
                        staticClass: "outlined font-size-12",
                        attrs: { small: "" }
                      },
                      [_vm._v("mdi-delete")]
                    )
                  ],
                  1
                )
              ]
            }
          },
          {
            key: "no-data",
            fn: function() {
              return [_vm._v("لا يوجد بيانات !")]
            },
            proxy: true
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