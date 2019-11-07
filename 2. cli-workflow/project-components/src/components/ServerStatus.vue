<template>
<!-- The template element in vue files can only have one element with children.
That's how Vue requires it. -->
  <div>
    My status: {{ status }}
    <button @click="changeStatus">Change status!</button>
  </div>
</template>

<script>
export default {
  name: "ServerStatus",
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
          this.status = "normal";
      }
  }
};
</script>

<style scoped>
 /* What I write here is global in the entire app; not highly recommended; If I add scoped => no more */
 /* This seems like changing style does not auto refresh in browser */
 div { 
     border: 1px solid red;
 }
</style>