// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueFire from 'vuefire'
import Firebase from 'firebase'
import Buefy from 'buefy'
import VueMoment from 'vue-moment'
import Vuex from 'vuex'

import 'buefy/lib/buefy.css'

Vue.use(VueFire)
Vue.use(Buefy)
Vue.use(VueMoment)
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// Vuex
const store = new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    login(state, user) {
      state.user = user
    },
    logout(state) {
      state.user = null
    }
  }
})