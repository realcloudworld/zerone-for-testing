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
              <v-col cols="12" lg="6">
                <v-text-field
                  label="اسم المورد *"
                  v-model="person.name"
                  :rules="required.concat(vld_is_not_default)"
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="6">
                <v-text-field
                  v-model="person.company_name"
                  label="اسم الشركة*"
                  :rules="vld_is_not_default"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" lg="6">
                <v-autocomplete
                  v-model="person.country_id"
                  :items="countries"
                  item-text="en_name"
                  item-value="id"
                  prefix="البلد |"
                  autocomplete="off"
                  @change="loadCities"
                  placeholder="اختر البلد"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" lg="6">
                <v-autocomplete
                  v-model="person.city_id"
                  :items="cities"
                  item-text="en_name"
                  item-value="id"
                  prefix="المدينة |"
                  autocomplete="off"
                  placeholder="اختر المدينة"
                ></v-autocomplete>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  rows="2"
                  v-model="person.address"
                  label="العنوان"
                  required
                ></v-textarea>
              </v-col>
              <v-col cols="12" lg="6">
                <v-text-field
                  v-model="person.phone01"
                  label="رقم الاتصال الأساسي"
                  required
                  :rules="vld_phone_number"
                  type="ltr"
                ></v-text-field>
              </v-col>

              <v-col cols="12" lg="6">
                <v-text-field
                  v-model="person.phone02"
                  label="رقم الاتصال الثانوي"
                  :rules="vld_phone_number"
                  required
                  type="ltr"
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="6">
                <v-text-field
                  v-model="person.email"
                  label="البريد الالكتروني"
                  :rules="emailRules"
                  required
                  type="ltr"
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="6">
                <v-text-field
                  v-model="person.website"
                  label="الموقع الالكتروني"
                  :rules="webSite"
                  type="ltr"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="6">
                <v-text-field
                  v-model="person.tax_number"
                  label="الرقم الضريبي"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" lg="6">
                <v-row>
                  <v-col style="text-align: end">
                    <v-btn color="blue darken-1" text @click="closeDialog()">
                      إلغاء
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="savePerson()">
                      حفظ
                    </v-btn>
                  </v-col>
                </v-row>
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
import Person from "../../../apis/Person";
import Country from "../../../apis/Country";
export default {
  props: ["dialog", "person", "cities", "operation", "route"],
  data: () => ({
    
    webSite: [
      (v) =>
        !v ||
        /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/.test(
          v
        ) ||
        "الرابط غير صحيح",
    ],
    vld_numbering: [(v) => !v || /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية"],
    required: [(value) => !!value || "الحقل مطلوب."],
    vld_is_not_default: [(v) => !v || v != "افتراضي" || "غير متاح"],
    vld_phone_number: [
      (v) =>
        !v ||
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/.test(v) ||
        "أدخل رقما صحيحا",
    ],
    emailRules: [
      (v) =>
        !v ||
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "ادخل البريد بشكل صحيح",
    ],
    isloading: false,
    title: "إضافة مورد جديد",
    countries: [],

    person_div_update: 0,
  }),

  created() {
    Country.loadCountries().then(
      (response) => (this.countries = response.data.countries)
    );
  },
  computed: {},
  methods: {
    loadCities() {
      this.$emit("changeCountry", this.person.country_id);
    },
    closeDialog() {
      this.$emit("close_person_dialog");
    },
    savePerson() {
      if (!this.$refs.form.validate()) {
        return;
      }
      
      
      this.isloading = "blue";
      if (this.operation == "add") {
        Person.store(this.person).then((response) => {
          this.person["id"] = response.data;
          this.isloading = false;
          this.$emit("addUpdatePerson", this.person);
        });
        return;
      }
      if (this.operation == "update") {
        Person.update(this.person).then((response) => {
          this.isloading = false;
          this.$emit("addUpdatePerson", this.person);
        });
        return;
      }
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