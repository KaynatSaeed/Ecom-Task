<template>
  <div class="dashboard">
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
    <v-main>
      <v-container>
        <h1>CATEGORIES</h1>

        <v-row>
          <v-col cols="3" v-for="(cate, index) in categories" :key="index">
            <v-btn outlined @click="cat(cate)">
              {{ cate }}
            </v-btn>
          </v-col>

 
        </v-row>

        <v-row>
          <v-col cols="6"> </v-col>
        </v-row>
        <v-row>
          <v-col></v-col>
        </v-row>
        <v-row>
          <v-col></v-col>
        </v-row>
        <!-- new cards -->
        <v-app :style="{ background: $vuetify.theme.themes.light.background }">
          <v-row>
            <v-col
              cols="12"
              md="3"
              class="mb-4"
              v-for="product in products"
              :key="product.id"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card max-width="250" max-heigth="250" align="center">
                  <v-card-actions color="red">
                    <v-spacer></v-spacer>
                  </v-card-actions>
                  <v-img :src="product.image" width="150" height="150"></v-img>

                  <v-card-text class="red--text" style="overflow-y: auto; height:70px">
                    {{ product.title }}
                  </v-card-text>
                  <v-card-text>
                    <v-chip color="red" text--white>{{ product.price }}$</v-chip>
                  </v-card-text>
                  
                  <v-expand-transition>
                    <div
                      v-if="hover"
                      class="
                        d-flex
                        transition-fast-in-fast-out
                        red
                        v-card--reveal
                        display-3
                        white--text
                      "
                      style="height: 100%"
                    >
                      <v-btn
                        roter
                        outlined
                        color="white"
                        @click="fatchsingleProductData(product.id)"
                      >
                        Detail</v-btn
                      >
                    </div>
                  </v-expand-transition>
                  <v-btn
                    absolute
                    color="red"
                    class="white--text"
                    fab
                    
                    left
                    top
                  >
                    <v-icon @click="addtocart(product.id)">mdi-cart</v-icon>
                  </v-btn>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>

           

              
          <v-pagination
            v-model="page"
            :length="4"
            prev-icon="mdi-menu-left"
            next-icon="mdi-menu-right"
          ></v-pagination>
        </v-app>
      </v-container>
    </v-main>
        <v-snackbar top color="green" v-model="snackbar">

      Successfully Add to Cart

    </v-snackbar>
  </div>
</template>

<script>
//vuex to show data
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      user: "",
      users: [],
      cate: "",
      snackbar:false,
      show:false
    };
  },
  //vuex to show data

  computed: {
    //spread operator
    ...mapState("products", ["products"]),
    ...mapState("categories", ["categories"]),
    // ...mapState("detail", ["detail"]),
    //see detail of single pro
    ...mapGetters("detail", ["getSingleProduct"]),

      //get cart
   ...mapState("cart",["cart"]),
   ...mapGetters("cart",['cart']),
    ...mapGetters("cart",["scart"]),


    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
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
    cat(apiId) {
      this.$store.dispatch("apiCall", apiId);
      this.$router.push({ name: "Category" });
    },

    //Add to cart
    
    

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
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>

