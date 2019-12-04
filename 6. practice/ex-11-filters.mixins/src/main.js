import Vue from 'vue'
import App from './App.vue'
import { withLength } from './filters/filters';

Vue.config.productionTip = false

// append global filters
Vue.filter('with-length', withLength);

new Vue({
  render: h => h(App),
}).$mount('#app')