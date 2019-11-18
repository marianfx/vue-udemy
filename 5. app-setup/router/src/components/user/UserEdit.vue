<template>
	<div>
		<h3>Edit the User {{ id }}</h3>
		<p>Local param: {{ $route.query.queryParam1 }}</p>
        <button class="btn btn-primary">Confirm</button>
        <div style="height: 700px"></div>
        <p id="specialdata">Special data</p>
	</div>
</template>

<script>
export default {
	props: {
		id: {}
	}
};
</script>