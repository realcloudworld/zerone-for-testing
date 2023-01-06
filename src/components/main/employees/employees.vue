 <template>
  <div>
    <add-update-employee
      :route="route"
      :dialog="add_update_employee_dialog"
      :employee="passed_employee"
      :operation="operation"
      :cities="cities"
      @addUpdateEmployee="addemployeeToList"
      @changeCountry="loadCities"
      @close_employee_dialog="close_employee_dialog"
    ></add-update-employee>

    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">تنبيه!</span>
        </v-card-title>
        <v-card-text class="text--primary">
          لايمكن حذف هذا الموظف لوجود تعاملات مالية معه
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
      :items="employees"
      :options.sync="options"
      :server-items-length="employees_total"
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
                    @click.stop="AddUpdateEmployee('', 'add')"
                    >إضافة {{ employeea }}</v-btn
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
              :items="employee_status"
              item-text="status"
              item-value="is_person_active"
              label="الحالة"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" lg="6">
            <v-row>
              <v-col cols="2">
                <v-btn elevation color="primary" @click="findemployees"
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
          employee_status.find(
            (elem) => elem.is_person_active == item.is_person_active
          )["status"]
        }}
      </template>
      <template v-slot:item.actions="{ item }">
        <v-btn
          icon
          @click.stop="AddUpdateEmployee(item, 'update')"
          v-show="!is_default_employee(item)"
        >
          <v-icon small class="outlined font-size-12">mdi-pencil</v-icon>
        </v-btn>
        <router-link :to="route + '/' + item.id"
          ><v-icon small>mdi-eye</v-icon></router-link
        >

        <v-btn
          icon
          @click.stop="deleteemployee(item, 'update')"
          v-show="!is_default_employee(item)"
        >
          <v-icon small class="outlined font-size-12">mdi-delete</v-icon>
        </v-btn>
      </template>
      <template v-slot:no-data>لا يوجد بيانات !</template>
    </v-data-table>
  </div>
</template>

<script>
import Employee from "../../../apis/Person";
import Country from "../../../apis/Country";
import employeeInfo from "./employee-info";
import AddUpdateEmployee from "./AddUpdateEmployee.vue";
export default {
  components: {
    employeeInfo,
    AddUpdateEmployee,
  },
  data() {
    return {
      route: "",
      employee: "employee",
      type_id: 3, //1 employee
      loading: false,
      dialog: false,
      employee_status: [
        { is_person_active: 1, status: "نشط" },
        { is_person_active: 0, status: "غير نشط" },
      ],
      cities: [],
      //-------etched data-----------------f
      operation: "add",
      employees: [],
      add_update_employee_dialog: false,
      passed_employee: "",

      //-----------------------------------//
      employee_info_employee: "",
      employee_info_dialog: false,

      search: {
        company_name: "",
        name: "",
        phone: "",
        is_person_active: "",
        type_id: this.type_id,
      },
      options: {},
      status: "salam",

      title: "إدارة الموظفين",
      //---
      employees_total: 20,
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
  //     this.employees = data.response;
  //   });
  // },

  methods: {
    is_default_employee(item) {
      if (item.name == "افتراضي") return true;
      return false;
    },
    dataProcessing(response) {
      let data = response.data.people.data;
      if (data) {
        data.forEach((element) => {
          
            element.is_person_active = element.is_employee_active;
        });
      }

      this.employees = data;
    },

    addemployeeToList(employee) {
      employee.credit = 0;
      employee.debit = 0;
      employee.arrears = 0;
      employee.is_person_active = 1;
      employee.deletable = true;
      if (this.operation == "add") this.employees.push(employee);
      else if (this.operation == "update") {
        // this.employees.splice(
        //   this.employees.indexOf((elem) => elem.id == employee.id),
        //   1,
        //   employee
        // );
      }
      this.add_update_employee_dialog = false;
    },
    close_employee_dialog() {
      this.add_update_employee_dialog = false;
    },
    findemployees() {
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

    AddUpdateEmployee(item, operation) {
      this.operation = operation;
      if (operation == "add") {
        this.passed_employee = {
          type_id: this.type_id,
        };
      }
      if (operation == "update") {
        this.loadCities(item.country_id);

        this.passed_employee = item;
      }

      this.add_update_employee_dialog = true;
    },

    show_employee_dialog(item) {
      this.employee_info_dialog = true;

      this.employee_info_employee = item;
    },
    deleteemployee(item) {
      if (!item.deletable) {
        this.dialog = true;
        return;
      }

      this.loading = true;
      const { sortBy, sortDesc, page, itemsPerPage } = this.options;
      //let search = this.search.trim().toLowerCase();
      let employee_id = item.id;
      Employee.delete({
        employee_id,
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

        Employee.get({
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
  },

  created() {
    this.type_id = 3;

    this.search.type_id = 3; // سند موظف
    this.company_name = "اسم الموظفين";
    this.title = "قائمة الموظفين";
    this.employee_type = "supplier";
    this.employee_info = "معلومات الموظف";
    this.employeea = "موظف";
  },
};
</script>