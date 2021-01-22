import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Lista from '@/components/Lista'


import store from '@/store'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lista',
    name: 'Lista',
    component: Lista
  }
]

const router = new Router({ mode: 'history', routes })

export default router
