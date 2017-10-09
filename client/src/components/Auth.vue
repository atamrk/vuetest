<template lang="html">
 <div class="auth">
   <h1>AUTH</h1>
   {{date}}
      <button @click='hello'style= "background: red">hello</button> 
     <div id="firebaseui-auth-container"></div>
  </div>
</template>
<script>
import firebase from '@/store/firebase'
import moment from 'moment'
export default {
  name: 'auth',
  data () {
    return {
      date: moment(new Date()).format('YYYY年MM月DD日  (ddd)')
    }
  },
  methods: {
    hello () {
      this.$router.push({name: 'hello'})
    }
  },
  mounted () {
    moment.lang('ja')
    console.log('fire ui start', firebase.ui)
    firebase.ui.start('#firebaseui-auth-container', firebase.uiConfig)
    console.log('ui', firebase.ui)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
