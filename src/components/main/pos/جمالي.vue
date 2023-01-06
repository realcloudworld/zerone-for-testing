<v-row>
          <v-col
            style="
              height: 30vh;
              position: fixed;
              bottom: 0;
              z-index: 99;
              background: white;
            "
          >
            <v-divider class="mx-4" inset></v-divider>
            <v-toolbar flat color="white">
              <v-toolbar-title>الإجمالي</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
            </v-toolbar>
            <div class="bill-footer">
              <v-row>
                <v-col cols="12" lg="6">
                  <v-row justify="start">
                    <v-col
                      cols="12"
                      lg="5"
                      style="
                        text-align: end;
                        border-bottom: 1px solid lightgray;
                      "
                    >
                      الاجمالي قبل الضريبة:
                    </v-col>
                    <v-col
                      cols="12"
                      lg="5"
                      style="
                        text-align: start;
                        border-bottom: 1px solid lightgray;
                      "
                    >
                      <div
                        v-html="total_without_products_tax().toFixed(2)"
                      ></div>
                    </v-col>
                  </v-row>
                  <v-row justify="start">
                    <v-col
                      cols="12"
                      lg="5"
                      style="
                        text-align: end;
                        border-bottom: 1px solid lightgray;
                      "
                    >
                      قيمة الضريبة:
                    </v-col>
                    <v-col
                      cols="12"
                      lg="5"
                      style="
                        text-align: start;
                        border-bottom: 1px solid lightgray;
                      "
                    >
                      <div v-html="total_tax().toFixed(2)"></div>
                    </v-col>
                  </v-row>

                  <v-row justify="start">
                    <v-col cols="12" lg="5" style="text-align: end">
                      المجموع:
                    </v-col>
                    <v-col cols="6" style="text-align: start">
                      <div v-html="total_amount().toFixed(2)"></div
                    ></v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" lg="5">
                  <v-row justify="start">
                    <v-col
                      cols="12"
                      lg="4"
                      style="
                        text-align: end;
                        border-bottom: 1px solid lightgray;
                        color: green;
                      "
                    >
                      <div style="margin-top: 10px">المدفوع:</div>
                    </v-col>
                    <v-col
                      cols="12"
                      lg="4"
                      style="
                        text-align: start;
                        border-bottom: 1px solid lightgray;
                      "
                    >
                      <div>
                        <v-text-field
                          outlined
                          flat
                          no-data
                          no-data-text
                          non-linear
                          v-model="bill.paid_amount"
                          @change="bill.only_cash == true"
                        >
                        </v-text-field>
                      </div>
                    </v-col>

                    <v-col cols="12" lg="4">
                      <payment-method
                        @payment_methods="paymentMethods"
                        :total="bill.total_amount"
                        :accounts="additional_expenses_from_accounts"
                        :payment_methods="bill.payment_methods"
                      ></payment-method>
                    </v-col>
                  </v-row>
                  <v-row justify="start">
                    <v-col
                      cols="12"
                      lg="4"
                      style="
                        text-align: end;
                        border-bottom: 1px solid lightgray;
                        color: green;
                      "
                    >
                      <div style="margin-top: 10px">الباقي :</div>
                    </v-col>
                    <v-col
                      cols="12"
                      lg="4"
                      style="
                        text-align: start;
                        border-bottom: 1px solid lightgray;
                      "
                    >
                      <div>
                        <v-text-field
                          class="purchas-extra-expense text-red"
                          flat
                          disabled
                          no-data
                          no-data-text
                          non-linear
                          :value="remaining_amount().toFixed(2)"
                        >
                        </v-text-field>
                      </div>
                    </v-col>
                    <v-col cols="12" lg="4">
                      <v-btn
                        elevation="0"
                        v-shortkey="['f1']"
                        @shortkey="payAllCash"
                        dark
                        @click="payAllCash"
                      >
                        دفع الكل نقدا!
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>

              <div style="height: 30px"></div>
            </div>
          </v-col>
        </v-row>