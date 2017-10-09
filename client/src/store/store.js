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
    isUserLoggedin: false,
    dataGrid: []
  },
  getters: {
    user (state) {
      return state.user
    },
    dataGrid (state) {
      return state.dataGrid
    }
  },
  mutations: {
    setUser (state, user) {
      console.log('mutations ', user)
      state.user = user
    },
    setdatagrid (state, change) {
      state.dataGrid[change.index] = change.obj
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
    },
    setdatagrid ({commit}, change) {
      FB.sa
      commit('setdatagrid', change)
    },
    adddatagrid ({commit}, change) {
      FB.sa.doc('2017-12-sa-4').set(change)
    },
    getdatagrid ({commit}, change) {
      FB.sa.
    }
  }
})
