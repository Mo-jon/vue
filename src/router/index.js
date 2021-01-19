import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  // 测试页
  {
    path: '/demo',
    name: 'Demo',
    component: () => import('../Demo')
  },
  // 404页，必须放在最后 (有顺序问题)
  {
    path: "*",
    name: '404',
    component: () => import( /* webpackChunkName: "404" */ '../views/404'),
    // redirect: "/"
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log('[路由守卫]', to, from)
  if (to.name !== 'Login' && store.state.user === null) {
    // 没有登录，强制登录
    console.log("没有登录，强制登录");
    next('Login')
  } else {
    next()
  }
})

export default router