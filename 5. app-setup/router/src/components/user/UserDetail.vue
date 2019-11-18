<template>
<div>
    <h3>Some User Details</h3>
    <p>User ID: {{ id }}</p>
    <!-- Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div id="{{ val }}">, use <div :id="val"> -->
    <router-link tag="button" class="btn btn-danger" 
        :to="{ name: 'userEdit', params: { id: id }}"> Edit </router-link>
</div>
</template>
<script>
export default {
    props: {
        id: {}
    }
}
</script>