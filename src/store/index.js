import Vue from 'vue'
import Vuex from 'vuex'
import {
  City
} from "./modules/city" // 引入城市模块

Vue.use(Vuex)

/**
 * vuex 使用注意事项
 * mutations、actions 只负责修改 state，不返回数据
 * 数据从 state、getters 读取
 * modules 负责模块化
 */

export default new Vuex.Store({
  // 属性
  state: {
    userInfo: {
      id: 0,
      name: 'mojon'
    }
  },
  // 计算属性
  getters: {
    userName(state) {
      return state.userInfo.name
    }
  },
  // 方法(限制异步)
  mutations: {
    login(state, userInfo) {
      state.userInfo = userInfo
    },
    logout(state) {
      state.userInfo = null
    }
  },
  // Action 提交的是 mutation，不直接变更状态(可以使 mutations 方法异步执行); 比如调用后台数据 api
  actions: {
    updataUserInfo({
      commit
    }) {
      console.log('actions is coming');
      setTimeout(() => {
        let id = Math.round(Math.random() * 100);
        commit('login', {
          id,
          name: 'actionsUser'
        })
      }, 1000)
    }
  },
  // 模块化 store
  modules: {
    city: City
  }
})