import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import '@/bower_components/bootstrap/dist/css/bootstrap.min.css';
import '@/bower_components/font-awesome/css/font-awesome.min.css';
import '@/bower_components/Ionicons/css/ionicons.min.css';
import '@/dist/css/AdminLTE.min.css';

import '@/bower_components/jquery/dist/jquery.min.js';
import '@/bower_components/bootstrap/dist/js/bootstrap.min.js';
// test
// import '@/bower_components/jquery-ui/jquery-ui.min.js';
import '@/bower_components/jquery-slimscroll/jquery.slimscroll.min.js';
import '@/bower_components/fastclick/lib/fastclick.js';
// test
import '@/dist/js/adminlte.min.js';
// import "@/bower_components/moment/moment.js";
// import "@/bower_components/fullcalendar/dist/fullcalendar.min.js";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
