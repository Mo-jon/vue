import Vue from 'vue'
import Vuex from 'vuex'
import LocalStorage from './localStorage'
Vue.use(Vuex)

 // Vuex模块
import City from "./modules/city"

/**
 * vuex 使用注意事项
 * mutations、actions 只负责修改 state，不返回数据
 * 数据从 state、getters 读取
 * modules 负责模块化
 */

export default new Vuex.Store({
  // 属性
  state: {
    /**登录信息 */
    user: null
  },
  // 计算属性
  getters: {
    /**登录token */
    token(state) {
      return state.user ? state.user.token : ''
    }
  },
  // 方法(限制异步)
  mutations: {
    /**登录 */
    login(state, data) {
      try {
        LocalStorage.set('user', data)
        let user = LocalStorage.get('user')
        state.user = user
      } catch (err) {
        console.error(err);
      }
    },
    /**登出 */
    logout(state) {
      try {
        LocalStorage.set('user', null)
        state.user = null
      } catch (err) {
        console.error(err);
      }
    }
  },
  // Action 提交的是 mutation，不直接变更状态(可以使 mutations 方法异步执行); 比如调用后台数据 api
  actions: {
    /**更新用户信息 */
    updataUser({
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