import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Pricing from '../views/Pricing'
import Features from '../views/Features'
import Purchase from '../views/Purchase'
import Payment from '../views/Payment'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/pricing', component: Pricing, name: 'pricing' },
  { path: '/:businessId/payment', component: Payment, name: 'payment' },
  { path: '/home', component: Home, name: 'home' },
  { path: '/features', component: Features, name: 'features' },
  { path: '/purchase', component: Purchase, name: 'purchase' },
  { path: '/register', component: Purchase, name: 'register' },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
