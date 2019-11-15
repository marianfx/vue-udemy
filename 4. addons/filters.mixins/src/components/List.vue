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
import { fruitMixin } from "./../mixins//fruitMixin";

export default {
  mixins: [ fruitMixin ],
  created() {
    console.log("List.vue: created");
  }
};
</script>

<style>
</style>
