/**
 * 路由配置
 */

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
    // webpackChunkName：用于代码打包分割
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login')
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

export default routes