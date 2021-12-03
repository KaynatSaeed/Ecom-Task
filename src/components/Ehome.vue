<template>
<div>
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

    <v-container fluid>
        <v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>

  
    </v-container>



<v-app :style="{background: $vuetify.theme.themes.light.background}">
<v-container>
  <h1>We Offer</h1>
        <v-row>
          <v-col cols="3">
            <v-hover v-slot:default="{ hover }">
              <v-card max-width="250" max-heigth="400" align="center">
                <v-card-actions color="red">
                  <v-spacer></v-spacer>
                </v-card-actions>
                <v-img src='../assets/sh.jpg' width="250" height="250"></v-img>

                <v-card-text class="red--text">
                  Men's Category
                  
                </v-card-text>
                
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out red v-card--reveal display-3 white--text"
                    style="height: 100%">
                    <v-btn roter outlined color="white"> Detail</v-btn>
                  </div>
                </v-expand-transition>
                <v-btn absolute color="red" class="white--text" large left top>
                  <v-chip>99$</v-chip>
                </v-btn>
              </v-card>
            </v-hover>
          </v-col>  
          <!-- 2nd         -->

            <v-col cols="3">
            <v-hover v-slot:default="{ hover }">
              <v-card max-width="250" max-heigth="400" align="center">
                <v-card-actions color="red">
                  <v-spacer></v-spacer>
                </v-card-actions>
                <v-img src='../assets/c3.jpg' width="250" height="250"></v-img>

                <v-card-text class="red--text">
                 Perfume
                  
                </v-card-text>
                
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out red v-card--reveal display-3 white--text"
                    style="height: 100%">
                    <v-btn roter outlined color="white"> Detail</v-btn>
                  </div>
                </v-expand-transition>
                <v-btn absolute color="red" class="white--text" large left top>
                  <v-chip>99$</v-chip>
                </v-btn>
              </v-card>
            </v-hover>
          </v-col>
            <v-col cols="3">
            <v-hover v-slot:default="{ hover }">
              <v-card max-width="250" max-heigth="400" align="center">
                <v-card-actions color="red">
                  <v-spacer></v-spacer>
                </v-card-actions>
                <v-img src='../assets/bb.jpg' width="250" height="250"></v-img>

                <v-card-text class="red--text">
                  Women's Clothing
                  
                </v-card-text>
                
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out red v-card--reveal display-3 white--text"
                    style="height: 100%">
                    <v-btn roter outlined color="white"> Detail</v-btn>
                  </div>
                </v-expand-transition>
                <v-btn absolute color="red" class="white--text" large left top>
                  <v-chip>99$</v-chip>
                </v-btn>
              </v-card>
            </v-hover>
          </v-col>
            <v-col cols="3">
            <v-hover v-slot:default="{ hover }">
              <v-card max-width="250" max-heigth="400" align="center">
                <v-card-actions color="red">
                  <v-spacer></v-spacer>
                </v-card-actions>
                <v-img src='../assets/c1.jpg' width="250" height="250"></v-img>

                <v-card-text class="red--text">
                  Women's Clothing
                  
                </v-card-text>
                
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out red v-card--reveal display-3 white--text"
                    style="height: 100%">
                    <v-btn roter outlined color="white"> Detail</v-btn>
                  </div>
                </v-expand-transition>
                <v-btn absolute color="red" class="white--text" large left top>
                  <v-chip>99$</v-chip>
                </v-btn>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
        </v-container>

        <!-- 2nd rowww -->


        <v-container>
        <v-row>
          <v-col cols="3">
            <v-hover v-slot:default="{ hover }">
              <v-card max-width="250" max-heigth="400" align="center">
                <v-card-actions color="red">
                  <v-spacer></v-spacer>
                </v-card-actions>
                <v-img src='../assets/men.jpg' width="250" height="250"></v-img>

                <v-card-text class="red--text">
                  Men's Category
                  
                </v-card-text>
                
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out red v-card--reveal display-3 white--text"
                    style="height: 100%">
                    <v-btn roter outlined color="white"> Detail</v-btn>
                  </div>
                </v-expand-transition>
                <v-btn absolute color="red" class="white--text" large left top>
                  <v-chip>99$</v-chip>
                </v-btn>
              </v-card>
            </v-hover>
          </v-col>  
          <!-- 2nd         -->

            <v-col cols="3">
            <v-hover v-slot:default="{ hover }">
              <v-card max-width="250" max-heigth="400" align="center">
                <v-card-actions color="red">
                  <v-spacer></v-spacer>
                </v-card-actions>
                <v-img src='../assets/ss.jpg' width="250" height="250"></v-img>

                <v-card-text class="red--text">
                 Perfume
                  
                </v-card-text>
                
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out red v-card--reveal display-3 white--text"
                    style="height: 100%">
                    <v-btn roter outlined color="white"> Detail</v-btn>
                  </div>
                </v-expand-transition>
                <v-btn absolute color="red" class="white--text" large left top>
                  <v-chip>99$</v-chip>
                </v-btn>
              </v-card>
            </v-hover>
          </v-col>
            <v-col cols="3">
            <v-hover v-slot:default="{ hover }">
              <v-card max-width="250" max-heigth="400" align="center">
                <v-card-actions color="red">
                  <v-spacer></v-spacer>
                </v-card-actions>
                <v-img src='../assets/bb.jpg' width="250" height="250"></v-img>

                <v-card-text class="red--text">
                  Women's Clothing
                  
                </v-card-text>
                
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out red v-card--reveal display-3 white--text"
                    style="height: 100%">
                    <v-btn roter outlined color="white"> Detail</v-btn>
                  </div>
                </v-expand-transition>
                <v-btn absolute color="red" class="white--text" large left top>
                  <v-chip>99$</v-chip>
                </v-btn>
              </v-card>
            </v-hover>
          </v-col>
            <v-col cols="3">
            <v-hover v-slot:default="{ hover }">
              <v-card max-width="250" max-heigth="400" align="center">
                <v-card-actions color="red">
                  <v-spacer></v-spacer>
                </v-card-actions>
                <v-img src='../assets/sh.jpg' width="250" height="250"></v-img>

                <v-card-text class="red--text">
                  Women's Clothing
                  
                </v-card-text>
                
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out red v-card--reveal display-3 white--text"
                    style="height: 100%">
                    <v-btn roter outlined color="white"> Detail</v-btn>
                  </div>
                </v-expand-transition>
                <v-btn absolute color="red" class="white--text" large left top>
                  <v-chip>99$</v-chip>
                </v-btn>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
        </v-container>
             </v-app>

  </div>
</template>

<script>
//vuex to show data
import { mapState, mapGetters } from "vuex";

  export default {
    data () {
      return {
              snackbar:false,

        icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
        items: [
          {
            src:'https://images.unsplash.com/photo-1591348278900-019a8a2a8b1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'

          },
          {
            src:'https://images.unsplash.com/photo-1541377182189-74e4a4ea12e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=816&q=80'
          },
          {
            src: 'https://images.unsplash.com/photo-1589363460779-cd717d2ed8fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
          },
          {
            src:'https://images.unsplash.com/photo-1529607225807-563e0851ee7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
          },
        ],
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


    methods:{
       logout() {
      localStorage.setItem("currentUser", "");
      this.$router.push({ name: "Login" });
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
    deleteCart(deleteid) {
      this.scart.splice(deleteid, 1);
      this.dialog = false;
    },
    addtocart(apiId){

        this.$store.dispatch("cart/addToCart", apiId);
        this.snackbar = true;
      },
    }
  }
</script>
<style>
.ehome{
  display: flex;
  justify-content: center;
  width: 100%;
  margin-left: 30px;
  
}
</style>
