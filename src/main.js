import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 定义全局属性
Vue.config.productionTip = false
Vue.prototype.$env = process.env;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
