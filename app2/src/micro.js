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
  createDomElement();
  return vueLifecycles.mount(props);
}

export const unmount = vueLifecycles.unmount;
