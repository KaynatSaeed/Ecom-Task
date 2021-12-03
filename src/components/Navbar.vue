<template>
  <div id="app">
    <v-app>
      <!-- ===============================Nav-Bar ===============================-->
        <nav>
            <v-toolbar id="toolbar">
                <v-toolbar-title>
                  <!-- ================Title ==================-->
                    <span class="px-3">Kaynat's Store</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <div class="d-flex flex-column flex-md-row justify-end">
                        <!--============= Buttons Before login ===================-->
                        <v-btn class="ma-1" router to="/login"> Login </v-btn>
                        <v-btn class="ma-1" router to="/register"> SignUp </v-btn>
                        <!--=================Home-btn ================= -->
                        <v-btn class="ma-1" router to="/"><v-icon>mdi-home</v-icon></v-btn>

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
                
            </v-toolbar>
        </nav>
    </v-app>
</div>
</template>

<script>
export default {
    data() {
        return {
          user:"",
        }
    },
    methods:{
      logout() {
      localStorage.setItem("currentUser", "");
      this.$router.push({ name: "Login" });
      window.location.reload();

    },
    

    },
    mounted:{
      

    },
    computed: {
        
    },
}

</script>