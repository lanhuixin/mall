import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () =>import('views/home/Home.vue')
const Catagory = () =>import('views/catagory/Catagory.vue')
const Cart = () =>import('views/cart/Cart.vue')
const Profile = () =>import('views/profile/Profile.vue')


const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/catagory',
      component: Catagory
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    }
  ]
})

export default router












