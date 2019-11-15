<template>
  <!-- FILTERS ARE PIPES -->
  <div class="row">
    <div class="col-xs-12">
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
  }
};
</script>

<style>
</style>
