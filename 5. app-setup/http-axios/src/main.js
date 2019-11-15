import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';

Vue.config.productionTip = false

// this is global configuration; set worldwide
// can be specified as 3rd config, at request level
axios.defaults.baseURL = "https://ng-vue.firebaseio.com"
// axios.defaults.headers.common['Authorization'] = ''; // this targets all requests
// axios.defaults.headers.get['Accepts'] = 'application/json'; // this targets only get requests


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')