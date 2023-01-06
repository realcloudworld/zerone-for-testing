 <template>
  <div>
    <product-info
      :dialog="product_info_dialog"
      :product="product_info_product"
      :prdct_forms="prdct_forms"
      :prdct_taxes="prdct_taxes"
      :prdct_types="prdct_types"
      @close_product_dialog="close_product_dialog"
    >
      <span slot="title"> معلومات الصنف</span>
    </product-info>
    <v-data-table
      :headers="headers"
      :items="products"
      :options.sync="options"
      :server-items-length="products_total"
      :loading="loading"
      class="elevation-1"
      :key="products.id"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>

          <v-spacer></v-spacer>
          <form id="ProductsForm" ref="form" @submit.prevent="submit">
            <v-row>
              <v-col
                ><label class="v-btn theme--light v-size--default success">
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

          <v-col style="text-align: end; font-size: 13px">
            <a @click="$router.push('/dashboard')" style="color: black">
              اغلاق
              <v-icon> mdi-close-box </v-icon>
            </a>

            <a @click="$router.back()" style="color: black">
              رجوع
              <v-icon> mdi-arrow-left-bold </v-icon>
            </a>
          </v-col>
        </v-toolbar>
        <v-row justify="start">
          <v-col style="text-align: end">
            <v-btn elevation color="primary" to="/stocktakes"
              >جرد المخزون</v-btn
            >

            <v-btn elevation color="primary" to="/groups">المجموعات</v-btn>

            <v-btn elevation color="primary" to="/types">الأنواع</v-btn>

            <v-btn elevation color="primary" to="/product"
              >إضافة صنف جديد</v-btn
            >
          </v-col>
        </v-row>

        <v-text-field
          v-model="search"
          label="البحث بالاسم أو الباركود"
          class="mx-4"
        ></v-text-field>
      </template>

      <template v-slot:item.is_active="{ item }">
        {{ item.is_active == 1 ? "نشط" : "غير نشط" }}
      </template>
      <template v-slot:item.actions="{ item }">
        <router-link :to="{ name: 'product', params: { product: item } }"
          ><v-icon small>mdi-pencil</v-icon></router-link
        >
        <a @click="barcodePrinting(item.barcode)"
          ><v-icon small>mdi-printer</v-icon></a
        >
        <v-btn icon @click.stop="show_product_dialog(item)">
          <v-icon small class="outlined font-size-12">mdi-eye</v-icon>
        </v-btn>

        <v-icon small @click="deleteProduct(item)">mdi-delete</v-icon>
      </template>
      <template v-slot:no-data>لا يوجد بيانات !</template>
    </v-data-table>
  </div>
</template>

<script>
import Product from "../../../apis/Product";
import ProductInfo from "./product-info.vue";
export default {
  components: {
    ProductInfo,
  },
  data() {
    return {
      upload: false,
      file_name: "اضغط هنا لاستيراد المنتجات",

      //-------etched data-----------------f
      products: [],
      prdct_types: [],
      prdct_forms: [],
      prdct_taxes: [],

      //-----------------------------------//
      product_info_product: "",
      product_info_dialog: false,
      search: "",
      status: "salam",
      title: "الأصناف والمنتجات",
      //---
      products_total: 20,
      loading: true,
      options: {},
      headers: [
        {
          text: "م",
          align: "center",
          width: "5",
          sortable: false,
          value: "id",
        },
        { text: "اسم الصنف", align: "center", value: "ar_name" },
        {
          text: "الباركود",
          align: "center",
          sortable: false,
          value: "barcode",
        },
        {
          text: "الكمية المخزونة",
          align: "center",
          value: "quantity_in_minor_unit",
        },
        { text: "الخصم", align: "center", value: "selling_discount" },
        { text: "الحالة", align: "center", value: "is_active" },
        { text: "التحكم ", align: "center", value: "actions" },
      ],
    };
  },
  computed: {
    params(nv) {
      return {
        ...this.options,
        query: this.search,
      };
    },
  },
  created() {},
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.prevRoute = from;
    });
  },
  watch: {
    params: {
      handler() {
        this.getDataFromApi().then((response) => {
          this.products = response.data.products.data;
          this.prdct_types = response.data.prdct_types;
          this.prdct_forms = response.data.prdct_forms;
          this.prdct_taxes = response.data.prdct_taxes;
          this.products_total = response.data.products.total;
          this.product_info_product = response.data.products.data[0];
        });
      },
      deep: true,
    },
  },
  // mounted() {
  //   this.getDataFromApi().then((data) => {
  //     this.products = data.response;
  //   });
  // },
  methods: {
    submit() {
      if (this.file_name == "") return;

      this.upload = true;

      let products = new FormData(this.$refs.form);
      var form = new FormData(document.getElementById("ProductsForm"));
      console.log(form);
      Product.upload(products).then((response) => {
        this.options = {};
        this.upload = false;
      });
      //this.$refs.form.$el.submit();
    },
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
    barcodePrinting(barcode) {
      // localStorage.setItem(
      //   "bacode_settings",
      //   JSON.stringify({
      //     barcode: 1212231,
      //     quantity: 10,
      //     width: 2,
      //     height: 60,
      //   })
      // );
      this.$router.push("/barcode_printing/" + barcode);
      //window.open("/barcode_printing", "newwindow", "width=800,height=800");
    },
    close_product_dialog() {
      this.product_info_dialog = false;
    },
    show_product_dialog(item) {
      //get info

      //get info

      this.product_info_product = item;

      this.product_info_dialog = true;
    },
    deleteProduct(item) {
      this.loading = true;
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      let search = this.search.trim().toLowerCase();
      let id = item.id;
      Product.delete({ id, page, itemsPerPage, search }).then((response) => {
        this.loading = false;
        this.products = response.data.products.data;
        this.products_total = response.data.products.total;
      });
    },
    getDataFromApi() {
      this.loading = true;
      return new Promise((resolve, reject) => {
        const { sortBy, sortDesc, page, itemsPerPage } = this.options;
        let search = this.search.trim().toLowerCase();

        Product.get({ page, itemsPerPage, search }).then((response) => {
          this.loading = false;
          resolve(response);
        });
      });
    },
  },
};
</script>

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>