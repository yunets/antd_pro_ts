import { Effect } from 'dva';
import { Reducer } from 'redux';

import { queryCurrent, query as queryUsers } from '@/services/user';

export interface Container {
  containerId?: string;
  name?: string;
  containerCode?: string;
  description?: string;

}

export interface ContainerModelState {
  containerInfo?: Container;
  containerList: Container[];
}

export interface ContainerModelType {
  namespace: 'container';
  state: ContainerModelState;
  effects: {
    fetch: Effect;
    fetchCurrent: Effect;
  };
  reducers: {
    saveContainer: Reducer<ContainerModelState>;
    changeNotifyCount: Reducer<ContainerModelState>;
  };
}

const ContainerModel: ContainerModelType = {
  namespace: 'container',

  state: {
    containerInfo: {},
    containerList: [],
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveContainer',
        payload: response,
      });
    },
  },

  reducers: {
    saveContainer(state, action) {
      return {
        ...state,
        Container: action.payload || {},
      };
    },

  },
};

export default ContainerModel;
