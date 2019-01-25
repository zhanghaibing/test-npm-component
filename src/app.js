import Vue from 'vue';
import App from './App.vue';
import NVC from 'test-vue-components';

Vue.use(NVC);

/* eslint-disable no-new */
new Vue({
  render(createElement) {
    return createElement(App);
  },
}).$mount('#app');
