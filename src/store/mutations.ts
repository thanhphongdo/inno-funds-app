import { MutationTree } from 'vuex';
import { RootStateInterface } from './root_state.interface';
import { Actions } from './enums';

export const mutations: MutationTree<RootStateInterface> = {
    [Actions.changeMessage](state, message: string) {
        state.message = message;
    }
}