<template>
    <div class="mt-4 pa-2">
        <v-container>
            <v-row>
                <v-col>
                    <v-row>
                        <v-col cols="12" class="pa-0">
                            <v-text-field
                                type="ltr"
                                class="bill-info"
                                outlined
                                autocomplete="off"
                                v-model="bill.reference"
                                prefix=" رقم الفاتورة | "
                                :rules="required.concat(isunique)"
                                @blur="checkExicting()"
                                @click="isunique = [true]"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" class="pa-0" v-if="false">
                            <v-text-field
                                class="bill-info"
                                outlined
                                placeholder="أدخل العام (رقمين) والشهر"
                                autocomplete="off"
                                v-model="bill.test_date"
                                prefix=" تاريخ اختباري | "
                                :rules="is_valid_date"
                                @keydown.enter="changeDateFormat()"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" class="pa-0">
                            <v-text-field
                                autocomplete="off"
                                v-model="bill.description"
                                label="الوصف"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" class="pa-0">
                            <v-row>
                                <v-col>
                                    <v-autocomplete
                                        v-model="bill.person_id"
                                        :items="people"
                                        :item-text="
                                            (item) => {
                                                if (this.route == 'purchase')
                                                    return (
                                                        item.company_name +
                                                        ' : ' +
                                                        item.name
                                                    );
                                                else return item.name;
                                            }
                                        "
                                        item-value="id"
                                        :rules="vld_selected"
                                        :label="persona"
                                    >
                                    </v-autocomplete>
                                </v-col>
                                <v-col cols="2">
                                    <v-btn
                                        elevation="0"
                                        dark
                                        @click="addPerson"
                                    >
                                        <v-icon> mdi-plus </v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-col>

                        <v-col cols="12" class="pa-0">
                            <v-menu
                                ref="issue_date"
                                v-model="issue_date_is_down"
                                :close-on-content-click="false"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="bill.issue_date"
                                        label="تاريخ الاصدار"
                                        prepend-icon="mdi-calendar"
                                        v-bind="attrs"
                                        v-on="on"
                                        @keydown.enter="
                                            issue_date_is_down = false
                                        "
                                        @change="getDays"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="bill.issue_date"
                                    no-title
                                    @input="issue_date_is_down = false"
                                    @change="getDays"
                                ></v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col cols="12" class="pa-0">
                            <v-text-field
                                type="number"
                                label="الدفع بعد "
                                v-model="bill.payment_condition_id"
                                suffix="يوم"
                                @change="getMaturityDate"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" class="pa-0">
                            <v-menu
                                ref="maturity_date"
                                v-model="maturity_date_is_down"
                                :close-on-content-click="false"
                                transition="scale-transition"
                                offset-y
                                max-width="290px"
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="bill.maturity_date"
                                        label="تاريخ الاستحقاق"
                                        prepend-icon="mdi-calendar"
                                        v-bind="attrs"
                                        v-on="on"
                                        @keydown.enter="
                                            maturity_date_is_down = false
                                        "
                                        @change="getDays"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="bill.maturity_date"
                                    no-title
                                    @input="maturity_date_is_down = false"
                                    @change="getDays"
                                ></v-date-picker>
                            </v-menu>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col>
                    <v-card>
                        <v-card-title style="background: lightgray">
                            {{ person_info }}
                        </v-card-title>
                        <v-card-text>
                            <v-row>
                                <v-col cols="12" lg="6"> الاسم </v-col>
                                <v-col cols="12" lg="6">
                                    {{ personInfo() && personInfo().name }}
                                </v-col>
                                <v-col cols="12" lg="6"> اسم الشركة </v-col>
                                <v-col cols="12" lg="6">
                                    {{
                                        personInfo() &&
                                        personInfo().company_name
                                    }}
                                </v-col>
                                <v-col cols="12" lg="6"> الهاتف </v-col>
                                <v-col cols="12" lg="6">
                                    {{
                                        personInfo() && personInfo().phone01
                                    }} </v-col
                                ><v-col cols="12" lg="6">
                                    البريد الالكتروني
                                </v-col>
                                <v-col cols="12" lg="6">
                                    {{ personInfo() && personInfo().email }}
                                </v-col>

                                <v-col
                                    v-show="
                                        personInfo() && personInfo().tax_number
                                    "
                                    cols="12"
                                    lg="6"
                                >
                                    الرقم الضريبي
                                </v-col>
                                <v-col
                                    v-show="
                                        personInfo() && personInfo().tax_number
                                    "
                                    cols="12"
                                    lg="6"
                                >
                                    {{
                                        personInfo() && personInfo().tax_number
                                    }}
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <div class="ma-10"></div>
            <v-divider></v-divider>
            <div class="ma-10"></div>
            <form ref="form" @submit.prevent="submit">
                <v-row>
                    <v-col
                        ><label
                            class="v-btn theme--light v-size--default success"
                        >
                            <span class="v-btn__content">{{ file_name }}</span>
                            <input
                                accept=".xlsx, .xls, .csv"
                                type="file"
                                name="myInputFile"
                                id="myInputFile"
                                file
                                style="display: none"
                                @change="productsUpload($event)"
                            />
                        </label>
                    </v-col>

                    <v-col>
                        <v-btn
                            :loading="upload"
                            :disabled="upload"
                            color="info"
                            @click="submit"
                        >
                            رفع الملف
                            <template v-slot:loader>
                                <span class="custom-loader">
                                    <v-icon light>mdi-cached</v-icon>
                                </span>
                            </template>
                        </v-btn>
                    </v-col>
                </v-row>
            </form>
        </v-container>
    </div>
</template>

<script>
import Bill from "../../../apis/Bill";
export default {
    data() {
        return {
            upload: false,
            file_name: "اضغط هنا لاستيراد المنتجات",
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
            person_info: "معلومات المورد",
            person_type: "suppliers",
            persona: "المورد",
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
            people: [],
            persona: "المورد",
        };
    },
    methods: {
        productsUpload(event) {
            let files = event.target.files;
            let filename = files[0]?.name;
            if (filename?.lastIndexOf(".") <= 0) {
                return alert("add a valid file");
            }
            this.file_name = filename;
            if (this.file_name == undefined)
                this.file_name = "اضغط هنا لاختيار ملف إكسل";
            console.log(filename);

            //alert("productsUpload");
            //Product.import().then((response) => console.log(response));
        },
        submit() {
            if (this.file_name == "") return;

            this.upload = true;

            let products = new FormData(this.$refs.form);
            console.log('products');
            console.log(products);
            Bill.upload(products).then((response) => {
                this.options = {};
                this.upload = false;
            });
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
        addPersonToList(person) {
            this.add_update_person_dialog = false;
            this.people.push(person);
            this.bill.person_id = person.id;
        },
        formatDate(date) {
            if (!date) return null;

            const [year, month, day] = date.split("-");
            return `${month}/${day}/${year}`;
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
        getDays() {
            this.bill.payment_condition_id = parseInt(
                (new Date(this.bill.maturity_date) -
                    new Date(this.bill.issue_date)) /
                    (1000 * 60 * 60 * 24),
                10
            );
        },
    },
};
</script>

<style></style>
