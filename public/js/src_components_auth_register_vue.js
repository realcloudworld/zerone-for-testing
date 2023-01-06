"use strict";
(self["webpackChunkvue_electron"] = self["webpackChunkvue_electron"] || []).push([["src_components_auth_register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/auth/register.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/auth/register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/User */ "./src/apis/User.js");
/* harmony import */ var _apis_Csrf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apis/Csrf */ "./src/apis/Csrf.js");
/* harmony import */ var _apis_Api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../apis/Api */ "./src/apis/Api.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      form: {
        email: "nib@mail.ru",
        name: "nibras",
        password: "password",
        password_confirmation: "password"
      },
      errors: "",
      snackbar: false,
      isloading: false
    };
  },
  methods: {
    register: function register() {
      var _this = this;

      this.isloading = "red";
      _apis_User__WEBPACK_IMPORTED_MODULE_1__["default"].register(this.form).then(function (response) {
        _this.isloading = false;
        _this.errors = "";

        _this.$refs.form.reset();

        _this.$refs.form.resetValidation();
      })["catch"](function (errors) {
        _this.errors = errors.response.data.errors;
      })["finally"](function () {
        _this.isloading = false;
      });
    },
    login: function login() {
      var _this2 = this;

      this.snackbar = false;
      setTimeout(function () {
        _this2.$router.push("/login");
      }, 300);
    }
  }
});

/***/ }),

/***/ "./src/apis/Csrf.js":
/*!**************************!*\
  !*** ./src/apis/Csrf.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./src/apis/Api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  getCookie: function getCookie(form) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/csrf-cookie');
  }
});

/***/ }),

/***/ "./src/apis/User.js":
/*!**************************!*\
  !*** ./src/apis/User.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./src/apis/Api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  register: function register(form) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].post('/register', form);
  },
  login: function login(form) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].post('/login', form);
  },
  getUser: function getUser() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/user');
  },
  logout: function logout() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].post('/logout');
  }
});

/***/ }),

/***/ "./src/components/auth/register.vue":
/*!******************************************!*\
  !*** ./src/components/auth/register.vue ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_3b57ae4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=3b57ae4a& */ "./src/components/auth/register.vue?vue&type=template&id=3b57ae4a&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./src/components/auth/register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_3b57ae4a___WEBPACK_IMPORTED_MODULE_0__.render,
  _register_vue_vue_type_template_id_3b57ae4a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/auth/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/auth/register.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/auth/register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/auth/register.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/auth/register.vue?vue&type=template&id=3b57ae4a&":
/*!*************************************************************************!*\
  !*** ./src/components/auth/register.vue?vue&type=template&id=3b57ae4a& ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_3b57ae4a___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_3b57ae4a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_3b57ae4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./register.vue?vue&type=template&id=3b57ae4a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/auth/register.vue?vue&type=template&id=3b57ae4a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/auth/register.vue?vue&type=template&id=3b57ae4a&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/auth/register.vue?vue&type=template&id=3b57ae4a& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    "v-app",
    { attrs: { id: "inspire" } },
    [
      _c(
        "v-main",
        [
          _c(
            "v-container",
            { staticClass: "fill-height", attrs: { fluid: "" } },
            [
              _c(
                "v-row",
                { attrs: { align: "center", justify: "center" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12", sm: "8", md: "6" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "elevation-12",
                          attrs: { loading: _vm.isloading },
                        },
                        [
                          _c(
                            "v-toolbar",
                            { attrs: { color: "primary", dark: "", flat: "" } },
                            [
                              _c("v-toolbar-title", [
                                _vm._v(_vm._s(_vm.$t("Registeration form"))),
                              ]),
                              _vm._v(" "),
                              _c("v-spacer"),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-form",
                                { ref: "form" },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Name",
                                      name: "name",
                                      "error-messages": _vm.errors.name,
                                      "prepend-icon": "mdi-account",
                                      type: "text",
                                    },
                                    model: {
                                      value: _vm.form.name,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.form, "name", $$v)
                                      },
                                      expression: "form.name",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Email",
                                      name: "email",
                                      "error-messages": _vm.errors.email,
                                      "prepend-icon": "mdi-email",
                                      type: "text",
                                    },
                                    model: {
                                      value: _vm.form.email,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.form, "email", $$v)
                                      },
                                      expression: "form.email",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      id: "password",
                                      label: "Password",
                                      name: "password",
                                      "error-messages": _vm.errors.password,
                                      "prepend-icon": "mdi-lock",
                                      type: "password",
                                    },
                                    model: {
                                      value: _vm.form.password,
                                      callback: function ($$v) {
                                        _vm.$set(_vm.form, "password", $$v)
                                      },
                                      expression: "form.password",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      id: "password",
                                      label: "Confirmation Password",
                                      "error-messages":
                                        _vm.errors.password_confirmation,
                                      name: "Confirmation_Password",
                                      "prepend-icon": "mdi-lock-question",
                                      type: "password",
                                    },
                                    model: {
                                      value: _vm.form.password_confirmation,
                                      callback: function ($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "password_confirmation",
                                          $$v
                                        )
                                      },
                                      expression: "form.password_confirmation",
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
                            "v-card-actions",
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "ml-3",
                                  attrs: { to: "/login" },
                                },
                                [
                                  _vm._v(
                                    "\n                " +
                                      _vm._s(_vm.$t("Already has an account"))
                                  ),
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { color: "primary" },
                                  on: { click: _vm.register },
                                },
                                [_vm._v(" " + _vm._s(_vm.$t("Register")) + " ")]
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { top: "", color: "success", timeout: "-1" },
          scopedSlots: _vm._u([
            {
              key: "action",
              fn: function (ref) {
                var attrs = ref.attrs
                return [
                  _c(
                    "v-btn",
                    _vm._b(
                      {
                        attrs: { color: "primary", text: "" },
                        on: { click: _vm.login },
                      },
                      "v-btn",
                      attrs,
                      false
                    ),
                    [_vm._v("\n        تسجيل الدخول.\n      ")]
                  ),
                ]
              },
            },
          ]),
          model: {
            value: _vm.snackbar,
            callback: function ($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar",
          },
        },
        [_vm._v("\n    تم التسجيل بنجاح\n\n    ")]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);