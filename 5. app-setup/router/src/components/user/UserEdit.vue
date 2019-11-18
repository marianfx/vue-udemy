<template>
	<div>
		<h3>Edit the User {{ id }}</h3>
		<p>Local param: {{ $route.query.queryParam1 }}</p>
        <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
        <div style="height: 700px"></div>
        <p id="specialdata">Special data</p>
	</div>
</template>

<script>
export default {
    data() {
        return {
            confirmed: false
        }
    },
	props: {
		id: {}
    },
    beforeRouteLeave(to, from, next) {
        if (this.confirmed)
            next();
        else {
            if (confirm('Are you sure?'))
                next();
            else 
                next(false);
        }
    }
};
</script>