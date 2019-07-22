<template>
  <div class="timer py-3">
    <h2 class="clock display-1 text-monospace mt-2">
      <span class="bg-dark text-light rounded px-4">{{ displayTime }}</span></h2>
    <ClockButtons  />
  </div>
</template>

<script>
import ClockButtons from './ClockButtons.vue';

export default {
  name: 'Clock',
  props: {
    startTime: Number,
  },
  components: {
    ClockButtons,
  },
  data() {
    return {
      // Define como tempo maximo 60 minutos
      currentTime: (this.startTime < 3600) ? this.startTime : 3600,
    };
  },
  computed: {
    displayTime() {
      const minutes = (Math.floor((this.currentTime) / 60))
        .toString().padStart(2, '0');
      const seconds = ((this.currentTime) % 60)
        .toString().padStart(2, '0');

      return `${minutes}:${seconds}`;
    },
  },
};
</script>

<style lang="scss" src="../../assets/scss/Clock.scss" scoped></style>
