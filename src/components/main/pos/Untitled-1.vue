<div>
            <v-col style="height: 5px">
                <v-progress-linear
                    v-model="value"
                    :active="show"
                    :indeterminate="query"
                    :query="true"
                ></v-progress-linear>
            </v-col>
        </div>
        <v-dialog v-model="starter_dialog" hide-overlay persistent width="300">
            <v-card color="primary" dark>
                <v-card-text>
                    انتظر قليلاً!
                    <v-progress-linear
                        indeterminate
                        color="pink"
                        class="mb-0"
                    ></v-progress-linear>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-snackbar
            :color="snackbarColor"
            centered
            transition="scale-transition"
            v-model="snackbar"
            :timeout="snackbarTimeout"
        >
            {{ snackbarText }}

            <template v-slot:action="{ attrs }">
                <v-btn
                    color="blue"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>
        <v-dialog
            v-model="no_product_dialog"
            max-width="290"
            @keydown.enter="no_product_dialog = false"
        >
            <v-card>
                <v-card-title> الصنف غير موجود </v-card-title>

                <v-card-text>
                    الصنف لم يتم شراؤه من قبل أو أن المخزون قد نفد
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        color="green darken-1"
                        text
                        @click="no_product_dialog = false"
                    >
                        اغلق
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog" max-width="600px" persistent>
            <v-card>
                <p style="margin: 0 10px; font-size: 14px; padding: 10px">
                    قم باختيار الصنف المناسب واضغط موافق
                </p>

                <v-card-text>
                    <ul>
                        <div
                            v-for="set in sets"
                            tabIndex="-1"
                            :key="set.id + 'd'"
                            @blur="selected_elem_fromSet = set.id"
                        >
                            <v-row>
                                <v-col>
                                    {{ set.id }}
                                </v-col>
                                <v-col>
                                    {{ selected_product.ar_name }}
                                </v-col>
                                <v-col>
                                    {{ set.sum_quantity_in_minor_unit }}
                                </v-col>
                                <v-col>
                                    {{
                                        set.expires_at &&
                                        set.expires_at.split(" ")[0]
                                    }}
                                </v-col>
                            </v-row>
                        </div>
                    </ul>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="disagree">
                        Disagree
                    </v-btn>
                    <v-btn color="green darken-1" text @click="agreeToAdd">
                        Agree
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <add-update-person
                :route="person_type"
                :dialog="add_update_person_dialog"
                :person="passed_person"
                :operation="operation"
                :cities="cities"
                @addUpdatePerson="addPersonToList"
                @changeCountry="loadCities"
                @close_person_dialog="close_person_dialog"
            ></add-update-person>