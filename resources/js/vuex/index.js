import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Accounts from "../apis/Account";
import incomeitemsModule from "./incomeitems";
import outcomeitemsModule from "./outcomeitems";
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        suspended_bills: [],
        user: "",
        accounts: [],
        account_types: [],
        accountsVDTloading: true

        /*--------------suppliers--------------------- */
    },
    mutations: {
        user: (state, payload) => {
            state.user = payload;
        },
        load_accounts: (state, payload) => {
            state.accounts = payload;
        },
        load_account_types: (state, payload) => {
            state.account_types = payload;
        },
        change_accountsVDTloading: (state, payload) => {
            state.accountsVDTloading = false;
        },
        delete_account: (state, payload) => {
            state.accounts.splice(state.accounts.indexOf(payload), 1);
        },
        archive_account: (state, payload) => {
            state.accounts.splice(state.accounts.indexOf(payload), 1);
        }
    },
    getters: {
        user(state) {
            return state.user;
        },
        accounts(state) {
            return state.accounts;
        },
        account_types(state) {
            return state.account_types;
        },

        invoicebyid: state => id => {
            return state.invoices.filter(elem => elem.invoiceid == id);
        }
    },
    actions: {
        /*----------------------load accounts and types------------------------*/
        user: (cxt, payload) => {
            cxt.commit("user", payload);
        },

        load_accounts: cxt => {
            Accounts.get().then(response => {
                cxt.commit("load_accounts", response.data.accounts);
                cxt.commit("change_accountsVDTloading");
            });
        },
        delete_account: (cxt, payload) => {
            Accounts.delete(payload.id).then(response => {
                cxt.commit("delete_account", payload);
            });
        },
        archive_account: (cxt, payload) => {
            Accounts.archive(payload.id).then(response => {
                cxt.commit("archive_account", payload);
            });
        },
        load_account_types: cxt => {
            Accounts.types().then(response => {
                cxt.commit("load_account_types", response.data.account_types);
            });
        },

        //invoice!

        add_invoices: (cxt, payload) => {
            cxt.commit("add_invoices", payload);
            axios.post("api/addinvoices", payload).then(response => {});
        }
    }
});