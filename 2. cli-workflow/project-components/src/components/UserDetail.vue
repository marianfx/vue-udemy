<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Name: {{ name }} </p>
        <button @click="reverseName">Reverse name</button>
    </div>
</template>

<script>
export default {
    props: ['name'],
    methods: {
        reverseName() {
            this.name = this.name.split("").reverse().join("");
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
