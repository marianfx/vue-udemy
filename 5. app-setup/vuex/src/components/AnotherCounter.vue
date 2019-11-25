<template>
    <div>
        <button class="btn btn-primary" @click="incrementAsync({by: 50, time: 1000})">Increment</button>
        <button class="btn btn-primary" @click="decrementAsync({by: 100, time: 2000})">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions(['incrementAsync', 'decrementAsync'])
        }
    }
</script>