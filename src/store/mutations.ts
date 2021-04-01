import { MutationTree } from 'vuex';
import { RootStateInterface, Post } from './root_state.interface';
import { Actions } from './enums';

export const mutations: MutationTree<RootStateInterface> = {
  [Actions.changeMessage](state, message: string) {
    state.message = message;
  },
  [Actions.fetchPost](state, posts: Array<Post>) {
    posts.forEach(post => {
      state.posts.push(post);
    });
  }
}