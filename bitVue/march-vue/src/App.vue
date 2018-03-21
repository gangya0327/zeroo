<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p v-once>hello {{world}}</p>
      <p v-text="'hello' + world"></p>
      <p>{{`hello ${world}`}}</p>
      <p v-text="`hello ${world}`"></p>
      <button @click="world='worlds'">改变world</button>
      <p v-html="htmlss">change here</p>
      <a :href='hrefss'>百度一下</a>
      <a v-bind:href='hrefss'>百度一下</a>
      <div id="method1">
        <p>{{ count < 0 ? ' + ' : '-' }} {{ count  }}</p>
        <button @click='count ++'>增加</button>
        <button @click='count --'>减少</button>
      </div>
      <div id="method2">
        <input type="text" v-model="msg">
        <p>{{msg.split('').reverse().join('')}}</p>
      </div>
    </div>
    <div>
      <mybtn @click.native='buttonClick'></mybtn>
    </div>
    <div>
      <p v-for='tel in telephone'>{{tel | newtel}}</p>
    </div>
    <div>
      <p v-for='(url, index) in urlList'>
        <a :href='url.url | getquery(url.name, url.age)'>{{url.url}}</a>
      </p>
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import mybtn from './components/btn.vue'
export default {
  name: 'App',
  data () {
    return {
      world: 'uufaf',
      htmlss: `<span style="color: red">有样式的data</span>`,
      hrefss: 'http://www.baidu.com',
      count: 0,
      msg: 'hello world',
      telephone: [
        10000001,
        10000002,
        10000003,
        10000004,
        10000005,
        10000006,
        10000007,
      ],
      urlList: [
        {url: 'http://www.baidu.com', name: 'pa', age: 30},
        {url: 'http://www.qq.com', name: 'tc', age: 16},
      ]
    }
  },
  filters: {
    newtel(value){
      if(!value) return ''
      value = value.toString().substr(4,4)
      value = '*'.repeat(4) + value
      let endMember = value.substr(-1,1)
      if(endMember%2){
        value = value + ' 中奖'
      }else{
        value = value + ' 谢谢'
      }
      return value
    },
    getquery(value, name, age){
      if(!value) return ''
      return `${value}?name=${name}&age=${age}`
    }
  },
  components: {
    mybtn
  },
  methods: {
    buttonClick(){
      alert('ok!')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
