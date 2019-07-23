import Vue from 'vue';
import VueRouter from 'vue-router';
import Clock from '@/components/Clock/Clock.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Pomodoro',
      component: Clock,
    },
  ],
  linkExactActiveClass: 'active',
});
