import axios from 'axios'
const products ={
    namespaced: true,
    state:{
        products:[],
    },
    mutations:{
        SET_PRODUCTS(state,data){
            state.products=data
        },
        
    },
    actions:{
        loadProducts({commit}){
        axios
        .get('https://fakestoreapi.com/products')
        .then(resp =>{
            commit('SET_PRODUCTS', resp.data)
        })
        .catch(error=> console.log(error))
    },
    //rough
    
}
}
export default products