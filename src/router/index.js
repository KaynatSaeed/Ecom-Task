import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import Detail from "../components/Detail";
import Category from "../views/Category";
import profile from "../views/profile";
import Ehome from "../components/Ehome"
import cart from "../views/cart.vue"

Vue.use(VueRouter)
function guest(to, from, next) {
  if (localStorage.currentUser) {
    next({ name: "Dashboard" });
  } else next();
}

function guard(to, from, next) {
  if (localStorage.currentUser) {
    next();
  } else next({ name: "Login" });
}


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: guest,
  },
  {
    path: "/profile",
    name: "profile",
    component: profile,
    beforeEnter: guard,
  },
  {
    path: "/ehome",
    name: "Ehome",
    component: Ehome,
    // beforeEnter: guard,
  },
  {
    path:"/cart",
    name:"cart",
    component:cart,
    beforeEnter: guard,

  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: guard,

  },
  {
    path: "/category",
    name: "Category",
    component: Category,
    beforeEnter: guard,
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail,
    beforeEnter: guard,
  },

  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter: guest,
  },
 
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: guest,
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
