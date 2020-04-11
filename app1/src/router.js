import Vue from "vue";
import VueRouter from 'vue-router'
import Home from './views/Home.vue';

Vue.use(VueRouter);

export default new VueRouter({
  // mode: 'history',
  // base: $define.BASE_URL,
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/app1'
    },
    {
      path: '/app1',
      name: 'home',
      component: Home
    },
  ]
})
