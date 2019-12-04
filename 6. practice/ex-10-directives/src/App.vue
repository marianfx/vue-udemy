<template>
  <div id="app">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-fx-on:click="customAction">I do action on click</button>
                <button v-fx-on:mouseover="customAction">I do action on mouse over</button>

            </div>
        </div>
    </div>
  </div>
</template>

<script>
import FxOnDirective from './directives/fx-on.js';
  export default {
    name: 'app',
    methods: {
      customAction() {
        console.log("Action called");
      }
    },
    directives: {
      "fx-on": FxOnDirective
    }
  }
</script>

<style>

</style>