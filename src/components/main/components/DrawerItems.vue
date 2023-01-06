<template>
  <v-list dark>
    <v-list-item color="black--text" to="/" class="text-right align-self-start">
      <v-list-item-icon>
        <v-icon>mdi-view-dashboard</v-icon>
      </v-list-item-icon>
      <v-list-item-title>لوحة التحكم</v-list-item-title>
    </v-list-item>

    <v-list-group
      :value="which_expand[main_item.name]"
      v-for="main_item in main_menu"
      :key="main_item.name"
      :prepend-icon="main_item.icon"
    >
      <template v-slot:activator>
        <v-list-item-title>
          <router-link
            v-if="main_item.navigateable"
            style="color: white"
            to="/opening_balances"
          >
            {{ main_item.name }}
          </router-link>
          <div v-else>
            {{ main_item.name }}
          </div>
        </v-list-item-title>
      </template>
      <v-list-item
        v-for="sub_item in main_item.sub_menu"
        :to="sub_item.link"
        :key="sub_item.name"
        link
        exact
        
      >
        <v-list-item-icon>
          <v-icon>{{
            sub_item.icon != "" ? sub_item.icon : "mdi-view-dashboard"
          }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title v-text="sub_item.name"></v-list-item-title>
      </v-list-item>
    </v-list-group>
    <v-list-item
      color="black--text"
      to="/reports"
      class="text-right align-self-start"
    >
      <v-list-item-icon>
        <v-icon>mdi-view-dashboard</v-icon>
      </v-list-item-icon>
      <v-list-item-title>التقارير</v-list-item-title>
    </v-list-item>
    <v-list-group
      v-for="main_item in under_menu"
      :key="main_item.name"
      :prepend-icon="main_item.icon"
    >
      <template v-slot:activator>
        <v-list-item-title>{{ main_item.name }} </v-list-item-title>
      </template>
      <v-list-item
        v-for="sub_item in main_item.sub_menu"
        :to="sub_item.link"
        :key="sub_item.name"
        link
        exact
      >
        <v-list-item-icon>
          <v-icon>{{
            sub_item.icon != "" ? sub_item.icon : "mdi-view-dashboard"
          }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title v-text="sub_item.name"></v-list-item-title>
      </v-list-item>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    which_expand: {},
    main_menu: [
       {
        name: "المشتريات",
        icon: "mdi-shopping",
        sub_menu: [
          {
            name: "الموردون",
            link: "/suppliers",
            icon: "mdi-account-supervisor",
          },
          {
            name: "استيراد فواتير",
            link: "/import_purchases",
            icon: "mdi-account-supervisor",
          },
          {
            name: "فاتورة مشتريات",
            link: "/purchase",
            icon: "mdi-receipt",
          },
          {
            name: "مرتجع مشتريات",
            link: "/purchase_return",
            icon: "mdi-file-replace-outline",
          },
          {
            name: "فواتير المشتريات والمرتجع",
            link: "/purchases",
            icon: "mdi-file-multiple-outline",
          },

          // {
          //   name: "أوامر الشراء",
          //   link: "/orders",
          //   icon: "",
          // },

          {
            name: "سندات الموردين",
            link: "/receipts/supplier",
            icon: "mdi-file-document-multiple-outline",
          },
        ],
      },
      {
        name: "المبيعات",
        icon: "mdi-cart",
        sub_menu: [
          {
            name: "العملاء",
            link: "/customers",
            icon: "mdi-account-multiple-outline",
          },
          {
            name: "فاتورة مبيعات",
            link: "/invoice",
            icon: "mdi-text-box",
          },
          {
            name: "مرتجع مشتريات",
            link: "/purchase_return",
            icon: "mdi-file-replace-outline",
          },
          {
            name: "فواتير المبيعات والمرتجع",
            link: "/invoices",
            icon: "mdi-file-refresh",
          },
          {
            name: "سندات العملاء",
            link: "/receipts/customer",
            icon: "mdi-text-box-multiple-outline",
          },
        ],
      },

     
      
      {
        name: "الأصناف والخدمات",
        icon: "mdi-food",
        sub_menu: [
          {
            name: "الوحدات",
            link: "/units",
            icon: "mdi-unity",
          },
          // {
          //   name: " الأنواع",
          //   link: "/types",
          //   icon: "",
          // },
          {
            name: "المجموعات",
            link: "/groups",
            icon: "mdi-group",
          },
          {
            name: "إضافة صنف",
            link: "/product",
            icon: "mdi-expand-all-outline",
          },
          {
            name: "إدارة الأصناف",
            link: "/products",
            icon: "mdi-manjaro",
          },
          
          {
            name: "الجرد المخزني",
            link: "/stocktakes",
            icon: "mdi-store",
          },
        ],
      },
      {
        name: "الرواتب والموظفين",
        icon: "mdi-cash-multiple",
        sub_menu: [
          {
            name: "قائمة الموظفين",
            link: "/employees",
            icon: "mdi-account-group",
          },
          // {
          //   name: " الأنواع",
          //   link: "/types",
          //   icon: "",
          // },
          {
            name: "مسير الرواتب",
            link: "/forms",
            icon: "mdi-table-account",
          },
          {
            name: "السلف",
            link: "/product",
            icon: "mdi-cash-fast",
          },
          {
            name: "المكافآت",
            link: "/products",
            icon: "mdi-gift",
          },
          
          {
            name: "الخصومات",
            link: "/stocktakes",
            icon: "mdi-emoticon-sad-outline",
          },
        ],
      },
      {
        name: "المحاسبة",
        icon: "mdi-cash-register",
        sub_menu: [
          {
            name: "قيود حركة الأموال",
            link: "/money_transactions",
            icon: "mdi-cash-refund",
          },
          {
            name: "حركة أموال",
            link: "/money_move",
            icon: "mdi-cash-fast",
          },
          {
            name: "إضافة رأس مال",
            link: "/additional_money",
            icon: "mdi-city",
          },
          {
            name: "إهلاك أصل ثابت",
            link: "/fixed_asset_depreciation",
            icon: "mdi-cassette",
          },
          {
            name: "سحب المالك",
            link: "/owner_withdraw",
            icon: "mdi-tie",
          },
          {
            name: "توزيع أرباح",
            link: "/distribute_profits",
            icon: "mdi-memory",
          },

         
          {
            name: "الدليل المحاسبي",
            link: "/accounts",
            icon: "mdi-folder-open",
          },
        ],
      },
      {
        name: "الأرصدة الافتتاحية",
        icon: "mdi-source-fork",
        navigateable: true,
        sub_menu: [
          {
            name: " إدخال أرصدة حسابات",
            link: "/opening_balances/accounts",
            icon: "",
          },
          {
            name: "إدخال أرصدة منتجات",
            link: "/opening_balances/products",
            icon: "",
          },
          {
            name: "إدخال أرصدة عملاء",
            link: "/opening_balances/customers",
            icon: "",
          },
          {
            name: "إدخال أرصدة موردين",
            link: "/opening_balances/suppliers",
            icon: "",
          },
        ],
      },
    ],
    under_menu: [
      {
        name: "الاعدادات",
        icon: "mdi-shopping",
        sub_menu: [
          {
            name: "إعدادت عامة",
            link: "/general_settings",
            icon: "",
          },
          {
            name: " المستخدمون ",
            link: "/users",
            icon: "",
          },
          {
            name: " إعادة ضبط",
            link: "/migrate",
            icon: "",
          },
          
        ],
      },

      {
        name: "المساعدة",
        icon: "mdi-shopping",
        sub_menu: [
          {
            name: "عن النظام",
            link: "/about",
            icon: "",
          },
        
        ],
      },
    ],

    admins: [],
  }),
  created() {
    this.main_menu.forEach((element) => {
      this.which_expand[element.name] = false;
      for (let index = 0; index < element.sub_menu.length; index++) {
        if (element.sub_menu[index].link == this.$route.fullPath) {
          this.which_expand[element.name] = true;
          
          break;
        }
      }
    });

    
    
  },
};
</script>
