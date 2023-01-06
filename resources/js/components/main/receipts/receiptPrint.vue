<template>
  <div class="page content ar">
    <div class="receipt-header">
      <div class="company-info">
        <h4>{{ receipt.company_name }}</h4>
        <div>{{ receipt.company_address }}</div>
        <div>{{ receipt.company_mobile }}</div>
        <div>{{ receipt.company_website }}</div>
        <div>{{ receipt.company_email }}</div>
      </div>
    </div>
    <div>
      <div class="receipt-info">
        <div>
          <div>
            <h4>{{ title[receipt.document_type_id][0] }}</h4>
          </div>
          <div style="width: 50%; float: right">
            <div style="text-align: left">المرجع:</div>
            <div style="text-align: left">تاريخ الاصدار:</div>

            <div style="text-align: left">الحساب:</div>
            <div style="text-align: left">قيمة السند:</div>
            <div style="text-align: left">المبلغ المستخدم:</div>
            <div style="text-align: left">المبلغ غير المستخدم:</div>
          </div>
          <div style="width: 50%; float: right; padding-right: 10px">
            <div style="text-align: right">{{ receipt.reference }}</div>
            <div style="text-align: right">
              {{ receipt.date.split(" ")[0] }}
            </div>

            <div style="text-align: right">
              {{ receipt.account_ar_name }}
            </div>

            <div style="text-align: right">
              {{ receipt.amount.toFixed(2) }}
            </div>
            <div style="text-align: right">
              {{ used_amount() }}
            </div>
            <div style="text-align: right">
              {{ unused_amount() }}
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div style="width: 20%; height: 1px; float: right"></div>
      <div class="receipt-info">
        <div>
          <div>
            <h4>
              {{ receipt_title() }}
            </h4>
          </div>
          <div style="width: 50%; float: right">
            <div style="text-align: left">الشركة:</div>
            <div style="text-align: left">جهة الاتصال:</div>
            <div style="text-align: left">رقم الهاتف:</div>
          </div>
          <div style="width: 50%; float: right; padding-right: 10px">
            <div style="text-align: right">
              {{ receipt.person_company_name }}
            </div>
            <div style="text-align: right">
              {{ receipt.person_name }}
            </div>
            <div style="text-align: right">
              {{ receipt.person_phone01 }}
            </div>
          </div>
          <div>
            {{ receipt.person_email }}
          </div>
        </div>
      </div>

      <div style="clear: both"></div>
    </div>

    <v-divider class="mb-8 mt-2"></v-divider>

   
    <div class="row pdf-data">
      <div class="col-xs-12">
        <table cellpadding="1" cellspacing="5" width="100%" class="data-table">
          <thead>
            <tr class="ar_content">
              <th class="item-list-col-hash">#</th>
              <th>رقم المرجع</th>
              <th>النوع</th>
              <th>المبلغ</th>
              <th>المبلغ المستحق</th>
              <th>التاريخ</th>
            </tr>
          </thead>
          <tbody class="center-align-row">
            <tr
              v-for="receipt_bill in receipt.receipt_bills"
              :key="receipt_bill.id"
            >
              <td>{{ receipt.receipt_bills.indexOf(receipt_bill) + 1 }}</td>
              <td>{{ receipt_bill.reference }}</td>
              <td>
                <strong class="ar_content">
                  {{ bill_type(receipt_bill) }}
                </strong>
              </td>
              <td>{{ receipt_bill.amount }} ريال</td>
              <td>{{ receipt_bill.remaining_amount_at_all }} ريال</td>
              <td>{{ receipt_bill.created_at.split('T')[0] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row additional-info">
      <div class="col-xs-12"></div>
    </div>
  </div>
</template>

<script>
import Receipt from "../../../apis/Receipt";



export default {
  data() {
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
        receipt_bills: [
          {
            id: 1,
            reference: "PUR012",
            type_id: 1,
            amount: 21,
            remaining_amount: 13,
            created_at: "20-12-2021",
          },
          {
            id: 1,
            reference: "PUR012",
            type_id: 1,
            amount: 10,
            remaining_amount: 13,
            created_at: "20-12-2021",
          },
          {
            id: 1,
            reference: "PUR012",
            type_id: 1,
            amount: 21,
            remaining_amount: 13,
            created_at: "20-12-2021",
          },
        ],
      },
    };
  },
  methods: {
    used_amount() {
      let used = 0;
      this.receipt.receipt_bills.forEach((element) => {
        used += element.amount;
      });
      return used.toFixed(2);
    },
    unused_amount() {
      let used = 0;
      this.receipt.receipt_bills.forEach((element) => {
        used += element.amount;
      });
      return this.receipt.amount - used;
    },
    receipt_type() {},
    bill_type(item) {
      if (item.type_id == 1) return "فاتورة مشتريات";
    },
    receipt_title() {
      let x0 = "مدفوعة لـ",
        x1 = "(المورد)";

      if (this.receipt.document_type_id == 2) x1 = "(العميل)";

      if (this.receipt.payment_type_id == 2) x0 = "مستلمة من ";

      return x0 + x1;
    },
    createPage(to, status) {
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
      Receipt.print(this.$route.params.id, this.receipt.document_type_id).then(
        (response) => {
          this.receipt = response.data;
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
.company-info {
  text-align: center;
  font-size: 13px;
}
.receipt-info {
  float: right;
  font-size: 13px;
  width: 40%;
}

.pdf-data {
  color: #000000 !important;
}
.ar_content {
  /*font-family: "cairo", sans-serif !important;*/
}
/*! CSS Used from: Embedded */
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
thead {
  display: table-header-group;
}
tr {
  page-break-inside: avoid;
}
.content {
  padding: 10mm;
  /*font-family: Cairo !important;*/
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
.ar .item-list-col-hash {
  text-align: right;
}
.row.additional-info {
  margin-top: 20px;
}
.center-align-row td {
  text-align: center;
  vertical-align: middle;
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
/*! CSS Used fontfaces */
</style>