import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import FB from '@/store/firebase'
Vue.use(Vuex)
Vue.use(firebase)
console.log('store js')
export default new Vuex.Store({
 // strict: true,
  state: { //  +++++++++++++++++++++  STATE  +++++++++++++++++++++++++++
    token: null,
    user: {},
    isUserLoggedin: false,
    dataGrid: []
  },
  getters: { //  +++++++++++++++++++++  GETTERS +++++++++++++++++++++++++++
    user (state) {
      return state.user
    },
    dataGrid (state) {
      return state.dataGrid
    }
  },
  mutations: {//  +++++++++++++++++++++ MUTATIONS +++++++++++++++++++++++++++
    setUser (state, user) {
      console.log('mutations ', user)
      state.user = user
    },
    setdatagrid (state, change) {
      state.dataGrid[change.index] = change.obj
    },
    savedatagrid (state, payload) {
      state.dataGrid = payload
    },
    changegriddata (state, payload) {
      state.dataGrid.data[payload.index].value = payload.value
    },
    createdatagrid (state, doc) {
      state.dataGrid = doc
    }
  },
  actions: {  //  +++++++++++++++++++++  ACTIONS +++++++++++++++++++++++++++
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
    adddatagrid ({commit}, payload) {
      FB.sa.doc('2017-12-sa-4').set(payload)
    },
    savedatagrid ({commit}, payload) {
      FB.sa.doc(payload.id).set(payload)
      commit('savedatagrid', payload)
    },
    getdatagrid ({commit}, payload) {
      let ref = FB.sa.doc(payload)
      return ref.get()
      .then(function (doc) {
        if (doc.exists) {
          commit('createdatagrid', doc)
        } else {
          console.log('No such document!')
        }
        return new Promise(function (resolve, reject) {
          console.log('promise')
          resolve(doc)
        })
      })
      .catch(e => { console.log(e) })
    }
  }
})
