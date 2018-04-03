<template>
  <div>
    <p @click='count++'>{{count+'分'}}</p>
    <input v-model="message">
    <p>{{message | reverseString}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      message: ''
    }
  },
  filters: {
    reverseString(value){
      if(!value) return ''
      value = value.split('').reverse().join('')
      return value
    }
  }
}
</script>

