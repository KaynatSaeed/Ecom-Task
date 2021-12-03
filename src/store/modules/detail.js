import axios from 'axios'
const detail ={
    namespaced: true,
    state:{
        products: [],
        singleproductData: [],


    },
    mutations:{
        SET_PRODUCT(state, singleproductData){
            state.singleproductData = singleproductData
        },
        
    },
    actions:{
        
        fatchsingleProductData ({commit},payload) {
        axios
          .get(`https://fakestoreapi.com/products/${payload}`)
          .then(data => {
             console.log(data.data)
             let product = data.data
             commit('SET_PRODUCT', product)
          })
          .catch(error => {
            console.log(error)
          })
      },
},
    //rough

    getters:{
        //get dtl
        getSingleProduct(state){
          return state.singleproductData;
        } 
      },
    

}
export default detail