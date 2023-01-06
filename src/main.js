import Vue from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueBarcode from "vue-barcode";
import vueInternetChecker from 'vue-internet-checker';



if (localStorage.getItem("user")) {
    store.state.user = JSON.parse(localStorage.getItem("user"));
}
Vue.component("v-barcode", VueBarcode);
Vue.component('vue-internet-checker', vueInternetChecker);

Vue.config.productionTip = false;
Vue.use(require('vue-shortkey'))
new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");