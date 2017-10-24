<template>
  <div class="hello">
    <button @click="getdata">b GET</button>
    {{images.length}}
    <div> col {{numCol}}</div>
    <div>row {{numRow}}{{comNumCol}}</div>
    <button @click="setgrid(-1, 0)"> ⇐</button>
    {{numCol}}
    <button @click="setgrid(1, 0)"> ⇒</button>
    <hr>
    <button @click="setgrid(0, -1)"> ⇐</button>
    {{numRow}}
    <button @click="setgrid(0, 1)"> ⇒</button><hr>

    <input type="file" accept="image/*" @change="onFilePicked"> 
    <img :src="imageUrl" height="150">
       <img :src="aa" height="150">
    <button @click="fileupload">          wewewewew</button>
    <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;">
</canvas>  

    <div id="container">
    <div v-for="(img, index) in images" :key="index" @click="imageClicked(index)">
    <img v-bind:src="img.src" alt="" height="200" width="auto">
{{index}}
</div>
      <div class="box">11111</div>
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
 
<div id="dropFiles" class="dropFiles" @dragenter="onDragEnter" 
                                      @dragover.prevent
                                      @dragleave="onDragLeave"
                                      @drop.stop.prevent="onDrop"
                                      v-bind:class= "{ highlightDropArea: dragged}">
  Drag and drop File Here.
</div>

<div id="messages">
</div>
  </div>
</template>

<script>
import FB from '@/store/firebase'
import * as firebase from 'firebase'
const ele = document.querySelector('#container')
const getcssv = function (v) {
  let r = getComputedStyle(ele).getPropertyValue(v)
  return r
}
const setcssv = function (prop, value) {
  document.documentElement.style.setProperty(prop, value)
}
export default {
  name: 'hello',
  data () {
    return {
      dragged: false,
      numCol: 1,
      numRow: 1,
      image: null,
      imgurl: '',
      imageUrl: '',
      aa: [],
      ctx: null,
      images: [],
      imageFiles: []
    }
  },
  computed: {
  },
  methods: {
    imageClicked (index) {
      console.log(index)
      this.images.splice(index, 1)
      this.imageFiles.splice(index, 1)
    },
    onDragEnter () {
      this.dragged = true
    },
    onDragLeave () {
      this.dragged = false
    },
    onDrop (ev) {
      this.dragged = false
      console.log('drop', this)
      var imgs = this.images
      function readAndPreview (file) {
        console.log(file)
        console.log(this)
        if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
          var reader = new FileReader()
          reader.addEventListener('load', () => {
            var image = new Image()
            image.height = 100
            image.title = file.name
            image.src = reader.result
            imgs.push(image)
          }, false)
          reader.readAsDataURL(file)
        }
      }
      for (var i = 0; i <= ev.dataTransfer.files.length - 1; i++) {
        this.imageFiles.push(ev.dataTransfer.files[i])
        readAndPreview(ev.dataTransfer.files[i])
      }
      this.images = imgs
    },
    onFilePicked (event) {
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
        var iii = new Image()
        iii.onload = function () {
          this.ctx.drawImage(iii, 0, 0)
        }
        iii.src = event.target.result
      })
      debugger
      let i = event.target.files[0]
      fileReader.readAsDataURL(i)
      this.image = i
    },
    fileupload () {
      this.imageFiles.forEach(file => {
        console.log(file)
        var k = firebase.database().ref('imagefikes/').push().key
        firebase.storage().ref('meetup/' + k + file.name).put(file)
        .then(e => {
          var updates = {}
          updates[k] = e.downloadURL
          firebase.database().ref('imagefiles/').update(updates)
        })
        .catch(e => { console.log(e) })
      })
    },
    showgrid () {
      this.numCol = getcssv('--num-of-col')
      this.numRow = getcssv('--num-of-row')
    },
    setgrid (c, r) {
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
  },
  mounted () {
    var c = document.getElementById('myCanvas')
    this.ctx = c.getContext('2d')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root {
  --main-bg-color: brown;
  --num-of-row: 2;
  --num-of-col: 2;
}

#container {
  display: grid;
  grid-template-columns: repeat(var(--num-of-col), 1fr);
  grid-template-rows: repeat(var(--num-of-row), 1fr);
  background: #42b983;
}
.dropFiles {
  width: 100%;
  min-height: 100px; 
  height: 100px; 
  border: 5px red dashed; 
  text-align: center;
  font-size: 25px;
}

.highlightDropArea {
  border: 5px green dashed;
}
</style>
