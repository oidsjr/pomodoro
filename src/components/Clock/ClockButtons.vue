<template>
  <div>
    <button
      v-for="(button, index) in buttons"
      class="btn m-2"
      :class="button.class"
      :key="index"
      @click="button.action">
        <span
          v-if="button.shortkey"
          v-shortkey.once="button.shortkey.keys"
          @shortkey="button.shortkey.action"></span>
        {{ button.name }}
      </button>
  </div>
</template>

<script>
export default {
  name: 'ClockButtons',
  data() {
    return {
      started: false,
      buttons: [
        {
          name: 'Começar/Parar',
          action: this.startStopClock,
          class: 'btn-primary',
          shortkey: {
            keys: ['space'],
            action: this.startStopClock,
          },
        }, {
          name: 'Reiniciar',
          action: this.resetClock,
          class: 'btn-light',
          shortkey: {
            keys: ['alt', 'r'],
            action: this.resetClock,
          },
        },
      ],
    };
  },
  mounted() {
    this.$parent.$on('updateClock', () => this.resetClock());

    const shortkeys = this.buttons
      .reduce((keys, button) => {
        if (button.shortkey) {
          keys.push({
            name: button.name,
            keys: button.shortkey.keys,
          });
        }
        return keys;
      }, []);
    this.$emit('getShortKeys', shortkeys);
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
    startStopClock() {
      if (this.started) this.stopClock();
      else this.startClock();
    },
  },
};
</script>
