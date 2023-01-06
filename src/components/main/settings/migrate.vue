<template>
  <div>
    <v-row>
      <v-col style="height: 10px">
        <v-progress-linear
          v-model="value"
          :active="show"
          :indeterminate="query"
          :query="true"
        ></v-progress-linear>
      </v-col>
    </v-row>

    <div style="padding: 50px; color:red" v-show="reset_now">
      انتظر من فضلكـ.. يجري إعادة ضبط النظام هذه العملية ستحذف كل العمليات
      والمعاملات والفواتير السابقة
    </div>
    <div style="padding: 50px; color:red" v-show="!reset_now">
        إعادة ضبط النظام.. 
        <br>
        هذه العملية ستؤدي إلى حذف كل العمليات والمعاملات والفواتير السابقة
    </div>


    <v-btn @click="reset" v-show="!reset_now">
      حذف كل شيء وإعادة ضبط النظام
      
    </v-btn>
  </div>
</template>

<script>
import Setting from "../../../apis/Setting";

export default {
  data() {
    return {
      reset_now:false,
      value: 0,
      query: false,
      show: false,
    };
  },
  methods: {
    reset() {

      this.reset_now = true,
      this.query = true;
      this.show = true;
      Setting.migrate().then((response) => {
        this.query = false;
        this.show = false;
        this.reset_now = false,
        this.$router.push("/login");
      });
    },
  },
  created() {},
};
</script>

<style>
</style>