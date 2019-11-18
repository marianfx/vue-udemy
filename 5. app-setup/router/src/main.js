import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

Vue.config.productionTip = false

// add plugin
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      
      if (to.hash) {
        return { selector: to.hash };
      }

      return { x : 0, y : 0 };
  }
});

// generic checks, executed before each route access
router.beforeEach((to, from, next) => {
  console.log("Before: GLOBAL");
  next(); // or next(path) or next (path)
});

new Vue({
  router: router, // shorthand: just router
  render: h => h(App),
}).$mount('#app')