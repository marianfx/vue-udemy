<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Name: {{ name }} </p>
        <button @click="reverseName">Reverse name</button>
        <button @click="resetName">Reset name</button>
        <button @click="resetFn">Reset name parent</button>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
            // default: "Name" OR
            // default: function() { return {} }
        }, // basically validations
        resetFn: {
            type: Function
        }
    },
    methods: {
        reverseName() {
            this.name = this.name.split("").reverse().join("");
        },
        resetName() {
            this.name = "new name"; // IF THIS WOULD BE AN OBJECT, it would be reference type and will also change it in the parent component
            this.$emit('nameWasReset', this.name);
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
