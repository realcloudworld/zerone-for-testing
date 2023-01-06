<template>
  <div>
    <div class="bar">
      <div class="logo float-right">
        <img src="logo.png" alt="" width="60" class="ma-3" />
      </div>
      <div class="system-title float-right">نظام مليون المحاسبي</div>
      <div class="system-title float-left">
        <v-btn> </v-btn>
        تسجيل الدخول
      </div>
      <div class="clear"></div>
    </div>
    <v-row>
      <v-col>
        <div class="margin-top-100">
            <h2>تتبع حساباتك بكفاء عالية</h2>
            <h4 class="color-pink">يتيح لك تتبع مداخيلك ونتائجك دون أي متاعب.</h4>
        </div>
      </v-col>
      <v-col> 
          <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card class="elevation-2" :loading="isloading" flat height="300" min-width="300">
              
              <v-card-text>
                <v-form ref="form">
                  <v-text-field
                  class="pt-10"
                    v-model="form.email"
                    label="البريد الالكتروني"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                  class="pt-10"
                    v-model="form.password"
                    id="password"
                    label="كلمة المرور"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>

              <v-card-actions class="font-14">
                
                <a color="primary" @click="login">{{ $t("Login") }}</a>
                <v-spacer></v-spacer>
                <router-link to="/register" class="ml-3">
                 {{ $t("Sign up") }}  !</router-link
                >
                
                
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import User from "../../apis/User";
export default {
    
  data() {
    return {
      form: {
        email: "nib@mail.ru",
        password: "password",
        device_name: "browser",
      },
      errors: "",
      snackbar: false,
      isloading: false,
    };
  },
  mounted() {
    setTimeout(() => {
      //M.updateTextFields();
    });
  },
  methods: {
    login() {
      this.isloading = "red";
      User.login(this.form)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          this.$router.push("/dashboard");
        })
        .catch((errors) => {
          this.errors = errors.response.data.errors;
          
        });
    },
  },

};
</script>


<style>
.clear {
  clear: both;
}
.bar {
  width: 100%;

  border-bottom: 1px solid gray;
  box-shadow: 2px 2px 5px gray;
  padding-right: 100px;
}
.logo {
  max-width: 80px;
}
.system-title {
  margin-top: 30px;
}
.float-right {
  float: right;
}
.float-left {
  float: left;
}
.margin-top-100{
    margin-top: 100px;
}
.color-pink{
    color: #e91e63;
}
.font-14{
    font-size: 14px;
}
</style>