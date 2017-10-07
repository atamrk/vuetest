<template lang="html">
 <div class="auth">
   <h1>AUTH</h1>
     <div id="firebaseui-auth-container"></div>
  </div>
</template>
<script>
import firebase from '@/store/firebase'
// import FB from '@/store/firebase'
// https://github.com/firebase/FirebaseUI-Web
// import firebaseui from 'firebaseui'

export default {
  name: 'auth',
  data () {
    return {
      load: false
    }
  },
  mounted () {
    console.log('fire ui start', firebase.ui)
    firebase.ui.start('#firebaseui-auth-container', firebase.uiConfig)
    console.log('ui', firebase.ui)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
