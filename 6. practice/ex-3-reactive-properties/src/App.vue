<template>
  <div id="app" class="container">
    <!-- 1) Show a "result" of 'not there yet' as long as "value" is not equal to 37 - you can change "value" with the buttons. Print 'done' once you did it -->
    <div>
        <p>Current Value: {{ value }}</p>
        <button @click="value += 5">Add 5</button>
        <button @click="value += 1">Add 1</button>
        <p>{{ result }}</p>
    </div>
    <!-- 2) Watch for changes in the "result" and reset the "value" after 5 seconds (hint: setTimeout(..., 5000) -->
    <div>
        <input type="text">
        <p>{{ value }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        value: 0
      }
    },
    computed: {
      result() {
        return this.value >= 37 ? 'DONE' : 'Not there yet!';
      }
    },
    watch: {
      result() {
        setTimeout(() => { this.value = 0; }, 5000);
      }
    }
  }
</script>

<style>

</style>