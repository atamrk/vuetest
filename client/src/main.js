// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router/index'
import vuetify from 'vuetify'
import firebase from 'firebase'

// import { sync } from 'vuex-router-sync'
import store from '@/store/store'
import 'vuetify/dist/vuetify.min.css'
Vue.config.productionTip = false
Vue.use(vuetify)
// sync(store, router)
console.log('main js')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('main success')
        this.$store.dispatch('setUser', user)
        this.$router.push({name: 'success'})
      } else {
        console.log('main not success')
        this.$router.push('/auth')
      }
    })
  },
  store,
  template: '<App/>',
  components: {
    App
  }
})
