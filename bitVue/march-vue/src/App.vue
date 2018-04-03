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
    <div>
      <ul>
        <li v-for='(item, index) in memberList' @click='memberDetail(index)'>
          <span>{{item.custName}}</span>
          <span>{{item.age}}</span>
          <span>{{item.joinTime}}</span>
        </li>
      </ul>
    </div>
    <div>
      <template v-for='item in list'>
        <p>{{item.content}}</p>
        <img :src="item.img" alt="">
        <p class="divider"></p>
      </template>
    </div>
    <table>
      <template>
        <tr>
          <td v-for='(value, key, index) in memberDetail'>{{key}}</td>
        </tr>
        <tr>
          <td v-for='(value, key, index) in memberDetail'>{{value}}</td>
        </tr>
      </template>
    </table>
    <span v-for='n in 10'>{{n}}--</span>
    <div>
      <myarticle v-for='item in artList' :art-list='item'></myarticle>
      <button @click='push'>尾部添加一篇文章</button>
      <button @click='pop'>尾部去掉一篇文章</button>
      <button @click='unshift'>头部加入一篇文章</button>
      <button @click='shift'>头部去掉一篇文章</button>
      <button @click='reverse'>把所有数据反转</button>
      <button @click='clear'>清除所有数据</button>      
    </div>
    <div>
      <ul>
        <li v-for='(item, index) in listArray' v-text='`${item}-${index}`'></li>
        <button @click='filter'>数组进行取余过滤</button>
        <button @click='concat'>数组进行合并</button>
        <button @click='map'>数组映射</button>
        <button @click='slice'>返回截取后的数组</button>
      </ul>
    </div>
    <div>
      <ul>
        <li v-for='(item, index) in listChange' v-text='`${item} - ${index}`'></li>
      </ul>
      <button @click='change3'>改变第三个值，为0</button>
      <button @click='change4'>改变第2个值，为5</button>
    </div>
    <mylist></mylist>
    <clac></clac>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Vue from 'vue'
import mybtn from './components/btn.vue'
import mylist from './components/mylist.vue'
import myarticle from './components/article.vue'
import clac from './components/clac.vue'
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
      ],
      memberList: [],
      list: [
        {content: 'zhangha', img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521707696224&di=13defbc0c3b734996a34c53175453714&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2F1dacd0336de5319a351ffa889a703b4ffd7f7b4f.jpg'},
        {contnent: 'zhangka', img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521707696218&di=023dcb1748411c637d6fdbcb4dcee63f&imgtype=0&src=http%3A%2F%2Fimg.18183.com%2Fuploads%2Fallimg%2F170701%2F102-1FF1150Z80-L.jpg'}
      ],
      memberDetail: {},
      artList: [],
      listArray: [1,2,3,6],
      listArray2: [4,5,8],
      listChange: [1,2,3,4],
      listChange2: [8,9,0]
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
    mybtn,
    mylist,
    myarticle,
    clac
  },
  methods: {
    buttonClick(){
      alert('ok!')
    },
    memberDetail(index){
      sessionStorage.custId = this.memberList[index].custId
    },
    push(){
      this.artList.push({
        name: 'zhangka',
        startTime: '17小时前',
        content: 'haha',
        good: 6        
      })
    },
    pop(){
      this.artList.pop()
    },
    shift(){
      this.artList.shift()
    },
    unshift(){
      this.artList.unshift({
        name: 'zhangma',
        age: 50
      })
    },
    reverse(){
      this.artList.reverse()
    },
    clear(){
      this.artList = []
    },
    filter(){
      this.listArray = this.listArray.filter((item)=> {
        return item % 2
      })
    },
    concat(){
      this.listArray = [...this.listArray, ...this.listArray2]//es6解构操作符
      //this.listArray = this.listArray.concat(this.listArray2)
    },
    map(){
      this.listArray = this.listArray.map((item)=>{
        return `${item} map`
      })
    },
    slice(){
      this.listArray = this.listArray.slice(2)
    },
    change3(){
      Vue.set(this.listChange, 1, 0)
    },
    change4(){
      this.listChange.splice(1, 1, 5)
    }
  },
  created(){
    this.memberList = [
      {custName: 'zhangha', age: 25, joinTime: '2018-03-12', csutId: 1},
      {custName: 'zhangca', age: 17, joinTime: '2018-03-06', csutId: 2},
      {custName: 'zhangba', age: 15, joinTime: '2018-03-28', csutId: 3},
      {custName: 'zhangta', age: 32, joinTime: '2018-03-02', csutId: 4},
    ],
    this.memberDetail = {
      name: 'zhangba',
      age: 16,
      address: 'hangzhou',
      tel: '156123698547'
    },
    this.artList = [
      {name: 'zhangba', startTime: '1小时前', content: 'aaa', good: 1},
      {name: 'zhangca', startTime: '2小时前', content: 'ada', good: 2},
      {name: 'zhangha', startTime: '5小时前', content: 'aba', good: 3},
      {name: 'zhangta', startTime: '4小时前', content: 'aca', good: 4},
    ]
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
.divider {
  width: 100%;
  height: 1px;
  background: #000;
}
</style>
