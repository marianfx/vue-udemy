import Vue from 'vue';
import Vuex from 'vuex';
import { counter } from './modules/counter';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters: {
        value(state) {
            return state.value;
        }
    },
    mutations: {
        updateValue(state, data) {
            state.value = data;
        }
    },
    actions: {
        updateValue(context, data) {
            context.commit('updateValue', data);
        }
    },
    modules: {
        counter
    }
});
