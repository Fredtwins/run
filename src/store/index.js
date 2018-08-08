import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 导出
export default new Vuex.Store({
  // state是全局共用的数据
  state: {
    city: '北京'
  },
  actions: {
    changcity (ctx, city) {
      // actions想调用mutations的话需要用commit这个方法
      ctx.commit('changcity', city)
    }
  },
  // mutations来改变state的值
  mutations: {
    changcity (state, city) {
      state.city = city
    },
    changlist (state, list) {
      state.city = list
    }
  }
})
