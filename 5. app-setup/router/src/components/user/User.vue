<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <button @click="navigateToHome">Back home</button>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
        // router is available because of .use on Vue
        this.$router.push('/');
    }
  }
};
</script>