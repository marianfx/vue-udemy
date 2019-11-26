import * as types from './../types';

const state = {
    counter: 0
};

// FOR NAMESPACE CAN ALSO USE AUTONAMESPACE (NEW FEATURE)
// https://github.com/vuejs/vuex/releases/tag/v2.1.0

const getters = {
    [types.DOUBLE_COUNTER]: (state) => {
        return state.counter * 2;
    },
    [types.STRING_COUNTER]: (state) => {
        return state.counter + " clicks";
    },
};

const mutations = {
    increment(state, data) {
        state.counter += data;
    },
    // MUTATIONS HAVE TO BE SYNC
    decrement(state, data) {
        state.counter -= data;
    },
};

const actions = {
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
};

export const counter = {
    state,
    getters,
    mutations,
    actions
};