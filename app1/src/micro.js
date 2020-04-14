import Vue from 'vue';
import App from './App.vue';
import router from './router';
import singleSpaVue from 'single-spa-vue';

Vue.config.productionTip = false;

const id = $define.NAME;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: `#${id}`,
    mounted(props) {
      console.log(props, '111')
    },
    render: (h) => h(App),
    router,
  },
});

function createDomElement() {
  let el = document.getElementById(id);
  if (!el) {
      el = document.createElement('div');
      el.id = id;
      document.body.appendChild(el);
  }
  return el;
}

export const bootstrap = vueLifecycles.bootstrap;

export function mount(props) {
  console.log(id, '启动');
  console.log(props,'mount props');
  // SystemJS.resolve('@common/app1').then(values => {
  //   const [url] = values
  //   const webpackPublicPath = url.slice(0, url.lastIndexOf('/') + 1)

  //   __webpack_public_path__ = webpackPublicPath
  //   return true
  // }).then(res => {
  //   SystemJS.import('@common/app1').then(res => {
  //     console.log(rex, '@common/app1')
  //   })
  // })
  createDomElement();
  return vueLifecycles.mount(props)
}

export const unmount = vueLifecycles.unmount;
