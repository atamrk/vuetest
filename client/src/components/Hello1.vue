<template>
  <div class="hello">
    <button @click="getdata">b GET</button>
    <h1>Hello 1</h1>
    <button @click="setgrid(-1, 0)"> ⇐</button>
    {{numCol}}
    <button @click="setgrid(1, 0)"> ⇒</button>
    <hr>
    <button @click="setgrid(0, -1)"> ⇐</button>
    {{numRow}}
    <button @click="setgrid(0, 1)"> ⇒</button><hr>
    <div id="container">

      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>
      <div>11111</div>

    </div>
  </div>
</template>

<script>
import FB from '@/store/firebase'
const ele = document.querySelector('#container')
const getcssv = function (v) {
  let r = getComputedStyle(ele).getPropertyValue(v)
  return r
}
const setcssv = function (prop, value) {
  console.log(ele, prop, value)
  document.documentElement.style.setProperty(prop, value)
}
export default {
  name: 'hello',
  data () {
    return {
      numCol: 1,
      numRow: 1,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    showgrid () {
      this.numCol = getcssv('--num-of-col')
      this.numRow = getcssv('--num-of-row')
    },
    setgrid (c, r) {
      // this.showgrid()
      console.log(c, r)
      this.numCol = c + this.numCol
      this.numRow = r + this.numRow
      setcssv('--num-of-col', this.numCol)
      setcssv('--num-of-row', this.numRow)
    },
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
:root {
  --main-bg-color: brown;
  --num-of-row: 2;
  --num-of-col:2;
}

#container {  

  display: grid;
  grid-template-columns: repeat(var(--num-of-col), 1fr);
  grid-template-rows: repeat(var(--num-of-row), 1fr);
}
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
