<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Name: {{ name }} </p>
        <p>Age: {{ userAge }} </p>
        <button @click="reverseName">Reverse name</button>
        <button @click="resetName">Reset name</button>
        <button @click="resetFn">Reset name parent</button>
    </div>
</template>

<script>
import { eventBus } from "../main";

export default {
    created() { // lifecycle
        eventBus.$on("ageChanged", this.onNameChanged.bind(this));
    },
    props: {
        name: {
            type: String,
            required: true,
            // default: "Name" OR
            // default: function() { return {} }
        }, // basically validations
        userAge: { type: Number },
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
        },
        onNameChanged(data) {
            this.userAge = data;
        }
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
