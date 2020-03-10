import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import About from '../views/about.vue'
import Contact from '../views/contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Página Inicial',
    component: Home
  },
  {
    path: '/about',
    name: 'Sobre',
    component: About
  },
  {
    path: '/contact',
    name: 'Contato',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
