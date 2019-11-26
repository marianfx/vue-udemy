import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
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
            context.commit('authUser', { token: r.data.idToken, userId: r.data.localId });
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
            context.commit('authUser', { token: r.data.idToken, userId: r.data.localId });
          }).catch((err) => {
            console.log(err);
          });
      }
  },
  getters: {

  }
})