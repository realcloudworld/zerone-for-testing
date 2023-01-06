<template>
  <div>
    <div class="window-contol">
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
    </div>

    <v-toolbar flat color="white">
      <div class="window-contol">
        <v-row style="font-size: 14px">
          <v-col cols="2">
            <v-toolbar-title>اعدادات الطباعة </v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
          </v-col>
          <v-col cols="3">
            <v-text-field
              min="1"
              prefix=" عدد الباركودات | "
              type="number"
              autocomplete="off"
              v-model.number="barcode_settings.quantity"
              outlined
              value="1"
              hide-details
            >
            </v-text-field>
          </v-col>

          <v-col cols="3">
            <v-text-field
              min="1"
              prefix=" ارتفاع الباركود | "
              type="number"
              autocomplete="off"
              v-model.number="barcode_settings.height"
              outlined
              value="1"
              hide-details
            >
            </v-text-field
          ></v-col>

          <v-col cols="2">
            <v-text-field
              min="1"
              prefix=" عرض الباركود | "
              type="number"
              autocomplete="off"
              v-model.number="barcode_settings.width"
              outlined
              value="1"
              hide-details
            >
            </v-text-field
          ></v-col>
          <v-col cols="2" style="padding-top:18px;">
           <a @click="print" style="color: black">
             <span style=" color: blue;">

          طباعة
             </span>
          <v-icon color="blue"> mdi-printer </v-icon>
        </a>
           </v-col>
        </v-row>
      </div>
    </v-toolbar>
    <div class="page content ar">
      <v-row class="justify-space-between">
        <v-col
          style="float: right"
          v-for="x in barcode_settings.quantity"
          :key="x"
        >
          <v-barcode
            :value="$route.params.barcode"
            :width="barcode_settings.width"
            :height="barcode_settings.height"
            style="direction: ltr"
            displayValue
            font-size="13"
            format="EAN13"
            
          >
          </v-barcode>
        </v-col>
        <div style="clear: both"></div>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      barcode_settings: {
        barcode: 1212231,
        quantity: 12,
        width: 0.9,
        height: 40,
      },
    };
  },
  methods: {
    print() {
      window.print();
    },
  },
  created() {
    
    //  this.barcode_settings = JSON.parse(localStorage.getItem("bacode_settings"));
  },
};
</script>

<style>
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
@media print {
  .window-contol {
    display: none;
  }
}
</style>