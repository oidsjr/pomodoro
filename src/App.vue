<template>
  <div id="app">
    <Navbar :siteTitle="siteTitle" menuName="menu-principal" />
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">{{ siteTitle }}</h1>
      </div>
    </div>
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
    };
  },
};
</script>

<style lang="scss" src="./assets/scss/App.scss"></style>
