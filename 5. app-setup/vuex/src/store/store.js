import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 0
    },
    getters: {
        doubleCounter(state) {
            return state.counter * 2;
        },
        stringCounter(state) {
            return state.counter + " clicks";
        },
        value(state) {
            return state.value;
        }
    },
    mutations: {
        increment(state, data) {
            state.counter += data;
        },
        // MUTATIONS HAVE TO BE SYNC
        decrement(state, data) {
            state.counter -= data;
        },
        updateValue(state, data) {
            state.value = data;
        }
    },
    actions: {
        // recommended to use actions to commit changes. can also use async code
        increment(context, data) {
            context.commit('increment', data);
        },
        decrement(context, data) {
            context.commit('decrement', data);
        },
        incrementAsync(context, data) {
            setTimeout( () => { context.commit('increment', data.by); }, data.time)
            
        },
        decrementAsync(context, data) {
            setTimeout( () => { context.commit('decrement', data.by); }, data.time)
        },
        updateValue(context, data) {
            context.commit('updateValue', data);
        }
    }
});
