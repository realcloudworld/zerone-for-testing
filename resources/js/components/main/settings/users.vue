 <template>
  <div>
    <add-update-user
      :route="route"
      :dialog="add_update_user_dialog"
      :user="passed_user"
      :operation="operation"
      :cities="cities"
      @addUpdateUser="adduserToList"
      @changeCountry="loadCities"
      @close_user_dialog="close_user_dialog"
    ></add-update-user>

    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">تنبيه!</span>
        </v-card-title>
        <v-card-text class="text--primary">
          لايمكن حذف هذا المورد لوجود تعاملات مالية معه
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            إلغاء
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-data-table
      :headers="headers"
      :items="users"
      :options.sync="options"
      :server-items-length="users_total"
      :loading="loading"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-row class="py-2">
            <v-col>
              <v-row>
                <v-col
                  ><v-toolbar-title>{{ title }}</v-toolbar-title></v-col
                >
                <v-col
                  ><v-divider class="mx-4" inset vertical></v-divider
                ></v-col>
                <v-col
                  ><v-btn
                    elevation
                    color="primary"
                    @click.stop="AddUpdateUser('', 'add')"
                    >إضافة {{ usera }}</v-btn
                  ></v-col
                >
              </v-row>
            </v-col>

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
          </v-row>
        </v-toolbar>

        <v-row class="py-2">
          <v-col cols="12" lg="3">
            <v-text-field
              v-model="search.company_name"
              label="اسم الشركة"
              class="mx-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="3">
            <v-text-field
              v-model="search.name"
              label="جهة الاتصال"
              class="mx-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="3">
            <v-text-field
              v-model="search.phone"
              label="رقم الاتصال"
              class="mx-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="3">
            <v-autocomplete
              v-model="search.is_user_active"
              :items="user_status"
              item-text="status"
              item-value="is_user_active"
              label="الحالة"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" lg="6">
            <v-row>
              <v-col cols="2">
                <v-btn elevation color="primary" @click="findusers"
                  >البحث</v-btn
                >
              </v-col>
              <v-col cols="2">
                <v-btn elevation color="primary" @click.stop="searchReset"
                  >إعادة تعيين</v-btn
                >
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </template>
      <template v-slot:item.name="{ item }">
        {{ item.name }}
      </template>

      <template v-slot:item.balance="{ item }">
        {{ (item.credit - item.debit).toFixed(2) }}
      </template>
      <template v-slot:item.status="{ item }">
        {{
          user_status.find(
            (elem) => elem.is_user_active == item.is_user_active
          )["status"]
        }}
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn
          icon
          @click.stop="AddUpdateUser(item, 'update')"
          v-show="!is_default_user(item)"
        >
          <v-icon small class="outlined font-size-12">mdi-pencil</v-icon>
        </v-btn>
        <router-link :to="route + '/' + item.id"
          ><v-icon small>mdi-eye</v-icon></router-link
        >

        <v-btn
          icon
          @click.stop="deleteuser(item, 'update')"
          v-show="!is_default_user(item)"
        >
          <v-icon small class="outlined font-size-12">mdi-delete</v-icon>
        </v-btn>
      </template>
      <template v-slot:no-data>لا يوجد بيانات !</template>
    </v-data-table>
  </div>
</template>

<script>
import User from "../../../apis/Person";
import Country from "../../../apis/Country";
import userInfo from "./user-info";
import AddUpdateUser from "./AddUpdateUser.vue";
export default {
  components: {
    userInfo,
    AddUpdateUser,
  },
  data() {
    return {
      route: "",
      user: "user",
      type_id: 4, //1 user
      loading: false,
      dialog: false,
      user_status: [
        { is_user_active: 1, status: "نشط" },
        { is_user_active: 0, status: "غير نشط" },
      ],
      cities: [],
      //-------etched data-----------------f
      operation: "add",
      users: [],
      add_update_user_dialog: false,
      passed_user: "",

      //-----------------------------------//
      user_info_user: "",
      user_info_dialog: false,

      search: {
        company_name: "",
        name: "",
        phone: "",
        is_user_active: "",
        type_id: this.type_id,
      },
      options: {},
      status: "salam",

      title: "إدارة الموردين",
      //---
      users_total: 20,
      loading: true,

      headers: [
        {
          text: "م",
          align: "center",
          width: "5",
          sortable: false,
          value: "id",
        },
        {
          text: "الاسم",
          align: "center",
          sortable: false,
          value: "name",
        },
        { text: "البريد", align: "center", value: "email" },
        { text: "رقم الاتصال", align: "center", value: "phone01" },
        { text: "	الدور الوظيفي", align: "center", value: "role" },
        { text: "الحالة ", align: "center", value: "status" },

        { text: "التحكم ", align: "center", value: "actions" },
      ],
    };
  },
  computed: {
    params(nv) {
      return {
        ...this.options,
        //query: this.search,
      };
    },
  },
  watch: {
    params: {
      handler() {
        this.getDataFromApi().then((response) => {
          this.dataProcessing(response);
        });
      },
      deep: true,
    },
    $route(to, from) {
      this.createPage(to, "old");
      this.getDataFromApi().then((response) => {
        this.dataProcessing(response);
      });
    },
  },
  // mounted() {
  //   this.getDataFromApi().then((data) => {
  //     this.users = data.response;
  //   });
  // },

  methods: {
    is_default_user(item) {
      if (item.name == "افتراضي") return true;
      return false;
    },
    dataProcessing(response) {
      console.log(response);
      alert(1)
      this.users = response.data;
    },

    adduserToList(user) {
      console.log("user");

      user.credit = 0;
      user.debit = 0;
      user.arrears = 0;
      user.is_user_active = 1;
      user.deletable = true;
      if (this.operation == "add") this.users.push(user);
      else if (this.operation == "update") {
        // this.users.splice(
        //   this.users.indexOf((elem) => elem.id == user.id),
        //   1,
        //   user
        // );
      }
      this.add_update_user_dialog = false;
    },
    close_user_dialog() {
      this.add_update_user_dialog = false;
    },
    findusers() {
      this.getDataFromApi().then((response) => {
        this.dataProcessing(response);
      });
    },
    searchReset() {
      this.search = {
        company_name: "",
        name: "",
        phone: "",
        is_user_active: "",
        type_id: this.type_id,
      };
      this.getDataFromApi().then((response) => {
        this.dataProcessing(response);
      });
    },
    loadCities(country_id) {
      this.cities = [];
      Country.loadCities(country_id).then(
        (response) => (this.cities = response.data.cities)
      );
    },

    AddUpdateUser(item, operation) {
      this.operation = operation;
      if (operation == "add") {
        this.passed_user = {
          type_id: this.type_id,
        };
      }
      if (operation == "update") {
        this.loadCities(item.country_id);

        this.passed_user = item;
        console.log("item", item);
        console.log("item", this.cities);
      }

      this.add_update_user_dialog = true;
    },

    show_user_dialog(item) {
      this.user_info_dialog = true;
      console.log(item);
      this.user_info_user = item;
    },
    deleteuser(item) {
      if (!item.deletable) {
        this.dialog = true;
        return;
      }

      this.loading = true;
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      //let search = this.search.trim().toLowerCase();
      let user_id = item.id;
      User.delete({
        user_id,
        page,
        itemsPerPage,
        search: this.search,
      }).then((response) => {
        this.loading = false;

        this.dataProcessing(response);
      });
    },
    getDataFromApi() {
      this.loading = true;
      return new Promise((resolve, reject) => {
        const { sortBy, sortDesc, page, itemsPerPage } = this.options;
        // let search = this.search.trim().toLowerCase();

        User.get({
          type_id: this.type_id,
          page,
          itemsPerPage,
          search: this.search,
        }).then((response) => {
          this.loading = false;
          resolve(response);
        });
      });
    },

    createPage(to, status) {
      this.route = to.fullPath.substr(
        this.$route.fullPath.lastIndexOf("/") + 1
      );

      console.log(this.route);
      console.log("to");

      if (this.route == "suppliers") {
        this.type_id = 1;

        this.search.type_id = 1; // سند مورد
        this.company_name = "اسم المورد";
        this.title = "قائمة الموردين";
        this.user_type = "supplier";
        this.user_info = "معلومات المورد";
        this.usera = "مورد";
      }
      if (this.route == "customers") {
        this.type_id = 2;
        this.search.type_id = 2; // سند من عميل
        this.company_name = "اسم العميل";
        this.title = "قائمة العملاء";
        this.user_type = "customer";
        this.user_info = "معلومات العميل";
        this.usera = "عميل";
      }
    },
  },

  created() {
    this.type_id = 4;

    this.search.type_id = 4; // سند مورد
    this.company_name = "اسم المورد";
    this.title = "قائمة الموردين";
    this.user_type = "supplier";
    this.user_info = "معلومات المورد";
    this.usera = "مورد";
  },
};
</script>