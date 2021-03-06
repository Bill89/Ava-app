import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false, // 是否显示loading
    loadingState: '1', // '0' 不显示, 1' 显示不阻塞, '2'显示阻塞
    routerViewKey: ''
  },
  mutations: {
    // 修改loadingState只commit此方法
    SET_LOADING_STATE(state, data) {
      state.isLoading = false
      state.loadingState = data
    }
  },
  actions: {}
})
