import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: "",
  },
  mutations: {
    setData(state, payLoad) {
      Vue.set(state, "data", payLoad);
    },
  },
  actions: {
    setData({ commit }, payLoad) {
      commit("setData", payLoad);
    },
  },
  modules: {},
  getters: {
    getData(state) {
      return state.data;
    },
  },
});
