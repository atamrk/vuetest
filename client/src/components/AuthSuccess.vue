<template>
  <div class="authSuccess">
  
     <div> 
    <h1>Signup succeeded</h1> 
    <button @click='logout'style= "background: red">Log out</button> 
    <hr> 
    <img v-bind:src="photo" style= "height: 120px"> <br> 
    <p>{{name}}</p> 
    <p>{{email}}</p> 
    <p>{{userId}}</p> 
    <hr> 
    <pre>{{user}}</pre> 
  </div>
    
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'success',
  data () {
    return {
      photo: '',
      userId: '',
      name: '',
      email: ''
    }
  },
  computed: {
    user: function () {
      console.log(' user')
      return this.$store.getters.user
    }
  },
  methods: {
    logout () {
      console.log('logging out')
      firebase.auth().signOut()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
