<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
        :right="$vuetify.rtl"
        dark
        width="250"
      >
        <v-list dense>
          <v-list-item style="flex-direction: column">
            <v-list-item-avatar style="border-radius: initial">
              <img src="/logo.png" alt="" width="60" class="ma-3" />
            </v-list-item-avatar>

            <v-list-item-content style="font-weight: 100">
              <v-list-item-title style="text-align: center">
                نبراس للأنظمة المحاسبية
              </v-list-item-title>
              <v-list-item-subtitle style="text-align: center"
                >ثقتك الكاملة</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <drawer-items />
        </v-list>
        <v-list-item link @click="logout">
          <v-list-item-action>
            <v-icon color="red">mdi-power</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="red--text"
              >تسجيل الخروج</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-navigation-drawer>

      <v-app-bar
        app
        color="pink"
        dark
        height="50"
        v-shortkey="['alt', 'n']"
        @shortkey="newInvoice"
      >
        <v-app-bar-nav-icon
          v-shortkey="['alt', 'p']"
          @shortkey="newPurchase"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>صيدلية المجد</v-toolbar-title>

        <v-spacer></v-spacer>
        [
        <v-row style="font-size: 13px">
          <v-col style="text-align: center">
            <router-link to="/invoice" style="color: white">
              فاتورة مبيعات
            </router-link></v-col
          >
          <!--v-col style="text-align: center">
            <router-link to="/test-print" style="color: white">
              فاتورة طباعة
            </router-link></v-col
          -->
          <v-col style="text-align: center">
            <router-link to="/purchase" style="color: white">
              فاتورة مشتريات
            </router-link></v-col
          >
          <v-col style="text-align: center">
            <router-link to="/journal_entries" style="color: white">
              قيود اليومية
            </router-link></v-col
          >
        </v-row>
        ]

        <v-spacer></v-spacer>

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title
                @click="onclick(item.title)"
                class="hand-point"
              >
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <v-main>
        <div fluid style="margin: 0px; padding: 0px; width: 100%; height:100%">
          <v-row align="center" justify="center">
            <v-col class="text-center">
              <dashboard v-if="home" />
              <router-view v-else class="main-view" name="mainView" />
            </v-col>
          </v-row>
        </div>
      </v-main>
      <v-footer color="pink" app>
        <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
        <v-spacer></v-spacer>
        <div>
          <vue-internet-checker @status="status" @event="event" />
        </div>

        <div style="font-size: 13px; color: white">
          <span class="px-2">مرحبا: </span>
          {{ $store.state.user.name }}
        </div>
        <v-spacer></v-spacer>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import User from "../../apis/User";
import DrawerItems from "./components/DrawerItems.vue";
import Dashboard from "./dashboard.vue";
export default {
  props: {
    source: String,
  },
  components: {
    DrawerItems,
    Dashboard,
  },

  data: () => ({
    onLine: null,
    items: [
      { title: "تعديل الملف الشخصي", link: "/" },
      { title: "تسجيل الخروج", link: "logout" },
    ],
    drawer: true,
    currentUser: "",
    home: true,
  }),
  watch: {
    $route(to, from) {
      this.home = true;
      if (this.$route.fullPath != "/") this.home = false;
    },
  },
  methods: {
    status(ele) {
        console.log(ele);
        console.log('ele');
        this.onLine = ele;
      },
      event(ele) {
        console.log(ele);
      },
    newInvoice() {
      if (this.$route.name != "invoice") this.$router.push("/invoice");
    },
    newPurchase() {
      if (this.$route.name != "purchase") this.$router.push("/purchase");
    },
    onclick(item) {
      if (item == "تسجيل الخروج") this.logout();
    },
    getUser() {
      return User.getUser();
    },
    logout() {
      User.getUser()
        .then(() => {
          localStorage.removeItem("token");
          this.$router.push("login");
          //this.currentUser = response.data;
        })
        .catch((errors) => {
          this.errors = errors.response.data.errors;
        });
    },
  },
  created() {
    if (this.$route.fullPath != "/") this.home = false;
    if (localStorage.getItem("token")) {
      this.$store.state.user = JSON.parse(localStorage.getItem("user"));
      return;
    }
    this.$router.push("login");
  },
};
</script>

<style>
.hand-point {
  cursor: pointer;
}
.v-list-item:after {
  content: none !important;
}
</style>