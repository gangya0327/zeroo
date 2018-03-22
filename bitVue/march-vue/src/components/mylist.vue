<template>
  <div>
    <ul>
      <li v-for='(item, index) in list' v-text='`${item} - ${index}`'></li>
    </ul>
    <ul>
      <li v-for='(item, index) in filter' v-text='`${item} - ${index}`'></li>
    </ul>
    <button @click='randomList'>随机重置数组的值</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list: [1,2,3,4]
    }
  },
  computed: {
    filter(){
      return this.list.filter((item)=>{
        return item % 2
      })
    }
  },
  methods: {
    randomList(){
      this.list = this.list.map((item)=>{
        //return item + Math.round(Math.random()*9+1)
        return item + Math.round(Math.random()*9+1)
      })
    }
  }
}
</script>