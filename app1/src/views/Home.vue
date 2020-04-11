<template>
  <div class="home">
    <div>
      <img alt="Vue logo" src="@assets/logo.png">
    </div>
    <HelloWorld msg="Hello World"></HelloWorld>
    <router-link to="/app2/about">从 App1 去 App2</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  mounted() {
    // log(123)
  },
}
</script>
