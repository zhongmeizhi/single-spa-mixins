import Vue from "vue";
import VueRouter from 'vue-router'
import Home from './views/Home.vue';

Vue.use(VueRouter);

export default new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/app1',
      name: 'home',
      component: Home
    },
  ]
})
