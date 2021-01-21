/**
 * 路由守卫
 */

import store from '../store'

const guards = (to, from, next) => {
    console.log('[路由守卫]', to, from)
    if (to.name !== 'Login' && store.state.user === null) {
        // 没有登录，强制登录
        console.log("没有登录，强制登录");
        next('Login')
    } else {
        next()
    }
}

export default guards