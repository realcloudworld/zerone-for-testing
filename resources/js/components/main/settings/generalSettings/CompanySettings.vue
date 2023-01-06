<template>
  <v-row class="mx-3">
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
    <v-col>
      <v-row>
        <v-toolbar flat color="white">
          <v-toolbar-title style="font-size: 14px; color: crimson"
            >اعدادات الشركة</v-toolbar-title
          >
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <v-spacer></v-spacer>
        </v-toolbar>
      </v-row>
      <v-row>
        <v-row>
          <v-col cols="12" lg="6">
            <v-text-field
              v-model="companySettingsOptions.company_name"
              label="اسم الشركة*"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              label="جهة الاتصال *"
              v-model="companySettingsOptions.name"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" lg="6">
            <v-autocomplete
              v-model="companySettingsOptions.country_id"
              :items="countries"
              item-text="en_name"
              item-value="id"
              prefix="البلد |"
              autocomplete="off"
              @change="loadCities"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" lg="6">
            <v-autocomplete
              v-model="companySettingsOptions.city_id"
              :items="cities"
              item-text="en_name"
              item-value="id"
              prefix="المدينة |"
              autocomplete="off"
            ></v-autocomplete>
          </v-col>

          <v-col cols="12">
            <v-textarea
              rows="2"
              v-model="companySettingsOptions.address"
              label="العنوان"
              required
            ></v-textarea>
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              type="ltr"
              v-model="companySettingsOptions.phone01"
              :rules="vld_phone_number"
              label="رقم الاتصال الأساسي"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" lg="6">
            <v-text-field
              v-model="companySettingsOptions.phone02"
              label="رقم الاتصال الثانوي"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              type="ltr"
              v-model="companySettingsOptions.email"
              label="البريد الالكتروني"
              required
              :rules="emailRules"
            ></v-text-field>
          </v-col>
          <v-col cols="12" lg="6">
            <v-text-field
              type="ltr"
              v-model="companySettingsOptions.website"
              label="الموقع الالكتروني"
              required
              :rules="webSite"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-row>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col>
          <v-btn
            class="btn btn-info m-b-5 m-r-2 white--text"
            color="text--white"
            text
            @click="submit()"
          >
            <v-icon class="white--text">mdi-plus-box</v-icon>حفظ
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import Country from "../../../../apis/Country";
import Setting from "../../../../apis/Setting";
export default {
  props: ["companySettingsOptions", "cities"],
  data() {
    return {
      starter_dialog:false,
      webSite: [
        (v) =>
          !v ||
          /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/.test(
            v
          ) ||
          "الرابط غير صحيح",
      ],
      vld_numbering: [
        (v) => !v || /^-?\d+\.?\d*$/.test(v) || "أدخل قيمة عددية",
      ],
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
      countries: [],
    };
  },
  methods: {
    loadCities() {
      this.$emit("changeCountry", this.companySettingsOptions.country_id);
    },
    submit() {
      this.starter_dialog = true;
      Setting.store({
        company: this.companySettingsOptions,
      }).then((elem) => {
        this.starter_dialog = false;
      });
    },
    emitcompanySettings() {
      this.$emit("companySettingsMethod", this.companySettingsOptions);
    },
  },
  created() {
    let countries = JSON.parse(localStorage.getItem("countries"));
    console.log("countries");
    console.log(countries);
    if (countries) {
      this.countries = countries;
      return;
    }
    Country.loadCountries().then((response) => {
      localStorage.setItem(
        "countries",
        JSON.stringify(response.data.countries)
      );
      this.countries = response.data.countries;
    });
  },
};
</script>




<style>
</style>