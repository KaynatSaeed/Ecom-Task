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
                        
                        <!--=================Home-btn ================= -->
                        <v-btn class="ma-1" router to="/ehome"><v-icon>mdi-home</v-icon></v-btn>

                        <!--============= Buttons after login ===================-->

                        <!--=================dashboard-btn ================= -->
                        <v-btn class="ma-1" router to="/dashboard"><v-icon>mdi-menu</v-icon></v-btn>
                        <!--====================cart-button================== -->
                        <v-btn class="ma-1" router to="/cart">
                            <v-badge color="green" :content="scart.length">
                                <v-icon> mdi-cart</v-icon>
                            </v-badge>
                        </v-btn>
                        <!-- =====================profile-btn==================-->
                        <v-btn class="ma-1" router to="/profile"><v-icon>mdi-account</v-icon></v-btn>
                        <!-- =====================logout-button================-->
                        <v-btn class="ma-1"><v-icon @click.prevent="logout">mdi-export</v-icon></v-btn>
                    </div>
      </v-app-bar>
</nav>
<v-container>
    <v-row  class="con">
        <v-col cols="6">
             <v-img
             src="../assets/pf.png"
             width="270"
             height="220"
             
             > 

             </v-img>

             <v-file-input></v-file-input>

        </v-col>
        <v-col cols="6">
          <v-card ref="form">
        <v-card-text>
             <h1 class="text-center black--text">Profile</h1>
         <v-text-field
            ref="firstname"
            v-model="firstname"
            :rules="firstnameRule"
            :error-messages="errorMessages"
            label="First Name"
            placeholder="First Name"
            required
          ></v-text-field>

           <v-text-field
            ref="lastname"
            v-model="lastname"
            :rules="lastnameRule"
            :error-messages="errorMessages"
            label="Last Name"
            placeholder="Last Name"
            required
          ></v-text-field>

          <v-text-field
            ref="userName"
            v-model="username"
            :rules="UsernameRule"
            :error-messages="errorMessages"
            label="Username"
            placeholder="John Doe"
            required
          ></v-text-field>

           <v-text-field
            ref="email"
            v-model="email"
            :rules="emailRule"
            :error-messages="errorMessages"
            label="Email"
            placeholder="xyz@gmail.com"
            required
          ></v-text-field>

           <v-text-field
            ref="password"
            v-model="password"
            :type="'Password'"
            :rules="passwordRule"
            :error-messages="errorMessages"
            label="Password"
            placeholder="***"
            required
          ></v-text-field>

            <v-text-field
            ref="phone"
            v-model="phone"
            :type="'number'"
            :rules="numberRule"
            :error-messages="errorMessages"
            label="Phone"
            placeholder="123456789"
            required
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
               <v-btn
            color="primary"
            text
            @click="submit"
          >
            Update Profile
          </v-btn>
          <v-spacer></v-spacer>
        
          <v-slide-x-reverse-transition>
            <v-tooltip
              v-if="formHasErrors"
              left
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  icon
                  class="my-0"
                  v-bind="attrs"
                  @click="resetForm"
                  v-on="on"
                >
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
       
        </v-card-actions>
      </v-card>
        </v-col>
    </v-row>

               

   </v-container>
    </v-container>
</template>



<script>

//vuex to show data
import { mapGetters} from "vuex";
import {
        UsernameRule,
        emailRule,
        firstnameRule,
        lastnameRule,
        passwordRule,
        numberRule } from '../components/validation';



export default {
    data: () => ({
        userData: {
        address: {
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
          city: "Lahore",
          street: "12-A, Johar Town",
          number: "",
          zip: "12926-3874",
        },
        email: "",
        username: "",
        password: "",
        name: {
          firstname: "",
          lastname: "",
        },
        phone: "",
      },
      email: "",
      firstname: "",
      lastname:"",
      username:"",
      password:"",
      phone:"",
      errorMessages: '',
      formHasErrors: false,
      emailRule: emailRule,
      UsernameRule:UsernameRule,
      firstnameRule:firstnameRule,
      lastnameRule:lastnameRule,
      passwordRule:passwordRule,
      numberRule:numberRule,
    }),
  //vuex to show data

    computed: {
         ...mapGetters("cart",["scart"]),

//update form
         form () {
        return {
          userName: this.userName,
          email : this.email,
          firstname : this.firstname,
          lastname : this.lastname,
          password: this.password,
          phone:this.phone,
        }
      },

      
    },

    watch: {
      name () {
        this.errorMessages = ''
      },
    },


    mounted() {
        this.firstname = localStorage.getItem("firstname");
        this.lastname = localStorage.getItem("lastname");
         this.username = localStorage.getItem("username");
        this.email = localStorage.getItem("currentUser");
        this.password = localStorage.getItem("password");
        this.phone = localStorage.getItem("phone");
         
            
    },
  methods: {
        logout() {
      localStorage.setItem("currentUser", "");
      this.$router.push({ name: "Login" });
    },
          resetForm () {
        this.errorMessages = []
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          this.$refs[f].reset()
        })
      },
      submit () {
      
        
        
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true
         
          this.$refs[f].validate(true)
         
        })
      },
    },

};


</script>


<style>
.con{
    background-color: black;
    margin-top: 50px;
    margin-left: 50px;
}
</style>