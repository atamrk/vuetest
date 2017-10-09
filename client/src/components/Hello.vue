<template>
  <div class="hello">
    <button @click="getdata">firesore</button>
    <button @click="writedata">realtime database</button>
    <button @click="addData(e)">write to a document</button>
    <button @click="setDataToDoc(ref)">set </button>
    <button @click="addDataToDoc">add</button>
    <button @click="doquery">QQQ</button> <hr>
    <button @click="createdummy">createdummy</button>
    <h2>{{timer}}</h2>
    <ul>
      <li>
        <button @click="changeDate(-1, 'M')"> ⇐</button>
        {{month}}月
        <button @click="changeDate(1, 'M')"> ⇒</button>
      </li>
      <button @click="changeDate(-1, 'Y')"> ⇐</button>
      {{year}}年
      <button @click="changeDate(1, 'Y')"> ⇒</button>
      <li>{{lenghofMonth}}日</li>
      <li>
        <button @click="changeDate(-1, 'd')"> ⇐</button>
        {{day}} 日
        <button @click="changeDate(1, 'd')"> ⇒</button>
      </li>
      <li>
        <button @click="OnOffline(1)"> Off line</button>
        <h3>{{status}}</h3>
        <button @click="OnOffline(-1)">On line</button>
      </li>
    </ul>
    <input type="text" v-model="kurasu" />
    <button @click="ifconnect">ask</button>
   
    <div id="container">
      <div>--</div>
      <div v-for="d in dayarray">{{d+1}}</div>
           <div>--</div>
      <div v-for="d in dayofweek">
        <p>{{d}}</p></div>
      <div v-for="(v, index) in dataArry" :key="index"><p @click="editGridClicked({day: v.day, name:v.name, value: 'EE'})" :data-date="v.day" :data-name="v.name">{{v.value}}</p></div>
   
      </div>
    </div>
  </div>
</template>

<script>
import FB from '@/store/firebase'
import Dummy from '@/store/dummyObj'
import firebase from 'firebase'
import moment from 'moment'
import _ from 'lodash'

const ele = document.querySelector('#container')

const setcssv = function (prop, value) {
  console.log(ele, prop, value)
  document.documentElement.style.setProperty(prop, value)
}
export default {
  name: 'hello',
  data () {
    return {
      date: new Date(),
      status: 'online',
      num: 0,
      kurasu: 'みかん',
      array1: ['aaa', 'bbbb', 'ccc', 'dddd', 'eeee', 'ffff', 'aaa', 'bbbb', 'ccc', 'dddd', 'eeee', 'ffff', 'aaa', 'bbbb', 'ccc', 'dddd', 'eeee', 'ffff'],
      ref: null,
      obj: {},
      dataArry: [],
      editArray: []
    }
  },
  computed: {// https://qiita.com/osakanafish/items/5ef636bbcb2c3ef94953
    month () {
      return moment(this.date).month() + 1
    },
    year () {
      return moment(this.date).year()
    },
    day () {
      return moment(this.date).date()
    },
    timer () {
      return moment(this.date).format('h : m : s')
    },
    lenghofMonth () {
      return moment(this.date).daysInMonth()
    },
    e () {
      return {
        month: this.month,
        year: this.year,
        day: this.year,
        kurasu: this.kurasu
      }
    },
    dayarray () {
      return _.range(this.lenghofMonth)
    },
    dayofweek () {
      let daysMonth = moment(this.date).daysInMonth()
      setcssv('--num-of-row', this.array1.length)
      setcssv('--num-of-col', daysMonth + 1)
      return _.range(daysMonth).map(v => {
        moment.locale('ja')
        return moment({y: this.year, month: this.month - 1, d: v + 1}).format('ddd')
      })
    },
    data () {
      console.log('data edit')
      let temparry = this.dataArry
      this.editArray.forEach(obj => {
        console.log(obj)
        temparry.splice(obj.index, 1, obj)
        // temparry[obj.index] = {obj}
      })
      return temparry
    }
  },
  methods: {
    changeDate (v, p) {
      this.date = moment(this.date).add(v, p)
      this.dateMonthClicked()
    },
    OnOffline (v) {
      if (v > 0) {
        console.log(FB)
        FB.database.goOffline()
        console.log('off')
        this.status = 'offline'
        return
      } else {
        FB.database.goOnline()
        this.status = 'online'
        return
      }
    },
    ifconnect () {
      var connectedRef = firebase.database().ref('.info/connected')
      connectedRef.on('value', function (snap) {
        if (snap.val() === true) {
          alert('connected')
        } else {
          alert('not connected')
        }
      })
    },
    getdata () {
      console.log(FB)
      this.num++
      FB.users.add({
        first: 'Ada',
        last: 'Lovelace',
        born: 1815,
        time: this.date,
        num: this.num
      }).then(() => console.log('done', this.num))
      .catch((e) => { console.error('error', e) })
    },
    addData (e) {
      console.log('add data')
      let obj = _.range(20).reduce((ac, cv) => {
        console.log(ac)
        ac[cv] = _.range(30).map(() => 'a')
        return ac
      }, {})
      this.obj = obj
      let data = {
        kurasu: this.kurasu,
        year: this.year,
        month: this.month,
        data: e,
        nameRow: ['aaa', 'bbb', 'ccc', 'dddd']
      }
      let a = FB.FS.collection('sa').doc()
      this.ref = a
      a.set(data)
      .then(() => console.log('document successfully written!', a))
      .catch((e) => console.error('Error writing document: ', e))
    },
    addDataToDoc () {
      FB.FS.collection('sa').add({a: 'A'})
      .then(v => { console.log(v) })
    },
    setDataToDoc (doc) {
      doc.set({a: 'B'})
    },
    doquery () {
      FB.FS.collection('sa').where('kurasu', '==', 'みかん').get()
      .then(snapshot => snapshot.forEach(doc => console.log(doc.data())))
    },
    createdummy () {
      const contEle = document.querySelector('#container')
      // contEle.innerHTML = ''
      let DO = Dummy.creteObj(this.array1, this.date, this.kurasu, 'OO')
      this.obj = DO
      let daysMonth = moment(this.date).daysInMonth()
      const addDiv = function (ele, val, att = 'data-att', attv = '') {
        let newDiv = document.createElement('div')
        newDiv.innerHTML = val
        newDiv.setAttribute(att, attv)
        ele.appendChild(newDiv)
      }
      addDiv(contEle, '日')
      _.range(daysMonth).map(day => { addDiv(contEle, day + 1) })
      addDiv(contEle, '曜日')
      _.range(daysMonth).map(day => { addDiv(contEle, DO['dayOfWeek'][day]) })
      this.array1.forEach((name, i) => {
        addDiv(contEle, name)
        _.range(daysMonth).map(day => {
          addDiv(contEle, DO[i + name][day], 'data-day', name + '-' + (day + 1))
        })
      })
      setcssv('--num-of-row', this.array1.length)
      setcssv('--num-of-col', daysMonth + 1)
    },
    writedata () {
      let key = FB.database.ref('aaa').push().key
      console.log(key)
      FB.database.ref('aaa/' + key).set({a: 'aaa'})
      .then(() => console.log('done', this.num))
      .catch((e) => { console.error('error', e) })
    },
    gridclicked (date, name, index) {
      let newvalue = {name: name, day: date, value: 'AA'}
      this.dataArry.splice(index, 1, newvalue)
    },
    dateMonthClicked () {
      this.dataArry = this.array1.reduce((ac, cv, ind) => {
        ac.push({name: 'name', day: 0, value: cv})
        _.range(this.lenghofMonth).map(d => {
          ac.push({name: cv, day: d + 1, value: 'a'})
        })
        return ac
      }, [])
    },
    editGridClicked (obj) {
      console.log('editGridClicked')
      this.editArray.push(obj)
    }
  },
  mounted () {
    setcssv('--num-of-row', this.array1.length)
    setcssv('--num-of-col', this.lenghofMonth + 1)
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
