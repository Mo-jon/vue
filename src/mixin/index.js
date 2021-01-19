import Vue from 'vue'

/**
 * 全局混入，它将影响每一个之后创建的 Vue 实例。
 * 整个应用APO切面，比如可以做统计
 */
Vue.mixin({
    created: function () {
        // console.log('全局混入,这里获取组件名称：', this.$options.name)
    }
})