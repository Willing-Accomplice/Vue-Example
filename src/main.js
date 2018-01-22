import Vue from 'vue'
import VueFire from 'vuefire'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'

import router from './components/router/router'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false
Vue.use(VueFire)
Vue.use(BootstrapVue);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})