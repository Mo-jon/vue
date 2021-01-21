import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import guard from './guard'

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(guard)
Vue.use(VueRouter)

export default router