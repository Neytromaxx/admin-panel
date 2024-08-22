import { createStore } from 'vuex';

const store = createStore({
  state: {
    token: localStorage.getItem('accessToken') ||'',
  },
  mutations: {
    setToken(state, token) {
      console.log('mutatsiya:',token)
      state.token = token;
      localStorage.setItem('accessToken', token)
    },
  },
  actions: {
    updateToken({ commit }, token) {
      console.log('action:',token)
      commit('setToken', token);
    },
  },
  getters: {
    getToken: (state) => state.token,
  },
});
console.log(store.getters.getToken)

export default store;
