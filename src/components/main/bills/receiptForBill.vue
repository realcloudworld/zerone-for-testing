<template>
  <v-dialog v-model="dialog" max-width="800px" persistent>
    <v-card :loading="isloading">
      <v-card-title>
        <v-row>
          <v-col> {{ title }}</v-col>
          <v-col style="text-align: end">
            <v-btn color="blue darken-1" text @click="closeDialog()">
              إلغاء
            </v-btn>

            <v-btn color="blue darken-1" text @click="savePerson()">
              حفظ
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form">
            <v-row>
              <v-col cols="12" lg="10" class="pt-0 pb-0">
                <v-text-field
                  class="receipt-info"
                  outlined
                  autocomplete="off"
                  v-model="receipt.reference"
                  prefix=" رقم السند | "
                  placeholder="رقم السند"
                  @blur="checkExicting()"
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="10" class="pt-0 pb-0">
                <v-autocomplete
                  v-model="receipt.person_id"
                  :items="receipt.people"
                  item-text="name"
                  item-value="id"
                  outlined
                  disabled
                  :rules="vld_selected"
                  :prefix="persona + '|'"
                >
                </v-autocomplete>
              </v-col>
              <v-col cols="12" lg="10" class="pt-0 pb-0">
                <v-autocomplete
                  flat
                  outlined
                  no-data
                  no-data-text
                  prefix=" الحساب | "
                  non-linear
                  v-model="receipt.account_id"
                  :items="from_accounts"
                  item-text="ar_name"
                  item-value="id"
                >
                </v-autocomplete>
              </v-col>

              <v-col cols="12" lg="10" class="pt-0 pb-0">
                <v-text-field
                  class="receipt-info"
                  outlined
                  autocomplete="off"
                  v-model="receipt.description"
                  prefix=" الوصف | "
                  @blur="checkExicting()"
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="10" class="pt-0 pb-0">
                <v-menu
                  ref="date"
                  v-model="date_is_down"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      outlined
                      v-model="receipt.date"
                      prefix=" التاريخ | "
                      v-bind="attrs"
                      v-on="on"
                      @keydown.enter="date_is_down = false"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="receipt.date"
                    no-title
                    @input="date_is_down = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" lg="10" class="pt-0 pb-0">
                <v-text-field
                  class="receipt-info"
                  outlined
                  autocomplete="off"
                  v-model="receipt.amount"
                  prefix=" المبلغ | "
                  @blur="checkExicting()"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import Receipt from "../../../apis/Receipt";

import Account from "../../../apis/Account";
export default {
  props: ["bill", "dialog", "reference", "receipt"],
  data() {
    return {
      people: [this.bill.name],
      isloading: false,
      title: "سند مورد جديد",
      //----
      person_info: "معلومات المورد",
      person_type: "suppliers",
      persona: "المورد",
      //----
      route: "",
      from_accounts: [],
      types: [
        { id: 1, ar_name: "صرف" },
        { id: 2, ar_name: "استلام" },
      ],
      /*-------------------validators---------------------------*/
      vld_minlingth_one: [(v) => v.length >= 1 || "أدخل قيمة"],
      vld_selected: [(v) => v > 0 || "أدخل قيمة"],
      required: [(value) => !!value || "الحقل مطلوب."],
      isunique: [],
      is_exists: [],
      is_valid_date: [],
      vld_numbering: [(v) => /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية"],

      people: [],

      receipts: [],

      date_is_down: false,
    };
  },

  watch: {
    reference: {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal) {
          
          
          this.receipt.reference = newVal;
        }
      },
    },
  },
  created() {
    Account.cashAndBanks().then((response) => {
      this.from_accounts = response.data.accounts;
    });
  },
  computed: {},

  methods: {
    checkExicting() {},

    closeDialog() {
      this.$emit("close_receipt_dialog");
    },
    savePerson() {
      Receipt.storeOne(this.receipt).then((response) => {
        
        //this.$emit("close_receipt_dialog");
      });
    },
  },
};
</script>
</script>

<style>
.first-level {
  background: rgb(255, 222, 228);
}
.second-level {
  background: rgb(233, 233, 233);
}
</style>