<template>
    
        <div class="grey lighten-2 px-4" style="height: 100%">
            <v-row style="height: 100%" class="justify-space-between">
                <v-col cols="3" class="mt-16 white rounded-lg ml-2" style="height: 100%">
                    <v-form ref="form" style="height: 100%">
                    <div>
                        <v-progress-linear
                            v-model="value"
                            :active="show"
                            :indeterminate="query"
                            :query="true"
                        ></v-progress-linear>
                    </div>
                    <v-dialog
                        v-model="starter_dialog"
                        hide-overlay
                        persistent
                        width="300"
                    >
                        <v-card color="primary" dark>
                            <v-card-text>
                                انتظر قليلاً!
                                <v-progress-linear
                                    indeterminate
                                    color="pink"
                                    class="mb-0"
                                ></v-progress-linear>
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                    <v-snackbar
                        :color="snackbarColor"
                        centered
                        transition="scale-transition"
                        v-model="snackbar"
                        :timeout="snackbarTimeout"
                    >
                        {{ snackbarText }}

                        <template v-slot:action="{ attrs }">
                            <v-btn
                                color="blue"
                                text
                                v-bind="attrs"
                                @click="snackbar = false"
                            >
                                Close
                            </v-btn>
                        </template>
                    </v-snackbar>
                    <v-dialog
                        v-model="no_product_dialog"
                        max-width="290"
                        @keydown.enter="no_product_dialog = false"
                    >
                        <v-card>
                            <v-card-title> الصنف غير موجود </v-card-title>

                            <v-card-text>
                                الصنف لم يتم شراؤه من قبل أو أن المخزون قد نفد
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn
                                    color="green darken-1"
                                    text
                                    @click="no_product_dialog = false"
                                >
                                    اغلق
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialog" max-width="600px" persistent>
                        <v-card>
                            <p
                                style="
                                    margin: 0 10px;
                                    font-size: 14px;
                                    padding: 10px;
                                "
                            >
                                قم باختيار الصنف المناسب واضغط موافق
                            </p>

                            <v-card-text>
                                <ul>
                                    <div
                                        v-for="set in sets"
                                        tabIndex="-1"
                                        :key="set.id + 'd'"
                                        @blur="selected_elem_fromSet = set.id"
                                    >
                                        <v-row>
                                            <v-col>
                                                {{ set.id }}
                                            </v-col>
                                            <v-col>
                                                {{ selected_product.ar_name }}
                                            </v-col>
                                            <v-col>
                                                {{
                                                    set.sum_quantity_in_minor_unit
                                                }}
                                            </v-col>
                                            <v-col>
                                                {{
                                                    set.expires_at &&
                                                    set.expires_at.split(" ")[0]
                                                }}
                                            </v-col>
                                        </v-row>
                                    </div>
                                </ul>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="green darken-1"
                                    text
                                    @click="disagree"
                                >
                                    Disagree
                                </v-btn>
                                <v-btn
                                    color="green darken-1"
                                    text
                                    @click="agreeToAdd"
                                >
                                    Agree
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                    <add-update-person
                        :route="person_type"
                        :dialog="add_update_person_dialog"
                        :person="passed_person"
                        :operation="operation"
                        :cities="cities"
                        @addUpdatePerson="addPersonToList"
                        @changeCountry="loadCities"
                        @close_person_dialog="close_person_dialog"
                    ></add-update-person>

                    <v-row>
                        <v-col>
                            <v-layout column style="max-height: 70vh">
                                <v-flex style="overflow: auto">
                                    <v-row>
                                        <v-col>
                                            <v-text-field
                                                autofocus
                                                type="barcode"
                                                ref="barcode"
                                                autocomplete="off"
                                                v-model="searched_barcode"
                                                prefix=" الباركود | "
                                                @keydown.enter="
                                                    searchProductByBarcode(
                                                        'barcode'
                                                    )
                                                "
                                                :rules="is_exists"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col>
                                            <v-autocomplete
                                                v-model="selected_product"
                                                :loading="loading"
                                                :items="found_products"
                                                item-text="ar_name"
                                                return-object
                                                :search-input.sync="name_search"
                                                hide-no-data
                                                prefix=" اسم الصنف | "
                                                @change="addProductToBill(true)"
                                            ></v-autocomplete>
                                        </v-col>
                                    </v-row>
                                </v-flex>
                            </v-layout>
                        </v-col>
                    </v-row>
                    <v-divider
                        style="
                            margin-left: -12px;
                            margin-right: -12px;
                            max-width: none !important;
                        "
                    ></v-divider>
                    <v-row class="mt-3">
                        <v-col> المنتجات الأكثر استخداما </v-col>
                    </v-row>
                    <v-row class="mt-3">
                        <v-col> </v-col>
                    </v-row>
                
                </v-form></v-col>

                <v-col cols="8" class="white mr-2 rounded-lg" style="height: 100%">
                    <v-row>
                        <v-col>
                            <v-layout column style="max-height: 70vh">
                                <v-flex style="overflow: auto">
                                    <v-data-table
                                        disable-pagination
                                        :headers="header"
                                        :items="bill.details"
                                        class="font-weight"
                                        :hide-default-footer="true"
                                        :item-key="
                                            toString(
                                                Math.floor(
                                                    Math.random(1, 100) * 100
                                                )
                                            )
                                        "
                                    >
                                        <template
                                            v-slot:item.product_unit_id="{
                                                item,
                                            }"
                                        >
                                            <v-autocomplete
                                                v-model="item.unit_id"
                                                :items="item.units"
                                                item-text="ar_name"
                                                item-value="pivot.id"
                                                cache-items
                                                flat
                                                hide-no-data
                                                hide-details
                                                solo-inverted
                                                outlined
                                                @change="
                                                    product_unit_change(item)
                                                "
                                            >
                                            </v-autocomplete>
                                        </template>
                                        <template
                                            v-slot:item.quantity="{ item }"
                                        >
                                            <v-text-field
                                                type="number"
                                                hide-no-data
                                                autocomplete="off"
                                                single-line
                                                outlined
                                                v-model="item.quantity"
                                                :hide-details="
                                                    item.hide_quantity_valid_message
                                                "
                                                :rules="item.quantity_valid"
                                                @click="quantity_clicked(item)"
                                            ></v-text-field>
                                        </template>
                                        <template v-slot:item.total="{ item }">
                                            <div
                                                style="
                                                    padding-left: 2px;
                                                    padding-right: 2px;
                                                "
                                            >
                                                {{ total(item).toFixed(2) }}
                                            </div>
                                        </template>

                                        <template
                                            v-slot:item.expires_at="{ item }"
                                        >
                                            <v-menu
                                                :disabled="
                                                    act != 'input' ||
                                                    !item.has_expiration_date
                                                "
                                                ref="maturity_date"
                                                v-model="
                                                    item.expires_at_is_down
                                                "
                                                :close-on-content-click="false"
                                                transition="scale-transition"
                                                offset-y
                                            >
                                                <template
                                                    v-slot:activator="{
                                                        on,
                                                        attrs,
                                                    }"
                                                >
                                                    <v-text-field
                                                        v-if="
                                                            item.has_expiration_date
                                                        "
                                                        @click="
                                                            expires_date(item)
                                                        "
                                                        :disabled="
                                                            act != 'input' ||
                                                            !item.has_expiration_date
                                                        "
                                                        v-model="
                                                            item.expires_at.split(
                                                                ' '
                                                            )[0]
                                                        "
                                                        flat
                                                        outlined
                                                        autocomplete="off"
                                                        hide-no-data
                                                        :hide-details="
                                                            item.expires_at_message
                                                        "
                                                        v-bind="attrs"
                                                        v-on="on"
                                                        @keydown.enter="
                                                            item.expires_at_is_down = false
                                                        "
                                                        :rules="
                                                            item.expires_at_valid
                                                        "
                                                        @change="
                                                            changeExpirationDate(
                                                                item
                                                            )
                                                        "
                                                    ></v-text-field>
                                                    <v-text-field
                                                        v-else
                                                        @click="
                                                            expires_date(item)
                                                        "
                                                        disabled
                                                        value="--"
                                                        flat
                                                        outlined
                                                        autocomplete="off"
                                                        hide-no-data
                                                        hide-details
                                                    ></v-text-field>
                                                </template>
                                                <v-date-picker
                                                    v-model="item.expires_at"
                                                    no-title
                                                    @input="
                                                        item.expires_at_is_down = false
                                                    "
                                                    @change="
                                                        changeExpirationDate(
                                                            item
                                                        )
                                                    "
                                                ></v-date-picker>
                                            </v-menu>
                                        </template>

                                        <template
                                            v-slot:item.unit_price="{ item }"
                                        >
                                            <v-text-field
                                                v-model="item.unit_price"
                                                flat
                                                type="number"
                                                outlined
                                                autocomplete="off"
                                                hide-no-data
                                                hide-details
                                            ></v-text-field>
                                        </template>

                                        <template slot="no-data">
                                            <div style="color: red">
                                                قم باختيار الأصناف
                                            </div>
                                        </template>
                                    </v-data-table>
                                </v-flex>
                            </v-layout>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            style="
                                height: 30vh;
                                position: fixed;
                                bottom: 0;
                                z-index: 99;
                                background: white;
                            "
                        >
                            <v-divider class="mx-4" inset></v-divider>
                            <v-toolbar flat color="white">
                                <v-toolbar-title>الإجمالي</v-toolbar-title>
                                <v-divider
                                    class="mx-4"
                                    inset
                                    vertical
                                ></v-divider>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <div class="bill-footer">
                                <v-row>
                                    <v-col cols="12" lg="6">
                                        <v-row justify="start">
                                            <v-col
                                                cols="12"
                                                lg="5"
                                                style="
                                                    text-align: end;
                                                    border-bottom: 1px solid
                                                        lightgray;
                                                "
                                            >
                                                الاجمالي قبل الضريبة:
                                            </v-col>
                                            <v-col
                                                cols="12"
                                                lg="5"
                                                style="
                                                    text-align: start;
                                                    border-bottom: 1px solid
                                                        lightgray;
                                                "
                                            >
                                                <div
                                                    v-html="
                                                        total_without_products_tax().toFixed(
                                                            2
                                                        )
                                                    "
                                                ></div>
                                            </v-col>
                                        </v-row>
                                        <v-row justify="start">
                                            <v-col
                                                cols="12"
                                                lg="5"
                                                style="
                                                    text-align: end;
                                                    border-bottom: 1px solid
                                                        lightgray;
                                                "
                                            >
                                                قيمة الضريبة:
                                            </v-col>
                                            <v-col
                                                cols="12"
                                                lg="5"
                                                style="
                                                    text-align: start;
                                                    border-bottom: 1px solid
                                                        lightgray;
                                                "
                                            >
                                                <div
                                                    v-html="
                                                        total_tax().toFixed(2)
                                                    "
                                                ></div>
                                            </v-col>
                                        </v-row>

                                        <v-row justify="start">
                                            <v-col
                                                cols="12"
                                                lg="5"
                                                style="text-align: end"
                                            >
                                                المجموع:
                                            </v-col>
                                            <v-col
                                                cols="6"
                                                style="text-align: start"
                                            >
                                                <div
                                                    v-html="
                                                        total_amount().toFixed(
                                                            2
                                                        )
                                                    "
                                                ></div
                                            ></v-col>
                                        </v-row>
                                    </v-col>
                                    <v-col cols="12" lg="5">
                                        <v-row justify="start">
                                            <v-col
                                                cols="12"
                                                lg="4"
                                                style="
                                                    text-align: end;
                                                    border-bottom: 1px solid
                                                        lightgray;
                                                    color: green;
                                                "
                                            >
                                                <div style="margin-top: 10px">
                                                    المدفوع:
                                                </div>
                                            </v-col>
                                            <v-col
                                                cols="12"
                                                lg="4"
                                                style="
                                                    text-align: start;
                                                    border-bottom: 1px solid
                                                        lightgray;
                                                "
                                            >
                                                <div>
                                                    <v-text-field
                                                        outlined
                                                        flat
                                                        no-data
                                                        no-data-text
                                                        non-linear
                                                        v-model="
                                                            bill.paid_amount
                                                        "
                                                        @change="
                                                            bill.only_cash ==
                                                                true
                                                        "
                                                    >
                                                    </v-text-field>
                                                </div>
                                            </v-col>

                                            <v-col cols="12" lg="4">
                                                <payment-method
                                                    @payment_methods="
                                                        paymentMethods
                                                    "
                                                    :total="bill.total_amount"
                                                    :accounts="
                                                        additional_expenses_from_accounts
                                                    "
                                                    :payment_methods="
                                                        bill.payment_methods
                                                    "
                                                ></payment-method>
                                            </v-col>
                                        </v-row>
                                        <v-row justify="start">
                                            <v-col
                                                cols="12"
                                                lg="4"
                                                style="
                                                    text-align: end;
                                                    border-bottom: 1px solid
                                                        lightgray;
                                                    color: green;
                                                "
                                            >
                                                <div style="margin-top: 10px">
                                                    الباقي :
                                                </div>
                                            </v-col>
                                            <v-col
                                                cols="12"
                                                lg="4"
                                                style="
                                                    text-align: start;
                                                    border-bottom: 1px solid
                                                        lightgray;
                                                "
                                            >
                                                <div>
                                                    <v-text-field
                                                        class="purchas-extra-expense text-red"
                                                        flat
                                                        disabled
                                                        no-data
                                                        no-data-text
                                                        non-linear
                                                        :value="
                                                            remaining_amount().toFixed(
                                                                2
                                                            )
                                                        "
                                                    >
                                                    </v-text-field>
                                                </div>
                                            </v-col>
                                            <v-col cols="12" lg="4">
                                                <v-btn
                                                    elevation="0"
                                                    v-shortkey="['f1']"
                                                    @shortkey="payAllCash"
                                                    dark
                                                    @click="payAllCash"
                                                >
                                                    دفع الكل نقدا!
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>

                                <div style="height: 30px"></div>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </div>
    
</template>

<script>
import Product from "../../../apis/Product";

import Bill from "../../../apis/Bill";

import PaymentMethod from "../bills/payment-methods";
import AddUpdatePerson from "../bills/AddUpdatePerson.vue";

import Country from "../../../apis/Country";

import Account from "../../../apis/Account";

export default {
    components: {
        PaymentMethod,
        AddUpdatePerson,
    },
    data() {
        return {
            bill_is_loading: false,
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

            act: "input",
            bill_number_to_search: "",
            return_bill: false,
            cols: 10,
            main_bill: true,
            //-------------
            snackbar: false,
            snackbarText: "تأكد من تعبئة الحقول",
            snackbarTimeout: 1500,
            //-------------
            no_product_dialog: false,
            agree: false,
            functionToAddProduct: "",
            someVariableUnderYourControl: 1,
            sets: [],
            dialog: false,
            starter_dialog: false,
            route: window.location.pathname.replace(/^\/([^\/]*).*$/, "$1"),
            title: [
                [,],
                ["فاتورة مشتريات جديدة", "تعديل فاتورة مشتريات"],
                ["فاتورة مبيعات جديدة", "تعديل فاتورة مبيعات"],
                ["مرودوات مشتريات جديدة", "تعديل مرودوات مشتريات"],
                ["مرودوات مبيعات جديدة", "تعديل مرودوات مبيعات"],
            ],

            //----
            person_info: "معلومات المورد",
            person_type: "suppliers",
            persona: "المورد",
            //----

            is_new_bill: true,
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
            discount_types: [
                { id: 1, ar_name: "%", en_name: "%" },
                { id: 2, ar_name: "قيمة", en_name: "amount" },
            ],

            add_update_person_dialog: false,
            passed_person: "",
            operation: "add",
            cities: [],
            people: [],
            name_search: "",

            loading: false,

            found_products: [],
            selected_product: [],
            header: [
                {
                    text: "اسم الصنف",
                    align: "center",
                    value: "ar_name",
                    width: 300,
                    sortable: false,
                },
                {
                    text: "الصلاحية",
                    align: "center",
                    value: "expires_at",
                    sortable: false,
                },
                {
                    text: "الكمية",
                    align: "center",
                    value: "quantity",
                    sortable: false,
                },
                {
                    text: "الوحدة",
                    align: "center",
                    value: "product_unit_id",
                    sortable: false,
                },

                {
                    text: "سعر الوحدة",
                    align: "center",
                    value: "unit_price",
                    sortable: false,
                },

                {
                    text: "المجموع",
                    align: "center",
                    value: "total",
                    sortable: false,
                },
            ],

            payment_conditions: [],
            new_bill: {
                is_input: 1,
                document_type_id: "",
                person_id: 1,
                only_cash: true,
                payment_condition_id: 10,
                payment_methods: [
                    {
                        account_id: "",
                        amount: 0,
                        description: "",
                    },
                    {
                        account_id: "",
                        amount: 0,
                        description: "",
                    },
                    {
                        account_id: "",
                        amount: 0,
                        description: "",
                    },
                ],
                paid_amount: 0,
                remaining_amount: 0,

                additional_expenses: 0,
                total_without_products_tax: 0,
                total_tax: 0,
                total_amount: 0,

                patch_number: Math.floor(
                    Math.random() * (99999 - 10000 + 1) + 10000
                ),

                details: [],
                reference: "",
                description: "",
                person_id: "",
                issue_date: new Date().toISOString().substr(0, 10),
                maturity_date: new Date(
                    new Date().getTime() + 10 * 24 * 60 * 60 * 1000
                ),
            },
            bill: {
                person_id: 1,
                is_input: 1,
                document_type_id: 1,
                only_cash: true,

                payment_condition_id: 10,
                payment_methods: [
                    {
                        account_id: "",
                        amount: 0,
                        description: "",
                    },
                    {
                        account_id: "",
                        amount: 0,
                        description: "",
                    },
                    {
                        account_id: "",
                        amount: 0,
                        description: "",
                    },
                ],
                paid_amount: 0,
                remaining_amount: 0,

                additional_expenses: 0,
                additional_expenses_from_account_id: 4,
                total_without_products_tax: 0,
                total_tax: 0,
                total_amount: 0,

                patch_number: Math.floor(
                    Math.random() * (99999 - 10000 + 1) + 10000
                ),

                details: [],
                reference: "",
                description: "",
                issue_date: new Date().toISOString().substr(0, 10),
                maturity_date: new Date(
                    new Date().getTime() + 10 * 24 * 60 * 60 * 1000
                )
                    .toISOString()
                    .substr(0, 10),
            },

            /*------------------dateTime----------------------*/
            date: new Date().toISOString().substr(0, 10),
            issue_date_is_down: false,
            maturity_date_is_down: false,
            formatted_issue_date: this.formatDate(
                new Date().toISOString().substr(0, 10)
            ),

            /*-------------------validators---------------------------*/
            vld_minlingth_one: [(v) => v.length >= 1 || "أدخل قيمة"],
            vld_selected: [(v) => v > 0 || "أدخل قيمة"],
            required: [(value) => !!value || "الحقل مطلوب."],
            isunique: [],
            is_exists: [],
            bill_exists: [],
            expires_at_valid: [
                (v) =>
                    (v.has_expiration_date && v != "*******") ||
                    "قم بتغيير التاريخ",
            ],
            is_valid_date: [],
            vld_numbering: [
                (v) => /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية",
            ],
        };
    },
    watch: {
        ready() {},
        name_search(val) {
            val &&
                val !== this.selected_product.ar_name &&
                this.getProducts(val, "name");
        },

        $route(to, from) {
            this.createPage(to, "old");
        },
    },
    beforeRouteUpdate(to, from, next) {
        // alert(1);
        next();
    },
    methods: {
        suspend_and_make_newpurchase() {
            alert(1);
        },
        disagree() {
            this.dialog = false;
            this.selected_product = "";
        },
        quantity_clicked(item) {
            item.hide_quantity_valid_message = true;
            item.quantity_valid = [true];
        },
        endIntersect(entries, observer, isIntersecting) {},
        getBillByHittingBillNumber() {
            this.bill_is_loading = true;

            //this.title = "تعديل فاتورة رقم " + this.$route.params.id;
            Bill.get(
                this.bill_number_to_search,
                { document_type_id: this.bill.document_type_id - 2, return: 1 }
                /*
        1 - purchase
        2 - invoice
        3 - purchase return 
        4 - invoice  return 
        */
            ).then((response) => {
                this.bill_is_loading = false;
                if (Array.isArray(response.data)) {
                    this.bill_exists = [false || "الفاتورة غير موجود "];

                    return 0;
                }
                this.bill_exists = [true];
                this.bill = response.data.bill;
                if (this.route == "purchase_return") {
                    this.bill.document_type_id = 3;
                    this.bill.is_input = 0;
                } //purcase return
                if (this.route == "invoice_return") {
                    this.bill.document_type_id = 4; //purcase return
                    this.bill.is_input = 1;
                }

                this.bill.issue_date = this.bill.issue_date.split(" ")[0];
                this.bill.maturity_date = this.bill.maturity_date.split(" ")[0];
                this.bill.details.forEach((elem) => {
                    if (elem.expires_at)
                        elem.expires_at = elem.expires_at.split(" ")[0];
                });

                if (this.bill.payment_methods.length != 0) {
                } else
                    this.bill.payment_methods = [
                        {
                            account_id: "",
                            amount: 0,
                            description: "",
                        },
                        {
                            account_id: "",
                            amount: 0,
                            description: "",
                        },
                        {
                            account_id: "",
                            amount: 0,
                            description: "",
                        },
                    ];

                this.people = response.data.people;
                this.additional_expenses_from_accounts =
                    response.data.accounts.accounts;
            });
        },
        expires_date(item) {
            item.expires_at_message = true;
            item.expires_at_valid = [true];
            if (item.expires_at == "*******")
                item.expires_at = new Date().toISOString().substr(0, 10);
        },
        agreeToAdd() {
            // this.agree = true;

            this.index_of_selected_product = this.sets.findIndex(
                (elem) => elem.id == this.selected_elem_fromSet
            );

            let selected_product = JSON.parse(
                JSON.stringify(this.selected_product)
            );

            selected_product["details"][0] =
                selected_product["details"][this.index_of_selected_product];

            this.showThisProduct(selected_product);

            window.removeEventListener("keydown", this.functionToAddProduct);

            let input_barcode = document.getElementById("barcode");
            this.$nextTick(() => {
                input_barcode.focus();
            });

            this.dialog = false;
            this.agree = false;
            return;

            //e.preventDefault();

            selectedElm = selectedElm[action[e.key] + "ElementSibling"];

            // loop if top/bottom edges reached or "home"/"end" keys clicked
            if (!selectedElm || e.key == "Home" || e.key == "End") {
                goToStart = action[e.key] == "next" || e.key == "Home";
                selectedElm =
                    listElm.children[
                        goToStart ? 0 : listElm.children.length - 1
                    ];
            }

            selectedElm.focus();

            return;

            // Mark first list item
            this.$nextTick(() => {
                listElm.firstElementChild.focus();
                var selectedElm = document.activeElement,
                    goToStart,
                    // map actions to event's key
                    action = {
                        ArrowUp: "previous",
                        Up: "previous",
                        ArrowDown: "next",
                        Down: "next",
                    };

                this.functionToAddProduct = (e) => {};
                window.addEventListener("keydown", this.functionToAddProduct);
            });

            // Event listener
        },
        showThisProduct(selected_product) {
            this.selected_product = "";
            this.searched_barcode = "";
            let gg;
            if (this.route == "purchase")
                selected_product.tax = selected_product.bought_tax;
            if (this.route == "invoice")
                selected_product.tax = selected_product.sold_tax;
            if (this.route == "purchase") {
                if (!selected_product.has_expiration_date) {
                    if (
                        (gg = this.bill.details.findIndex(
                            (elem) => elem.id == selected_product.id
                        )) >= 0
                    ) {
                        this.bill.details[gg].quantity++;
                        return;
                    }
                }
            }

            if (this.route != "purchase")
                if (
                    (gg = this.bill.details.findIndex(
                        (elem) =>
                            elem.id == selected_product.id &&
                            elem.expires_at.split(" ")[0] ==
                                selected_product["details"][0].expires_at.split(
                                    " "
                                )[0]
                    )) >= 0
                ) {
                    this.bill.details[gg].quantity++;

                    return;
                }

            selected_product.expires_at_message = true;
            selected_product.hide_quantity_valid_message = true;
            selected_product.quantity_valid = [true];

            //this.dialog = true;

            selected_product["document_type_id"] = this.bill.document_type_id;
            selected_product.unit_id =
                selected_product.units[
                    selected_product.main_unit_id - 1
                ].pivot.id;

            if (this.route == "purchase" || this.route == "purchase_return") {
                selected_product.unit_price =
                    selected_product.units[
                        selected_product.main_unit_id - 1
                    ].pivot.bought_price;
            }
            if (this.route == "invoice" || this.route == "invoice_return") {
                selected_product.unit_price =
                    selected_product.units[
                        selected_product.main_unit_id - 1
                    ].pivot.sold_price;
            }

            selected_product.quantity = 1;

            selected_product["product_id"] = selected_product["id"]; // bill

            if (this.act == "input") {
                if (selected_product.has_expiration_date) {
                    selected_product.expires_at = "*******";
                    selected_product.expires_at_valid = [
                        false || "قم بتغيير التاريخ",
                    ];
                } else {
                    selected_product.expires_at = "--";
                    selected_product.expires_at_valid = [true];
                }
            } else {
                selected_product.expires_at =
                    selected_product.details[0].expires_at;
                selected_product.current_quantity =
                    selected_product.details[0].quantity_in_minor_unit /
                    selected_product.units[selected_product.main_unit_id - 1]
                        .pivot.contains;

                selected_product.actual_quantity =
                    selected_product.current_quantity;
                selected_product.actual_quantity_in_minor_unit = parseInt(
                    selected_product.actual_quantity *
                        selected_product.units[
                            selected_product.main_unit_id - 1
                        ].pivot.contains
                );
            }

            selected_product = JSON.parse(JSON.stringify(selected_product));
            this.bill.details.push(selected_product);
            return;
        },
        close_person_dialog() {
            this.add_update_person_dialog = false;
        },
        changeExpirationDate(item) {
            let occurrences = 0;
            let firstIndex = -1;

            for (let index = 0; index < this.bill.details.length; index++) {
                if (
                    this.bill.details[index].barcode == item.barcode &&
                    this.bill.details[index].expires_at == item.expires_at
                ) {
                    if (firstIndex == -1) firstIndex = index;
                    occurrences++;
                    if (occurrences == 2) {
                        this.bill.details[firstIndex].quantity +=
                            this.bill.details[index].quantity;
                        this.bill.details.splice(index, 1);
                        return;
                    }
                }
            }
        },
        addays(date, days) {
            var result = new Date(date);
            result.setDate(result.getDate() + +days);
            return result;
        },
        getDays() {
            this.bill.payment_condition_id = parseInt(
                (new Date(this.bill.maturity_date) -
                    new Date(this.bill.issue_date)) /
                    (1000 * 60 * 60 * 24),
                10
            );
        },
        getMaturityDate() {
            this.bill.maturity_date = this.addays(
                this.bill.issue_date,
                this.bill.payment_condition_id
            )
                .toISOString()
                .substr(0, 10);
        },
        personInfo() {
            return this.people.find((elem) => elem.id == this.bill.person_id);
        },
        changeDateFormat() {
            let chunks = this.bill.test_date.match(/.{1,2}/g);
            if (chunks[1].length == 1) chunks[1] = "0" + chunks[1];

            let date = "20" + chunks[0] + "-" + chunks[1] + "-01";

            if (!isNaN(Date.parse(date))) {
                this.bill.test_date = date;
                this.is_valid_date = [];
                return;
            }

            this.is_valid_date = ["التاريخ غير صحيح"];
        },
        addPersonToList(person) {
            this.add_update_person_dialog = false;
            this.people.push(person);
            this.bill.person_id = person.id;
        },
        loadCities(country_id) {
            this.cities = [];
            Country.loadCities(country_id).then(
                (response) => (this.cities = response.data.cities)
            );
        },

        addPerson() {
            this.add_update_person_dialog = true;
            this.operation = "add";
            if (this.person_type == "suppliers")
                this.passed_person = {
                    type_id: 1,
                };
            if (this.person_type == "customers")
                this.passed_person = {
                    type_id: 2,
                };
        },

        addProductToBill(name) {
            //-----processing  for output document
            if (this.act == "input") {
                this.selected_product.expires_at = "*******";
                this.showThisProduct(this.selected_product);
                return;
            }
            //-----processing  for output document
            if (this.selected_product.details.length == 0) {
                this.no_product_dialog = true;
                this.searched_barcode = "";
                return;
            }
            if (this.selected_product.details.length == 1) {
                this.showThisProduct(this.selected_product);
                return;
            }
            let products_grouped = false;
            if (products_grouped) {
                this.selected_product.details[0].quantity_in_minor_unit =
                    this.selected_product.quantity_in_minor_unit;

                // this.selected_product.details[0].quantity_in_minor_unit =
                //   this.selected_product.details.reduce(
                //     (a, b) => +a + +b.quantity_in_minor_unit,
                //     0
                //   );

                this.showThisProduct(this.selected_product);
                return;
            }
            let first = false;
            if (name) first = true;

            this.sets = this.selected_product.details;
            this.dialog = true;
            this.$nextTick().then(() => {
                var listElm = document.querySelector("ul");

                // Mark first list item
                this.$nextTick(() => {
                    listElm.firstElementChild.focus();
                    var selectedElm = document.activeElement,
                        goToStart,
                        // map actions to event's key
                        action = {
                            ArrowUp: "previous",
                            Up: "previous",
                            ArrowDown: "next",
                            Down: "next",
                        };

                    this.functionToAddProduct = (e) => {
                        if (e.key === "Enter" && this.dialog && !first) {
                            var parent = selectedElm.parentNode;

                            this.index_of_selected_product =
                                Array.prototype.indexOf.call(
                                    listElm.children,
                                    selectedElm
                                );

                            let selected_product = JSON.parse(
                                JSON.stringify(this.selected_product)
                            );

                            selected_product["details"][0] =
                                selected_product["details"][
                                    this.index_of_selected_product
                                ];

                            this.showThisProduct(selected_product);

                            window.removeEventListener(
                                "keydown",
                                this.functionToAddProduct
                            );

                            let input_barcode =
                                document.getElementById("barcode");
                            // this.$nextTick(() => {
                            //   input_barcode.focus();
                            // });

                            this.dialog = false;
                            this.agree = false;
                            return;
                        }
                        //e.preventDefault();

                        if (e.key !== "Enter") {
                            selectedElm =
                                selectedElm[action[e.key] + "ElementSibling"];

                            // loop if top/bottom edges reached or "home"/"end" keys clicked
                            if (
                                !selectedElm ||
                                e.key == "Home" ||
                                e.key == "End"
                            ) {
                                goToStart =
                                    action[e.key] == "next" || e.key == "Home";
                                selectedElm =
                                    listElm.children[
                                        goToStart
                                            ? 0
                                            : listElm.children.length - 1
                                    ];
                            }

                            selectedElm.focus();
                            first = false;
                        }
                    };

                    window.addEventListener(
                        "keydown",
                        this.functionToAddProduct
                    );
                });

                // Event listener
            });

            //CHECK IF PRODUCT HAS EXPIRATION DATE --> ADD QUANTITY

            // if (!selected_product.has_expiration_date) {
            //   let index = this.bill.details.findIndex(
            //     (elem) => elem.barcode == selected_product.barcode
            //   );
            //   if (index != -1) {
            //     this.bill.details[index].quantity++;
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
            // selected_product["document_type_id"] = 1; // bill
            // selected_product["product_id"] = selected_product["id"]; // bill

            // this.bill.details.push(selected_product);
        },
        searchProductByBarcode() {
            let params = { barcode: this.searched_barcode };
            let extra_route = this.act;
            Product.billBarcodeSearch(params, extra_route).then((response) => {
                if (response.data.products.length == 0) {
                    this.is_exists = [false || "الصنف غير موجود "];
                    this.searched_barcode = "";
                    return;
                }
                this.is_exists = [true];
                this.selected_product = JSON.parse(
                    JSON.stringify(response.data.products[0])
                );

                this.addProductToBill();
            });
        },

        remaining_amount() {
            return (this.bill.remaining_amount =
                this.bill.total_amount - this.bill.paid_amount);
        },
        payAllCash() {
            this.bill.paid_amount = this.bill.total_amount.toFixed(2);
            this.bill.payment_methods = [
                {
                    account_id: "",
                    amount: 0,
                    description: "",
                },
                {
                    account_id: "",
                    amount: 0,
                    description: "",
                },
                {
                    account_id: "",
                    amount: 0,
                    description: "",
                },
            ];
        },
        paymentMethods(payments) {
            this.bill.payment_methods = payments.payment_methods;
            this.bill.paid_amount = payments.paid_amount;
            this.bill.only_cash = false;
        },
        show_product_dialog(item) {
            this.product_info_dialog = true;

            this.product_info_product = item;
        },
        product_unit_change(item) {
            item.hide_quantity_valid_message = true;
            item.quantity_valid = [true];

            let unit = item.units.find((elem) => elem.pivot.id == item.unit_id);

            item.unit_price = unit.pivot.bought_price;
        },
        total_tax() {
            this.bill.total_tax = this.bill.details.reduce(
                (a, b) => +a + +b.tax_value,
                0
            );
            return this.bill.total_tax;
        },
        total_amount() {
            this.bill.total_amount =
                this.total_without_products_tax() + this.total_tax();

            return this.bill.total_amount;
        },

        total_without_products_tax() {
            return this.bill.details.reduce(
                (a, b) => +a + +b.total_befor_tax,
                0
            );
        },

        total(item) {
            return item.quantity * item.unit_price;
        },

        tax_value(item) {
            item.tax_value = (this.total_befor_tax(item) * item.tax) / 100;
            return item.tax_value;
        },
        total_befor_tax(item) {
            if (item.discount_type_id == 1) {
                item.total_befor_tax =
                    item.quantity * item.unit_price -
                    (item.quantity * item.unit_price * item.discount) / 100;

                return item.total_befor_tax;
            }
            item.total_befor_tax =
                item.quantity * item.unit_price - item.discount;

            return item.total_befor_tax;
        },
        quantity_in_minor_unit(item) {
            let unit = item.units.find((elem) => elem.pivot.id == item.unit_id);
            item.quantity_in_minor_unit = item.quantity * unit.pivot.contains;
            return item.quantity_in_minor_unit;
        },
        deleteItem(item) {
            this.bill.details.splice(this.bill.details.indexOf(item), 1);
        },
        getProducts(val, type) {
            if (val.length > 2) {
                this.loading = true;
                let params = { name: val };
                let extra_route = this.act;
                Product.billNameSearch(params, extra_route).then((response) => {
                    if (response.data.products.length == 0) {
                        this.is_exists = [false || "الصنف غير موجود "];
                        return;
                    }

                    this.loading = false;

                    this.found_products = JSON.parse(
                        JSON.stringify(response.data.products)
                    );

                    this.is_exists = [true];
                });
            }
        },

        // addProductToBill() {
        //
        //
        //
        //   this.selected_product.main_unit_id =
        //     this.selected_product.main_bought_unit_id;
        //   this.showThisProduct(this.selected_product);
        // },
        checkExicting() {},

        suspend() {
            let bill = JSON.parse(JSON.stringify(this.bill));
            this.$store.state.suspended_bills.push(bill);
        },
        return_suspended_bill() {
            this.bill = this.$store.state.suspended_bills[0];
        },
        submit() {
            this.bill.total_without_products_tax =
                this.total_without_products_tax();
            this.bill.details.forEach((item) => {
                if (item.expires_at == "*******" && item.has_expiration_date)
                    item.expires_at_message = false;
            });

            if (!this.$refs.form.validate()) {
                return;
            }

            // this.expires_at_message = false;
            //this.$router.go(0); reload page if needed

            /* remove zero amount or not account methods */
            // this.bill.payment_methods = this.bill.payment_methods.filter(
            //     (elem) => elem.account_id != "" && elem.credit != 0
            // );

            if (this.bill.details.length == 0) {
                this.snackbar = true;
                return;
            }

            if (
                this.people.find((elem) => elem.id == this.bill.person_id)[
                    "name"
                ] == "افتراضي" &&
                this.bill.paid_amount != this.bill.total_amount
            ) {
                this.snackbarText =
                    "فاتورة " + this.persona + " الافتراضي يجب أن تكون نقدا";

                this.snackbarTimeout = 1500;
                this.snackbar = true;

                return;
            }

            this.starter_dialog = true;
            if (this.is_new_bill)
                Bill.store(this.bill).then((response) => {
                    this.starter_dialog = false;

                    if (!response.data.valid) {
                        if (!response.data.message["0"])
                            this.isunique = [false || "الرقم مستخدم سابقا."];
                        else this.isunique = [true];

                        for (
                            let index = 1;
                            index < response.data.message.length;
                            index++
                        ) {
                            this.bill.details[
                                response.data.message[index]
                            ].hide_quantity_valid_message = false;
                            this.bill.details[
                                response.data.message[index]
                            ].quantity_valid = [false || "غير متوفرة"];
                        }

                        this.snackbarText = "تحقق من صحة الحقول";
                        this.snackbarTimeout = 1500;
                        this.snackbar = true;
                        return;
                    }

                    // this.snackbar = true;
                    // this.snackbarText = "تم حفظ الفاتورة";
                });
            else
                Bill.update(this.bill).then((response) => {
                    this.starter_dialog = false;
                    // this.snackbar = true;
                    // this.snackbarText = "تم حفظ الفاتورة";
                });
        },

        /*------------------dateTime----------------------*/
        formatDate(date) {
            if (!date) return null;

            const [year, month, day] = date.split("-");
            return `${month}/${day}/${year}`;
        },
        parseDate(date) {
            if (!date) return null;

            const [month, day, year] = date.split("/");
            return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
        },
        createPage(to, status) {
            //
            this.bill.details = [];
            this.query = true;
            this.show = true;

            this.route = to.fullPath.replace(/^\/([^\/]*).*$/, "$1");

            if (this.route == "invoice") {
                this.return_bill = false;
                this.act = "output";
                this.person_type = "customers";
                this.person_info = "معلومات العميل";
                this.persona = "العميل";
                this.bill.document_type_id = 2;
                this.bill.is_input = 0;
                this.new_bill.document_type_id = 2;
            }
            if (this.route == "purchase") {
                this.return_bill = false;
                this.act = "input";

                this.person_type = "suppliers";
                this.person_info = "معلومات المورد";
                this.persona = "المورد";
                this.bill.document_type_id = 1;
                this.bill.is_input = 1;
                this.new_bill.document_type_id = 1;
            }
            if (this.route == "invoice_return") {
                this.act = "input";
                this.return_bill = true;
                this.person_type = "customers";
                this.person_info = "معلومات العميل";
                this.persona = "العميل";
                this.bill.is_input = 1;
                this.bill.document_type_id = 4;
                this.new_bill.document_type_id = 4;
            }
            if (this.route == "purchase_return") {
                this.act = "output";
                this.return_bill = true;
                this.cols = 12;
                this.main_bill = false;
                this.person_type = "customers";
                this.person_info = "معلومات المورد";
                this.persona = "المورد";
                this.bill.document_type_id = 3;
                this.bill.is_input = 0;
                this.new_bill.document_type_id = 3;
            }
            // if (route == "nibra")
            //   Person = (await import("../../../apis/Person")).default;
            let id = this.$route.params.id;
            if (id) this.is_new_bill = false;
            //this.title = "تعديل فاتورة رقم " + this.$route.params.id;
            else id = -1;
            Bill.get(id, {
                document_type_id: this.bill.document_type_id,
                return: 0,
            }).then((response) => {
                this.query = false;
                this.show = false;
                this.people = response.data.people;
                this.additional_expenses_from_accounts =
                    response.data.accounts.accounts;

                if (response.data.bill.is_new) {
                    this.bill.reference = response.data.bill.reference;
                    return;
                }

                this.bill = response.data.bill;

                this.bill.issue_date = this.bill.issue_date.split(" ")[0];
                this.bill.maturity_date = this.bill.maturity_date.split(" ")[0];
                this.bill.details.forEach((elem) => {
                    if (elem.expires_at)
                        elem.expires_at = elem.expires_at.split(" ")[0];
                });

                if (this.bill.payment_methods.length != 0) {
                } else
                    this.bill.payment_methods = [
                        {
                            account_id: "",
                            amount: 0,
                            description: "",
                        },
                        {
                            account_id: "",
                            amount: 0,
                            description: "",
                        },
                        {
                            account_id: "",
                            amount: 0,
                            description: "",
                        },
                    ];
            });

            // if (route == "nibras")
            //   Person = (await import("../../../apis/Person")).default;

            //
            //this.createPage(this.$route, "new");
        },
    },
    created() {
        Account.cashAndBanks().then(
            (response) =>
                (this.additional_expenses_from_accounts =
                    response.data.accounts)
        );
        this.createPage(this.$route, "new");
    },
};
</script>

<style>
#table .v-data-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: white;
}

#table .v-data-table__wrapper {
    margin-bottom: 60px;
}
.v-application--wrap > .container {
    margin: 0;
}
.v-text-field.v-text-field--enclosed .v-text-field__details,
.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
    > .v-input__control
    > .v-input__slot {
    padding: 0px;
}
.bill-footer {
    min-width: 0;
    overflow: hidden;
}
.purchas-extra-expense :after,
.purchas-extra-expense :before {
    display: none;
}

.purchas-extra-expense .v-text-field__details {
    display: none;
}
.text-red input {
    color: red !important;
}
.bill-info .v-text-field__prefix {
    margin-right: 10px;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.v-application ol,
.v-application ul {
    padding-left: 0;
}
ul {
    list-style: none;
    border: 1px solid silver;
    max-height: 170px;
    padding: 0;
    margin: 0;
    scroll-behavior: smooth; /* nice smooth movement */
    overflow: hidden; /* set to hidden by OP's request */
}

ul > div {
    padding: 0.5em;
    margin: 0;
}
ul > div:focus {
    background: #e91e63;
    outline: none;
}

.theme--light.v-subheader {
    background: rgb(255, 231, 243);
    justify-content: center;
}
.first-level {
    background: rgb(103, 133, 196);
    justify-content: center;
}

.font-weight th {
    font-weight: 100;
}
</style>
