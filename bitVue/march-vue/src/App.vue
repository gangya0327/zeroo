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
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      world: 'uufaf',
      htmlss: `<span style="color: red">改变了！</span>`
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
