<template>
	<div>
		<h1>The User Page</h1>
		<hr />
		<p>Loaded ID: {{ id }}</p>
		<button @click="navigateToHome">Back home</button>
	</div>
</template>

<script>
export default {
	// data() {
  //     return {
	// 		userId: this.$route.params.id // this exists when route is rendered, si it's ok for now
	// 	};
  // },
  // watch: {
  //   '$route'(to, from) {
  //       this.userId = to.params.id;
  //   }
  // },
  props: {
    id: { type: String, default: -1}
  },
	methods: {
		navigateToHome() {
			// router is available because of .use on Vue
			this.$router.push("/");
		}
	}
};
</script>