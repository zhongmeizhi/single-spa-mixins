<template>
  <div id="PageTwo">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log($define, '$define')
  },
}
</script>

<style>
#app2 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
