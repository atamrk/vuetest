<template lang="html">
 <div class="auth">
   <h1>AUTH</h1>
     <div id="firebaseui-auth-container"></div>
  </div>
</template>
<script>
import firebase from 'firebase'
import FB from '@/store/firebase'
// https://github.com/firebase/FirebaseUI-Web
import firebaseui from 'firebaseui'

export default {
  name: 'auth',
  mounted () {
    console.log(FB)

    console.log(firebaseui)

    console.log(firebseui)

    var uiConfig = {
      signInSuccessUrl: '/success',
      signInOptions: [
        FB.auth.GoogleAuthProvider.PROVIDER_ID,
        FB.auth.EmailAuthProvider.PROVIDER_ID
      ]
    }
    var ui = new firebaseui.auth.AuthUI(firebase.auth)
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
