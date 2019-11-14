<template>
  <!-- FILTERS ARE PIPES -->
  <div class="row">
    <div class="col-xs-12">
      <h1>Filters & Mixins</h1>
      <p>{{ text | toUpperCase | to-lowercase }} </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Hello there!"
    }
  },
  // here they are declared with local scope. for global: Vue.filter('name', {} )
  filters: {
    toUpperCase(value) {
      return value.toUpperCase();
    }
  }
};
</script>

<style>
</style>
