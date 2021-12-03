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
      </v-app-bar>
</nav>
    <v-container class="dt">
      <v-row>
        <v-col>
        </v-col>
      </v-row>
      <v-row class="mr">
        <v-col cols="6">
          <v-card>
            <v-img :src="getSingleProduct.image" max-width="550" height="450">
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-card-text>
              <strong>Title:</strong>
            {{getSingleProduct.title}}
            </v-card-text>
            <v-card-text>
              <strong>Description:</strong>
            {{getSingleProduct.description}}
            </v-card-text>
            <v-card-text>
              <strong>Category:</strong>
            {{getSingleProduct.category}}
            </v-card-text>
            <v-card-text>
              <strong>Rating:</strong>
            <v-rating
          
          background-color="orange lighten-3"
      color="orange"

          length="5"
          size="30"
          value="3"
          >
          {{getSingleProduct.rating}}
          </v-rating>
            </v-card-text>
            <v-card-text><strong>Price:</strong>
            <v-chip>{{getSingleProduct.price}}$</v-chip>
            </v-card-text>
            


            <v-btn rounded color="black" text--white @click="addtocart(getSingleProduct.id)">Add To Cart</v-btn>
          </v-card>
        </v-col>
      </v-row>


    
    </v-container>
    </v-container>
</template>
<script>
import { mapState,mapGetters } from "vuex";

export default {
    data() {
    return {
      user: "",
      users: [],

    };
  },

      computed: {
    //spread operator
    //see detail of single pro
       ...mapGetters('detail',['getSingleProduct']),

         //get cart
   ...mapState("cart",["cart"]),
   ...mapGetters("cart",['cart']),
    ...mapGetters("cart",["scart"]),




    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
    mounted(){

    },
      methods: {
        logout() {
      localStorage.setItem("currentUser", "");
      this.$router.push({ name: "Login" });
    },

    addtocart(apiId){
        this.$store.dispatch("cart/addToCart", apiId);
        // this.$router.push({name : "Detail"})
      },
    
      
      
  },
  

   

 
 


  
    
}
</script>

<style scoped>
.dt{
    margin-top: 50px;
    
    
}
.col1{
    background-color: pink;
}
.col2{
    background-color: pink;
}
.mr{
  margin-left: 50px;
}
</style>