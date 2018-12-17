import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import '@/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '@/bower_components/font-awesome/css/font-awesome.min.css';
import '@/bower_components/Ionicons/css/ionicons.min.css';
import '@/dist/css/AdminLTE.min.css';
import '@/dist/css/skins/skin-blue.min.css';

import '@/bower_components/jquery/dist/jquery.min.js';
import '@/bower_components/bootstrap/dist/js/bootstrap.min.js';
import '@/dist/js/adminlte.min.js';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
