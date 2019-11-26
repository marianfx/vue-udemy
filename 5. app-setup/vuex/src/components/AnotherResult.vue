<template>
<div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of clicks: {{ stringCounter }} </p>
</div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import * as types from './../store/types';

    export default {
        computed: {
            ...mapGetters({
                doubleCounter: types.DOUBLE_COUNTER, 
                stringCounter: types.STRING_COUNTER
                }),
            someOtherProp() {
                return "Some value";
            }
        /* alt syntax: computed: mapGetters({ nameHere: 'nameThere'}) */
        }
        }
</script>