 <template>
  <div>
    <add-update-person
      :route="route"
      :dialog="add_update_person_dialog"
      :person="passed_person"
      :operation="operation"
      :cities="cities"
      @addUpdatePerson="addpersonToList"
      @changeCountry="loadCities"
      @close_person_dialog="close_person_dialog"
    ></add-update-person>

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
      :items="people"
      :options.sync="options"
      :server-items-length="people_total"
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
                    @click.stop="AddUpdatePerson('', 'add')"
                    >إضافة {{ persona }}</v-btn
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
              v-model="search.is_person_active"
              :items="person_status"
              item-text="status"
              item-value="is_person_active"
              label="الحالة"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" lg="6">
            <v-row>
              <v-col cols="2">
                <v-btn elevation color="primary" @click="findpeople"
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
          person_status.find(
            (elem) => elem.is_person_active == item.is_person_active
          )["status"]
        }}
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn
          icon
          @click.stop="AddUpdatePerson(item, 'update')"
          v-show="!is_default_person(item)"
        >
          <v-icon small class="outlined font-size-12">mdi-pencil</v-icon>
        </v-btn>
        <router-link :to="route + '/' + item.id"
          ><v-icon small>mdi-eye</v-icon></router-link
        >

        <v-btn
          icon
          @click.stop="deleteperson(item, 'update')"
          v-show="!is_default_person(item)"
        >
          <v-icon small class="outlined font-size-12">mdi-delete</v-icon>
        </v-btn>
      </template>
      <template v-slot:no-data>لا يوجد بيانات !</template>
    </v-data-table>
  </div>
</template>

<script>
import Person from "../../../apis/Person";
import Country from "../../../apis/Country";
import personInfo from "./person-info.vue";
import AddUpdatePerson from "./AddUpdatePerson.vue";
export default {
  components: {
    personInfo,
    AddUpdatePerson,
  },
  data() {
    return {
      route: "",
      person: "supplier",
      type_id: 1, //1 person
      loading: false,
      dialog: false,
      person_status: [
        { is_person_active: 1, status: "نشط" },
        { is_person_active: 0, status: "غير نشط" },
      ],
      cities: [],
      //-------etched data-----------------f
      operation: "add",
      people: [],
      add_update_person_dialog: false,
      passed_person: "",

      //-----------------------------------//
      person_info_person: "",
      person_info_dialog: false,

      search: {
        company_name: "",
        name: "",
        phone: "",
        is_person_active: "",
        type_id: this.type_id,
      },
      options: {},
      status: "salam",

      title: "إدارة الموردين",
      //---
      people_total: 20,
      loading: true,

      headers: [
        {
          text: "م",
          align: "center",
          width: "5",
          sortable: false,
          value: "id",
        },
        { text: "اسم الشركة", align: "center", value: "company_name" },
        {
          text: "جهة الاتصال",
          align: "center",
          sortable: false,
          value: "name",
        },
        { text: "الرصيد", align: "center", value: "balance" },
        { text: "متأخرات", align: "center", value: "arrears" },
        { text: "الحالة ", align: "center", value: "status" },
        { text: "لتحكم ", align: "center", value: "actions" },
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
  //     this.people = data.response;
  //   });
  // },

  methods: {
    is_default_person(item) {
      if (item.name == "افتراضي") return true;
      return false;
    },
    dataProcessing(response) {
      let data = response.data.people.data;
      let helper = [];
      let elper = [];
      let lper = [];
      let arrears01 = [];
      let arrears02 = [];
      //let balance = [];
      if (data) {
        data.forEach((element) => {
          if (this.route == "suppliers")
            element.is_person_active = element.is_supplier_active;

          if (this.route == "customers")
            element.is_person_active = element.is_customer_active;

          if (this.route == "employee")
            element.is_person_active = element.is_employee_active;

          if (this.route == "users")
            element.is_person_active = element.is_user_active;

          element.arrears = 0;
          //amount null -> 0
          if (!element.supdoc_id) element.amount = 0;
          if (!element.bill_id) {
            element.bill_paid_amount = 0;
            element.bill_total_amount = 0;
          }

          // no transactions yet!
          if (!element.trans_id) {
            element.debit = 0;
            element.credit = 0;
            element.deletable = true;
            elper.push(element);
            return;
          }

          //الغاء التكرار
          if (element.supdoc_id) {
            if (!elper.find((elem) => element.bill_id == elem.bill_id)) {
              
              elper.push(element);
            } else {
              elper[
                elper.findIndex((elem) => element.bill_id == elem.bill_id)
              ].amount += element.amount;
            }
            return;
          }

          elper.push(element);
        });

        
        //تجميع الفواتير

        
        
        elper.forEach((element) => {
          if (!element.trans_id) {
            lper.push(element);
            return;
          }
          if (!element.bill_id) {
            lper.push(element);
            return;
          }
          if (!lper.find((elem) => element.bill_id == elem.bill_id)) {
            lper.push(element);
            return;
          }
          let index = lper.findIndex((elem) => elem.bill_id == element.bill_id);
          if (element.debit != -1) lper[index].debit += element.debit;
          lper[index].credit += element.credit;
        });

        
        
        

        lper.forEach((element) => {
          if (!element.trans_id) {
            helper.push(element);
            return;
          }
          if (!helper.find((elem) => element.id == elem.id)) {
            helper.push(element);
            return;
          }
          let index = helper.findIndex((elem) => elem.id == element.id);

          if (element.debit != -1) helper[index].debit += element.debit;
          helper[index].credit += element.credit;

          helper[index].bill_total_amount += element.bill_total_amount;
          helper[index].bill_paid_amount += element.bill_paid_amount;
          helper[index].arrears =
            helper[index].bill_total_amount -
            helper[index].bill_paid_amount -
            element.amount;
        });
      }

      this.people = helper;
      

      this.people_total = response.data.people.total;
      this.person_info_person = response.data.people.data[0];
      
      
    },

    addpersonToList(person) {
      

      person.credit = 0;
      person.debit = 0;
      person.arrears = 0;
      person.is_person_active = 1;
      person.deletable = true;
      if (this.operation == "add") this.people.push(person);
      else if (this.operation == "update") {
        // this.people.splice(
        //   this.people.indexOf((elem) => elem.id == person.id),
        //   1,
        //   person
        // );
      }
      this.add_update_person_dialog = false;
    },
    close_person_dialog() {
      this.add_update_person_dialog = false;
    },
    findpeople() {
      this.getDataFromApi().then((response) => {
        this.dataProcessing(response);
      });
    },
    searchReset() {
      this.search = {
        company_name: "",
        name: "",
        phone: "",
        is_person_active: "",
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

    AddUpdatePerson(item, operation) {
      this.operation = operation;
      if (operation == "add") {
        this.passed_person = {
          type_id: this.type_id,
        };
      }
      if (operation == "update") {
        this.loadCities(item.country_id);

        this.passed_person = item;
        
        
      }

      this.add_update_person_dialog = true;
    },

    show_person_dialog(item) {
      this.person_info_dialog = true;
      
      this.person_info_person = item;
    },
    deleteperson(item) {
      if (!item.deletable) {
        this.dialog = true;
        return;
      }

      this.loading = true;
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      //let search = this.search.trim().toLowerCase();
      let person_id = item.id;
      Person.delete({
        person_id,
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

        Person.get({
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

      
      

      if (this.route == "suppliers") {
        this.type_id = 1;

        this.search.type_id = 1; // سند مورد
        this.company_name = "اسم المورد";
        this.title = "قائمة الموردين";
        this.person_type = "supplier";
        this.person_info = "معلومات المورد";
        this.persona = "مورد";
      }
      if (this.route == "customers") {
        this.type_id = 2;
        this.search.type_id = 2; // سند من عميل
        this.company_name = "اسم العميل";
        this.title = "قائمة العملاء";
        this.person_type = "customer";
        this.person_info = "معلومات العميل";
        this.persona = "عميل";
      }
    },
  },

  created() {
    this.route = this.$route.fullPath.substr(
      this.$route.fullPath.lastIndexOf("/") + 1
    );

    this.createPage(this.$route, "new");
  },
};
</script>