import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "main",
        meta: { requiresAuth: true },
        component: () =>
            import ("../components/main/index"),
        children: [{
                path: "/dashboard",
                name: "dashboard",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/index"),
                    mainView: () =>
                        import ("../components/main/dashboard"),
                },
            },
            {
                path: "/about",
                name: "about",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/about"),
                    mainView: () =>
                        import ("../components/main/about"),
                },
            },
            

            {
                path: "/migrate",
                name: "migrate",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/settings/migrate"),
                    mainView: () =>
                        import ("../components/main/settings/migrate"),
                },
            },
            {
                path: "/general_settings",
                name: "general_settings",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/settings/GeneralSettings"),
                    mainView: () =>
                        import ("../components/main/settings/GeneralSettings"),
                },
            },
            {
                path: "/users",
                name: "users",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/settings/users"),
                    mainView: () =>
                        import ("../components/main/settings/users"),
                },
            },
            {
                path: "/employees",
                name: "employees",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/employees/employees"),
                    mainView: () =>
                        import ("../components/main/employees/employees"),
                },
            },
            {
                path: "/loans",
                name: "loans",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/employees/loans"),
                    mainView: () =>
                        import ("../components/main/employees/loans"),
                },
            },

            {
                path: "/product",
                name: "product",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/products/product"),
                    mainView: () =>
                        import ("../components/main/products/product"),
                },
            },
            {
                path: "/service",
                name: "service",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/products/service"),
                    mainView: () =>
                        import ("../components/main/products/service"),
                },
            },
            {
                path: "/accounts",
                name: "accounts",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/accounts/accounts"),
                    mainView: () =>
                        import ("../components/main/accounts/accounts"),
                },
            },
            {
                path: "/units",
                name: "units",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/products/units"),
                    mainView: () =>
                        import ("../components/main/products/units"),
                },
            },
            {
                path: "/types",
                name: "types",
                meta: { requiresAuth: true, onlyAdmin: true },
                components: {
                    default: () =>
                        import ("../components/main/products/types"),
                    mainView: () =>
                        import ("../components/main/products/types"),
                },
            },
            {
                path: "/forms",
                name: "forms",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/products/forms"),
                    mainView: () =>
                        import ("../components/main/products/forms"),
                },
            },
            {
                path: "/groups",
                name: "groups",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/products/groups"),
                    mainView: () =>
                        import ("../components/main/products/groups"),
                },
            },
            {
                path: "/products",
                name: "products",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/products/products"),
                    mainView: () =>
                        import ("../components/main/products/products"),
                },
            },

            {
                path: "/receipt/customer",
                name: "customer_receipt",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/receipts/receipt"),
                    mainView: () =>
                        import ("../components/main/receipts/receipt"),
                },
            },
            {
                path: "/receipt/customer/:id",
                name: "id_customer_receipt",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/receipts/receipt"),
                    mainView: () =>
                        import ("../components/main/receipts/receipt"),
                },
            },
            {
                path: "/receipt/supplier",
                name: "supplier_receipt",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/receipts/receipt"),
                    mainView: () =>
                        import ("../components/main/receipts/receipt"),
                },
            },
            {
                path: "/receipt/supplier/:id",
                name: "id_supplier_receipt",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/receipts/receipt"),
                    mainView: () =>
                        import ("../components/main/receipts/receipt"),
                },
            },
            {
                path: "/receipts",
                name: "receipts",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/receipts/receipts"),
                    mainView: () =>
                        import ("../components/main/receipts/receipts"),
                },
            },
            {
                path: "/receipts/supplier",
                name: "supplier_receipts",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/receipts/receipts"),
                    mainView: () =>
                        import ("../components/main/receipts/receipts"),
                },
            },
            {
                path: "/receipts/customer",
                name: "customer_receipts",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/receipts/receipts"),
                    mainView: () =>
                        import ("../components/main/receipts/receipts"),
                },
            },
            {
                path: "/receipts/:id",
                name: "receipt_id",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/receipts/receipt-info"),
                    mainView: () =>
                        import ("../components/main/receipts/receipt-info"),
                },
            },
            {
                path: "/bond",
                name: "bond",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/bonds/bond"),
                    mainView: () =>
                        import ("../components/main/bonds/bond"),
                },
            },
            {
                path: "/bonds",
                name: "bonds",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/bonds/bonds"),
                    mainView: () =>
                        import ("../components/main/bonds/bonds"),
                },
            },

            {
                path: "/bonds/:id",
                name: "bonds_id",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/bonds/bond-info"),
                    mainView: () =>
                        import ("../components/main/bonds/bond-info"),
                },
            },
            {
                path: "/bill",
                name: "bill",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/bills/bill"),
                    mainView: () =>
                        import ("../components/main/bills/bill"),
                },
            },
            {
                path: "/purchase",
                name: "purchase",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/bills/bill"),
                    mainView: () =>
                        import ("../components/main/bills/bill"),
                },
            },
            {
                path: "/import_purchases",
                name: "import_purchases",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/bills/importPurchases"),
                    mainView: () =>
                        import ("../components/main/bills/importPurchases"),
                },
            },
            {
                path: "/purchase_return",
                name: "purchase_return",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/bills/bill"),
                    mainView: () =>
                        import ("../components/main/bills/bill"),
                },
            },

            {
                path: "/invoice_return",
                name: "invoice_return",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/bills/bill"),
                    mainView: () =>
                        import ("../components/main/bills/bill"),
                },
            },

            {
                path: "/invoice",
                name: "invoice",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/bills/bill"),
                    mainView: () =>
                        import ("../components/main/bills/bill"),
                },
            },
            {
                path: "/bill/print/{id}",
                name: "bill_print_id",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/bills/bill"),
                    mainView: () =>
                        import ("../components/main/bills/bill"),
                },
            },
            {
                path: "/purchases",
                name: "purchases",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/bills/bills"),
                    mainView: () =>
                        import ("../components/main/bills/bills"),
                },
            },

            {
                path: "/bill/:id",
                name: "bill_id",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/bills/bill"),
                    mainView: () =>
                        import ("../components/main/bills/bill"),
                },
            },

            {
                path: "/invoices",
                name: "invoices",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/bills/bills"),
                    mainView: () =>
                        import ("../components/main/bills/bills"),
                },
            },

            {
                path: "/invoice/:id",
                name: "invoice_id",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/bills/bill"),
                    mainView: () =>
                        import ("../components/main/bills/bill"),
                },
            },
            {
                path: "/purchase/:id",
                name: "purchase_id",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/bills/bill"),
                    mainView: () =>
                        import ("../components/main/bills/bill"),
                },
            },
            {
                path: "/invoice_return/:id",
                name: "invoice_return_id",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/bills/bill"),
                    mainView: () =>
                        import ("../components/main/bills/bill"),
                },
            },

            {
                path: "/purchase_return/:id",
                name: "purchase_return_id",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/bills/bill"),
                    mainView: () =>
                        import ("../components/main/bills/bill"),
                },
            },

            {
                path: "/suppliers",
                name: "suppliers",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/bills/people"),
                    mainView: () =>
                        import ("../components/main/bills/people"),
                },
            },

            {
                path: "/opening_balances",
                components: {
                    default: () =>
                        import ("../components/main/opening_balances"),
                    mainView: () =>
                        import ("../components/main/opening_balances"),
                },
            },
            {
                path: "/opening_balances/products",
                name: "products_opening_balances",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/opening_balances/products"),
                    mainView: () =>
                        import ("../components/main/opening_balances/products"),
                },
            },
            {
                path: "/opening_balances/accounts",
                name: "accounts_opening_balances",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/opening_balances/accounts"),
                    mainView: () =>
                        import ("../components/main/opening_balances/accounts"),
                },
            },
            {
                path: "/opening_balances/customers",
                name: "customers_opening_balances",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/opening_balances/OBpeople"),
                    mainView: () =>
                        import ("../components/main/opening_balances/OBpeople"),
                },
            },
            {
                path: "/opening_balances/suppliers",
                name: "suppliers_opening_balances",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/opening_balances/OBpeople"),
                    mainView: () =>
                        import ("../components/main/opening_balances/OBpeople"),
                },
            },

            //  this route is only for illustraion_example_nested
            /* {
                      path: "/opening_balances",
                      components: {
                          default: () =>
                              import ("../components/main/opening_balances"),
                          mainView: () =>
                              import ("../components/main/opening_balances")
                      },
                      children: [{
                              path: "products",
                              name: "products",
                              meta: { requiresAuth: true },
                              components: {
                                  default: () =>
                                      import (
                                          "../components/main/opening_balances/products"
                                      ),
                                  mainView: () =>
                                      import (
                                          "../components/main/opening_balances/products"
                                      )
                              }
                          },
                          {
                              path: "accounts",
                              name: "accounts",
                              meta: { requiresAuth: true },
                              components: {
                                  default: () =>
                                      import (
                                          "../components/main/opening_balances/accounts"
                                      ),
                                  mainView: () =>
                                      import (
                                          "../components/main/opening_balances/accounts"
                                      )
                              }
                          },
                          {
                              path: "customers",
                              name: "customers",
                              meta: { requiresAuth: true },
                              components: {
                                  default: () =>
                                      import (
                                          "../components/main/opening_balances/customers"
                                      ),
                                  mainView: () =>
                                      import (
                                          "../components/main/opening_balances/customers"
                                      )
                              }
                          },
                          {
                              path: "suppliers",
                              name: "suppliers",
                              meta: { requiresAuth: true },
                              components: {
                                  default: () =>
                                      import (
                                          "../components/main/opening_balances/suppliers"
                                      ),
                                  mainView: () =>
                                      import (
                                          "../components/main/opening_balances/suppliers"
                                      )
                              }
                          }
                      ]
                  },*/
            {
                path: "/suppliers/:id",
                name: "suppliers_with_id",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/bills/person-info"),
                    mainView: () =>
                        import ("../components/main/bills/person-info"),
                },
            },
            {
                path: "/customers",
                name: "customers",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/bills/people"),
                    mainView: () =>
                        import ("../components/main/bills/people"),
                },
            },
            {
                path: "/customers/:id",
                name: "customers_with_id",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/bills/person-info"),
                    mainView: () =>
                        import ("../components/main/bills/person-info"),
                },
            },
            {
                path: "/stocktake",
                name: "stocktake",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/products/stocktake"),
                    mainView: () =>
                        import ("../components/main/products/stocktake"),
                },
            },
            {
                path: "/stocktakes",
                name: "stocktakes",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/products/stocktakes"),
                    mainView: () =>
                        import ("../components/main/products/stocktakes"),
                },
            },
            {
                path: "/inventory_transfers",
                name: "inventory_transfers",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/products/inventory_transfers"),
                    mainView: () =>
                        import ("../components/main/products/inventory_transfers"),
                },
            },
            {
                path: "/money_move",
                name: "money_move",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/accounts/moneyMove"),
                    mainView: () =>
                        import ("../components/main/accounts/moneyMove"),
                },
            },

            {
                path: "/additional_money",
                name: "additional_money",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/accounts/moneyMove"),
                    mainView: () =>
                        import ("../components/main/accounts/moneyMove"),
                },
            },
            {
                path: "/fixed_asset_depreciation",
                name: "fixed_asset_depreciation",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/accounts/moneyMove"),
                    mainView: () =>
                        import ("../components/main/accounts/moneyMove"),
                },
            },
            {
                path: "/owner_withdraw",
                name: "owner_withdraw",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/accounts/moneyMove"),
                    mainView: () =>
                        import ("../components/main/accounts/moneyMove"),
                },
            },
            {
                path: "/distribute_profits",
                name: "distribute_profits",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/accounts/moneyMove"),
                    mainView: () =>
                        import ("../components/main/accounts/moneyMove"),
                },
            },
            {
                path: "/money_transactions",
                name: "money_transactions",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/accounts/moneyMoves"),
                    mainView: () =>
                        import ("../components/main/accounts/moneyMoves"),
                },
            },
            {
                path: "/income_statements",
                name: "income_statements",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/accounts/IncomeStatements"),
                    mainView: () =>
                        import ("../components/main/accounts/IncomeStatements"),
                },
            },
            {
                path: "/reports",
                name: "reports",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/Reports"),
                    mainView: () =>
                        import ("../components/main/Reports"),
                },
            },
            {
                path: "/journal_entries",
                name: "journal_entries",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/accounts/JournalEntries"),
                    mainView: () =>
                        import ("../components/main/accounts/JournalEntries"),
                },
            },
            {
                path: "/general_ledgers",
                name: "general_ledgers",
                meta: { requiresAuth: true },
                components: {
                    default: () =>
                        import ("../components/main/accounts/GeneralLedgers"),
                    mainView: () =>
                        import ("../components/main/accounts/GeneralLedgers"),
                },
            },
        ],
    },
    {
        path: "/pos",
        name: "pos",
        meta: { requiresAuth: true },
        components: {
            default: () =>
                import ("../components/main/pos/pos"),
            mainView: () =>
                import ("../components/main/pos/pos"),
        },
    },
    {
        path: "/pos_return",
        name: "pos_return",
        meta: { requiresAuth: true },
        components: {
            default: () =>
                import ("../components/main/pos/pos"),
            mainView: () =>
                import ("../components/main/pos/pos"),
        },
    },

    {
        path: "/logino",
        name: "logino",
        meta: { guest: true },
        component: () =>
            import ("../components/auth/logino"),
    },
    {
        path: "/login",
        name: "login",
        meta: { guest: true },
        component: () =>
            import ("../components/auth/login"),
    },
    {
        path: "/register",
        name: "register",
        meta: { guest: true },
        component: () =>
            import ("../components/auth/register"),
    },
    {
        path: "/barcode_printing/:barcode",
        name: "barcode_printing",
        meta: { requiresAuth: true },
        components: {
            default: () =>
                import ("../components/main/products/barcodePrint"),
            mainView: () =>
                import ("../components/main/products/barcodePrint"),
        },
    },
    {
        path: "/purchase/print/:id",
        name: "purchasePrint",
        meta: { requiresAuth: true },
        components: {
            default: () =>
                import ("../components/main/bills/billPrint"),
            mainView: () =>
                import ("../components/main/bills/billPrint"),
        },
    },
    {
        path: "/receipt/print/:id",
        name: "receiptPrint",
        meta: { requiresAuth: true },
        components: {
            default: () =>
                import ("../components/main/receipts/receiptPrint"),
            mainView: () =>
                import ("../components/main/receipts/receiptPrint"),
        },
    },

    /*  
      {
          path: '/',
          component: Vue.component('alert-box', {
              template: `
                <div class="demo-alert-box">
                  <strong>Error!</strong>
                  <slot></slot>
                </div>
              `
          })
      },
      {
            path: '/home',
            name: 'home',
            component: () =>
                import ('.../components/home')
        },
        {
            path: '/register',
            name: 'register',
            component: () =>
                import ('.../components/auth/register')
        },
        */
];

const router = new VueRouter({
    mode: "hash",
    routes,
});

function loggedIn() {
    return localStorage.getItem("token");
}
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!loggedIn()) {
            next({
                path: "/login",
                query: { redirect: to.fullPath }
            });
        } else {
            if (!to.meta.onlyAdmin) next();
        }
    } else if (to.matched.some(record => record.meta.guest)) {
        if (loggedIn()) {
            next({
                path: "/dashboard",
                query: { redirect: to.fullPath }
            });
        } else {
            next();
        }
    } else {
        next(); // make sure to always call next()!
    }
});

export default router;