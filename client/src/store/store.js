import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import FB from '@/store/firebase'
Vue.use(Vuex)
Vue.use(firebase)
console.log('store js')
export default new Vuex.Store({
 // strict: true,
  state: {
    token: null,
    user: {},
    isUserLoggedin: false
  },
  getters: {
    user (state) {
      return state.user
    }
  },
  mutations: {
    setUser (state, user) {
      console.log('mutations ', user)
      state.user = user
    }
  },
  actions: {
    setUser ({commit}, user) {
      console.log('actrion set user')
      let uref = FB.database.ref('user')
      uref.child(user.uid).set({
        'name': user.displayName,
        'email': user.email,
        'uid': user.uid
      })
      commit('setUser', user)
    }
  }
})
