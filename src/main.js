// The main Vue Instance
// Docs: http://vuejs.org/api/
import Vue from 'vue'

// Import the App Component
import App from './App'

// The Vue Router Instance
// Docs: http://router.vuejs.org/en/index.html
import VueRouter from 'vue-router'

// Socket io implementation for VueJS
// import VueSocketio from 'vue-socket.io'

// Vue validation
// https://github.com/logaretm/vee-validate
import VeeValidate from 'vee-validate'
const config = {
  errorBagName: 'errors', // change if property conflicts.
  delay: 0,
  locale: 'en',
  messages: null,
  strict: true
}
Vue.use(VeeValidate, config)

// Import the components for each page
import Home from './components/Home'
import GettingStartedPage from './components/pages/GettingStartedPage'

// Component Pages
import CardsPage from './components/pages/CardsPage'
import ButtonsPage from './components/pages/ButtonsPage'
import ListsPage from './components/pages/ListsPage'
import TabsPage from './components/pages/TabsPage'
import DividersPage from './components/pages/DividersPage'
import ChipsPage from './components/pages/ChipsPage'
import DataTablesPage from './components/pages/DataTablesPage'
import DialogPage from './components/pages/DialogPage'
import DropdownPage from './components/pages/DropdownPage'
import ExpansionPanelPage from './components/pages/ExpansionPanelPage'
import FormsPage from './components/pages/FormsPage'
import SlidersPage from './components/pages/SlidersPage'
import ToastsPage from './components/pages/ToastsPage'

// Example Pages
import ChatPage from './components/pages/ChatPage'

console.log(GettingStartedPage)
// use Vue Router
Vue.use(VueRouter)

// use Vue Socket.io
// Vue.use(VueSocketio, '10.5.0.74:3000')

// Set up an event bus
var bus = new Vue({})
Object.defineProperty(Vue.prototype, '$bus', {
  get () {
    return bus
  }
})

// Map the Routes and Components
var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/getting',
      component: GettingStartedPage
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
      path: '/components/datatables',
      component: DataTablesPage
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
    },
    {
      path: '/components/toasts',
      component: ToastsPage
    }

  ]
})

/* eslint-disable no-new, no-unused-vars */
const app = new Vue({
  router,
  ...App
}).$mount('#app')
