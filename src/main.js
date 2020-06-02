import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueFeather from 'vue-feather'

Vue.component(VueFeather.name, VueFeather);
window.$ = window.jQuery = require('jquery');
require('bootstrap');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
