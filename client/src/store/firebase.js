import firebase from 'firebase'
import firebaseui from 'firebaseui'
import 'firebase/firestore'
const config = {
  apiKey: 'AIzaSyCvnpLLode7y5fzTOMrytzQEAT3o4Q7ZJo',
  authDomain: 'vue-fire-vuetify.firebaseapp.com',
  databaseURL: 'https://vue-fire-vuetify.firebaseio.com',
  projectId: 'vue-fire-vuetify',
  storageBucket: 'vue-fire-vuetify.appspot.com',
  messagingSenderId: '637092228110'
}
var uiConfig = {
  signInSuccessUrl: '/success',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
}
firebase.initializeApp(config)
console.log('firebzase config', firebase)
firebase.firestore().enablePersistence()
.then(function () {
    // Initialize Cloud Firestore through firebase
})
.catch(function (err) {
  if (err.code === 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        // ...
  } else if (err.code === 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        // ...
  }
})

var ui = new firebaseui.auth.AuthUI(firebase.auth())
export default {
  database: firebase.database(),
  auth: firebase.auth(),
  ui: ui,
  uiConfig: uiConfig,
  FS: firebase.firestore(),
  users: firebase.firestore().collection('users'),
  sa: firebase.firestore().collection('sa'),
  offline: firebase.database().goOffline
}
