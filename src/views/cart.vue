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
    <v-row  class="con" v-for="(item,id) in scart" :key="item.index">
        <v-col cols="3">
             <v-img
             :src="item.image"
             width="270"
             height="220"> 
             </v-img>

             <v-file-input></v-file-input>

        </v-col>
        <v-col cols="9" class="desc">
              <v-card ref="form">
        <v-card-text>
             <h1 class="text-center black--text">{{item.title}}</h1> 
        </v-card-text>
        <v-card-text>
             <h1 class="text-center black--text">{{item.price}}</h1> 
        </v-card-text>
        <v-card-text>
            <v-btn @click="deleteCart(id)"> 
              Delete

            </v-btn>
        </v-card-text>

      </v-card>
        </v-col>
    </v-row>

               

   </v-container>
    </v-container>
</template>



<script>
//vuex to show data

import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return{
     nackbar:false,


    }
   
  },
    computed: {
     //spread operator
    ...mapState("products", ["products"]),
    ...mapState("categories", ["categories"]),
    //add to cart
   ...mapGetters("cart",["scart"]),
       //see detail of single pro
    ...mapGetters("detail", ["getSingleProduct"]),


    },
     created() {
    this.$store.dispatch("categories/loadCategories");
    this.$store.dispatch("products/loadProducts");
  }, //end of vuex


    

  mounted() {
   
  },

  methods: {
        logout() {
      localStorage.setItem("currentUser", "");
      this.$router.push({ name: "Login" });
    },
    deleteCart(deleteid) {
      this.scart.splice(deleteid, 1);
      this.dialog = false;
    },
    cat(apiId) {
      this.$store.dispatch("apiCall", apiId);
      this.$router.push({ name: "Category" });
    },
    //check dteai
    fatchsingleProductData(apiId) {
      // alert(apiId);
      this.$store.dispatch("detail/fatchsingleProductData", apiId);
      this.$router.push({ name: "Detail" });
    },
    
    addtocart(apiId){

        this.$store.dispatch("cart/addToCart", apiId);
        this.snackbar = true;
      },

    
    },

};


</script>


<style>
.con{
    background-color: black;
    margin-top: 50px;
    /* margin-left: 50px; */
}
.desc{
  background-color: pink;
}
</style>