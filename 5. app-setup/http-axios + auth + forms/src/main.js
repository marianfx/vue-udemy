import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import Vuelidate from 'vuelidate';

Vue.config.productionTip = false

// this is global configuration; set worldwide
// can be specified as 3rd config, at request level
axios.defaults.baseURL = "https://ng-vue.firebaseio.com"
// axios.defaults.headers.common['Authorization'] = ''; // this targets all requests
// axios.defaults.headers.get['Accepts'] = 'application/json'; // this targets only get requests

// interceptors
const reqInterceptorId = axios.interceptors.request.use(config => {
  console.log("Intercepted", config);
  return config; // must return, otherwise blocking
})

const respInterceptorId = axios.interceptors.response.use(response => {
  console.log("Intercepted response", response);
  return response;
})

// how to remove interceptors
// axios.interceptors.request.eject(reqInterceptorId);
// axios.interceptors.request.eject(respInterceptorId);

Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')