<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <hr>
                <app-counter></app-counter>
                <hr>
                <app-another-counter></app-another-counter>
                <hr>
                <app-another-result></app-another-result>
                <input type="text" v-model="value">
                <p>{{ value }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/counter/Counter.vue';
    import Result from './components/Result.vue';
    import AnotherResultVue from './components/AnotherResult.vue';
import AnotherCounterVue from './components/AnotherCounter.vue';

    export default {
        computed: {
            value: {
                get() {
                    return this.$store.getters.value;
                },
                set(value) {
                    console.log("entered setter");
                    this.$store.dispatch('updateValue', value);
                }
            }
        },
        components: {
            appCounter: Counter,
            appResult: Result,
            appAnotherResult: AnotherResultVue,
            appAnotherCounter: AnotherCounterVue
        }
    }
</script>

