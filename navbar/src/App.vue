<template>
  <div id="PageNav">
    这里是 Navbar
    <div id="nav">
      <router-link to="/app1">App1</router-link> |
      <router-link to="/app2">App2</router-link>
      <button @click="emitTest">测试通信</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    emitTest() {
      window.globalBus.emit('test', 1, '2', Date.now())
    }
  },
}
</script>

<style>
#navbar-app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
