<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">Pomodoro Timer</h1>
      </div>
    </div>
    <div class="container text-center">
      <Clock v-bind:startTime="1500" />
    </div>
  </div>
</template>

<script>
import Clock from './components/Clock/Clock.vue';

export default {
  name: 'app',
  components: {
    Clock,
  },
};
</script>

<style lang="scss" src="./assets/scss/App.scss"></style>
