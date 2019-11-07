<template>
<!-- The template element in vue files can only have one element with children.
That's how Vue requires it. -->
  <div>
    <h1>Hello world!</h1>
    <app-server-status v-for="server in 5" :key="server"></app-server-status>
    <!-- Another way is to not define a name and use <ServerStatus></ServerStatus> -->
  </div>
</template>

<script>
import ServerStatus from './ServerStatus.vue';

export default {
  name: "HelloWorld",
  components: {
    'app-server-status': ServerStatus
  },
  // data has been created as a function and not as an object:
  // - not to mess up with references
  // - not to be missplaced with the Vue Instance 'data' property
  data: function() {
    return {
      servers: []
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
