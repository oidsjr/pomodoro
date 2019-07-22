<template>
  <div id="app">
    <Navbar :siteTitle="siteTitle" menuName="menu-principal" />
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">{{ siteTitle }}</h1>
      </div>
    </div>
    <div class="container text-center">
      <Clock :startTime="1500" />
    </div>
    <Foot :siteTitle="siteTitle" />
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue';
import Clock from './components/Clock/Clock.vue';
import Foot from './components/Foot/Foot.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    Clock,
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
