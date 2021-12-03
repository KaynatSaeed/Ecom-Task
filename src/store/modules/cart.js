import axios from 'axios'
const cart ={
    namespaced: true,
    state:{
        // products: [],
        cart: [],


    },
    mutations:{
        SET_CART(state, scart){
            state.cart.push(scart)
            console.log(state.cart)
        },
        
    },
    actions:{
        
        addToCart ({commit},payload) {
        axios
          .get(`https://fakestoreapi.com/products/${payload}`)
          .then(data => {
             console.log(data.data)
             let product = data.data
             commit('SET_CART', product)
          })
          .catch(error => {
            console.log(error)
          })
      },
},
    //rough

    getters:{
        //get dtl
        scart(state){
          return state.cart;
        } 


      },
    

}
export default cart