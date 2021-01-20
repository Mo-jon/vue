import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import guards from './guards'

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach(guards)
Vue.use(VueRouter)

export default router