import Vue from "vue";
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

Vue.use(VueRouter);

export default new VueRouter({
  // mode: 'history',
  // base: $define.BASE_URL,
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/app2'
    },
    {
      path: '/app2',
      name: 'home',
      component: Home,
    },
    {
      path: '/app2/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
