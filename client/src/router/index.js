import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hello1 from '@/components/Hello1'
import Hello2 from '@/components/Hello2'
import Auth from '@/components/Auth'
import AuthSuccess from '@/components/AuthSuccess'

Vue.use(Router) // https://medium.com/dailyjs/authenticating-a-vue-js-application-with-firebase-ui-8870a3a5cff8
export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Auth,
    name: 'auth'
  },
  {
    path: '/auth',
    component: Auth,
    name: 'auth'
  },
  {
    path: '/hello',
    component: Hello,
    name: 'hello'
  },
  {
    path: '/hello1',
    component: Hello1,
    name: 'hello1'
  },
  {
    path: '/hello2',
    component: Hello2,
    name: 'hello2'
  },
  {
    path: '/success',
    component: AuthSuccess,
    name: 'success'
  }]
})
