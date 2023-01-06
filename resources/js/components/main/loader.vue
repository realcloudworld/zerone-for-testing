<template>
  <div class="vld-parent">
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :on-cancel="onCancel"
      :is-full-page="true"
      blur = ''
      :opacity = "loaderOpacity"
      
    ></loading>
    
  </div>
</template>
 
<script>
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  props:[
    'isLoading',
  ],
  data() {
    return {
      loaderOpacity:0.5,
      fullPage: true,
    };
  },
  components: {
    Loading,
  },
  methods: {
    
    onCancel() {
      console.log("User cancelled the loader.");
    },
  },
};
</script> 