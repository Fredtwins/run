import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)


// 导出
export default new Vuex.Store({
  // state是全局共用的数据
  state,
  actions: {
    changcity (ctx, city) {
      // actions想调用mutations的话需要用commit这个方法
      ctx.commit('changcity', city)
    }
  },
  // mutations来改变state的值
  mutations
})
