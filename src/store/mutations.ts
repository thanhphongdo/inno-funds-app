import { MutationTree } from 'vuex';
import { Object } from 'parse';
import { RootStateInterface } from './root_state.interface';
import { Actions } from './enums';

export const mutations: MutationTree<RootStateInterface> = {
  [Actions.changeMessage](state, message: string) {
    state.message = message;
  },
  [Actions.fetchPost](state, posts: Array<Object>) {
    posts.forEach(post => {
      state.posts.push(post);
    });
  }
}