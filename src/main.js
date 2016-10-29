import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home'
import CardsPage from './components/pages/CardsPage'
import ButtonsPage from './components/pages/ButtonsPage'
import ListsPage from './components/pages/ListsPage'
import TabsPage from './components/pages/TabsPage'
import DividersPage from './components/pages/DividersPage'

// use Vue Router
Vue.use(VueRouter)

// Map the Routes and Components
var router = new VueRouter({
  routes: [
    // Components
    {
      path: '/',
      component: Home
    },
    {
      path: '/components/cards',
      component: CardsPage,
      keepAlive: true
    },
    {
      path: '/components/buttons',
      component: ButtonsPage,
      keepAlive: true
    },
    {
      path: '/components/lists',
      component: ListsPage,
      keepAlive: true
    },
    {
      path: '/components/tabs',
      component: TabsPage
    },
    {
      path: '/components/dividers',
      component: DividersPage
    }

  ]
})

/* eslint-disable no-new, no-unused-vars */
const app = new Vue({
  router,
  ...App
}).$mount('#app')
