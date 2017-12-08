// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'

import VueFire from 'vuefire'
import Firebase from 'firebase'
import Buefy from 'buefy'
import VueMoment from 'vue-moment'

import 'buefy/lib/buefy.css'

Vue.use(VueFire)
Vue.use(Buefy)
Vue.use(VueMoment)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
