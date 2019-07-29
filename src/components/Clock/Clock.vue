<template>
  <div class="timer py-3">
    <ClockTimes v-on:getShortKeys="updateShortKeys($event)" />
    <h2 class="clock display-1 text-monospace mt-2">
      <span class="bg-dark text-light rounded px-4">{{ displayTime }}</span></h2>
    <ClockButtons v-on:getShortKeys="updateShortKeys($event)" />
    <div class="row justify-content-center pt-3">
      <div class="col-md-4">
        <ClockKeys v-if="shortKeys.length" :keys="shortKeys" />
      </div>
    </div>
  </div>
</template>

<script>
import ClockButtons from './ClockButtons.vue';
import ClockTimes from './ClockTimes.vue';
import ClockKeys from './ClockKeys.vue';

export default {
  name: 'Clock',
  props: {
    startTime: {
      type: Number,
      default: 1500,
    },
  },
  components: {
    ClockButtons,
    ClockTimes,
    ClockKeys,
  },
  data() {
    return {
      // Define como tempo maximo 60 minutos
      currentTime: (this.startTime < 3600) ? this.startTime : 3600,
      shortKeys: [],
    };
  },
  watch: {
    startTime() {
      this.$emit('updateClock');
    },
    currentTime() {
      if (this.currentTime !== this.startTime) {
        this.$parent.titleTag = `(${this.displayTime}) ${this.$parent.siteTitle}`;
      } else {
        this.$parent.titleTag = this.$parent.siteTitle;
      }
    },
  },
  methods: {
    updateShortKeys(newKeys) {
      newKeys.forEach((newKey) => {
        const currentIndex = this.shortKeys.findIndex(key => key.name === newKey.name);

        if (currentIndex > -1) {
          this.shortKeys[currentIndex] = newKey;
        } else {
          this.shortKeys.push(newKey);
        }
      });
    },
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
