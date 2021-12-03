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
                        <!--============= Buttons Before login ===================-->
                        <v-btn class="ma-1" router to="/login"> Login </v-btn>
                        <v-btn class="ma-1" router to="/register"> SignUp </v-btn>
                      </div>
      </v-app-bar>
      </nav>
  <v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>


  <v-main>
     
                      <!-- new cards -->
          <v-app :style="{background: $vuetify.theme.themes.light.background}">
<v-container>
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

    </v-main>

<v-container class="about">

</v-container>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn 
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text foot"
          icon
        >
          <v-icon size="24px" style="align-items:center">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0 foot">
        Kaynat Store Here you can contact us and get 50% discount on your first order!Kaynat Store Here you can contact us and get 50% discount on your first order!Kaynat Store Here you can contact us and get 50% discount on your first order!
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text foot">
        {{ new Date().getFullYear() }} — <strong>Kaynat Store</strong>
      </v-card-text>
    </v-card>
  </v-footer>




</div>

  
</template>
<script>
  export default {
    data () {
      return {
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
            src: 'https://images.unsplash.com/photo-1589363460779-cd717d2ed8fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',

          },
          {
            src:'https://images.unsplash.com/photo-1541377182189-74e4a4ea12e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=816&q=80'
          },
          {
            src:'https://images.unsplash.com/photo-1529607225807-563e0851ee7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
          },
        ],
      }
    },
  }
</script>


<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
  
}

.foot{
  text-align: center;
  align-items: center;
}
</style>