<template>
  <div>
    <div>
      salam
    </div>
    <div>
      <v-barcode
        :value="product.barcode"
        width="2"
        height="60"
        style="direction: ltr"
        displayValue
        format="EAN13"
      >
      </v-barcode>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: { barcode: "29390198981" },
    };
  },
};
</script>

<style>
</style>