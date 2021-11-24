import Vue from 'vue'
import VueRouter from 'vue-router'
import Password from '../views/Password.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { guestOnly: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { guestOnly: true }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { authOnly: true }
  },
  {
    path: '/password-recovery',
    name: 'Forgot Password',
    component: Password,
    meta: { guestOnly: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user')

  if (to.matched.some(record => record.meta.authOnly) && !loggedIn) {
    next('/')
    return
  }
  if (to.matched.some(record => record.meta.guestOnly) && loggedIn) {
    next('/dashboard')
    return
  }
  next()
})

export default router
