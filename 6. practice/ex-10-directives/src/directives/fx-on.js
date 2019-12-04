export default {
    bind(el, binding, vnode) {
        console.log(el);
        console.log(binding);
        el.addEventListener(binding.arg, binding.value);
    }
}
