/**
 * 这是一个客户端权限全局指令，用于所有权限显示控制
 */
import Vue from 'vue'
import store from '../store'

// Rights 权限, 使用举例： v-right="'_IOA:C岗'"
Vue.directive('right', {
  inserted: function (el, binding) {
    // 当前用户权限
    const user = store.state.user;
    const powerArr = user.Role ? user.Role.Rights.split(',') : [];
    powerArr.push('', null, undefined);
    // 查询权限
    const value = binding.value;
    const result = powerArr.indexOf(value) != -1;
    console.log('[v-right权限]', value, result);
    if (!result) {
      el.style.display = "none";
      el.style.visibility = "hidden";
    }
  }
});

// business 岗位限制(2:A岗, 3:B岗, 4:C岗), 使用举例： v-business="2" 或 v-business="[2,3]"
Vue.directive('business', {
  inserted: function (el, binding) {
    // 当前用户信息
    const user = store.state.user;
    // 查询权限
    let value = binding.value;
    let result = false;
    switch (typeof value) {
      case 'object':
        result = value.indexOf(user.Business) != -1;
        break;
      case 'number':
        result = user.Business === value;;
        break;
    }
    console.log('[v-business权限]', value, result);
    if (!result) {
      el.style.display = "none";
      el.style.visibility = "hidden";
    }
  }
});
