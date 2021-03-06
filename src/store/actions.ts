import { ActionTree } from 'vuex';
import { Object } from 'parse';
import { RootStateInterface } from './root_state.interface';
import { BaseAxios } from '../utils/axios';
import { Actions } from './enums';
import { ParseBase } from '../utils/parse';

const axios = new BaseAxios('http://localhost:3000/');

export const actions: ActionTree<RootStateInterface, RootStateInterface> = {
  async [Actions.changeMessage]({ commit }, message: string) {
    function timeout() {
      return new Promise((resolve: Function, reject: Function) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
    }
    await timeout();
    commit(Actions.changeMessage, message);
  },
  async [Actions.fetchDataTest]({ commit, state }, params: Array<any>) {
    return axios.get<{ data: Array<any> }>('api/project').then(response => {
      commit(Actions.fetchDataTest, response.data.data);
    });
  },
  async [Actions.fetchPost]({ commit, state }, { page, perPage }) {
    const response = await ParseBase.runCloud<{
      page: number,
      perPage: number,
      data: Array<Object>
    }>('listPost', {
      page: page,
      perPage: perPage,
      text: '12345'
    });
    commit(Actions.fetchPost, response.data);
  }
}