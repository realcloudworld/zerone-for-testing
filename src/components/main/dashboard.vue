<template>
  <div>
    <div>
      <v-col style="height: 5px">
        <v-progress-linear
          v-model="value"
          :active="show"
          :indeterminate="query"
          :query="true"
        ></v-progress-linear>
      </v-col>
    </div>
    <!--Add Invoice -->
    <v-container class="panel pa-10">
      <v-row justify="center" class="pink--text"></v-row>
      <img src="/logo.png" alt="" width="100" height="128" class="ma-3" />
      <v-row justify="center" class="mb-3 pa-0"> نبراس للأنظمة المحاسبية</v-row>
      <!--div v-can="'server:update'">salam</!--div-->

      

      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-2 nopadding">
          <div class="small-box bg-green whitecolor">
            <router-link to="/customers" class="small-box-footer">
              <div class="inner">
                <h4>
                  <span class="count-number">{{ customers }}</span>
                </h4>
                <p>عدد العملاء</p>
              </div>

              <p></p>
              إدارة العملاء</router-link
            >
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-2 nopadding">
          <div class="small-box bg-pase whitecolor">
            <router-link to="/products" class="small-box-footer">
              <div class="inner">
                <h4>
                  <span class="count-number">{{ products }}</span>
                </h4>

                <p>عدد الأصناف</p>
              </div>

              <p></p>
              إدارة الأصناف</router-link
            >
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-2 nopadding">
          <div class="small-box bg-bringal whitecolor">
            <router-link to="/suppliers" class="small-box-footer">
              <div class="inner">
                <h4>
                  <span class="count-number">{{ suppliers }}</span>
                </h4>

                <p>عدد الموردين</p>
              </div>

              <p></p>
              إدارة الموردين</router-link
            >
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-2 nopadding">
          <div class="small-box bg-darkgreen whitecolor">
            <router-link to="/purchases" class="small-box-footer">
              <div class="inner">
                <h4>
                  <span class="count-number">{{ purchases }}</span>
                </h4>

                <p>عدد فواتير المشتريات</p>
              </div>

              <p></p>
              إدارة المشتريات</router-link
            >
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-2 nopadding">
          <div class="small-box bg-pink whitecolor">
            <router-link to="/purchases" class="small-box-footer">
              <div class="inner">
                <h4>
                  <span class="count-number">{{ purchase_returns }}</span>
                </h4>

                <p>عدد مرتجعات المشتريات</p>
              </div>

              <p></p>
              إدارة المرتجعات</router-link
            >
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-2 nopadding">
          <div class="small-box bg-lightgreen whitecolor">
            <router-link to="/invoices" class="small-box-footer">
              <div class="inner">
                <h4>
                  <span class="count-number">{{ invoice_returns }}</span>
                </h4>

                <p>عدد مرتجعات المبيعات</p>
              </div>

              <p></p>
              إدارة المرتجعات</router-link
            >
          </div>
        </div>
      </div>

      <div class="row jc-center">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-2 nopadding">
          <div class="panel panel-bd">
            <router-link to="/invoice">
              <div class="panel-body">
                <div class="statistic-box">
                  <h2>
                    <span class="slight">
                      <img src="pos_invoice.png" height="40" width="40" />
                    </span>
                  </h2>
                  <div
                    class="small"
                    style="
                      font-size: 17px;
                      margin-top: 20px;
                      text-align: center;
                    "
                  >
                    إضافة مبيعات
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-2 nopadding">
          <div class="panel panel-bd">
            <router-link to="/purchase">
              <div class="panel-body">
                <div class="statistic-box">
                  <h2>
                    <span class="slight">
                      <img src="invoice.png" height="40" width="40" />
                    </span>
                  </h2>
                  <div
                    class="small"
                    style="
                      font-size: 17px;
                      margin-top: 20px;
                      text-align: center;
                    "
                  >
                    إضافة مشتريات
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-2 nopadding">
          <div class="panel panel-bd">
            <div class="panel-body">
              <div class="statistic-box">
                <h2>
                  <span class="slight">
                    <img src="product.png" height="40" width="40" />
                  </span>
                </h2>
                <div
                  class="small"
                  style="font-size: 17px; margin-top: 20px; text-align: center"
                >
                  <router-link to="/product">إضافة صنف</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-2 nopadding">
          <div class="panel panel-bd">
            <div class="panel-body">
              <div class="statistic-box">
                <h2>
                  <span class="slight">
                    <img
                      src="payment.png"
                      height="40"
                      width="40"
                      style="transform: scaleX(-1)"
                    />
                  </span>
                </h2>
                <div
                  class="small"
                  style="font-size: 17px; margin-top: 20px; text-align: center"
                >
                  <router-link to="/receipt/supplier">سند مورد</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-2 nopadding">
          <div class="panel panel-bd">
            <div class="panel-body">
              <div class="statistic-box">
                <h2>
                  <span class="slight">
                    <img src="payment.png" height="40" width="40" />
                  </span>
                </h2>
                <div
                  class="small"
                  style="font-size: 17px; margin-top: 20px; text-align: center"
                >
                  <router-link to="/receipt/customer">سند عميل</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
import Product from "../../apis/Product";
import Dashboard from "../../apis/Dashboard";
export default {
  data() {
    return {
      file_name: "اضغط هنا لاختيار ملف إكسل",
      /*------------------------------*/
      value: 0,
      query: false,
      show: true,
      interval: 0,
      /*------------------------------*/
      purchases: 0,
      invoices: 0,
      purchase_returns: 0,
      invoice_returns: 0,
      products: 0,
      suppliers: 0,
      customers: 0,
    };
  },

  computed: {},

  watch: {},
  created() {
    this.query = true;
    this.show = true;

    Dashboard.index().then((response) => {
      this.query = false;
      this.show = false;
      this.purchases = response.data.purchases;
      this.invoices = response.data.invoices;
      this.purchase_returns = response.data.purchase_returns;
      this.invoice_returns = response.data.invoice_returns;
      this.products = response.data.products;
      this.suppliers = response.data.suppliers;
      this.customers = response.data.customers;
    });
  },
  methods: {
    submit() {
      let products = new FormData(this.$refs.form);

      var form = new FormData(document.getElementById("ProductsForm"));
      console.log(form);
      Product.upload(products).then((response) => console.log(response));
      //this.$refs.form.$el.submit();
    },
    productsUpload(event) {
      let files = event.target.files;
      let filename = files[0]?.name;
      if (filename?.lastIndexOf(".") <= 0) {
        return alert("add a valid file");
      }
      this.file_name = filename;
      console.log(filename);

      //alert("productsUpload");
      //Product.import().then((response) => console.log(response));
    },
  },
};
</script>

<style scoped>
.v-application .mb-2 {
  margin-top: 12px !important;
  align-self: flex-;
}
</style>