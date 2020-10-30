import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/styles/reset.css'    // 样式重置
import '@/assets/styles/globals.scss' // 全局样式
import './directives' // 自定义指令
import './filters'    // 自定义过滤器
import './tools'      // 工具方法

// 全局属性设置
Vue.config.productionTip = false
Vue.prototype.$env = process.env;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')