<template>
<!-- The template element in vue files can only have one element with children.
That's how Vue requires it. -->
  <div>
    <h1>Hello world!</h1>
    <p>Server status: {{ status }}.</p>
    <button @click="changeStatus">Change status!</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  // data has been created as a function and not as an object:
  // - not to mess up with references
  // - not to be missplaced with the Vue Instance 'data' property
  data: function() {
    return {
      status: "critical"
    };
  },
  methods: {
    changeStatus() {
      this.status = "normal"
    } 
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
