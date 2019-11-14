import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// directive example
Vue.directive('highlight', {
  // bind (el, binding, vnode) -> once directive is attached to element
  // inserted(el, binding, vnode) -> inserted in parent node (in DOM)
  // update(el, binding, vnode, oldVnode) -> when the directive is updating (but not the component itself, it is not updated)
  // componentUpdated(el, binding, vnode, oldVnode) -> when everything has been updated
  // unbind(el, binding, vnode) -> removed from element
  
  // bind (el, binding, vnode) -> once directive is attached to element
  bind(el, binding, vnode) {
    // el is ElementRef
    // el.style.backgroundColor = 'green';
    el.style.backgroundColor = binding.value; // the value passed
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
