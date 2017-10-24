<template>
  <div class="hello">
    <button @click="getdata">b GET</button>
    <h1>Hello 2</h1>
    <input type="file" accept="image/*" @change="onFilePicked"> 
      <div>
        <img v-for(img in images) src="{{img}}" alt="">
      </div>
  </div>
</template>

<script>
import FB from '@/store/firebase'
export default {
  name: 'images',
  data () {
    return {
      images: []
    }
  },
  methods: {
  }
}
</script>
<style scoped>
</style>
