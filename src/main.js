import './set-public-path';
import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
]
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        props: {
          // single-spa props are available on the "this" object. Forward them to your component as needed.
          // https://single-spa.js.org/docs/building-applications#lifecyle-props
          name: this.name,
          mountParcel: this.mountParcel,
          singleSpa: this.singleSpa,
        },
      });
    },
  },
});

export const { bootstrap, unmount } = vueLifecycles;
export const mount = props => vueLifecycles.mount(props).then(instance => {
  instance.use(router)
})
