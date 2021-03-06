import Vue from 'vue';
import Vuex, { ActionTree } from 'vuex';
import { RootStateInterface } from './root_state.interface';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

Vue.use(Vuex);

export default new Vuex.Store<RootStateInterface>({
  state: {
    baseUrl: 'http://localhost:3000/',
    message: 'hello',
    posts: []
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {},
});
