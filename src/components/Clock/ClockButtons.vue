<template>
  <div>
    <button
      class="btn btn-primary m-2"
      v-on:click="startClock">Começar</button>
    <button
      class="btn btn-secondary m-2"
      v-on:click="stopClock">Parar</button>
    <button
      class="btn btn-light m-2"
      v-on:click="resetClock">Reiniciar</button>
  </div>
</template>

<script>
export default {
  name: 'ClockButtons',
  data() {
    return {
      started: false,
    };
  },
  methods: {
    resetClock() {
      this.$parent.currentTime = this.$parent.startTime;
      this.started = false;
    },
    runClock() {
      setTimeout(() => {
        if (this.started) {
          this.$parent.currentTime = this.$parent.currentTime - 1;
          if (this.$parent.currentTime > 0) {
            this.runClock();
          } else {
            this.started = false;
          }
        }
      }, 1000);
    },
    startClock() {
      if (!this.started) {
        this.started = true;
        if (this.$parent.currentTime <= 0) {
          this.$parent.currentTime = this.$parent.startTime;
        }
        this.runClock();
      }
    },
    stopClock() {
      this.started = false;
    },
  },
};
</script>
