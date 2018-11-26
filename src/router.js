import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


import Carts from "./components/Carts"
import Goods from "./components/Goods"

export default new Router({
  mode: 'history',
  routes: [
    {
      path:"/",
      redirect:"/goods",
    },
    {
      path: '/carts',
      name:"carts",
      component:Carts
    },
   {
      path: '/goods',
      name:"goods",
      component:Goods
    }
  ]
})
