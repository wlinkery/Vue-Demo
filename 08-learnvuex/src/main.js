import Vue from 'vue'
import App from './App'
import store from './store'
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.prototype.$store=store

new Vue({
  el: '#app',
  render: h => h(App)
})
