<template>
  <div id="app" class="container">
    <!-- 1) Show an alert when the Button gets clicked -->
    <div>
        <button @click="showSweetAlert">Show Alert</button>
    </div>
    <!-- 2) Listen to the "keydown" event and store the value in a data property (hint: event.target.value gives you the value) -->
    <div>
        <input @keydown="value = $event.target.value" type="text">
        <p>{{ value }}</p>
    </div>
    <!-- 3) Adjust the example from 2) to only fire if the "key down" is the ENTER key -->
    <div>
        <input @keydown.enter="value = $event.target.value" type="text">
        <p>{{ value }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        value: ''
      }
    },
    methods: {
      showSweetAlert() {
        alert("Yes, you are!");
      }
    }
  }
</script>

<style>

</style>