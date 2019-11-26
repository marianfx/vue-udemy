
    import { mapActions } from 'vuex';
    export default {
        methods: {
            ...mapActions(['increment', 'decrement'])
        }
    }