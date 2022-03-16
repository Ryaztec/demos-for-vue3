import { rootStateType } from "../../types/storeTypes";

export type sweepMinesStateType = {
  initialMinesCount: number;
};

type getters = {
  getInitialMinesCount: () => number;
};

// initial state
const state: sweepMinesStateType = {
  initialMinesCount: 10,
};

// getters
const getters = {
  getInitialMinesCount: (
    state: sweepMinesStateType,
    _getters: getters,
    rootState: rootStateType
  ) => {
    return state.initialMinesCount;
  },
};

// actions
const actions = {};

// mutations
const mutations = {
  setInitialMinesCount(state: sweepMinesStateType, count: number) {
    state.initialMinesCount = count;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
