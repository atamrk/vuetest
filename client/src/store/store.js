import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)
Vue.use(firebase)
export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedin: false
  },
  mutatoin: {

  },
  actions: {

  }
})
