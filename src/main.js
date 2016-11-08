// The main Vue Instance
// Docs: http://vuejs.org/api/
import Vue from 'vue'

// Import the App Component
import App from './App'

// The Vue Router Instance
// Docs: http://router.vuejs.org/en/index.html
import VueRouter from 'vue-router'

// Socket io implementation for VueJS
import VueSocketio from 'vue-socket.io'

// Import the components for each page
import Home from './components/Home'

// Component Pages
import CardsPage from './components/pages/CardsPage'
import ButtonsPage from './components/pages/ButtonsPage'
import ListsPage from './components/pages/ListsPage'
import TabsPage from './components/pages/TabsPage'
import DividersPage from './components/pages/DividersPage'
import ChipsPage from './components/pages/ChipsPage'
import DialogPage from './components/pages/DialogPage'
import DropdownPage from './components/pages/DropdownPage'
import ExpansionPanelPage from './components/pages/ExpansionPanelPage'
import FormsPage from './components/pages/FormsPage'
import SlidersPage from './components/pages/SlidersPage'
import ChatPage from './components/pages/ChatPage'

// use Vue Router
Vue.use(VueRouter)

// use Vue Socket.io
Vue.use(VueSocketio, '10.5.0.74:3000')

// Map the Routes and Components
var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    // Components
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
    },
    {
      path: '/components/chips',
      component: ChipsPage
    },
    {
      path: '/components/dialogs',
      component: DialogPage
    },
    {
      path: '/components/dropdowns',
      component: DropdownPage
    },
    {
      path: '/components/expansion-panels',
      component: ExpansionPanelPage
    },
    {
      path: '/components/forms',
      component: FormsPage
    },
    {
      path: '/components/sliders',
      component: SlidersPage
    },
    {
      path: '/examples/chat',
      component: ChatPage
    }

  ]
})

/* eslint-disable no-new, no-unused-vars */
const app = new Vue({
  router,
  ...App
}).$mount('#app')
