import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

var apiUri = 'http://localhost'

import store from 'store/index.js'

new Vue({
  render: h => h(App),
}).$mount('#app')
