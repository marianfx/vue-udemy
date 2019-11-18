<template>
	<div>
		<h3>Edit the User {{ id }}</h3>
		<p>Local param: {{ $route.query.queryParam1 }}</p>
	</div>
</template>

<script>
export default {
	props: {
		id: {}
	}
};
</script>