import Vue from 'vue'
import Vuex from 'vuex'
import globalAxios from 'axios';
import axios from './axios-auth'

import router from './router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUser(state, userData) {
      state.user = userData;
      state.userId = userData.id;
    },
    clearAuthData(state) {
      state.idToken = null;
      state.user = null;
      state.userId = null;
    }

  },
  actions: {
    signUp(context, formData) {
      axios.post("/accounts:signUp?key=AIzaSyCnLAp23j7MryCVYNC2t0vpY_GFnbymrdo", {
          email: formData.email,
          password: formData.password,
          returnSecureToken: true
        })
        .then((r) => {
          console.log("Finished", r);
          context.commit('authUser', {
            token: r.data.idToken,
            userId: r.data.localId
          });
          context.dispatch('storeUser', formData);
        }).catch((err) => {
          console.log(err);
        });
    },
    login(context, formData) {
      axios.post("/accounts:signInWithPassword?key=AIzaSyCnLAp23j7MryCVYNC2t0vpY_GFnbymrdo", {
          email: formData.email,
          password: formData.password,
          returnSecureToken: true
        })
        .then((r) => {
          console.log("Finished", r);
          context.commit('authUser', {
            token: r.data.idToken,
            userId: r.data.localId
          });
          router.push('/dashboard');
        }).catch((err) => {
          console.log(err);
        });
    },
    logout(context) {
      context.commit('clearAuthData');
      router.replace('/signin');
    },
    storeUser(context, user) {
      if (!context.state.idToken) return;

      // the initial code
      globalAxios.post('/users.json?auth=' + context.state.idToken, user)
        .then((r) => {
          console.log(r);
        })
        .catch((err) => {
          console.log(err)
        });
    },
    fetchUser(context) {
      if (!context.state.idToken) return;
      
      globalAxios.get("/users.json?auth=" + context.state.idToken)
        .then((resp) => {
          console.log(resp);
          const data = resp.data;
          const users = [];
          for (let key in data) {
            const user = data[key];
            user.id = key;
            users.push(user);
          }
          context.commit('storeUser', users[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  getters: {
      user(state) {
        return state.user;
      },
      isAuthenticated(state) {
        return state.idToken;
      }
  }
})