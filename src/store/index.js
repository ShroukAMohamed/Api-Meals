import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import getters from "./getters";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";

export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {},
});
