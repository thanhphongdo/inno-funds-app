import { GetterTree } from 'vuex';
import { RootStateInterface } from './root_state.interface';
import { Getters } from './enums';

export const getters: GetterTree<RootStateInterface, RootStateInterface> = {
  [Getters.message](state) {
    return state.message;
  },
  [Getters.posts](state) {
    return state.posts;
  }
}