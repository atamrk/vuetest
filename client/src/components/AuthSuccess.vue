<template>
  <div class="authSuccess">
   <h1>authsuccess</h1>
     <div> 
    <h1>Signup succeeded</h1> 
    <button @click='logOut'>Log out</button> 
    <hr> 
    <img v-bind:src="photo" style=”height: 120px”> <br> 
    <p>{{name}}</p> 
    <p>{{email}}</p> 
    <p>{{userId}}</p> 
    <hr> 
    <pre>{{user}}</pre> 
  </div>
    
  </div>
</template>

<script>
export default {
  name: 'auth-success',
  data () {
    return {
      photo: '',
      userId: '',
      name: '',
      email: '',
      user: {}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>