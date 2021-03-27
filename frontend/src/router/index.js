import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const loadView = name => () => import(`@/views/${name}.vue`)
const loadLayout = name => () => import(`@/layouts/${name}.vue`)

const routes = [
  {
    path: '/',
    component: loadLayout('Default'),
    children: [
      { path: '', name: 'Home', component: loadView('Home')},
      { path: 'profile', name: 'Profile', component: loadView('Profile'), meta: { userRequired: true }},
    ]
  },
  {
    path: '/',
    component: loadLayout('Auth'),
    children: [
      { path: 'login', name: 'Login', component: loadView('Auth/Login')},
      { path: 'registration', name: 'Registration', component: loadView('Auth/Registration')}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.userRequired)) {
    const token = localStorage.getItem('token');
    if (!token) {
      next('/login');
    }
  }
  next()
});

export default router
