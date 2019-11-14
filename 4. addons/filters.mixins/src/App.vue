<template>
  <!-- FILTERS ARE PIPES -->
  <div class="row">
    <div class="col-xs-12">
      <h1>Filters & Mixins</h1>
      <p>{{ text | toUpperCase | to-lowercase }} </p>
      <hr>

      <!-- Filters are re-rendered each time any property change.
      Computed property change only that property changes -->
      <input v-model="filterText" placeholder="Filter fruits">
      <ul>
        <li v-for="fruit in filteredFruits" :key="fruit"> {{ fruit }} </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "Hello there!",
      filterText: '',
      fruits: ['Apple', 'Banana', 'Mango']
    }
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => {
        return element.match(this.filterText);
      })
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
