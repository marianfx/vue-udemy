<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    import * as types from './../store/types';
import { type } from 'os';
    export default {
        computed: {
            counter() {
                return this.$store.getters[types.DOUBLE_COUNTER];
            }
        }
    }
</script>