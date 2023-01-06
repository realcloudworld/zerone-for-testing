(self["webpackChunk"] = self["webpackChunk"] || []).push([
    ["resources_js_components_main_products_stocktakes_vue"], {

        /***/
        "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/loader.vue?vue&type=script&lang=js&":
        /*!******************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/loader.vue?vue&type=script&lang=js& ***!
          \******************************************************************************************************************************************************************************************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
            });
            /* harmony import */
            var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
            /* harmony import */
            var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */
            var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            // Import component
            // Import stylesheet


            /* harmony default export */
            const __WEBPACK_DEFAULT_EXPORT__ = ({
                props: ['isLoading'],
                data: function data() {
                    return {
                        loaderOpacity: 0.5,
                        fullPage: true
                    };
                },
                components: {
                    Loading: (vue_loading_overlay__WEBPACK_IMPORTED_MODULE_0___default())
                },
                methods: {
                    onCancel: function onCancel() {
                        console.log("User cancelled the loader.");
                    }
                }
            });

            /***/
        }),

        /***/
        "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=script&lang=js&":
        /*!*********************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=script&lang=js& ***!
          \*********************************************************************************************************************************************************************************************************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
            });
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            /* harmony default export */
            const __WEBPACK_DEFAULT_EXPORT__ = ({
                props: ["product", "prdct_forms", "prdct_taxes", "prdct_types", "dialog"],
                mounted: function mounted() {
                    var _this = this;

                    window.addEventListener("resize", function() {
                        _this.windowHeight = window.innerHeight;
                        console.log(_this.windowHeight);
                    });
                },
                data: function data() {
                    return {
                        windowHeight: 0,
                        product_units_headers: [{
                            text: " افتراضية البيع ",
                            align: "center",
                            sortable: false,
                            value: "main_sold_unit_id"
                        }, {
                            text: " افتراضية الشراء ",
                            align: "center",
                            sortable: false,
                            value: "main_bought_unit_id"
                        }, {
                            text: " الوحدة",
                            align: "center",
                            sortable: false,
                            value: "ar_name"
                        }, {
                            text: "تساوي",
                            align: "center",
                            sortable: false,
                            value: "equals"
                        }, {
                            text: "عدد",
                            align: "center",
                            sortable: false,
                            value: "contains"
                        }, {
                            text: "من الوحدة",
                            align: "center",
                            sortable: false,
                            value: "from_unit"
                        }, {
                            text: "سعر الشراء",
                            align: "center",
                            sortable: false,
                            value: "bought_price"
                        }, {
                            text: "سعر البيع",
                            align: "center",
                            sortable: false,
                            value: "sold_price"
                        }, {
                            text: "الباركود",
                            align: "center",
                            sortable: false,
                            value: "barcode",
                            width: "150"
                        }],
                        tab: null,
                        items: ["بيانات أساسية", "الوحدات", "المجموعات", "التصنيف", "الموردين"],
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                        editedIndex: -1,
                        emailRules: [function(v) {
                            return !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "ادخل البريد بشكل صحيح";
                        }],
                        vld_minlingth: [function(v) {
                            return !v || (v === null || v === void 0 ? void 0 : v.length) >= 2 || "أدخل أكثر من حرفين";
                        }],
                        vld_minlingth_noEmpty: [function(v) {
                            return (v === null || v === void 0 ? void 0 : v.length) >= 2 || "أدخل أكثر من حرفين";
                        }],
                        vld_numbering: [function(v) {
                            return !v || /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية";
                        }],
                        vld_numbering_noEmpty: [function(v) {
                            return /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية";
                        }],
                        formTitle: "",
                        new_product: {
                            name: "",
                            mobile: "",
                            tel: "",
                            email: "",
                            company: "",
                            notes: ""
                        },
                        edited_product: {
                            name: "",
                            mobile: "",
                            tel: "",
                            email: "",
                            company: "",
                            notes: ""
                        }
                    };
                },
                methods: {
                    close: function close() {
                        //this.$parent.$data.product_info_dialog = false;
                        this.$emit("dialogFalse");
                    },
                    emit_product: function emit_product() {},
                    save: function save(item) {
                        var _this2 = this;

                        if (this.$refs.form.validate()) {
                            var product = Object.assign({}, item);
                            item.flag = "addproducts";
                            item.filename = "products";
                            axios.post("router.php", item).then(function(response) {
                                _this2.$emit("product", product);

                                console.log(response.data);
                            });
                            this.$refs.form.reset();
                            this.close();
                        }
                    },
                    update: function update(item) {
                        var _this3 = this;

                        if (this.$refs.form.validate()) {
                            var product = Object.assign({}, item);
                            console.log("item");
                            item.flag = "updateproducts";
                            item.filename = "products";
                            axios.post("router.php", item).then(function(response) {
                                _this3.$emit("product", product);

                                console.log(response.data);
                            });
                            this.$refs.form.reset();
                            this.close();
                        }
                    }
                }
            });

            /***/
        }),

        /***/
        "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/stocktakes.vue?vue&type=script&lang=js&":
        /*!********************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/stocktakes.vue?vue&type=script&lang=js& ***!
          \********************************************************************************************************************************************************************************************************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
            });
            /* harmony import */
            var _apis_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../../apis/Product */ "./resources/js/apis/Product.js");
            /* harmony import */
            var _loader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../loader.vue */ "./resources/js/components/main/loader.vue");
            /* harmony import */
            var _apis_StockTake__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../../../apis/StockTake */ "./resources/js/apis/StockTake.js");
            /* harmony import */
            var _products_product_info_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../products/product-info.vue */ "./resources/js/components/main/products/product-info.vue");
            /* harmony import */
            var _apis_Country__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../../../apis/Country */ "./resources/js/apis/Country.js");

            function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

            function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

            function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

            function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

            function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

            function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

            function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

            function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

            function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true;
                    _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

            function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //
            //





            /* harmony default export */
            const __WEBPACK_DEFAULT_EXPORT__ = ({
                components: {
                    loader: _loader_vue__WEBPACK_IMPORTED_MODULE_1__.default,
                    ProductInfo: _products_product_info_vue__WEBPACK_IMPORTED_MODULE_3__.default
                },
                data: function data() {
                    var _new_stocktake, _ref;

                    return _ref = {
                        /*----------------الجرد--------------*/
                        issue_date_is_down: false,
                        inventories: [],
                        revenue_accounts: [],
                        expense_accounts: [],
                        snackbarColor: "",
                        ready: 4,

                        /*------------------------------*/
                        value: 0,
                        query: false,
                        show: true,
                        interval: 0,

                        /*------------------------------*/
                        isLoading: true,
                        return_source: "1",
                        act: "output",
                        stocktake_number_to_search: "",
                        return_stocktake: false,
                        cols: 10,
                        main_stocktake: true,
                        //-------------
                        snackbar: false,
                        snackbarText: "تأكد من تعبئة الحقول",
                        snackbarTimeout: 2000,
                        //-------------
                        no_product_dialog: false,
                        agree: false,
                        functionToAddProduct: "",
                        someVariableUnderYourControl: 1,
                        sets: [],
                        dialog: false,
                        starter_dialog: false,
                        route: window.location.pathname.replace(/^\/([^\/]*).*$/, "$1"),
                        title: "جرد المخزون",
                        //----
                        person_info: "معلومات المورد",
                        person_type: "suppliers",
                        persona: "المورد",
                        //----
                        is_new_stocktake: true,
                        additional_expenses_from_accounts: [],
                        additional_expenses_from_account_id: 0,
                        searched_barcode: "",

                        /*----------------info----------------- */
                        payment_method_dialog: false,
                        product_info_product: "",
                        product_info_dialog: false,
                        prdct_forms: [],
                        prdct_taxes: [],
                        prdct_types: [],

                        /*-----------------------taxes---------------------------*/
                        taxes: [],

                        /*----------------discount_types--------------------*/
                        discount_types: [{
                            id: 1,
                            ar_name: "%",
                            en_name: "%"
                        }, {
                            id: 2,
                            ar_name: "قيمة",
                            en_name: "amount"
                        }],
                        add_update_person_dialog: false,
                        passed_person: "",
                        operation: "add",
                        cities: [],
                        people: [],
                        name_search: "",
                        loading: false,
                        found_products: [],
                        selected_product: [],
                        header: [{
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
                            text: "الكمية في النظام",
                            align: "center",
                            value: "current_quantity",
                            sortable: false
                        }, {
                            text: "الكمية الفعلية",
                            align: "center",
                            value: "actual_quantity",
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
                            text: "تكلفة الفرق",
                            align: "center",
                            value: "total",
                            sortable: false
                        }, {
                            text: "تحكم ",
                            align: "center",
                            value: "action"
                        }],
                        payment_conditions: [],
                        new_stocktake: (_new_stocktake = {
                            is_input: 1,
                            document_type_id: "",
                            person_id: 1,
                            only_cash: true,
                            payment_condition_id: 10,
                            payment_methods: [{
                                account_id: "",
                                amount: 0,
                                description: ""
                            }, {
                                account_id: "",
                                amount: 0,
                                description: ""
                            }, {
                                account_id: "",
                                amount: 0,
                                description: ""
                            }],
                            paid_amount: 0,
                            remaining_amount: 0,
                            additional_expenses: 0,
                            total_without_products_tax: 0,
                            total_tax: 0,
                            total_amount: 0,
                            patch_number: Math.floor(Math.random() * (99999 - 10000 + 1) + 10000),
                            details: [],
                            reference: "",
                            description: ""
                        }, _defineProperty(_new_stocktake, "person_id", ""), _defineProperty(_new_stocktake, "issue_date", new Date().toISOString().substr(0, 10)), _defineProperty(_new_stocktake, "maturity_date", new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000)), _new_stocktake),
                        stocktake: {
                            person_id: 1,
                            is_input: 1,
                            document_type_id: 1,
                            only_cash: true,
                            payment_condition_id: 10,
                            payment_methods: [{
                                account_id: "",
                                amount: 0,
                                description: ""
                            }, {
                                account_id: "",
                                amount: 0,
                                description: ""
                            }, {
                                account_id: "",
                                amount: 0,
                                description: ""
                            }],
                            paid_amount: 0,
                            remaining_amount: 0,
                            additional_expenses: 0,
                            additional_expenses_from_account_id: 4,
                            total_without_products_tax: 0,
                            total_tax: 0,
                            total_amount: 0,
                            patch_number: Math.floor(Math.random() * (99999 - 10000 + 1) + 10000),
                            details: [],
                            reference: "",
                            description: "",
                            issue_date: new Date().toISOString().substr(0, 10),
                            maturity_date: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000).toISOString().substr(0, 10)
                        },

                        /*------------------dateTime----------------------*/
                        date: new Date().toISOString().substr(0, 10)
                    }, _defineProperty(_ref, "issue_date_is_down", false), _defineProperty(_ref, "maturity_date_is_down", false), _defineProperty(_ref, "formatted_issue_date", this.formatDate(new Date().toISOString().substr(0, 10))), _defineProperty(_ref, "vld_minlingth_one", [function(v) {
                        return v.length >= 1 || "أدخل قيمة";
                    }]), _defineProperty(_ref, "vld_selected", [function(v) {
                        return v > 0 || "أدخل قيمة";
                    }]), _defineProperty(_ref, "required", [function(value) {
                        return !!value || "الحقل مطلوب.";
                    }]), _defineProperty(_ref, "isunique", []), _defineProperty(_ref, "is_exists", []), _defineProperty(_ref, "stocktake_exists", []), _defineProperty(_ref, "expires_at_valid", [function(v) {
                        return v.has_expiration_date && v != "*******" || "قم بتغيير التاريخ";
                    }]), _defineProperty(_ref, "is_valid_date", []), _defineProperty(_ref, "vld_numbering", [function(v) {
                        return /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية";
                    }]), _ref;
                },
                watch: {
                    ready: function ready() {},
                    name_search: function name_search(val) {
                        val && val !== this.selected_product.ar_name && this.getProducts(val, "name");
                    },
                    $route: function $route(to, from) {
                        console.log("from");
                        console.log(to);
                        this.createPage(to, "old");
                    }
                },
                beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
                    // alert(1);
                    next();
                },
                methods: {
                    actual_quantity_change: function actual_quantity_change(item) {
                        var unit = item.units.find(function(elem) {
                            return elem.pivot.id == item.unit_id;
                        });
                        console.log(unit);
                        console.log("unit");
                        item.actual_quantity_in_minor_unit = parseInt(item.actual_quantity * unit.pivot.contains);
                        console.log(item.actual_quantity_in_minor_unit);
                    },
                    disagree: function disagree() {
                        this.dialog = false;
                        this.selected_product = "";
                    },
                    quantity_clicked: function quantity_clicked(item) {
                        item.hide_quantity_valid_message = true;
                        item.quantity_valid = [true];
                    },
                    endIntersect: function endIntersect(entries, observer, isIntersecting) {},
                    getStocktakeByHittingStocktakeNumber: function getStocktakeByHittingStocktakeNumber() {
                        var _this = this;

                        //this.title = "تعديل فاتورة رقم " + this.$route.params.id;
                        Stocktake.get(this.stocktake_number_to_search, {
                                document_type_id: this.stocktake.document_type_id - 2,
                                "return": 1
                            }
                            /*
                            1 - purchase
                            2 - invoice
                            3 - purchase return 
                            4 - invoice  return 
                            */
                        ).then(function(response) {
                            if (Array.isArray(response.data)) {
                                _this.stocktake_exists = [false || "الفاتورة غير موجود "];
                                return 0;
                            }

                            _this.stocktake_exists = [true];
                            _this.stocktake = response.data.stocktake;

                            if (_this.route == "purchase_return") {
                                _this.stocktake.document_type_id = 3;
                                _this.stocktake.is_input = 0;
                            } //purcase return


                            if (_this.route == "invoice_return") {
                                _this.stocktake.document_type_id = 4; //purcase return

                                _this.stocktake.is_input = 1;
                            }

                            console.log(_this.stocktake);
                            _this.stocktake.issue_date = _this.stocktake.issue_date.split(" ")[0];
                            _this.stocktake.maturity_date = _this.stocktake.maturity_date.split(" ")[0];

                            _this.stocktake.details.forEach(function(elem) {
                                if (elem.expires_at) elem.expires_at = elem.expires_at.split(" ")[0];
                            });

                            if (_this.stocktake.payment_methods.length != 0) {} else _this.stocktake.payment_methods = [{
                                account_id: "",
                                amount: 0,
                                description: ""
                            }, {
                                account_id: "",
                                amount: 0,
                                description: ""
                            }, {
                                account_id: "",
                                amount: 0,
                                description: ""
                            }];

                            _this.people = response.data.people;
                            _this.additional_expenses_from_accounts = response.data.accounts.accounts;
                            console.log(response.data.accounts.accounts);
                        });
                    },
                    expires_date: function expires_date(item) {
                        item.expires_at_message = true;
                        item.expires_at_valid = [true];
                        if (item.expires_at == "*******") item.expires_at = new Date().toISOString().substr(0, 10);
                    },
                    agreeToAdd: function agreeToAdd() {
                        var _this2 = this;

                        // this.agree = true;
                        this.index_of_selected_product = this.sets.findIndex(function(elem) {
                            return elem.id == _this2.selected_elem_fromSet;
                        });
                        console.log(this.index_of_selected_product);
                        var selected_product = JSON.parse(JSON.stringify(this.selected_product));
                        console.log(selected_product);
                        selected_product["details"][0] = selected_product["details"][this.index_of_selected_product];
                        this.showThisProduct(selected_product);
                        console.log("index");
                        console.log("index");
                        window.removeEventListener("keydown", this.functionToAddProduct);
                        var input_barcode = document.getElementById("barcode");
                        this.$nextTick(function() {
                            input_barcode.focus();
                        });
                        this.dialog = false;
                        this.agree = false;
                        return; //e.preventDefault();

                        console.log(selectedElm);
                        selectedElm = selectedElm[action[e.key] + "ElementSibling"]; // loop if top/bottom edges reached or "home"/"end" keys clicked

                        if (!selectedElm || e.key == "Home" || e.key == "End") {
                            goToStart = action[e.key] == "next" || e.key == "Home";
                            selectedElm = listElm.children[goToStart ? 0 : listElm.children.length - 1];
                        }

                        selectedElm.focus();
                        return; // Mark first list item

                        this.$nextTick(function() {
                            listElm.firstElementChild.focus();
                            var selectedElm = document.activeElement,
                                goToStart,
                                // map actions to event's key
                                action = {
                                    ArrowUp: "previous",
                                    Up: "previous",
                                    ArrowDown: "next",
                                    Down: "next"
                                };

                            _this2.functionToAddProduct = function(e) {};

                            window.addEventListener("keydown", _this2.functionToAddProduct);
                        }); // Event listener
                    },
                    showThisProduct: function showThisProduct(selected_product) {
                        this.selected_product = "";
                        this.searched_barcode = "";
                        var gg;
                        if (this.route == "purchase") selected_product.tax = selected_product.bought_tax;
                        if (this.route == "invoice") selected_product.tax = selected_product.sold_tax;
                        if (this.route != "purchase")
                            if ((gg = this.stocktake.details.findIndex(function(elem) {
                                    return elem.id == selected_product.id && elem.expires_at.split(" ")[0] == selected_product["details"][0].expires_at.split(" ")[0];
                                })) >= 0) {
                                this.stocktake.details[gg].quantity++;
                                return;
                            }
                        selected_product.expires_at_message = true;
                        selected_product.hide_quantity_valid_message = true;
                        selected_product.quantity_valid = [true];
                        console.log("selected_product");
                        console.log(selected_product); //this.dialog = true;

                        selected_product["document_type_id"] = this.stocktake.document_type_id;
                        selected_product.unit_id = selected_product.units[selected_product.main_unit_id - 1].pivot.id;
                        selected_product.unit_price = selected_product.average_cost.toFixed(2);
                        selected_product.quantity = 1;
                        selected_product["product_id"] = selected_product["id"]; // stocktake

                        selected_product.expires_at = selected_product.details[0].expires_at;
                        selected_product.current_quantity = selected_product.details[0].quantity_in_minor_unit / selected_product.units[selected_product.main_unit_id - 1].pivot.contains;
                        selected_product.actual_quantity = selected_product.current_quantity;
                        selected_product.actual_quantity_in_minor_unit = parseInt(selected_product.actual_quantity * selected_product.units[selected_product.main_unit_id - 1].pivot.contains);
                        selected_product = JSON.parse(JSON.stringify(selected_product));
                        this.stocktake.details.push(selected_product);
                        return;
                    },
                    addProductToStocktake: function addProductToStocktake(name) {
                        var _this3 = this;

                        //-----processing  for output document
                        if (this.act == "input") {
                            this.selected_product.expires_at = "*******";
                            this.showThisProduct(this.selected_product);
                            return;
                        } //-----processing  for output document


                        if (this.selected_product.details.length == 0) {
                            this.no_product_dialog = true;
                            return;
                        }

                        if (this.selected_product.details.length == 1) {
                            this.showThisProduct(this.selected_product);
                            return;
                        }

                        var products_grouped = false;

                        if (products_grouped) {
                            this.selected_product.details[0].quantity_in_minor_unit = this.selected_product.quantity_in_minor_unit; // this.selected_product.details[0].quantity_in_minor_unit =
                            //   this.selected_product.details.reduce(
                            //     (a, b) => +a + +b.quantity_in_minor_unit,
                            //     0
                            //   );

                            console.log("this.selected_product");
                            console.log(this.selected_product);
                            this.showThisProduct(this.selected_product);
                            return;
                        }

                        var first = false;
                        if (name) first = true;
                        this.sets = this.selected_product.details;
                        this.dialog = true;
                        this.$nextTick().then(function() {
                            var listElm = document.querySelector("ul"); // Mark first list item

                            _this3.$nextTick(function() {
                                listElm.firstElementChild.focus();
                                var selectedElm = document.activeElement,
                                    goToStart,
                                    // map actions to event's key
                                    action = {
                                        ArrowUp: "previous",
                                        Up: "previous",
                                        ArrowDown: "next",
                                        Down: "next"
                                    };

                                _this3.functionToAddProduct = function(e) {
                                    if (e.key === "Enter" && _this3.dialog && !first) {
                                        var parent = selectedElm.parentNode;
                                        console.log(parent);
                                        console.log(selectedElm);
                                        _this3.index_of_selected_product = Array.prototype.indexOf.call(listElm.children, selectedElm);
                                        var selected_product = JSON.parse(JSON.stringify(_this3.selected_product));
                                        console.log(selected_product);
                                        selected_product["details"][0] = selected_product["details"][_this3.index_of_selected_product];

                                        _this3.showThisProduct(selected_product);

                                        console.log("index");
                                        console.log("index");
                                        window.removeEventListener("keydown", _this3.functionToAddProduct);
                                        console.log("input_barcode");
                                        console.log(input_barcode);
                                        console.log("input_barcode");
                                        var input_barcode = document.getElementById("barcode"); // this.$nextTick(() => {
                                        //   input_barcode.focus();
                                        // });

                                        console.log("selectedElm");
                                        console.log(selectedElm);
                                        console.log("selectedElm");
                                        _this3.dialog = false;
                                        _this3.agree = false;
                                        return;
                                    } //e.preventDefault();


                                    if (e.key !== "Enter") {
                                        console.log(selectedElm);
                                        selectedElm = selectedElm[action[e.key] + "ElementSibling"]; // loop if top/bottom edges reached or "home"/"end" keys clicked

                                        if (!selectedElm || e.key == "Home" || e.key == "End") {
                                            goToStart = action[e.key] == "next" || e.key == "Home";
                                            selectedElm = listElm.children[goToStart ? 0 : listElm.children.length - 1];
                                        }

                                        selectedElm.focus();
                                        first = false;
                                    }
                                };

                                window.addEventListener("keydown", _this3.functionToAddProduct);
                            }); // Event listener

                        }); //CHECK IF PRODUCT HAS EXPIRATION DATE --> ADD QUANTITY
                        // if (!selected_product.has_expiration_date) {
                        //   let index = this.stocktake.details.findIndex(
                        //     (elem) => elem.barcode == selected_product.barcode
                        //   );
                        //   if (index != -1) {
                        //     this.stocktake.details[index].quantity++;
                        //     return;
                        //   }
                        // }
                        // //this.found_products = response.data.products;
                        // //-----add
                        // selected_product.unit_id =
                        //   selected_product.units[selected_product.main_unit_id - 1].pivot.id;
                        // selected_product.unit_price =
                        //   selected_product.units[
                        //     selected_product.main_unit_id - 1
                        //   ].pivot.bought_price;
                        // selected_product.quantity = 1;
                        // //---------
                        // selected_product["document_type_id"] = 1; // stocktake
                        // selected_product["product_id"] = selected_product["id"]; // stocktake
                        // this.stocktake.details.push(selected_product);
                    },
                    searchProductByBarcode: function searchProductByBarcode() {
                        var _this4 = this;

                        var params = {
                            barcode: this.searched_barcode
                        };
                        var extra_route = this.act;
                        _apis_Product__WEBPACK_IMPORTED_MODULE_0__.default.billBarcodeSearch(params, extra_route).then(function(response) {
                            if (response.data.products.length == 0) {
                                _this4.is_exists = [false || "الصنف غير موجود "];
                                return;
                            }

                            _this4.is_exists = [true];
                            _this4.selected_product = JSON.parse(JSON.stringify(response.data.products[0]));

                            _this4.addProductToStocktake();
                        });
                    },
                    remaining_amount: function remaining_amount() {
                        return this.stocktake.remaining_amount = this.stocktake.total_amount - this.stocktake.paid_amount;
                    },
                    payAllCash: function payAllCash() {
                        this.stocktake.paid_amount = this.stocktake.total_amount.toFixed(2);
                        this.stocktake.payment_methods = [{
                            account_id: "",
                            amount: 0,
                            description: ""
                        }, {
                            account_id: "",
                            amount: 0,
                            description: ""
                        }, {
                            account_id: "",
                            amount: 0,
                            description: ""
                        }];
                    },
                    paymentMethods: function paymentMethods(payments) {
                        this.stocktake.payment_methods = payments.payment_methods;
                        this.stocktake.paid_amount = payments.paid_amount;
                        this.stocktake.only_cash = false;
                    },
                    show_product_dialog: function show_product_dialog(item) {
                        this.product_info_dialog = true;
                        console.log(item);
                        this.product_info_product = item;
                    },
                    product_unit_change: function product_unit_change(item) {
                        item.hide_quantity_valid_message = true;
                        item.quantity_valid = [true];
                        var unit = item.units.find(function(elem) {
                            return elem.pivot.id == item.unit_id;
                        });
                        item.current_quantity = parseInt(item.details[0].quantity_in_minor_unit / unit.pivot.contains);
                        item.unit_price = (unit.pivot.contains * item.average_cost).toFixed(2);
                    },
                    total_tax: function total_tax() {
                        this.stocktake.total_tax = this.stocktake.details.reduce(function(a, b) {
                            return +a + +b.tax_value;
                        }, 0);
                        return this.stocktake.total_tax;
                    },
                    total_amount: function total_amount() {
                        this.stocktake.total_amount = this.total_without_products_tax() + this.total_tax();
                        return this.stocktake.total_amount;
                    },
                    total_without_products_tax: function total_without_products_tax() {
                        return this.stocktake.details.reduce(function(a, b) {
                            return +a + +b.total_befor_tax;
                        }, 0);
                    },
                    total: function total(item) {
                        item.total = this.tax_value(item) + this.total_befor_tax(item);
                        return item.total;
                    },
                    tax_value: function tax_value(item) {
                        item.tax_value = this.total_befor_tax(item) * item.tax / 100;
                        return item.tax_value;
                    },
                    total_befor_tax: function total_befor_tax(item) {
                        if (item.discount_type_id == 1) {
                            item.total_befor_tax = item.quantity * item.unit_price - item.quantity * item.unit_price * item.discount / 100;
                            return item.total_befor_tax;
                        }

                        item.total_befor_tax = item.quantity * item.unit_price - item.discount;
                        return item.total_befor_tax;
                    },
                    quantity_in_minor_unit: function quantity_in_minor_unit(item) {
                        var unit = item.units.find(function(elem) {
                            return elem.pivot.id == item.unit_id;
                        });
                        item.quantity_in_minor_unit = item.quantity * unit.pivot.contains;
                        return item.quantity_in_minor_unit;
                    },
                    deleteItem: function deleteItem(item) {
                        this.stocktake.details.splice(this.stocktake.details.indexOf(item), 1);
                    },
                    getProducts: function getProducts(val, type) {
                        var _this5 = this;

                        if (val.length > 2) {
                            this.loading = true;
                            var params = {
                                name: val
                            };
                            var extra_route = this.act;
                            _apis_Product__WEBPACK_IMPORTED_MODULE_0__.default.billNameSearch(params, extra_route).then(function(response) {
                                if (response.data.products.length == 0) {
                                    _this5.is_exists = [false || "الصنف غير موجود "];
                                    return;
                                }

                                _this5.loading = false;
                                console.log("hi", response.data);
                                _this5.found_products = JSON.parse(JSON.stringify(response.data.products));
                                _this5.is_exists = [true];
                            });
                        }
                    },
                    // addProductToStocktake() {
                    //   console.log("this.selected_product");
                    //   console.log(this.selected_product);
                    //   console.log("this.selected_product");
                    //   this.selected_product.main_unit_id =
                    //     this.selected_product.main_bought_unit_id;
                    //   this.showThisProduct(this.selected_product);
                    // },
                    checkExicting: function checkExicting() {},
                    suspend: function suspend() {
                        var stocktake = JSON.parse(JSON.stringify(this.stocktake));
                        this.$store.state.suspended_stocktakes.push(stocktake);
                    },
                    return_suspended_stocktake: function return_suspended_stocktake() {
                        console.log(this.$store.state.suspended_stocktakes[0]);
                        this.stocktake = this.$store.state.suspended_stocktakes[0];
                    },
                    submit: function submit() {
                        if (!this.$refs.form.validate()) {
                            console.log("this.stocktake.details");
                            console.log(this.stocktake.details);
                            console.log(this.$refs.form.rules);
                            return;
                        }

                        if (this.stocktake.details.length == 0) {
                            this.snackbar = true;
                            return;
                        } //if (this.is_new_stocktake)


                        _apis_StockTake__WEBPACK_IMPORTED_MODULE_2__.default.store(this.stocktake).then(function(response) {
                            return console.log(response.data);
                        }); // else
                        //   StockTake.update(this.stocktake).then((response) =>
                        //     console.log(response.data)
                        //   );

                        this.starter_dialog = true;
                    },

                    /*------------------dateTime----------------------*/
                    formatDate: function formatDate(date) {
                        if (!date) return null;

                        var _date$split = date.split("-"),
                            _date$split2 = _slicedToArray(_date$split, 3),
                            year = _date$split2[0],
                            month = _date$split2[1],
                            day = _date$split2[2];

                        return "".concat(month, "/").concat(day, "/").concat(year);
                    },
                    parseDate: function parseDate(date) {
                        if (!date) return null;

                        var _date$split3 = date.split("/"),
                            _date$split4 = _slicedToArray(_date$split3, 3),
                            month = _date$split4[0],
                            day = _date$split4[1],
                            year = _date$split4[2];

                        return "".concat(year, "-").concat(month.padStart(2, "0"), "-").concat(day.padStart(2, "0"));
                    },
                    createPage: function createPage(to, status) {
                        var _this6 = this;

                        this.query = true;
                        this.show = true;
                        _apis_StockTake__WEBPACK_IMPORTED_MODULE_2__.default.create().then(function(response) {
                            _this6.query = false;
                            _this6.show = false;
                            _this6.stocktake.reference = response.data["reference"];
                            _this6.revenue_accounts = [{
                                header: "حسابات حقوق الملاك"
                            }].concat(_toConsumableArray(response.data[3]), [{
                                divider: true
                            }, {
                                header: "حسابات الإيرادات"
                            }], _toConsumableArray(response.data[4]));
                            console.log(_this6.revenue_accounts);
                            _this6.expense_accounts = [{
                                header: "حسابات حقوق الملاك"
                            }].concat(_toConsumableArray(response.data[3]), [{
                                divider: true
                            }, {
                                header: "حسابات المصروفات"
                            }], _toConsumableArray(response.data[5]));
                            _this6.inventories = response.data["inventories"];
                        });
                    }
                },
                created: function created() {
                    this.createPage(this.$route, "new");
                }
            });

            /***/
        }),

        /***/
        "./resources/js/apis/Country.js":
        /*!**************************************!*\
          !*** ./resources/js/apis/Country.js ***!
          \**************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
            });
            /* harmony import */
            var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./Api */ "./resources/js/apis/Api.js");

            /* harmony default export */
            const __WEBPACK_DEFAULT_EXPORT__ = ({
                loadCountries: function loadCountries(params) {
                    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/countries", {
                        params: params
                    });
                },
                loadCities: function loadCities(country_id) {
                    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/extra/cities/" + country_id);
                }
            });

            /***/
        }),

        /***/
        "./resources/js/apis/Product.js":
        /*!**************************************!*\
          !*** ./resources/js/apis/Product.js ***!
          \**************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
            });
            /* harmony import */
            var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./Api */ "./resources/js/apis/Api.js");

            /* harmony default export */
            const __WEBPACK_DEFAULT_EXPORT__ = ({
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

            /***/
        }),

        /***/
        "./resources/js/apis/StockTake.js":
        /*!****************************************!*\
          !*** ./resources/js/apis/StockTake.js ***!
          \****************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
            });
            /* harmony import */
            var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./Api */ "./resources/js/apis/Api.js");

            /* harmony default export */
            const __WEBPACK_DEFAULT_EXPORT__ = ({
                create: function create() {
                    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/stocktakes/create");
                },
                store: function store(stocktake) {
                    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/stocktakes", stocktake);
                },
                update: function update(stocktake) {
                    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.put("/stocktakes", stocktake);
                },
                postCreate: function postCreate(stocktake) {
                    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.post("/stocktakes/create", stocktake);
                },
                get: function get(params) {
                    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/stocktakes/", {
                        params: params
                    });
                },
                search: function search(params) {
                    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.get("/stocktakes/search", {
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
                    return _Api__WEBPACK_IMPORTED_MODULE_0__.default.delete("/stocktakes/", {
                        params: params
                    });
                }
            });

            /***/
        }),

        /***/
        "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loading-overlay/dist/vue-loading.css":
        /*!***********************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loading-overlay/dist/vue-loading.css ***!
          \***********************************************************************************************************************************************************************************************************************/
        /***/
            ((module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
            });
            /* harmony import */
            var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
            /* harmony import */
            var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            // Imports

            var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i) { return i[1] });
            // Module
            ___CSS_LOADER_EXPORT___.push([module.id, ".vld-shown {\n  overflow: hidden;\n}\n\n.vld-overlay {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  align-items: center;\n  display: none;\n  justify-content: center;\n  overflow: hidden;\n  z-index: 9999;\n}\n\n.vld-overlay.is-active {\n  display: flex;\n}\n\n.vld-overlay.is-full-page {\n  z-index: 9999;\n  position: fixed;\n}\n\n.vld-overlay .vld-background {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background: #fff;\n  opacity: 0.5;\n}\n\n.vld-overlay .vld-icon, .vld-parent {\n  position: relative;\n}\n\n", ""]);
            // Exports
            /* harmony default export */
            const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


            /***/
        }),

        /***/
        "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css&":
        /*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css& ***!
          \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
        /***/
            ((module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
            });
            /* harmony import */
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
            /* harmony import */
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            // Imports

            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i) { return i[1] });
            // Module
            ___CSS_LOADER_EXPORT___.push([module.id, "\n.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate)\r\n  .v-icon {\r\n  color: rgb(111, 98, 228) !important;\n}\n.row {\r\n  margin: 0 !important;\n}\r\n", ""]);
            // Exports
            /* harmony default export */
            const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


            /***/
        }),

        /***/
        "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/stocktakes.vue?vue&type=style&index=0&lang=css&":
        /*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/stocktakes.vue?vue&type=style&index=0&lang=css& ***!
          \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
        /***/
            ((module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
            });
            /* harmony import */
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
            /* harmony import */
            var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
            // Imports

            var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i) { return i[1] });
            // Module
            ___CSS_LOADER_EXPORT___.push([module.id, "\n.v-application--wrap > .container {\r\n  margin: 0;\n}\n.v-text-field.v-text-field--enclosed .v-text-field__details,\r\n.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)\r\n  > .v-input__control\r\n  > .v-input__slot {\r\n  padding: 0px;\n}\n.stocktake-footer {\r\n  min-width: 0;\r\n  overflow: hidden;\n}\n.purchas-extra-expense :after,\r\n.purchas-extra-expense :before {\r\n  display: none;\n}\n.purchas-extra-expense .v-text-field__details {\r\n  display: none;\n}\n.text-red input {\r\n  color: red !important;\n}\n.stocktake-info .v-text-field__prefix {\r\n  margin-right: 10px;\n}\r\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\n}\n.v-application ol,\r\n.v-application ul {\r\n  padding-left: 0;\n}\nul {\r\n  list-style: none;\r\n  border: 1px solid silver;\r\n  max-height: 170px;\r\n  padding: 0;\r\n  margin: 0;\r\n  scroll-behavior: smooth; /* nice smooth movement */\r\n  overflow: hidden; /* set to hidden by OP's request */\n}\nul > div {\r\n  padding: 0.5em;\r\n  margin: 0;\n}\nul > div:focus {\r\n  background: #e91e63;\r\n  outline: none;\n}\n.theme--light.v-subheader {\r\n  background: rgb(255, 231, 243);\r\n  justify-content: center;\n}\n.first-level {\r\n  background: rgb(103, 133, 196);\r\n  justify-content: center;\n}\n.v-application ol,\r\n.v-application ul {\r\n  padding-left: 0;\n}\nul {\r\n  list-style: none;\r\n  border: 1px solid silver;\r\n  max-height: 170px;\r\n  padding: 0;\r\n  margin: 0;\r\n  scroll-behavior: smooth; /* nice smooth movement */\r\n  overflow: hidden; /* set to hidden by OP's request */\n}\nul > div {\r\n  padding: 0.5em;\r\n  margin: 0;\n}\nul > div:focus {\r\n  background: #e91e63;\r\n  outline: none;\n}\n.theme--light.v-subheader {\r\n  background: rgb(255, 231, 243);\r\n  justify-content: center;\n}\n.first-level {\r\n  background: rgb(103, 133, 196);\r\n  justify-content: center;\n}\r\n", ""]);
            // Exports
            /* harmony default export */
            const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


            /***/
        }),

        /***/
        "./node_modules/vue-loading-overlay/dist/vue-loading.css":
        /*!***************************************************************!*\
          !*** ./node_modules/vue-loading-overlay/dist/vue-loading.css ***!
          \***************************************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
            });
            /* harmony import */
            var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            /* harmony import */
            var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */
            var _css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./vue-loading.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loading-overlay/dist/vue-loading.css");



            var options = {};

            options.insert = "head";
            options.singleton = false;

            var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



            /* harmony default export */
            const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

            /***/
        }),

        /***/
        "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css&":
        /*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css& ***!
          \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
            });
            /* harmony import */
            var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            /* harmony import */
            var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */
            var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product-info.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css&");



            var options = {};

            options.insert = "head";
            options.singleton = false;

            var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



            /* harmony default export */
            const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

            /***/
        }),

        /***/
        "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/stocktakes.vue?vue&type=style&index=0&lang=css&":
        /*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/stocktakes.vue?vue&type=style&index=0&lang=css& ***!
          \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
            });
            /* harmony import */
            var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            /* harmony import */
            var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */
            var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_stocktakes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./stocktakes.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/stocktakes.vue?vue&type=style&index=0&lang=css&");



            var options = {};

            options.insert = "head";
            options.singleton = false;

            var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_stocktakes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



            /* harmony default export */
            const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_stocktakes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

            /***/
        }),

        /***/
        "./resources/js/components/main/loader.vue":
        /*!*************************************************!*\
          !*** ./resources/js/components/main/loader.vue ***!
          \*************************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
            });
            /* harmony import */
            var _loader_vue_vue_type_template_id_f18340a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./loader.vue?vue&type=template&id=f18340a4& */ "./resources/js/components/main/loader.vue?vue&type=template&id=f18340a4&");
            /* harmony import */
            var _loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./loader.vue?vue&type=script&lang=js& */ "./resources/js/components/main/loader.vue?vue&type=script&lang=js&");
            /* harmony import */
            var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





            /* normalize component */
            ;
            var component = (0, _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
                _loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
                _loader_vue_vue_type_template_id_f18340a4___WEBPACK_IMPORTED_MODULE_0__.render,
                _loader_vue_vue_type_template_id_f18340a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
                false,
                null,
                null,
                null

            )

            /* hot reload */
            if (false) { var api; }
            component.options.__file = "resources/js/components/main/loader.vue"
                /* harmony default export */
            const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

            /***/
        }),

        /***/
        "./resources/js/components/main/products/product-info.vue":
        /*!****************************************************************!*\
          !*** ./resources/js/components/main/products/product-info.vue ***!
          \****************************************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
            });
            /* harmony import */
            var _product_info_vue_vue_type_template_id_b36f5868___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./product-info.vue?vue&type=template&id=b36f5868& */ "./resources/js/components/main/products/product-info.vue?vue&type=template&id=b36f5868&");
            /* harmony import */
            var _product_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./product-info.vue?vue&type=script&lang=js& */ "./resources/js/components/main/products/product-info.vue?vue&type=script&lang=js&");
            /* harmony import */
            var _product_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./product-info.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css&");
            /* harmony import */
            var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



            ;


            /* normalize component */

            var component = (0, _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
                _product_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
                _product_info_vue_vue_type_template_id_b36f5868___WEBPACK_IMPORTED_MODULE_0__.render,
                _product_info_vue_vue_type_template_id_b36f5868___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
                false,
                null,
                null,
                null

            )

            /* hot reload */
            if (false) { var api; }
            component.options.__file = "resources/js/components/main/products/product-info.vue"
                /* harmony default export */
            const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

            /***/
        }),

        /***/
        "./resources/js/components/main/products/stocktakes.vue":
        /*!***************************************************************!*\
          !*** ./resources/js/components/main/products/stocktakes.vue ***!
          \***************************************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
            });
            /* harmony import */
            var _stocktakes_vue_vue_type_template_id_1d8c3a13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./stocktakes.vue?vue&type=template&id=1d8c3a13& */ "./resources/js/components/main/products/stocktakes.vue?vue&type=template&id=1d8c3a13&");
            /* harmony import */
            var _stocktakes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./stocktakes.vue?vue&type=script&lang=js& */ "./resources/js/components/main/products/stocktakes.vue?vue&type=script&lang=js&");
            /* harmony import */
            var _stocktakes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./stocktakes.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/main/products/stocktakes.vue?vue&type=style&index=0&lang=css&");
            /* harmony import */
            var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



            ;


            /* normalize component */

            var component = (0, _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
                _stocktakes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
                _stocktakes_vue_vue_type_template_id_1d8c3a13___WEBPACK_IMPORTED_MODULE_0__.render,
                _stocktakes_vue_vue_type_template_id_1d8c3a13___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
                false,
                null,
                null,
                null

            )

            /* hot reload */
            if (false) { var api; }
            component.options.__file = "resources/js/components/main/products/stocktakes.vue"
                /* harmony default export */
            const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

            /***/
        }),

        /***/
        "./resources/js/components/main/loader.vue?vue&type=script&lang=js&":
        /*!**************************************************************************!*\
          !*** ./resources/js/components/main/loader.vue?vue&type=script&lang=js& ***!
          \**************************************************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
            });
            /* harmony import */
            var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./loader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/loader.vue?vue&type=script&lang=js&");
            /* harmony default export */
            const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default);

            /***/
        }),

        /***/
        "./resources/js/components/main/products/product-info.vue?vue&type=script&lang=js&":
        /*!*****************************************************************************************!*\
          !*** ./resources/js/components/main/products/product-info.vue?vue&type=script&lang=js& ***!
          \*****************************************************************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
            });
            /* harmony import */
            var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product-info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=script&lang=js&");
            /* harmony default export */
            const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default);

            /***/
        }),

        /***/
        "./resources/js/components/main/products/stocktakes.vue?vue&type=script&lang=js&":
        /*!****************************************************************************************!*\
          !*** ./resources/js/components/main/products/stocktakes.vue?vue&type=script&lang=js& ***!
          \****************************************************************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "default": () => (__WEBPACK_DEFAULT_EXPORT__)
                    /* harmony export */
            });
            /* harmony import */
            var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stocktakes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./stocktakes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/stocktakes.vue?vue&type=script&lang=js&");
            /* harmony default export */
            const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stocktakes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default);

            /***/
        }),

        /***/
        "./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css&":
        /*!*************************************************************************************************!*\
          !*** ./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css& ***!
          \*************************************************************************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */
            var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product-info.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=style&index=0&lang=css&");


            /***/
        }),

        /***/
        "./resources/js/components/main/products/stocktakes.vue?vue&type=style&index=0&lang=css&":
        /*!************************************************************************************************!*\
          !*** ./resources/js/components/main/products/stocktakes.vue?vue&type=style&index=0&lang=css& ***!
          \************************************************************************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */
            var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_stocktakes_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./stocktakes.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/stocktakes.vue?vue&type=style&index=0&lang=css&");


            /***/
        }),

        /***/
        "./resources/js/components/main/loader.vue?vue&type=template&id=f18340a4&":
        /*!********************************************************************************!*\
          !*** ./resources/js/components/main/loader.vue?vue&type=template&id=f18340a4& ***!
          \********************************************************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "render": () => ( /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_template_id_f18340a4___WEBPACK_IMPORTED_MODULE_0__.render),
                /* harmony export */
                "staticRenderFns": () => ( /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_template_id_f18340a4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
                    /* harmony export */
            });
            /* harmony import */
            var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loader_vue_vue_type_template_id_f18340a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./loader.vue?vue&type=template&id=f18340a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/loader.vue?vue&type=template&id=f18340a4&");


            /***/
        }),

        /***/
        "./resources/js/components/main/products/product-info.vue?vue&type=template&id=b36f5868&":
        /*!***********************************************************************************************!*\
          !*** ./resources/js/components/main/products/product-info.vue?vue&type=template&id=b36f5868& ***!
          \***********************************************************************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "render": () => ( /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_template_id_b36f5868___WEBPACK_IMPORTED_MODULE_0__.render),
                /* harmony export */
                "staticRenderFns": () => ( /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_template_id_b36f5868___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
                    /* harmony export */
            });
            /* harmony import */
            var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_product_info_vue_vue_type_template_id_b36f5868___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./product-info.vue?vue&type=template&id=b36f5868& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=template&id=b36f5868&");


            /***/
        }),

        /***/
        "./resources/js/components/main/products/stocktakes.vue?vue&type=template&id=1d8c3a13&":
        /*!**********************************************************************************************!*\
          !*** ./resources/js/components/main/products/stocktakes.vue?vue&type=template&id=1d8c3a13& ***!
          \**********************************************************************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "render": () => ( /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stocktakes_vue_vue_type_template_id_1d8c3a13___WEBPACK_IMPORTED_MODULE_0__.render),
                /* harmony export */
                "staticRenderFns": () => ( /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stocktakes_vue_vue_type_template_id_1d8c3a13___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
                    /* harmony export */
            });
            /* harmony import */
            var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stocktakes_vue_vue_type_template_id_1d8c3a13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./stocktakes.vue?vue&type=template&id=1d8c3a13& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/stocktakes.vue?vue&type=template&id=1d8c3a13&");


            /***/
        }),

        /***/
        "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/loader.vue?vue&type=template&id=f18340a4&":
        /*!***********************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/loader.vue?vue&type=template&id=f18340a4& ***!
          \***********************************************************************************************************************************************************************************************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "render": () => ( /* binding */ render),
                /* harmony export */
                "staticRenderFns": () => ( /* binding */ staticRenderFns)
                    /* harmony export */
            });
            var render = function() {
                var _vm = this
                var _h = _vm.$createElement
                var _c = _vm._self._c || _h
                return _c(
                    "div", { staticClass: "vld-parent" }, [
                        _c("loading", {
                            attrs: {
                                active: _vm.isLoading,
                                "can-cancel": false,
                                "on-cancel": _vm.onCancel,
                                "is-full-page": true,
                                blur: "",
                                opacity: _vm.loaderOpacity
                            },
                            on: {
                                "update:active": function($event) {
                                    _vm.isLoading = $event
                                }
                            }
                        })
                    ],
                    1
                )
            }
            var staticRenderFns = []
            render._withStripped = true



            /***/
        }),

        /***/
        "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=template&id=b36f5868&":
        /*!**************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/product-info.vue?vue&type=template&id=b36f5868& ***!
          \**************************************************************************************************************************************************************************************************************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "render": () => ( /* binding */ render),
                /* harmony export */
                "staticRenderFns": () => ( /* binding */ staticRenderFns)
                    /* harmony export */
            });
            var render = function() {
                var _vm = this
                var _h = _vm.$createElement
                var _c = _vm._self._c || _h
                return _c(
                    "v-dialog", {
                        attrs: { scrollable: "", "max-width": "1000px", persistent: "" },
                        model: {
                            value: _vm.dialog,
                            callback: function($$v) {
                                _vm.dialog = $$v
                            },
                            expression: "dialog"
                        }
                    }, [
                        _c(
                            "v-card", [
                                _c(
                                    "v-card-title", { staticClass: "my-3 pa-0" }, [
                                        _c(
                                            "v-row", { staticStyle: { "font-size": "14px" } }, [
                                                _c(
                                                    "v-col", {
                                                        staticClass: "align-self-center",
                                                        staticStyle: { "border-left": "1px solid" },
                                                        attrs: { cols: "12", lg: "3" }
                                                    }, [
                                                        _vm._t("title", function() {
                                                            return [_vm._v(" new product ")]
                                                        })
                                                    ],
                                                    2
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                    "v-col", {
                                                        staticClass: "align-self-center",
                                                        attrs: { cols: "12", lg: "5" }
                                                    }, [
                                                        _c(
                                                            "v-row", [
                                                                _c("v-col", [
                                                                    _vm._v(
                                                                        "\n              " +
                                                                        _vm._s(_vm.product.ar_name) +
                                                                        "\n            "
                                                                    )
                                                                ])
                                                            ],
                                                            1
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                            "v-row", [
                                                                _c("v-col", [
                                                                    _vm._v(
                                                                        "\n              " +
                                                                        _vm._s(_vm.product.en_name) +
                                                                        "\n            "
                                                                    )
                                                                ])
                                                            ],
                                                            1
                                                        )
                                                    ],
                                                    1
                                                ),
                                                _vm._v(" "),
                                                _vm.windowHeight >= 0 ?
                                                _c(
                                                    "v-col", { attrs: { cols: "12", lg: "4" } }, [
                                                        _c(
                                                            "v-row", { staticClass: "justify-center" }, [
                                                                _c(
                                                                    "v-col", [
                                                                        _c("v-barcode", {
                                                                            staticStyle: { direction: "ltr" },
                                                                            attrs: {
                                                                                value: _vm.product.barcode,
                                                                                width: "1",
                                                                                height: "50"
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
                                                ) :
                                                _vm._e()
                                            ],
                                            1
                                        )
                                    ],
                                    1
                                ),
                                _vm._v(" "),
                                _c(
                                    "v-card-text", { staticStyle: { height: "400px" } }, [
                                        _c(
                                            "v-row", [
                                                _c(
                                                    "v-col", { attrs: { cols: "6", lg: "3" } }, [
                                                        _c("v-checkbox", {
                                                            staticClass: "nib",
                                                            staticStyle: {
                                                                "white-space": "nowrap",
                                                                "margin-left": "5px",
                                                                "margin-right": "5px"
                                                            },
                                                            attrs: {
                                                                disabled: "",
                                                                color: "#e91e63",
                                                                label: "المنتج نشط"
                                                            },
                                                            model: {
                                                                value: _vm.product.is_active,
                                                                callback: function($$v) {
                                                                    _vm.$set(_vm.product, "is_active", $$v)
                                                                },
                                                                expression: "product.is_active"
                                                            }
                                                        })
                                                    ],
                                                    1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                    "v-col", { attrs: { cols: "6", lg: "2" } }, [
                                                        _c("v-checkbox", {
                                                            staticStyle: {
                                                                "white-space": "nowrap",
                                                                "margin-left": "5px",
                                                                "margin-right": "5px"
                                                            },
                                                            attrs: {
                                                                disabled: "",
                                                                color: "#e91e63",
                                                                label: "قابل للاسترجاع"
                                                            },
                                                            model: {
                                                                value: _vm.product.is_returnable,
                                                                callback: function($$v) {
                                                                    _vm.$set(_vm.product, "is_returnable", $$v)
                                                                },
                                                                expression: "product.is_returnable"
                                                            }
                                                        })
                                                    ],
                                                    1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                    "v-col", { attrs: { cols: "6", lg: "3" } }, [
                                                        _c("v-checkbox", {
                                                            staticStyle: {
                                                                "white-space": "nowrap",
                                                                "margin-left": "5px",
                                                                "margin-right": "5px"
                                                            },
                                                            attrs: {
                                                                disabled: "",
                                                                color: "#e91e63",
                                                                label: "الصنف مجاني"
                                                            },
                                                            model: {
                                                                value: _vm.product.is_free,
                                                                callback: function($$v) {
                                                                    _vm.$set(_vm.product, "is_free", $$v)
                                                                },
                                                                expression: "product.is_free"
                                                            }
                                                        })
                                                    ],
                                                    1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                    "v-col", { attrs: { cols: "6", lg: "2" } }, [
                                                        _c("v-checkbox", {
                                                            staticStyle: {
                                                                "white-space": "nowrap",
                                                                "margin-left": "5px",
                                                                "margin-right": "5px"
                                                            },
                                                            attrs: {
                                                                disabled: "",
                                                                color: "#e91e63",
                                                                label: "السماح بالبونص"
                                                            },
                                                            model: {
                                                                value: _vm.product.is_bonus,
                                                                callback: function($$v) {
                                                                    _vm.$set(_vm.product, "is_bonus", $$v)
                                                                },
                                                                expression: "product.is_bonus"
                                                            }
                                                        })
                                                    ],
                                                    1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                    "v-col", { attrs: { cols: "6", lg: "2" } }, [
                                                        _c("v-checkbox", {
                                                            staticStyle: {
                                                                "white-space": "nowrap",
                                                                "margin-left": "5px",
                                                                "margin-right": "5px"
                                                            },
                                                            attrs: {
                                                                disabled: "",
                                                                color: "#e91e63",
                                                                label: "لديه تاريخ انتهاء"
                                                            },
                                                            model: {
                                                                value: _vm.product.has_expiration_date,
                                                                callback: function($$v) {
                                                                    _vm.$set(_vm.product, "has_expiration_date", $$v)
                                                                },
                                                                expression: "product.has_expiration_date"
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
                                            "v-tabs", {
                                                attrs: {
                                                    "background-color": "transparent",
                                                    color: "basil",
                                                    "gv-row": ""
                                                },
                                                model: {
                                                    value: _vm.tab,
                                                    callback: function($$v) {
                                                        _vm.tab = $$v
                                                    },
                                                    expression: "tab"
                                                }
                                            },
                                            _vm._l(_vm.items, function(item) {
                                                return _c("v-tab", { key: item.id }, [
                                                    _vm._v("\n          " + _vm._s(item) + "\n        ")
                                                ])
                                            }),
                                            1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                            "v-tabs-items", {
                                                model: {
                                                    value: _vm.tab,
                                                    callback: function($$v) {
                                                        _vm.tab = $$v
                                                    },
                                                    expression: "tab"
                                                }
                                            }, [
                                                _c(
                                                    "v-tab-item", [
                                                        _c(
                                                            "v-row", [
                                                                _c(
                                                                    "v-col", { attrs: { cols: "12", lg: "6" } }, [
                                                                        _c(
                                                                            "v-row", [
                                                                                _c(
                                                                                    "v-col", {
                                                                                        staticStyle: {
                                                                                            "border-left": "1px solid",
                                                                                            margin: "2px"
                                                                                        },
                                                                                        attrs: { cols: "6", lg: "3" }
                                                                                    }, [
                                                                                        _vm._v(
                                                                                            "\n                  الرقم التسلسلي\n                "
                                                                                        )
                                                                                    ]
                                                                                ),
                                                                                _vm._v(" "),
                                                                                _c("v-col", [
                                                                                    _vm._v(
                                                                                        " " +
                                                                                        _vm._s(_vm.product.serial_number) +
                                                                                        " "
                                                                                    )
                                                                                ])
                                                                            ],
                                                                            1
                                                                        ),
                                                                        _vm._v(" "),
                                                                        _c(
                                                                            "v-row", [
                                                                                _c(
                                                                                    "v-col", {
                                                                                        staticStyle: {
                                                                                            "border-left": "1px solid",
                                                                                            margin: "2px"
                                                                                        },
                                                                                        attrs: { cols: "6", lg: "3" }
                                                                                    }, [
                                                                                        _vm._v(
                                                                                            "\n                  نوع الصنف\n                "
                                                                                        )
                                                                                    ]
                                                                                ),
                                                                                _vm._v(" "),
                                                                                _c("v-col", [
                                                                                    _vm._v(
                                                                                        "\n                  " +
                                                                                        _vm._s(
                                                                                            _vm.prdct_types.find(function(elem) {
                                                                                                return (
                                                                                                    elem.id ==
                                                                                                    _vm.product.prdct_type_id
                                                                                                )
                                                                                            }) ?
                                                                                            _vm.prdct_types.find(function(
                                                                                                elem
                                                                                            ) {
                                                                                                return (
                                                                                                    elem.id ==
                                                                                                    _vm.product.prdct_type_id
                                                                                                )
                                                                                            })["ar_name"] :
                                                                                            ""
                                                                                        ) +
                                                                                        "\n                "
                                                                                    )
                                                                                ])
                                                                            ],
                                                                            1
                                                                        ),
                                                                        _vm._v(" "),
                                                                        _c(
                                                                            "v-row", [
                                                                                _c(
                                                                                    "v-col", {
                                                                                        staticStyle: {
                                                                                            "border-left": "1px solid",
                                                                                            margin: "2px"
                                                                                        },
                                                                                        attrs: { cols: "6", lg: "3" }
                                                                                    }, [
                                                                                        _vm._v(
                                                                                            "\n                  مجموعات الصنف\n                "
                                                                                        )
                                                                                    ]
                                                                                ),
                                                                                _vm._v(" "),
                                                                                _c(
                                                                                    "v-col",
                                                                                    _vm._l(_vm.product.groups, function(item) {
                                                                                        return _c("span", { key: item.id }, [
                                                                                            _vm._v(
                                                                                                "\n                    " +
                                                                                                _vm._s(item.ar_name) +
                                                                                                "،\n                  "
                                                                                            )
                                                                                        ])
                                                                                    }),
                                                                                    0
                                                                                )
                                                                            ],
                                                                            1
                                                                        )
                                                                    ],
                                                                    1
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                    "v-col", { attrs: { cols: "12", lg: "6" } }, [
                                                                        _c(
                                                                            "v-row", [
                                                                                _c(
                                                                                    "v-col", {
                                                                                        staticStyle: {
                                                                                            "border-left": "1px solid",
                                                                                            margin: "2px"
                                                                                        },
                                                                                        attrs: { cols: "6", lg: "3" }
                                                                                    }, [
                                                                                        _vm._v(
                                                                                            "\n                  حد التنبيه الأدني\n                "
                                                                                        )
                                                                                    ]
                                                                                ),
                                                                                _vm._v(" "),
                                                                                _c("v-col", [
                                                                                    _vm._v(
                                                                                        " " + _vm._s(_vm.product.min_alert) + " "
                                                                                    )
                                                                                ])
                                                                            ],
                                                                            1
                                                                        ),
                                                                        _vm._v(" "),
                                                                        _c(
                                                                            "v-row", [
                                                                                _c(
                                                                                    "v-col", {
                                                                                        staticStyle: {
                                                                                            "border-left": "1px solid",
                                                                                            margin: "2px"
                                                                                        },
                                                                                        attrs: { cols: "6", lg: "3" }
                                                                                    }, [
                                                                                        _vm._v(
                                                                                            "\n                  حد التنبيه الأعلى\n                "
                                                                                        )
                                                                                    ]
                                                                                ),
                                                                                _vm._v(" "),
                                                                                _c("v-col", [
                                                                                    _vm._v(
                                                                                        " " + _vm._s(_vm.product.max_alert) + " "
                                                                                    )
                                                                                ])
                                                                            ],
                                                                            1
                                                                        ),
                                                                        _vm._v(" "),
                                                                        _c(
                                                                            "v-row", [
                                                                                _c(
                                                                                    "v-col", {
                                                                                        staticStyle: {
                                                                                            "border-left": "1px solid",
                                                                                            margin: "2px"
                                                                                        },
                                                                                        attrs: { cols: "6", lg: "3" }
                                                                                    }, [
                                                                                        _vm._v(
                                                                                            "\n                  فترة الركود\n                "
                                                                                        )
                                                                                    ]
                                                                                ),
                                                                                _vm._v(" "),
                                                                                _c("v-col", [
                                                                                    _vm._v(
                                                                                        " " +
                                                                                        _vm._s(_vm.product.stagnation_period) +
                                                                                        " "
                                                                                    )
                                                                                ])
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
                                                _c(
                                                    "v-tab-item", [
                                                        _c("div", { staticStyle: { height: "60px" } }),
                                                        _vm._v(" "),
                                                        _c("v-data-table", {
                                                            attrs: {
                                                                headers: _vm.product_units_headers,
                                                                items: _vm.product.units,
                                                                "hide-default-footer": ""
                                                            },
                                                            scopedSlots: _vm._u([{
                                                                    key: "item.main_sold_unit_id",
                                                                    fn: function(ref) {
                                                                        var item = ref.item
                                                                        return [
                                                                            _vm.product.units.indexOf(item) + 1 ==
                                                                            _vm.product.main_sold_unit_id ?
                                                                            _c("v-icon", { attrs: { small: "" } }, [
                                                                                _vm._v("mdi-check")
                                                                            ]) :
                                                                            _vm._e()
                                                                        ]
                                                                    }
                                                                },
                                                                {
                                                                    key: "item.main_bought_unit_id",
                                                                    fn: function(ref) {
                                                                        var item = ref.item
                                                                        return [
                                                                            _vm.product.units.indexOf(item) + 1 ==
                                                                            _vm.product.main_bought_unit_id ?
                                                                            _c("v-icon", { attrs: { small: "" } }, [
                                                                                _vm._v("mdi-check")
                                                                            ]) :
                                                                            _vm._e()
                                                                        ]
                                                                    }
                                                                },
                                                                {
                                                                    key: "item.contains",
                                                                    fn: function(ref) {
                                                                        var item = ref.item
                                                                        return [
                                                                            _vm._v(
                                                                                "\n              " +
                                                                                _vm._s(item.pivot.contains) +
                                                                                "\n            "
                                                                            )
                                                                        ]
                                                                    }
                                                                },
                                                                {
                                                                    key: "item.equals",
                                                                    fn: function(ref) {
                                                                        var item = ref.item
                                                                        return [_vm._v(" = ")]
                                                                    }
                                                                },
                                                                {
                                                                    key: "item.from_unit",
                                                                    fn: function(ref) {
                                                                        var item = ref.item
                                                                        return [
                                                                            _vm._v(
                                                                                "\n              " +
                                                                                _vm._s(
                                                                                    _vm.product.units[0] &&
                                                                                    _vm.product.units[0].ar_name
                                                                                ) +
                                                                                "\n            "
                                                                            )
                                                                        ]
                                                                    }
                                                                },
                                                                {
                                                                    key: "item.bought_price",
                                                                    fn: function(ref) {
                                                                        var item = ref.item
                                                                        return [
                                                                            _vm._v(
                                                                                "\n              " +
                                                                                _vm._s(item.pivot.bought_price) +
                                                                                "\n            "
                                                                            )
                                                                        ]
                                                                    }
                                                                },
                                                                {
                                                                    key: "item.sold_price",
                                                                    fn: function(ref) {
                                                                        var item = ref.item
                                                                        return [
                                                                            _vm._v(
                                                                                "\n              " +
                                                                                _vm._s(item.pivot.sold_price) +
                                                                                "\n            "
                                                                            )
                                                                        ]
                                                                    }
                                                                },
                                                                {
                                                                    key: "item.barcode",
                                                                    fn: function(ref) {
                                                                        var item = ref.item
                                                                        return [
                                                                            _vm._v(
                                                                                "\n              " +
                                                                                _vm._s(item.pivot.barcode) +
                                                                                "\n            "
                                                                            )
                                                                        ]
                                                                    }
                                                                }
                                                            ])
                                                        })
                                                    ],
                                                    1
                                                )
                                            ],
                                            1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                            "v-container", {
                                                directives: [{
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value: false,
                                                    expression: "false"
                                                }]
                                            }, [
                                                _c(
                                                    "v-row", [
                                                        _c("v-col", { attrs: { cols: "6", sm: "6", md: "4" } }, [
                                                            _c("div", { staticStyle: { display: "flex" } }),
                                                            _vm._v(" "),
                                                            _c(
                                                                "div", {
                                                                    staticStyle: { "font-size": "14px", float: "left" }
                                                                }, [
                                                                    _vm._v(
                                                                        "\n              " +
                                                                        _vm._s(_vm.product) +
                                                                        "\n            "
                                                                    )
                                                                ]
                                                            )
                                                        ])
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
                                    "v-card-actions", [
                                        _c("v-spacer"),
                                        _vm._v(" "),
                                        _c(
                                            "v-btn", {
                                                attrs: { color: "blue darken-1", text: "" },
                                                on: { click: _vm.close }
                                            }, [_vm._v("الغاء")]
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



            /***/
        }),

        /***/
        "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/stocktakes.vue?vue&type=template&id=1d8c3a13&":
        /*!*************************************************************************************************************************************************************************************************************************************!*\
          !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/main/products/stocktakes.vue?vue&type=template&id=1d8c3a13& ***!
          \*************************************************************************************************************************************************************************************************************************************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */
            __webpack_require__.d(__webpack_exports__, {
                /* harmony export */
                "render": () => ( /* binding */ render),
                /* harmony export */
                "staticRenderFns": () => ( /* binding */ staticRenderFns)
                    /* harmony export */
            });
            var render = function() {
                var _vm = this
                var _h = _vm.$createElement
                var _c = _vm._self._c || _h
                return _c(
                    "v-form", { ref: "form" }, [
                        _c(
                            "v-row", [
                                _c(
                                    "v-col", { staticStyle: { height: "10px" } }, [
                                        _c("v-progress-linear", {
                                            attrs: {
                                                active: _vm.show,
                                                indeterminate: _vm.query,
                                                query: true
                                            },
                                            model: {
                                                value: _vm.value,
                                                callback: function($$v) {
                                                    _vm.value = $$v
                                                },
                                                expression: "value"
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
                            "div", [
                                _c(
                                    "v-dialog", {
                                        attrs: { "hide-overlay": "", persistent: "", width: "300" },
                                        model: {
                                            value: _vm.starter_dialog,
                                            callback: function($$v) {
                                                _vm.starter_dialog = $$v
                                            },
                                            expression: "starter_dialog"
                                        }
                                    }, [
                                        _c(
                                            "v-card", { attrs: { color: "primary", dark: "" } }, [
                                                _c(
                                                    "v-card-text", [
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
                                    "v-snackbar", {
                                        attrs: {
                                            color: _vm.snackbarColor,
                                            centered: "",
                                            transition: "scale-transition",
                                            timeout: _vm.snackbarTimeout
                                        },
                                        scopedSlots: _vm._u([{
                                            key: "action",
                                            fn: function(ref) {
                                                var attrs = ref.attrs
                                                return [
                                                    _c(
                                                        "v-btn",
                                                        _vm._b({
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
                                                        ), [_vm._v("\n          Close\n        ")]
                                                    )
                                                ]
                                            }
                                        }]),
                                        model: {
                                            value: _vm.snackbar,
                                            callback: function($$v) {
                                                _vm.snackbar = $$v
                                            },
                                            expression: "snackbar"
                                        }
                                    }, [_vm._v("\n      " + _vm._s(_vm.snackbarText) + "\n\n      ")]
                                ),
                                _vm._v(" "),
                                _c(
                                    "v-dialog", {
                                        attrs: { "max-width": "290" },
                                        model: {
                                            value: _vm.no_product_dialog,
                                            callback: function($$v) {
                                                _vm.no_product_dialog = $$v
                                            },
                                            expression: "no_product_dialog"
                                        }
                                    }, [
                                        _c(
                                            "v-card", [
                                                _c("v-card-title", [_vm._v(" الصنف غير موجود ")]),
                                                _vm._v(" "),
                                                _c("v-card-text", [
                                                    _vm._v(
                                                        "\n          الصنف لم يتم شراؤه من قبل أو أن المخزون قد نفد\n        "
                                                    )
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                    "v-card-actions", [
                                                        _c("v-spacer"),
                                                        _vm._v(" "),
                                                        _c(
                                                            "v-btn", {
                                                                attrs: { color: "green darken-1", text: "" },
                                                                on: {
                                                                    click: function($event) {
                                                                        _vm.no_product_dialog = false
                                                                    }
                                                                }
                                                            }, [_vm._v("\n            اغلق\n          ")]
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
                                    "v-dialog", {
                                        attrs: { "max-width": "600px", persistent: "" },
                                        model: {
                                            value: _vm.dialog,
                                            callback: function($$v) {
                                                _vm.dialog = $$v
                                            },
                                            expression: "dialog"
                                        }
                                    }, [
                                        _c(
                                            "v-card", [
                                                _c(
                                                    "p", {
                                                        staticStyle: {
                                                            margin: "0 10px",
                                                            "font-size": "14px",
                                                            padding: "10px"
                                                        }
                                                    }, [
                                                        _vm._v(
                                                            "\n          قم باختيار الصنف المناسب واضغط موافق\n        "
                                                        )
                                                    ]
                                                ),
                                                _vm._v(" "),
                                                _c("v-card-text", [
                                                    _c(
                                                        "ul",
                                                        _vm._l(_vm.sets, function(set) {
                                                            return _c(
                                                                "div", {
                                                                    key: set.id + "d",
                                                                    attrs: { tabIndex: "-1" },
                                                                    on: {
                                                                        blur: function($event) {
                                                                            _vm.selected_elem_fromSet = set.id
                                                                        }
                                                                    }
                                                                }, [
                                                                    _c(
                                                                        "v-row", [
                                                                            _c("v-col", [
                                                                                _vm._v(
                                                                                    "\n                  " +
                                                                                    _vm._s(set.id) +
                                                                                    "\n                "
                                                                                )
                                                                            ]),
                                                                            _vm._v(" "),
                                                                            _c("v-col", [
                                                                                _vm._v(
                                                                                    "\n                  " +
                                                                                    _vm._s(_vm.selected_product.ar_name) +
                                                                                    "\n                "
                                                                                )
                                                                            ]),
                                                                            _vm._v(" "),
                                                                            _c("v-col", [
                                                                                _vm._v(
                                                                                    "\n                  " +
                                                                                    _vm._s(set.sum_quantity_in_minor_unit) +
                                                                                    "\n                "
                                                                                )
                                                                            ]),
                                                                            _vm._v(" "),
                                                                            _c("v-col", [
                                                                                _vm._v(
                                                                                    "\n                  " +
                                                                                    _vm._s(
                                                                                        set.expires_at &&
                                                                                        set.expires_at.split(" ")[0]
                                                                                    ) +
                                                                                    "\n                "
                                                                                )
                                                                            ])
                                                                        ],
                                                                        1
                                                                    )
                                                                ],
                                                                1
                                                            )
                                                        }),
                                                        0
                                                    )
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                    "v-card-actions", [
                                                        _c("v-spacer"),
                                                        _vm._v(" "),
                                                        _c(
                                                            "v-btn", {
                                                                attrs: { color: "green darken-1", text: "" },
                                                                on: { click: _vm.disagree }
                                                            }, [_vm._v("\n            Disagree\n          ")]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                            "v-btn", {
                                                                attrs: { color: "green darken-1", text: "" },
                                                                on: { click: _vm.agreeToAdd }
                                                            }, [_vm._v("\n            Agree\n          ")]
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
                                    "product-info", {
                                        attrs: {
                                            dialog: _vm.product_info_dialog,
                                            product: _vm.product_info_product,
                                            prdct_forms: _vm.prdct_forms,
                                            prdct_taxes: _vm.prdct_taxes,
                                            prdct_types: _vm.prdct_types
                                        },
                                        on: {
                                            dialogFalse: function($event) {
                                                _vm.product_info_dialog = false
                                            }
                                        }
                                    }, [
                                        _c("span", { attrs: { slot: "title" }, slot: "title" }, [
                                            _vm._v(" معلومات الصنف")
                                        ])
                                    ]
                                ),
                                _vm._v(" "),
                                _c(
                                    "v-card", { attrs: { "max-width": "100%" } }, [
                                        _c(
                                            "v-card-title", [
                                                _c(
                                                    "v-toolbar", { attrs: { flat: "", color: "white" } }, [
                                                        _c(
                                                            "v-row", [
                                                                _c(
                                                                    "v-col", { attrs: { cols: "3" } }, [
                                                                        _c("v-toolbar-title", [_vm._v(_vm._s(_vm.title))])
                                                                    ],
                                                                    1
                                                                ),
                                                                _vm._v(" "),
                                                                _vm.return_stocktake ?
                                                                _c(
                                                                    "v-col", { attrs: { cols: "7" } }, [
                                                                        _c(
                                                                            "v-radio-group", {
                                                                                model: {
                                                                                    value: _vm.return_source,
                                                                                    callback: function($$v) {
                                                                                        _vm.return_source = $$v
                                                                                    },
                                                                                    expression: "return_source"
                                                                                }
                                                                            }, [
                                                                                _c(
                                                                                    "v-row", { staticClass: "pa-0" }, [
                                                                                        _c(
                                                                                            "v-col", {
                                                                                                staticClass: "pa-0 mt-7",
                                                                                                attrs: { cols: "1" }
                                                                                            }, [
                                                                                                _c("v-radio", {
                                                                                                    attrs: { value: "1" }
                                                                                                })
                                                                                            ],
                                                                                            1
                                                                                        ),
                                                                                        _vm._v(" "),
                                                                                        _c(
                                                                                            "v-col", {
                                                                                                staticClass: "pa-0 mt-6",
                                                                                                attrs: { cols: "7" }
                                                                                            }, [
                                                                                                _c("v-text-field", {
                                                                                                    staticClass: "stocktake-info",
                                                                                                    attrs: {
                                                                                                        placeholder: "رقم الفاتورة",
                                                                                                        outlined: "",
                                                                                                        autocomplete: "off",
                                                                                                        prefix: " برقم فاتورة الشراء | ",
                                                                                                        rules: _vm.stocktake_exists
                                                                                                    },
                                                                                                    on: {
                                                                                                        click: function($event) {
                                                                                                            _vm.return_source = "1"
                                                                                                        },
                                                                                                        keydown: function($event) {
                                                                                                            if (!$event.type.indexOf(
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
                                                                                                            return _vm.getStocktakeByHittingStocktakeNumber()
                                                                                                        }
                                                                                                    },
                                                                                                    model: {
                                                                                                        value: _vm.stocktake_number_to_search,
                                                                                                        callback: function($$v) {
                                                                                                            _vm.stocktake_number_to_search = $$v
                                                                                                        },
                                                                                                        expression: "stocktake_number_to_search"
                                                                                                    }
                                                                                                })
                                                                                            ],
                                                                                            1
                                                                                        ),
                                                                                        _vm._v(" "),
                                                                                        _c(
                                                                                            "v-col", {
                                                                                                staticClass: "pa-0 pr-1 mt-7",
                                                                                                attrs: { cols: "4" }
                                                                                            }, [
                                                                                                _c("v-radio", {
                                                                                                    attrs: {
                                                                                                        value: "2",
                                                                                                        label: "اختيار حر للمنتجات"
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
                                                                ) :
                                                                _vm._e(),
                                                                _vm._v(" "),
                                                                _c(
                                                                    "v-col", {
                                                                        staticStyle: {
                                                                            "text-align": "end",
                                                                            "font-size": "13px"
                                                                        }
                                                                    }, [
                                                                        _c(
                                                                            "a", {
                                                                                staticStyle: { color: "black" },
                                                                                on: {
                                                                                    click: function($event) {
                                                                                        return _vm.$router.push("/dashboard")
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                _vm._v(
                                                                                    "\n                اغلاق\n                "
                                                                                ),
                                                                                _c("v-icon", [_vm._v(" mdi-close-box ")])
                                                                            ],
                                                                            1
                                                                        ),
                                                                        _vm._v(" "),
                                                                        _c(
                                                                            "a", {
                                                                                staticStyle: { color: "black" },
                                                                                on: {
                                                                                    click: function($event) {
                                                                                        return _vm.$router.back()
                                                                                    }
                                                                                }
                                                                            }, [
                                                                                _vm._v(
                                                                                    "\n                رجوع\n                "
                                                                                ),
                                                                                _c("v-icon", [
                                                                                    _vm._v(" mdi-arrow-left-bold ")
                                                                                ])
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
                                                )
                                            ],
                                            1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                            "v-card-text", [
                                                _c(
                                                    "v-container", [
                                                        _c(
                                                            "v-container", [
                                                                _c(
                                                                    "v-row", { staticClass: "justify-space-between" }, [
                                                                        _c(
                                                                            "v-col", { attrs: { cols: "12", lg: "5" } }, [
                                                                                _c(
                                                                                    "v-row", [
                                                                                        _c(
                                                                                            "v-col", {
                                                                                                staticClass: "pa-0",
                                                                                                attrs: { cols: "12" }
                                                                                            }, [
                                                                                                _c("v-text-field", {
                                                                                                    attrs: {
                                                                                                        outlined: "",
                                                                                                        disabled: "",
                                                                                                        prefix: " رقم الجرد | "
                                                                                                    },
                                                                                                    model: {
                                                                                                        value: _vm.stocktake.reference,
                                                                                                        callback: function($$v) {
                                                                                                            _vm.$set(
                                                                                                                _vm.stocktake,
                                                                                                                "reference",
                                                                                                                $$v
                                                                                                            )
                                                                                                        },
                                                                                                        expression: "stocktake.reference"
                                                                                                    }
                                                                                                })
                                                                                            ],
                                                                                            1
                                                                                        ),
                                                                                        _vm._v(" "),
                                                                                        _c(
                                                                                            "v-col", {
                                                                                                staticClass: "pa-0",
                                                                                                attrs: { cols: "12" }
                                                                                            }, [
                                                                                                _c("v-autocomplete", {
                                                                                                    attrs: {
                                                                                                        flat: "",
                                                                                                        "no-data": "",
                                                                                                        "no-data-text": "",
                                                                                                        "non-linear": "",
                                                                                                        outlined: "",
                                                                                                        prefix: " حساب الإيراد للكميات الزائدة | ",
                                                                                                        items: _vm.revenue_accounts,
                                                                                                        "item-text": function(item) {
                                                                                                            return (
                                                                                                                item.account_code +
                                                                                                                " " +
                                                                                                                item.ar_name
                                                                                                            )
                                                                                                        },
                                                                                                        "item-value": "id"
                                                                                                    },
                                                                                                    model: {
                                                                                                        value: _vm.stocktake
                                                                                                            .revenue_account_id,
                                                                                                        callback: function($$v) {
                                                                                                            _vm.$set(
                                                                                                                _vm.stocktake,
                                                                                                                "revenue_account_id",
                                                                                                                $$v
                                                                                                            )
                                                                                                        },
                                                                                                        expression: "stocktake.revenue_account_id"
                                                                                                    }
                                                                                                })
                                                                                            ],
                                                                                            1
                                                                                        ),
                                                                                        _vm._v(" "),
                                                                                        _c(
                                                                                            "v-col", {
                                                                                                staticClass: "pa-0",
                                                                                                attrs: { cols: "12" }
                                                                                            }, [
                                                                                                _c("v-autocomplete", {
                                                                                                    attrs: {
                                                                                                        flat: "",
                                                                                                        "no-data": "",
                                                                                                        "no-data-text": "",
                                                                                                        "non-linear": "",
                                                                                                        outlined: "",
                                                                                                        prefix: " حساب التكلفة للكميات الناقصة* | ",
                                                                                                        items: _vm.expense_accounts,
                                                                                                        "item-text": function(item) {
                                                                                                            return (
                                                                                                                item.account_code +
                                                                                                                " " +
                                                                                                                item.ar_name
                                                                                                            )
                                                                                                        },
                                                                                                        "item-value": "id"
                                                                                                    },
                                                                                                    model: {
                                                                                                        value: _vm.stocktake
                                                                                                            .expense_account_id,
                                                                                                        callback: function($$v) {
                                                                                                            _vm.$set(
                                                                                                                _vm.stocktake,
                                                                                                                "expense_account_id",
                                                                                                                $$v
                                                                                                            )
                                                                                                        },
                                                                                                        expression: "stocktake.expense_account_id"
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
                                                                            "v-col", { attrs: { cols: "12", lg: "5" } }, [
                                                                                _c(
                                                                                    "v-row", [
                                                                                        _c(
                                                                                            "v-col", {
                                                                                                staticClass: "pa-0",
                                                                                                attrs: { cols: "12" }
                                                                                            }, [
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
                                                                                                        prefix: " المخزن | "
                                                                                                    },
                                                                                                    model: {
                                                                                                        value: _vm.stocktake.inventory_id,
                                                                                                        callback: function($$v) {
                                                                                                            _vm.$set(
                                                                                                                _vm.stocktake,
                                                                                                                "inventory_id",
                                                                                                                $$v
                                                                                                            )
                                                                                                        },
                                                                                                        expression: "stocktake.inventory_id"
                                                                                                    }
                                                                                                })
                                                                                            ],
                                                                                            1
                                                                                        ),
                                                                                        _vm._v(" "),
                                                                                        _c(
                                                                                            "v-col", {
                                                                                                staticClass: "pa-0",
                                                                                                attrs: { cols: "12" }
                                                                                            }, [
                                                                                                _c(
                                                                                                    "v-menu", {
                                                                                                        ref: "issue_date",
                                                                                                        attrs: {
                                                                                                            "close-on-content-click": false,
                                                                                                            transition: "scale-transition",
                                                                                                            "offset-y": "",
                                                                                                            "max-width": "290px",
                                                                                                            "min-width": "auto"
                                                                                                        },
                                                                                                        scopedSlots: _vm._u([{
                                                                                                            key: "activator",
                                                                                                            fn: function(ref) {
                                                                                                                var on = ref.on
                                                                                                                var attrs = ref.attrs
                                                                                                                return [
                                                                                                                    _c(
                                                                                                                        "v-text-field",
                                                                                                                        _vm._g(
                                                                                                                            _vm._b({
                                                                                                                                    attrs: {
                                                                                                                                        label: "تاريخ الاصدار",
                                                                                                                                        "prepend-icon": "mdi-calendar"
                                                                                                                                    },
                                                                                                                                    on: {
                                                                                                                                        keydown: function(
                                                                                                                                            $event
                                                                                                                                        ) {
                                                                                                                                            if (!$event.type.indexOf(
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
                                                                                                                                        value: _vm.stocktake
                                                                                                                                            .issue_date,
                                                                                                                                        callback: function(
                                                                                                                                            $$v
                                                                                                                                        ) {
                                                                                                                                            _vm.$set(
                                                                                                                                                _vm.stocktake,
                                                                                                                                                "issue_date",
                                                                                                                                                $$v
                                                                                                                                            )
                                                                                                                                        },
                                                                                                                                        expression: "stocktake.issue_date"
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
                                                                                                        }]),
                                                                                                        model: {
                                                                                                            value: _vm.issue_date_is_down,
                                                                                                            callback: function($$v) {
                                                                                                                _vm.issue_date_is_down = $$v
                                                                                                            },
                                                                                                            expression: "issue_date_is_down"
                                                                                                        }
                                                                                                    }, [
                                                                                                        _vm._v(" "),
                                                                                                        _c("v-date-picker", {
                                                                                                            attrs: { "no-title": "" },
                                                                                                            on: {
                                                                                                                input: function($event) {
                                                                                                                    _vm.issue_date_is_down = false
                                                                                                                }
                                                                                                            },
                                                                                                            model: {
                                                                                                                value: _vm.stocktake.issue_date,
                                                                                                                callback: function($$v) {
                                                                                                                    _vm.$set(
                                                                                                                        _vm.stocktake,
                                                                                                                        "issue_date",
                                                                                                                        $$v
                                                                                                                    )
                                                                                                                },
                                                                                                                expression: "stocktake.issue_date"
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
                                                                                            "v-col", {
                                                                                                staticClass: "pa-0",
                                                                                                attrs: { cols: "12" }
                                                                                            }, [
                                                                                                _c("v-textarea", {
                                                                                                    attrs: {
                                                                                                        rows: "2",
                                                                                                        outlined: "",
                                                                                                        prefix: " الوصف* | "
                                                                                                    },
                                                                                                    model: {
                                                                                                        value: _vm.stocktake.description,
                                                                                                        callback: function($$v) {
                                                                                                            _vm.$set(
                                                                                                                _vm.stocktake,
                                                                                                                "description",
                                                                                                                $$v
                                                                                                            )
                                                                                                        },
                                                                                                        expression: "stocktake.description"
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
                                                        _c("v-row", [
                                                            _c("small", [_vm._v("*indicates required field")])
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("v-divider", { attrs: { inset: "" } }),
                                                        _vm._v(" "),
                                                        _c(
                                                            "v-row", [
                                                                _c(
                                                                    "v-data-table", {
                                                                        staticClass: "elevation-1",
                                                                        attrs: {
                                                                            "disable-pagination": "",
                                                                            headers: _vm.header,
                                                                            items: _vm.stocktake.details,
                                                                            "hide-default-footer": true,
                                                                            "item-key": _vm.toString(
                                                                                Math.floor(Math.random(1, 100) * 100)
                                                                            )
                                                                        },
                                                                        scopedSlots: _vm._u(
                                                                            [!_vm.return_stocktake ||
                                                                                _vm.return_source != "1" ?
                                                                                {
                                                                                    key: "top",
                                                                                    fn: function() {
                                                                                        return [
                                                                                            _c(
                                                                                                "v-toolbar", {
                                                                                                    attrs: {
                                                                                                        flat: "",
                                                                                                        color: "white"
                                                                                                    }
                                                                                                }, [
                                                                                                    _c("v-toolbar-title", [
                                                                                                        _vm._v("قائمة الأصناف")
                                                                                                    ]),
                                                                                                    _vm._v(" "),
                                                                                                    _c("v-divider", {
                                                                                                        staticClass: "mx-4",
                                                                                                        attrs: {
                                                                                                            inset: "",
                                                                                                            vertical: ""
                                                                                                        }
                                                                                                    }),
                                                                                                    _vm._v(" "),
                                                                                                    _c(
                                                                                                        "v-col", {
                                                                                                            attrs: {
                                                                                                                cols: "12",
                                                                                                                sm: "6",
                                                                                                                md: "4"
                                                                                                            }
                                                                                                        }, [
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
                                                                                                                    change: function(
                                                                                                                        $event
                                                                                                                    ) {
                                                                                                                        return _vm.addProductToStocktake(
                                                                                                                            true
                                                                                                                        )
                                                                                                                    }
                                                                                                                },
                                                                                                                model: {
                                                                                                                    value: _vm.selected_product,
                                                                                                                    callback: function(
                                                                                                                        $$v
                                                                                                                    ) {
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
                                                                                                        "v-col", {
                                                                                                            attrs: {
                                                                                                                cols: "12",
                                                                                                                sm: "6",
                                                                                                                md: "4"
                                                                                                            }
                                                                                                        }, [
                                                                                                            _c("v-text-field", {
                                                                                                                attrs: {
                                                                                                                    type: "barcode",
                                                                                                                    id: "barcode",
                                                                                                                    autocomplete: "off",
                                                                                                                    label: "الباركود",
                                                                                                                    rules: _vm.is_exists
                                                                                                                },
                                                                                                                on: {
                                                                                                                    keydown: function(
                                                                                                                        $event
                                                                                                                    ) {
                                                                                                                        if (!$event.type.indexOf(
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
                                                                                                                        return _vm.searchProductByBarcode(
                                                                                                                            "barcode"
                                                                                                                        )
                                                                                                                    }
                                                                                                                },
                                                                                                                model: {
                                                                                                                    value: _vm.searched_barcode,
                                                                                                                    callback: function(
                                                                                                                        $$v
                                                                                                                    ) {
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
                                                                                } :
                                                                                null,
                                                                                {
                                                                                    key: "item.ar_name",
                                                                                    fn: function(ref) {
                                                                                        var item = ref.item
                                                                                        return [
                                                                                            _c("div", [
                                                                                                _vm._v(_vm._s(item.ar_name))
                                                                                            ]),
                                                                                            _vm._v(" "),
                                                                                            _c(
                                                                                                "a", {
                                                                                                    on: {
                                                                                                        click: function($event) {
                                                                                                            return _vm.show_product_dialog(
                                                                                                                item
                                                                                                            )
                                                                                                        }
                                                                                                    }
                                                                                                }, [
                                                                                                    _c("v-icon", [
                                                                                                        _vm._v(" mdi-information ")
                                                                                                    ])
                                                                                                ],
                                                                                                1
                                                                                            )
                                                                                        ]
                                                                                    }
                                                                                },
                                                                                {
                                                                                    key: "item.expires_at",
                                                                                    fn: function(ref) {
                                                                                        var item = ref.item
                                                                                        return [
                                                                                            _vm._v(
                                                                                                "\n                " +
                                                                                                _vm._s(
                                                                                                    item.expires_at.split(" ")[0]
                                                                                                ) +
                                                                                                "\n              "
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
                                                                                                        _vm.$set(
                                                                                                            item,
                                                                                                            "current_quantity",
                                                                                                            $$v
                                                                                                        )
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
                                                                                                        return _vm.actual_quantity_change(
                                                                                                            item
                                                                                                        )
                                                                                                    }
                                                                                                },
                                                                                                model: {
                                                                                                    value: item.actual_quantity,
                                                                                                    callback: function($$v) {
                                                                                                        _vm.$set(
                                                                                                            item,
                                                                                                            "actual_quantity",
                                                                                                            $$v
                                                                                                        )
                                                                                                    },
                                                                                                    expression: "item.actual_quantity"
                                                                                                }
                                                                                            })
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
                                                                                    key: "item.tax",
                                                                                    fn: function(ref) {
                                                                                        var item = ref.item
                                                                                        return [
                                                                                            _c("v-text-field", {
                                                                                                attrs: {
                                                                                                    type: "number",
                                                                                                    flat: "",
                                                                                                    "hide-no-data": "",
                                                                                                    "hide-details": "",
                                                                                                    outlined: "",
                                                                                                    autocomplete: "off"
                                                                                                },
                                                                                                model: {
                                                                                                    value: item.tax,
                                                                                                    callback: function($$v) {
                                                                                                        _vm.$set(item, "tax", $$v)
                                                                                                    },
                                                                                                    expression: "item.tax"
                                                                                                }
                                                                                            })
                                                                                        ]
                                                                                    }
                                                                                },
                                                                                {
                                                                                    key: "item.tax_value",
                                                                                    fn: function(ref) {
                                                                                        var item = ref.item
                                                                                        return [
                                                                                            _c("v-text-field", {
                                                                                                attrs: {
                                                                                                    flat: "",
                                                                                                    disabled: "",
                                                                                                    "hide-no-data": "",
                                                                                                    "hide-details": "",
                                                                                                    outlined: "",
                                                                                                    autocomplete: "off",
                                                                                                    value: _vm
                                                                                                        .tax_value(item)
                                                                                                        .toFixed(2)
                                                                                                }
                                                                                            })
                                                                                        ]
                                                                                    }
                                                                                },
                                                                                {
                                                                                    key: "item.discount",
                                                                                    fn: function(ref) {
                                                                                        var item = ref.item
                                                                                        return [
                                                                                            _c(
                                                                                                "v-row", { staticClass: "justify-center" }, [
                                                                                                    _c(
                                                                                                        "v-col", {
                                                                                                            staticClass: "pl-0",
                                                                                                            attrs: { cols: "6" }
                                                                                                        }, [
                                                                                                            _c("v-text-field", {
                                                                                                                attrs: {
                                                                                                                    flat: "",
                                                                                                                    type: "number",
                                                                                                                    "hide-no-data": "",
                                                                                                                    "hide-details": "",
                                                                                                                    outlined: "",
                                                                                                                    autocomplete: "off"
                                                                                                                },
                                                                                                                model: {
                                                                                                                    value: item.discount,
                                                                                                                    callback: function($$v) {
                                                                                                                        _vm.$set(
                                                                                                                            item,
                                                                                                                            "discount",
                                                                                                                            $$v
                                                                                                                        )
                                                                                                                    },
                                                                                                                    expression: "item.discount"
                                                                                                                }
                                                                                                            })
                                                                                                        ],
                                                                                                        1
                                                                                                    ),
                                                                                                    _vm._v(" "),
                                                                                                    _c(
                                                                                                        "v-col", {
                                                                                                            staticClass: "pr-0",
                                                                                                            attrs: { cols: "6" }
                                                                                                        }, [
                                                                                                            _c("v-autocomplete", {
                                                                                                                attrs: {
                                                                                                                    items: _vm.discount_types,
                                                                                                                    "item-text": "ar_name",
                                                                                                                    "item-value": "id",
                                                                                                                    "cache-items": "",
                                                                                                                    "append-icon": "",
                                                                                                                    flat: "",
                                                                                                                    "hide-no-data": "",
                                                                                                                    "hide-details": "",
                                                                                                                    "solo-inverted": "",
                                                                                                                    outlined: ""
                                                                                                                },
                                                                                                                on: {
                                                                                                                    change: function($event) {
                                                                                                                        return _vm.llll(item)
                                                                                                                    }
                                                                                                                },
                                                                                                                model: {
                                                                                                                    value: item.discount_type_id,
                                                                                                                    callback: function($$v) {
                                                                                                                        _vm.$set(
                                                                                                                            item,
                                                                                                                            "discount_type_id",
                                                                                                                            $$v
                                                                                                                        )
                                                                                                                    },
                                                                                                                    expression: "item.discount_type_id"
                                                                                                                }
                                                                                                            })
                                                                                                        ],
                                                                                                        1
                                                                                                    )
                                                                                                ],
                                                                                                1
                                                                                            )
                                                                                        ]
                                                                                    }
                                                                                },
                                                                                {
                                                                                    key: "item.action",
                                                                                    fn: function(ref) {
                                                                                        var item = ref.item
                                                                                        return [
                                                                                            _c(
                                                                                                "v-icon", {
                                                                                                    attrs: { color: "red", small: "" },
                                                                                                    on: {
                                                                                                        click: function($event) {
                                                                                                            return _vm.deleteItem(item)
                                                                                                        }
                                                                                                    }
                                                                                                }, [_vm._v("mdi-delete")]
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
                                                                                                    "hide-no-data": "",
                                                                                                    "hide-details": "",
                                                                                                    "solo-inverted": "",
                                                                                                    outlined: ""
                                                                                                },
                                                                                                on: {
                                                                                                    change: function($event) {
                                                                                                        return _vm.product_unit_change(
                                                                                                            item
                                                                                                        )
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
                                                                                                    "hide-details": item.hide_quantity_valid_message,
                                                                                                    rules: item.quantity_valid
                                                                                                },
                                                                                                on: {
                                                                                                    click: function($event) {
                                                                                                        return _vm.quantity_clicked(item)
                                                                                                    }
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
                                                                                                    value: _vm.quantity_in_minor_unit(
                                                                                                        item
                                                                                                    )
                                                                                                }
                                                                                            })
                                                                                        ]
                                                                                    }
                                                                                },
                                                                                {
                                                                                    key: "item.total_befor_tax",
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
                                                                                                    value: _vm
                                                                                                        .total_befor_tax(item)
                                                                                                        .toFixed(2)
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
                                                                                                "\n                " +
                                                                                                _vm._s(
                                                                                                    (item.actual_quantity -
                                                                                                        item.current_quantity) *
                                                                                                    item.unit_price
                                                                                                ) +
                                                                                                "\n              "
                                                                                            )
                                                                                        ]
                                                                                    }
                                                                                }
                                                                            ],
                                                                            null,
                                                                            true
                                                                        )
                                                                    }, [
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
                                        ),
                                        _vm._v(" "),
                                        _c(
                                            "v-card-actions", [
                                                _c("v-spacer"),
                                                _vm._v(" "),
                                                _c(
                                                    "v-btn", {
                                                        staticClass: "btn btn-info m-b-5 m-r-2 white--text",
                                                        attrs: { color: "text--white", text: "" },
                                                        on: {
                                                            click: function($event) {
                                                                return _vm.submit()
                                                            }
                                                        }
                                                    }, [
                                                        _c("v-icon", { staticClass: "white--text" }, [
                                                            _vm._v("mdi-plus-box")
                                                        ]),
                                                        _vm._v("حفظ وإضافة صنف جديد\n        ")
                                                    ],
                                                    1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                    "v-btn", {
                                                        staticClass: "btn btn-info m-b-5 m-r-2 white--text",
                                                        attrs: { color: "text--white", text: "" },
                                                        on: {
                                                            click: function($event) {
                                                                return _vm.suspend()
                                                            }
                                                        }
                                                    }, [
                                                        _c("v-icon", { staticClass: "white--text" }, [
                                                            _vm._v("mdi-plus-box")
                                                        ]),
                                                        _vm._v("تعليق\n        ")
                                                    ],
                                                    1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                    "v-btn", {
                                                        staticClass: "btn btn-info m-b-5 m-r-2 white--text",
                                                        attrs: { color: "text--white", text: "" },
                                                        on: {
                                                            click: function($event) {
                                                                return _vm.return_suspended_stocktake()
                                                            }
                                                        }
                                                    }, [
                                                        _c("v-icon", { staticClass: "white--text" }, [
                                                            _vm._v("mdi-plus-box")
                                                        ]),
                                                        _vm._v("احضار المعلقات\n        ")
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
            }
            var staticRenderFns = []
            render._withStripped = true



            /***/
        }),

        /***/
        "./node_modules/vue-loading-overlay/dist/vue-loading.min.js":
        /*!******************************************************************!*\
          !*** ./node_modules/vue-loading-overlay/dist/vue-loading.min.js ***!
          \******************************************************************/
        /***/
            (function(module) {

            ! function(t, e) { true ? module.exports = e() : 0 }("undefined" != typeof self ? self : this, (function() { return function(t) { var e = {};

                    function i(n) { if (e[n]) return e[n].exports; var r = e[n] = { i: n, l: !1, exports: {} }; return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports } return i.m = t, i.c = e, i.d = function(t, e, n) { i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, i.r = function(t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, i.t = function(t, e) { if (1 & e && (t = i(t)), 8 & e) return t; if (4 & e && "object" == typeof t && t && t.__esModule) return t; var n = Object.create(null); if (i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
                            for (var r in t) i.d(n, r, function(e) { return t[e] }.bind(null, r)); return n }, i.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return i.d(e, "a", e), e }, i.o = function(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, i.p = "", i(i.s = 1) }([function(t, e, i) {}, function(t, e, i) { "use strict";
                    i.r(e); var n = "undefined" != typeof window ? window.HTMLElement : Object,
                        r = { mounted: function() { this.enforceFocus && document.addEventListener("focusin", this.focusIn) }, methods: { focusIn: function(t) { if (this.isActive && t.target !== this.$el && !this.$el.contains(t.target)) { var e = this.container ? this.container : this.isFullPage ? null : this.$el.parentElement;
                                        (this.isFullPage || e && e.contains(t.target)) && (t.preventDefault(), this.$el.focus()) } } }, beforeDestroy: function() { document.removeEventListener("focusin", this.focusIn) } };

                    function a(t, e, i, n, r, a, o, s) { var l, u = "function" == typeof t ? t.options : t; if (e && (u.render = e, u.staticRenderFns = i, u._compiled = !0), n && (u.functional = !0), a && (u._scopeId = "data-v-" + a), o ? (l = function(t) {
                                (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), r && r.call(this, t), t && t._registeredComponents && t._registeredComponents.add(o) }, u._ssrRegister = l) : r && (l = s ? function() { r.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot) } : r), l)
                            if (u.functional) { u._injectStyles = l; var c = u.render;
                                u.render = function(t, e) { return l.call(e), c(t, e) } } else { var d = u.beforeCreate;
                                u.beforeCreate = d ? [].concat(d, l) : [l] }
                        return { exports: t, options: u } } var o = a({ name: "spinner", props: { color: { type: String, default: "#000" }, height: { type: Number, default: 64 }, width: { type: Number, default: 64 } } }, (function() { var t = this.$createElement,
                                e = this._self._c || t; return e("svg", { attrs: { viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg", width: this.width, height: this.height, stroke: this.color } }, [e("g", { attrs: { fill: "none", "fill-rule": "evenodd" } }, [e("g", { attrs: { transform: "translate(1 1)", "stroke-width": "2" } }, [e("circle", { attrs: { "stroke-opacity": ".25", cx: "18", cy: "18", r: "18" } }), e("path", { attrs: { d: "M36 18c0-9.94-8.06-18-18-18" } }, [e("animateTransform", { attrs: { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "0.8s", repeatCount: "indefinite" } })], 1)])])]) }), [], !1, null, null, null).exports,
                        s = a({ name: "dots", props: { color: { type: String, default: "#000" }, height: { type: Number, default: 240 }, width: { type: Number, default: 60 } } }, (function() { var t = this.$createElement,
                                e = this._self._c || t; return e("svg", { attrs: { viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg", fill: this.color, width: this.width, height: this.height } }, [e("circle", { attrs: { cx: "15", cy: "15", r: "15" } }, [e("animate", { attrs: { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" } }), e("animate", { attrs: { attributeName: "fill-opacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" } })]), e("circle", { attrs: { cx: "60", cy: "15", r: "9", "fill-opacity": "0.3" } }, [e("animate", { attrs: { attributeName: "r", from: "9", to: "9", begin: "0s", dur: "0.8s", values: "9;15;9", calcMode: "linear", repeatCount: "indefinite" } }), e("animate", { attrs: { attributeName: "fill-opacity", from: "0.5", to: "0.5", begin: "0s", dur: "0.8s", values: ".5;1;.5", calcMode: "linear", repeatCount: "indefinite" } })]), e("circle", { attrs: { cx: "105", cy: "15", r: "15" } }, [e("animate", { attrs: { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" } }), e("animate", { attrs: { attributeName: "fill-opacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" } })])]) }), [], !1, null, null, null).exports,
                        l = a({ name: "bars", props: { color: { type: String, default: "#000" }, height: { type: Number, default: 40 }, width: { type: Number, default: 40 } } }, (function() { var t = this.$createElement,
                                e = this._self._c || t; return e("svg", { attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 30 30", height: this.height, width: this.width, fill: this.color } }, [e("rect", { attrs: { x: "0", y: "13", width: "4", height: "5" } }, [e("animate", { attrs: { attributeName: "height", attributeType: "XML", values: "5;21;5", begin: "0s", dur: "0.6s", repeatCount: "indefinite" } }), e("animate", { attrs: { attributeName: "y", attributeType: "XML", values: "13; 5; 13", begin: "0s", dur: "0.6s", repeatCount: "indefinite" } })]), e("rect", { attrs: { x: "10", y: "13", width: "4", height: "5" } }, [e("animate", { attrs: { attributeName: "height", attributeType: "XML", values: "5;21;5", begin: "0.15s", dur: "0.6s", repeatCount: "indefinite" } }), e("animate", { attrs: { attributeName: "y", attributeType: "XML", values: "13; 5; 13", begin: "0.15s", dur: "0.6s", repeatCount: "indefinite" } })]), e("rect", { attrs: { x: "20", y: "13", width: "4", height: "5" } }, [e("animate", { attrs: { attributeName: "height", attributeType: "XML", values: "5;21;5", begin: "0.3s", dur: "0.6s", repeatCount: "indefinite" } }), e("animate", { attrs: { attributeName: "y", attributeType: "XML", values: "13; 5; 13", begin: "0.3s", dur: "0.6s", repeatCount: "indefinite" } })])]) }), [], !1, null, null, null).exports,
                        u = a({ name: "vue-loading", mixins: [r], props: { active: Boolean, programmatic: Boolean, container: [Object, Function, n], isFullPage: { type: Boolean, default: !0 }, enforceFocus: { type: Boolean, default: !0 }, lockScroll: { type: Boolean, default: !1 }, transition: { type: String, default: "fade" }, canCancel: Boolean, onCancel: { type: Function, default: function() {} }, color: String, backgroundColor: String, blur: { type: String, default: "2px" }, opacity: Number, width: Number, height: Number, zIndex: Number, loader: { type: String, default: "spinner" } }, data: function() { return { isActive: this.active } }, components: { Spinner: o, Dots: s, Bars: l }, beforeMount: function() { this.programmatic && (this.container ? (this.isFullPage = !1, this.container.appendChild(this.$el)) : document.body.appendChild(this.$el)) }, mounted: function() { this.programmatic && (this.isActive = !0), document.addEventListener("keyup", this.keyPress) }, methods: { cancel: function() { this.canCancel && this.isActive && (this.hide(), this.onCancel.apply(null, arguments)) }, hide: function() { var t = this;
                                    this.$emit("hide"), this.$emit("update:active", !1), this.programmatic && (this.isActive = !1, setTimeout((function() { var e;
                                        t.$destroy(), void 0 !== (e = t.$el).remove ? e.remove() : e.parentNode.removeChild(e) }), 150)) }, disableScroll: function() { this.isFullPage && this.lockScroll && document.body.classList.add("vld-shown") }, enableScroll: function() { this.isFullPage && this.lockScroll && document.body.classList.remove("vld-shown") }, keyPress: function(t) { 27 === t.keyCode && this.cancel() } }, watch: { active: function(t) { this.isActive = t }, isActive: function(t) { t ? this.disableScroll() : this.enableScroll() } }, computed: { bgStyle: function() { return { background: this.backgroundColor, opacity: this.opacity, backdropFilter: "blur(".concat(this.blur, ")") } } }, beforeDestroy: function() { document.removeEventListener("keyup", this.keyPress) } }, (function() { var t = this,
                                e = t.$createElement,
                                i = t._self._c || e; return i("transition", { attrs: { name: t.transition } }, [i("div", { directives: [{ name: "show", rawName: "v-show", value: t.isActive, expression: "isActive" }], staticClass: "vld-overlay is-active", class: { "is-full-page": t.isFullPage }, style: { zIndex: t.zIndex }, attrs: { tabindex: "0", "aria-busy": t.isActive, "aria-label": "Loading" } }, [i("div", { staticClass: "vld-background", style: t.bgStyle, on: { click: function(e) { return e.preventDefault(), t.cancel(e) } } }), i("div", { staticClass: "vld-icon" }, [t._t("before"), t._t("default", [i(t.loader, { tag: "component", attrs: { color: t.color, width: t.width, height: t.height } })]), t._t("after")], 2)])]) }), [], !1, null, null, null).exports,
                        c = function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}; return { show: function() { var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e,
                                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
                                        a = { programmatic: !0 },
                                        o = Object.assign({}, e, n, a),
                                        s = new(t.extend(u))({ el: document.createElement("div"), propsData: o }),
                                        l = Object.assign({}, i, r); return Object.keys(l).map((function(t) { s.$slots[t] = l[t] })), s } } };
                    i(0);
                    u.install = function(t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            n = c(t, e, i);
                        t.$loading = n, t.prototype.$loading = n };
                    e.default = u }]).default }));

            /***/
        })

    }
]);