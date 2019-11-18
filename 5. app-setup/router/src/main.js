import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

Vue.config.productionTip = false

// add plugin
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  router: router, // shorthand: just router
  render: h => h(App),
}).$mount('#app')