import firebase from 'firebase'
import firebaseui from 'firebaseui'
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

var ui = new firebaseui.auth.AuthUI(firebase.auth())
export default {
  database: firebase.database(),
  auth: firebase.auth(),
  ui: ui,
  uiConfig: uiConfig
// db: firebase.firestore()
}
