import { createStore } from 'vuex';

const store = createStore({
  state: {
    token: localStorage.getItem('accessToken') ||'',
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('accessToken', token)
    },
  },
  actions: {
    updateToken({ commit }, token) {
      commit('setToken', token);
    },
  },
  getters: {
    getToken: (state) => state.token,
  },
});

export default store;
