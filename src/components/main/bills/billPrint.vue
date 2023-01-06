<template>
  <div>
    <v-row class="window-contol">
      <v-col style="text-align: end; font-size: 13px">
        <a @click="print" style="color: black">
          طباعة
          <v-icon> mdi-printer </v-icon>
        </a>
        <a href="javascript:window.close();" style="color: black">اغلاق <v-icon> mdi-close-box </v-icon>
        </a>
      </v-col>
    </v-row>

    <div class="page content ar">
      <div class="bill-header">
        <div class="company-info">
          <h4>{{ bill.company_name }}</h4>
          <div>{{ bill.company_address }}</div>
          <div>{{ bill.company_mobile }}</div>
          <div>{{ bill.company_website }}</div>
          <div>{{ bill.company_email }}</div>
        </div>
      </div>
      <div>
        <div class="bill-info">
          <div>
            <div>
              <h4>{{ title[bill.document_type_id][0] }}</h4>
            </div>
            <div style="width: 50%; float: right">
              <div style="text-align: left">المرجع:</div>
              <div style="text-align: left">تاريخ الاصدار:</div>
              <div style="text-align: left">تاريخ الاستحقاق:</div>
              <div style="text-align: left">المبلغ المستحق:</div>
            </div>
            <div style="width: 50%; float: right; padding-right: 10px">
              <div style="text-align: right">{{ bill.reference }}</div>
              <div style="text-align: right">
                {{ bill.issue_date.split(" ")[0] }}
              </div>
              <div style="text-align: right">
                {{ bill.maturity_date.split(" ")[0] }}
              </div>
              <div style="text-align: right">
                {{
                  (
                    bill.total_amount -
                    bill.paid_amount -
                    bill.receipts
                  ).toFixed(3)
                }}
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div style="width: 20%; height: 1px; float: right"></div>
        <div class="bill-info">
          <div>
            <div>
              <h4>بيانات المورد</h4>
            </div>
            <div style="width: 50%; float: right">
              <div style="text-align: left">الشركة:</div>
              <div style="text-align: left">جهة الاتصال:</div>
              <div style="text-align: left">رقم الهاتف:</div>
            </div>
            <div style="width: 50%; float: right; padding-right: 10px">
              <div style="text-align: right">
                {{ bill.person_company_name }}
              </div>
              <div style="text-align: right">
                {{ bill.person_name }}
              </div>
              <div style="text-align: right">
                {{ bill.person_phone01 }}
              </div>
            </div>
            <div>
              {{ bill.person_email }}
            </div>
          </div>
        </div>

        <div style="clear: both"></div>
      </div>

      <v-divider class="mb-8 mt-2"></v-divider>

      <div class="row pdf-data">
        <div class="col-xs-12">
          <table
            cellpadding="1"
            cellspacing="5"
            width="100%"
            class="data-table"
          >
            <thead>
              <tr>
                <th class="item-list-col-hash">#</th>
                <th class="ar_content">المنتج</th>
                <th class="item-list-col-exp ar_content">تاريخ الانتهاء</th>
                <th class="item-list-col-quantity ar_content">الكمية</th>
                <th class="item-list-col-unit ar_content">سعر الوحدة</th>
                <th class="item-list-col-dis ar_content">الخصم<br /></th>
                <th class="item-list-col-tax ar_content">الضريبة%</th>
                <th class="item-list-col-tax ar_content">قيمة الضريبة</th>
                <th class="ar_content">الاجمالي</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="detail in bill.details" :key="detail.id">
                <td class="item-list-col-hash-detail">
                  {{ bill.details.indexOf(detail) + 1 }}
                </td>
                <td class="center">
                  <strong>{{ detail.ar_name }}</strong> <br />
                  <strong>{{ detail.barcode }}</strong>
                  <span
                    ><div class="description description-pre-line"></div
                  ></span>
                </td>
                <td class="center">
                  {{ detail.expires_at.split(" ")[0] }}
                </td>
                <td class="center">
                  {{ detail.quantity }}
                  <span class="ar_content"> {{ detail.unit }} </span>
                </td>
                <td class="center">{{ detail.unit_price }} ريال</td>
                <td class="center">{{ detail.discount }}</td>
                <td class="center">{{ detail.tax }}%</td>
                <td class="center">{{ detail.tax_value }}</td>
                <td class="center">{{ detail.total }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row sub-totals">
        <div class="col-xs-12">
          <div class="sub-totals-details">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr class="sub-total-entry">
                  <td class="sub-total-entry-title ar_content">
                    <strong>الاجمالي قبل الضريبة:</strong>
                  </td>
                  <td class="sub-total-entry-value">
                    <strong>
                      {{ bill.total_without_products_tax.toFixed(3) }}
                      ريال</strong
                    >
                  </td>
                </tr>
                <tr class="sub-total-entry">
                  <td class="sub-total-entry-title ar_content">
                    <strong>اجمالي الضريبة:</strong>
                  </td>
                  <td class="sub-total-entry-value">
                    <strong> {{ bill.total_tax.toFixed(3) }} ريال</strong>
                  </td>
                </tr>
                <tr class="sub-total-entry">
                  <td class="sub-total-entry-title ar_content">
                    <strong>المجموع:</strong>
                  </td>
                  <td class="sub-total-entry-value">
                    <strong> {{ bill.total_amount.toFixed(3) }} ريال</strong>
                  </td>
                </tr>
                <tr class="sub-total-entry" v-if="bill.paid_amount">
                  <td class="sub-total-entry-title ar_content">
                    <strong>المدفوع مع الفاتورة:</strong>
                  </td>
                  <td class="sub-total-entry-value">
                    <strong> {{ bill.paid_amount.toFixed(3) }} ريال</strong>
                  </td>
                </tr>
                <tr class="sub-total-entry" v-if="bill.receipts">
                  <td class="sub-total-entry-title ar_content">
                    <strong>المدفوع سندات:</strong>
                  </td>
                  <td class="sub-total-entry-value">
                    <strong> {{ bill.receipts.toFixed(3) }} ريال</strong>
                  </td>
                </tr>
                <tr class="sub-total-entry sub-amount-due bcg-grey">
                  <td class="sub-total-entry-title ar_content">
                    <strong>المبلغ المستحق:</strong>
                  </td>
                  <td class="sub-total-entry-value">
                    <strong>
                      {{
                        (
                          bill.total_amount -
                          bill.paid_amount -
                          bill.receipts
                        ).toFixed(3)
                      }}
                      ريال
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../../../apis/Product";
import Bill from "../../../apis/Bill";
import ProductInfo from "../products/product-info.vue";
import PaymentMethod from "./payment-methods";
import AddUpdatePerson from "./AddUpdatePerson.vue";
import Country from "../../../apis/Country";
import Person from "../../../apis/Person";
import Account from "../../../apis/Account";

export default {
  data() {
    return {
      title: [
        ["فاتورة مشتريات جديدة"],
        ["فاتورة مبيعات جديدة"],
        ["مرودوات مشتريات جديدة"],
        ["مرودوات مبيعات جديدة"],
      ],
      //----
      act: "",
      route: "",
      person_info: "معلومات المورد",
      person_type: "suppliers",
      persona: "المورد",
      //----
      bill: {
        id: 13,
        company_id: 1,
        reference: "PUR0",
        document_type_id: 1,
        is_input: 1,
        currency_id: 1,
        currency_rates: 1,
        description: null,
        person_id: 1,
        only_cash: 1,
        issue_date: "2022-05-13 00:00:00",
        maturity_date: "2022-05-23 00:00:00",
        payment_condition_id: 10,
        total_without_products_discounts: 0,
        total_without_products_tax: 20,
        total_discunt: 0,
        total_tax: 1,
        additional_expenses: 0,
        total_amount: 21,
        remaining_amount: 0,
        remaining_amount_at_all: 0,
        paid_amount: 21,
        status_id: 1,
        payment_status_id: 1,
        notes: null,
        additional_expenses_from_account_id: 4,
        created_at: "2022-05-13 19:46:12",
        updated_at: "2022-05-13 19:46:12",
        deleted_at: null,
        person_company_name: "افتراضي",
        person_name: "افتراضي",
        person_phone01: "967775521104",
        person_email: "default@gmail.com",
        company_name: "افتراضي",
        company_address: "",
        company_mobile: "967775521104",
        company_website: "www.webzeron.com",
        company_email: "default@gmail.com",
        receipts: 0,
        details: [
          {
            id: 14,
            company_id: 1,
            document_id: 13,
            document_type_id: 1,
            type_id: 1,
            product_id: 1,
            expires_at: "2022-05-13 00:00:00",
            unit_id: 1,
            quantity: 1,
            unit_price: 20,
            profit_ratio: 20,
            sold_price: 0,
            bonus: 0,
            quantity_in_minor_unit: 1,
            sum_quantity_in_minor_unit: -1,
            inventory_id: 1,
            tax: 5,
            tax_value: 1,
            discount: 0,
            discount_type_id: 1,
            sold_discount: 5,
            total: 21,
            drugs_is_with_bonous: 0,
            ar_name: "salam",
            barcode: "6221077011537",
          },
        ],
      },
    };
  },
  methods: {
    print() {
      window.print();
    },
    createPage(to, status) {
      this.route = to.fullPath.replace(/^\/([^\/]*).*$/, "$1");

      if (this.route == "invoice") {
        this.act = "output";
        this.person_type = "customers";
        this.person_info = "معلومات العميل";
        this.persona = "العميل";
        this.bill.document_type_id = 2;
        this.bill.is_input = 0;
      }
      if (this.route == "purchase") {
        this.act = "input";
        
        this.person_type = "suppliers";
        this.person_info = "معلومات المورد";
        this.persona = "المورد";
        this.bill.document_type_id = 1;
        this.bill.is_input = 1;
      }
      if (this.route == "invoice_return") {
        this.act = "input";
        this.return_bill = true;
        this.person_type = "customers";
        this.person_info = "معلومات العميل";
        this.persona = "العميل";
        this.bill.is_input = 1;
        this.bill.document_type_id = 4;
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
      }
      Bill.print(this.$route.params.id, this.bill.document_type_id).then(
        (response) => {
          
          this.bill = response.data;
          window.print();
        }
      );
    },
  },
  created() {
    this.createPage(this.$route, "new");
  },
};
</script>

<style>
/*! CSS Used from: Embedded */

.center {
  text-align: center;
}
.bcg-grey {
  background: rgb(238, 238, 238);
}
@media print {
  .window-contol {
    display: none;
  }
}
.company-info {
  text-align: center;
  font-size: 13px;
}
.bill-info {
  float: right;
  font-size: 13px;
  width: 40%;
}
.print-page {
  width: 210mm;
  padding: 20mm;
  margin: 10mm auto;
  /*border: 1px #d3d3d3 solid;*/
  border-radius: 5px;
  background: white;
  /*box-shadow: 0 0 5px rgb(0 0 0 / 10%);*/
}
.row:before,
.row:after {
  display: table;
  content: " ";
}
.row:after {
  clear: both;
}
.col {
  float: left;
  position: relative;
  min-height: 1px;
}
.ar .col {
  float: right;
}
.col-xs-4 {
  width: 33.33333333%;
}
.col-xs-6 {
  width: 50%;
}
.col-xs-8 {
  width: 66.66666667%;
}
.col-xs-12 {
  width: 100%;
}
.mb5 {
  margin-bottom: 0.313em;
}
.text-align-locale {
  text-align: left !important;
}
.ar .text-align-locale {
  text-align: right !important;
}
.description-pre-line {
  white-space: pre-line;
}
thead {
  display: table-header-group;
}
tr {
  page-break-inside: avoid;
}
.content {
  padding: 10mm;
}
.ar.content {
  direction: rtl;
}
.pdf-header {
  border-bottom: 1px solid #ddd;
  padding-bottom: 6px;
}
.header-logo-container {
  text-align: left;
}
.ar .header-logo-container {
  text-align: right;
}
.header-info-container {
  text-align: right;
  line-height: 1em;
}
.ar .header-info-container {
  text-align: left;
}
.header-info-container h4 {
  margin-top: 0px;
}
.header-org-info {
  font-size: 9pt;
}
.invoice-title {
  text-transform: uppercase;
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 0px;
  margin-top: 0px;
  line-height: 1.1em;
}
.pdf-brief {
  margin-top: 10px;
}
.brief-field-title {
  color: #8c979d;
  font-weight: bold;
  line-height: 1em;
}
.brief-invoice-container {
  text-align: right;
}
.ar .brief-invoice-container {
  text-align: left;
}
.document-info-field-title {
  text-align: right;
  width: 50%;
}
.document-info-field-value {
  text-align: left;
  width: 40%;
}
.ar .document-info-field-title {
  text-align: left;
  width: 50%;
}
.ar .document-info-field-value {
  text-align: right;
  width: 40%;
}
.document-info-wrapper {
  float: right;
  font-size: 8pt;
}
.ar .document-info-wrapper {
  float: left;
}
.document-amount-container {
  background-color: #ddd;
  vertical-align: middle;
}
.document-amount-container td {
  padding-top: 4px;
  padding-bottom: 4px;
}
.pdf-data {
  margin-top: 10px;
}
.data-table {
  font-size: 9pt;
  line-height: 1.1em;
}
.item-list-col-hash {
  width: 3% !important;
  text-align: left;
  font-weight: bold;
}
.item-list-col-exp {
  width: 10% !important;
}
.item-list-col-quantity {
  width: 10% !important;
}
.item-list-col-unit {
  width: 10% !important;
}
.item-list-col-dis {
  width: 5% !important;
}
.item-list-col-tax {
  width: 5% !important;
}
.item-list-col-hash-detail {
  text-align: left;
  font-weight: bold;
  vertical-align: top;
}
.ar .item-list-col-hash {
  text-align: right;
}
.ar .item-list-col-hash-detail {
  text-align: right;
}
.sub-totals-details {
  text-align: right;
}
.ar .sub-totals-details {
  text-align: left;
}
.sub-totals-details table {
  float: right;
}
.ar .sub-totals-details table {
  float: left;
}
.row.sub-totals {
  margin-top: 20px !important;
}
.sub-totals-details {
  font-size: 10pt;
  /*font-weight: bold;*/
}
.sub-total-entry {
  margin-top: 5px;
  font-size: 10pt;
}
.sub-total-entry-title {
  padding-right: 15px;
}
.sub-total-entry-title {
  padding-right: 15px;
}
.ar .sub-total-entry-title {
  padding-left: 15px;
  padding-right: 0px;
}

.sub-total-entry-value {
  text-align: left;
  padding-left: 20px !important;
  padding-right: 0px !important;
}
.ar .sub-total-entry-value {
  text-align: right;
  padding-left: 5px !important;
  padding-right: 20px !important;
}
.sub-amount-due .sub-total-entry-title,
.sub-amount-due .sub-total-entry-value {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding-top: 8px;
  padding-bottom: 8px;
}
.description {
  font-size: smaller;
}
.row.additional-info {
  margin-top: 20px;
}
/*! CSS Used from: Embedded */
* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.page {
  width: 210mm;
  padding: 20mm;
  margin: 10mm auto;
  border: 1px #d3d3d3 solid;
  border-radius: 5px;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
@media print {
  .page {
    margin: 0;
    border: initial;
    border-radius: initial;
    width: initial;
    min-height: initial;
    box-shadow: initial;
    background: initial;
    page-break-after: always;
  }
}
/*! CSS Used from: Embedded */
.page {
  padding: 50px 37px;
}

.sub-total-entry-title {
  text-align: left;
}
.ar .sub-total-entry-title {
  text-align: right;
}
h2,
h4 {
  margin: 0;
}
/*! CSS Used fontfaces */
</style>