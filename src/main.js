import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
// import axios from 'axios'
import VueRouter from 'vue-router'
import store from './store/store'

import { routes } from './routes'

// axios.defaults.baseURL = 'http:localhost:3000'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})
 
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
