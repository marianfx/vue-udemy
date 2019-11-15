<template>
  <!-- FILTERS ARE PIPES -->
  <div class="row">
    <div class="col-xs-12">
      <h1>Filters & Mixins</h1>
      <p>{{ text | toUpperCase | to-lowercase }} </p>
      <hr>
      <h3> This is from App.vue</h3>
      <div class="row">
        <div class="col-xs-12">
          <input v-model="filterText" placeholder="Filter fruits">
          <ul>
            <li v-for="fruit in filteredFruits" :key="fruit"> {{ fruit }} </li>
          </ul>
        </div>
      </div>

      <h3>This is from List.vue</h3>
      <app-list></app-list>
    </div>
  </div>
</template>

<script>
import ListVue from './components/List.vue';
import { fruitMixin } from "./mixins/fruitMixin";

export default {
  data() {
    return {
      text: ''
    };
  },
  mixins: [ fruitMixin ],
  components: {
    'app-list': ListVue
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
