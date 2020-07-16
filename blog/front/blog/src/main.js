import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

import router from './router/router.js'
import store from './store/store.js'

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.commit('init')
  },
  render: h => h(App),
}).$mount('#app')
