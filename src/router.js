import Vue from 'vue'
import Router from 'vue-router'
import Cart from './pages/Cart.vue'
import Address from './pages/Address.vue'
Vue.use(Router);
export default new Router({
  routes: [
    {
      name: 'Cart',
      path: '/',
      component: Cart
    },
    {
      name: 'address',
      path: '/address',
      component: Address
    }
  ]
})