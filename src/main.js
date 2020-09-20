import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueFeather from 'vue-feather'
import VueResource from 'vue-resource'

Vue.component(VueFeather.name, VueFeather);
Vue.use(VueResource);
window.$ = window.jQuery = require('jquery');
window.axios = require('axios').create({
  baseURL: '/',
});
require('bootstrap');

Vue.config.productionTip = false


Vue.mixin({
  data() {
    return {
      serviceMobile: '930430929',
    }
  },
  methods: {
    isMobile() { 
      if ( navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
