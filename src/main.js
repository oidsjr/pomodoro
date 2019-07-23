import Vue from 'vue';
import VueShortkey from 'vue-shortkey';
import router from './router';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueShortkey);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
