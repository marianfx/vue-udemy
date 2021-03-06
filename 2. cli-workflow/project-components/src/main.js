import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// this is actually a service (ng)
export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit("ageChanged", age);
    }
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
