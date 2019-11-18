<template>
	<div>
		<h1>The User Page</h1>
		<hr />
		<button class="btn btn-default" @click="navigateToHome">Back home</button>
    <hr>
    <router-view></router-view>
	</div>
</template>

<script>
export default {
	methods: {
		navigateToHome() {
			// router is available because of .use on Vue
			this.$router.push("/");
		}
	}
};
</script>