/**
 * 这是一个全局过滤器文件
 */
import Vue from 'vue'

// 金额单位换算转换（分->元）
Vue.filter('amountUnit', function (value) {
  // console.log('金额单位换算转换')
  if (!value) return '0'
  if (Number(value * 0.01) % 1 > 0) {
    return Number(value * 0.01).toFixed(2)
  } else {
    return Number(value * 0.01)
  }
})