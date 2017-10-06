import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCHxIDQIu_oXM9ITeQODknzecZjAwB6ZuI',
  authDomain: 'vue-app-3fd32.firebaseapp.com',
  databaseURL: 'https://vue-app-3fd32.firebaseio.com',
  projectId: 'vue-app-3fd32',
  storageBucket: 'vue-app-3fd32.appspot.com',
  messagingSenderId: '981036814454'
}
firebase.initializeApp(config)
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    this.$router.push('/success')
  } else {
    this.$router.push('/auth')
  }
})
export default {
  database: firebase.database(),
  auth: firebase.auth()
// db: firebase.firestore()
}
