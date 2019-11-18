<template>
	<div>
		<h3>Some User Details</h3>
		<p>User ID: {{ id }}</p>
		<!-- Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div id="{{ val }}">, use <div :id="val"> -->
		<router-link tag="button" class="btn btn-danger" :to="link">Edit</router-link>
	</div>
</template>
<script>
export default {
	data() {
		return {
			link: {
				name: "userEdit",
				params: { id: this.id },
                query: { queryParam1: 1 },
                hash: '#specialdata'
			}
		};
	},
	props: {
		id: {}
    },
    beforeRouteEnter(to, from, next ){
        // here no data of this component exists
        console.log("Before Enter: inside component");
        if (true)
            next();
        else
            next(false);
        // could use next(vm => {} ) to do something after the com is initialized
    }
};
</script>