import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// global filter
Vue.filter('to-lowercase', (value) => {
  return value.toLowerCase();
});

// global mixins should be used only if developping plugins or similar
// it's added to all instances of all components (still lives in separate instances)
// created once also for main.js. => 3 creations
Vue.mixin({
  created() {
    console.log("Global mixin: created");
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')