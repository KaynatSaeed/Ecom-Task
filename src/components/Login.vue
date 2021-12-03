<template>
<v-container>
       <nav>
      <v-app-bar color="white" flat dense dark app class="line">
        <v-toolbar-title>
                  <!-- ================Title ==================-->
                    <span class="px-3">Kaynat's Store</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <div class="d-flex flex-column flex-md-row justify-end">
                        <!--============= Buttons Before login ===================-->
                        <v-btn class="ma-1" router to="/login"> Login </v-btn>
                        <v-btn class="ma-1" router to="/register"> SignUp </v-btn>
                      </div>
      </v-app-bar>
      </nav>
    
  <v-app>
    <div class="log">
    <v-main class="d-flex justify-center align-center mt-16 mb-16">
      <v-row justify="center">
      
      <v-col class="mt-10 mx-auto" cols="12" sm="10" md="8" lg="6">
        <v-card class="pa-4">
          <div class="text-center">
           
            <h2 class="black--text">Login</h2>
          </div>
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-card-text>
              <v-text-field
                v-model="user.email"
                :rules="emailRule"
                type="email"
                label="Email"
                placeholder="Email"
                prepend-inner-icon="mdi-account"
                required
              />
              <v-text-field
                      v-model="user.password"
                      :rules="passwordRule"
                      :type="passwordShow?'text':'password'"
                      label="Password"
                      placeholder="Password"
                      prepend-inner-icon="mdi-key"
                      :append-icon="passwordShow ? 'mdi-eye':'mdi-eye-off'"
                      @click:append="passwordShow = !passwordShow"
                      required
              />
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn :loading="loading" type="submit" color="black darken-1">
                <span class="white--text px-8">Login</span>
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
      </v-row>
    </v-main>
    <v-snackbar top color="red" v-model="snackbar">
      Please Enter Correct Email or Password
    </v-snackbar>
    </div>
  </v-app>

  </v-container>
</template>

<script>
import {
        emailRule,
        passwordRule, } from '../components/validation';

export default {

  data: () => ({
    emailRule: emailRule,
    passwordRule:passwordRule,
    loading:false,
    snackbar:false,
    passwordShow:false,
    user :{
    email: "",
    password: "",
    }
    
   
  }),
  methods:{
    submitHandler(){
      if (this.$refs.form.validate()){
          this.loading = true
        setTimeout(()=> {
          this.loading = false
          this.snackbar = true

        const keys = Object.keys(localStorage);
        for (let key of keys) {
          if (this.user.email === key) {
            console.log(this.user.email);
            if (
              this.user.password === JSON.parse(localStorage.getItem(key)).password
            ) {
              localStorage.setItem("currentUser", this.user.email);
              this.$router.push({ name: "Dashboard" });
            }
          }
        }
         
         
        
        },3000)
      }
    }
  }
};
</script>

<style>



.background{
    background-color: rgb(96, 202, 216);
    background-image: url('../assets/black.jpg');
    background-size: cover;
    height: 625px;
    
  /* background: url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"); */
  }
.log{
    background-image: url('../assets/black.jpg');
    display: flex;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    background-size:cover;
    height: 600px;
    background-color: pink;
    
}

</style>