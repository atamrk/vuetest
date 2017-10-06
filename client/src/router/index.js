import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Auth from '@/components/Auth'
import AuthSuccess from '@/components/AuthSuccess'

Vue.use(Router)// https://medium.com/dailyjs/authenticating-a-vue-js-application-with-firebase-ui-8870a3a5cff8
export default new Router({
  routes: [
    { path: '/', component: Auth },
    { path: '/hello', component: Hello },
    { path: '/auth', component: Auth },
    { path: '/success', component: AuthSuccess }
  ]
})

