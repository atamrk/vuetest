<template>
  <div class="hello">
    <button @click="getdata">b GET</button>
    <h1>Hello 2</h1>
    <ul>
      <li>a </li>
      <li>a </li>
      <li>b </li>
      <li>c</li>
    </ul>

  </div>
</template>

<script>
import FB from '@/store/firebase'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    getdata () {
      FB.db.collection('users').add({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
