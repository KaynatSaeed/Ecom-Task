import axios from 'axios'
const categories ={
    namespaced: true,
    state:{
        categories:[],
        post : "",
        
        
    },
    mutations:{
        //load categories btn
        SET_CATEGORIES(state,data){
            state.categories=data
        },
        SET_CAT(state,post){
            state.post = post; 
          },
        


    },
    actions:{
        
        loadCategories({commit}){
        axios
        .get('https://fakestoreapi.com/products/categories') 
        .then(resp =>{
            commit('SET_CATEGORIES', resp.data)
        })
        .catch(error=> console.log(error))

    },
    apiCall({ commit }, payload) {
        console.log(commit);
        console.log (payload);
        axios.get(`https://fakestoreapi.com/products/category/${payload}`).then((response) => {
              let data = response.data;
              console.log(data);
              commit('SET_CAT', data)
            })
    },

            
},

    getters:{
        getCat(state){
           return state.post;
        },
      },

}
export default categories