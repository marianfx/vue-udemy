import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        doubleCounter(state) {
            return state.counter * 2;
        },
        stringCounter(state) {
            return state.counter + " clicks";
        }
    },
    mutations: {
        increment(state, data) {
            state.counter += data;
        },
        // MUTATIONS HAVE TO BE SYNC
        decrement(state) {
            state.counter --;
        }
    },
    actions: {
        // recommended to use actions to commit changes. can also use async code
        increment(context, data) {
            context.commit('increment', data);
        },
        decrement(context) {
            context.commit('decrement');
        },
        incrementAsync(context) {
            setTimeout( () => { context.commit('increment'); }, 1000)
            
        },
        decrementAsync(context) {
            setTimeout( () => { context.commit('decrement'); }, 1000)
        }
    }
});
