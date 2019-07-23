<template>
  <div class="btn-group" role="group" aria-label="Temporizadores">
    <button
      v-for="(item, index) in times"
      :key="index"
      @click="changeTime(item.time)"
      type="button"
      class="btn btn-secondary">{{ item.name }}</button>
  </div>
</template>

<script>
export default {
  name: 'ClockTimes',
  props: {
    times: {
      type: Object,
      default: () => [
        {
          name: 'Pomodoro',
          time: 1500,
        },
        {
          name: 'Short Break',
          time: 300,
        },
        {
          name: 'Long Break',
          time: 900,
        },
      ],
    },
  },
  methods: {
    changeTime(newTime) {
      this.$parent.startTime = newTime;
    },
  },
};
</script>
