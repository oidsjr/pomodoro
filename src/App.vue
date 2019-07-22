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
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue';
import Clock from './components/Clock/Clock.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    Clock,
  },
  data() {
    return {
      siteTitle: 'Pomodoro Timer',
    };
  },
};
</script>

<style lang="scss" src="./assets/scss/App.scss"></style>
