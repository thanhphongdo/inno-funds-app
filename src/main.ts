import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import "@/assets/jquery/jquery.js";
import "@/assets/fomantic-ui/dist/semantic.min.js";
import { ParseBase } from './utils/parse';

ParseBase.init();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
