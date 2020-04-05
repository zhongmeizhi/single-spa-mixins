<template>
  <div id="PageOne">
    这里是 App1 项目
    <p>comment me on and off to see HMR</p>
    <router-view></router-view>
  </div>
</template>

<script>
// import navbar from 'navbar';

export default {
  mounted() {
    // console.log(navbar, 'navbar')
  },
}
</script>

<style>
#app1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
