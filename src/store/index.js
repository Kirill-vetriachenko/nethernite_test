import Vue from 'vue'
import Vuex from 'vuex'
import { getPopularPackages, searchPackages, getPackageInfo } from '@/api/packages';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isOpenDialog: false,
    currentDialogData: {},
    searchQuery: '',
    packages: [],
    isLoading: false
  },
  mutations: {
    SET_DIALOG_STATE(state, value) {
      state.isOpenDialog = value;
    },
    SET_PACKAGES(state, data) {
      state.packages = data;
    },
    SET_CURRENT_PACKAGE(state, data) {
      state.currentDialogData = data;
    },
    SET_LOADING(state, value) {
      state.isLoading = value
    }
  },
  actions: {
    OPEN_DIALOG({ dispatch, commit}, data) {
      dispatch('GET_PACKAGE_INFO', data.name)
      commit("SET_DIALOG_STATE", true)
    },
    CLOSE_DIALOG({commit}) {
      commit("SET_DIALOG_STATE", false);
      commit('SET_CURRENT_PACKAGE', {})


    },
    GET_PACKAGES({commit}) {
      getPopularPackages().then(res => {
        commit('SET_PACKAGES', res.data)
      })
    },
    SEARCH_PACKAGES({state}, query) {
      searchPackages(query).then(res => {
        const result = res.data.map(item => {
          return {
            name: item.package.name,
          }
        })
        state.packages = result;
      })
    },
    GET_PACKAGE_INFO({commit}, name) {
      getPackageInfo(name).then(res => {
        commit('SET_CURRENT_PACKAGE', res.data)
      })
    }
  },
  getters: {
    IS_OPEN_DIALOG(state) {
      return state.isOpenDialog
    },
    CURRENT_DIALOG_DATA(state) {
      return state.currentDialogData
    },
    PACKAGES(state) {
      return state.packages
    },
    IS_LOADING(state) {
      return state.isLoading
    }
  },
})
