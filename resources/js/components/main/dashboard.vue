<template>
  <div>
    <!--Add Invoice -->
    <v-container class="panel pa-10">
      <v-row justify="center">مرحبا بك في نظام إدارة الصيدليات</v-row>
      <v-row justify="center" class="pink--text">0.1 betaVersion</v-row>
      <img src="logo.png" alt="" width="100" height="128" class="ma-3" />
      <!--div v-can="'server:update'">salam</!--div-->

      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
          <div class="small-box bg-green whitecolor">
            <div class="inner">
              <h4>
                <span class="count-number">{{ customers }}</span>
              </h4>
              <p>عدد العملاء</p>
            </div>
            <div class="icon">
              <i class="fa fa-users"></i>
            </div>

            <p></p>
            <router-link to="/customermanagement" class="small-box-footer"
              >إدارة العملاء</router-link
            >
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
          <div class="small-box bg-pase whitecolor">
            <div class="inner">
              <h4>
                <span class="count-number">{{ products }}</span>
              </h4>

              <p>عدد الأصناف</p>
            </div>
            <div class="icon">
              <i class="fa fa-shopping-bag"></i>
            </div>
            <p></p>
            <router-link to="/drugclassmanagement" class="small-box-footer"
              >إدارة الأصناف</router-link
            >
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
          <div class="small-box bg-bringal whitecolor">
            <div class="inner">
              <h4>
                <span class="count-number">{{ suppliers }}</span>
              </h4>

              <p>عدد الموردين</p>
            </div>
            <div class="icon">
              <i class="fa fa-user"></i>
            </div>
            <p></p>
            <router-link to="/companymanagement" class="small-box-footer"
              >إدارة الموردين</router-link
            >
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
          <div class="small-box bg-darkgreen whitecolor">
            <div class="inner">
              <h4>
                <span class="count-number">{{ invoices }}</span>
              </h4>

              <p>عدد الفواتير</p>
            </div>
            <div class="icon">
              <i class="fa fa-money"></i>
            </div>
            <p></p>
            <router-link to="/invoicemanagement" class="small-box-footer"
              >إدارة الفواتير</router-link
            >
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
          <div class="panel panel-bd">
            <router-link to="/invoice">
              <div class="panel-body">
                <div class="statistic-box">
                  <h2>
                    <span class="slight" style="margin-left: 70px">
                      <img
                        src="https://pharmacyv5.bdtask.com/pharmacare_v9.2_demo/my-assets/image/pos_invoice.png"
                        height="40"
                        width="40"
                      />
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
                    إضافة فاتورة بيع
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
          <div class="panel panel-bd">
            <router-link to="/purchase">
              <div class="panel-body">
                <div class="statistic-box">
                  <h2>
                    <span class="slight" style="margin-left: 70px">
                      <img
                        src="https://pharmacyv5.bdtask.com/pharmacare_v9.2_demo/my-assets/image/invoice.png"
                        height="40"
                        width="40"
                      />
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

        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
          <div class="panel panel-bd">
            <div class="panel-body">
              <div class="statistic-box">
                <h2>
                  <span class="slight" style="margin-left: 70px">
                    <img
                      src="https://pharmacyv5.bdtask.com/pharmacare_v9.2_demo/my-assets/image/product.png"
                      height="40"
                      width="40"
                    />
                  </span>
                </h2>
                <div
                  class="small"
                  style="font-size: 17px; margin-top: 20px; text-align: center"
                >
                  <router-link to="/addUpdatedrugclass">إضافة صنف</router-link>
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
import Dashboard from "../../apis/Dashboard";
export default {
  data() {
    return {
      purchases: 0,
      invoices: 0,
      products: 0,
      suppliers: 0,
      customers: 0,
    };
  },

  computed: {},

  watch: {},
  created() {
    Dashboard.index().then((response) => {
      this.purchases = response.data.purchases;
      this.invoices = response.data.invoices;
      this.products = response.data.products;
      this.suppliers = response.data.suppliers;
      this.customers = response.data.customers;
    });
  },
  methods: {},
};
</script>

<style scoped>
.v-application .mb-2 {
  margin-top: 12px !important;
  align-self: flex-;
}
</style>