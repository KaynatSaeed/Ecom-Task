import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import categories from './modules/categories'
import detail from './modules/detail'
import cart from './modules/cart'



Vue.use(Vuex)


export default new Vuex.Store({
  
  modules:{
    products,
    categories,
    detail,
    cart
  },

  
  
}
 )
  // return Store


