<template>
  <div id="app">
    <Navbar :siteTitle="siteTitle" menuName="menu-principal" />
    <div class="container text-center">
      <router-view></router-view>
    </div>
    <Foot :siteTitle="siteTitle" />
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue';
import Foot from './components/Foot/Foot.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    Foot,
  },
  data() {
    return {
      siteTitle: 'Pomodoro Timer',
      titleTag: 'Pomodoro Timer',
    };
  },
  watch: {
    titleTag: {
      immediate: true,
      handler() {
        document.title = this.titleTag;
      },
    },
  },
};
</script>

<style lang="scss" src="./assets/scss/App.scss"></style>
