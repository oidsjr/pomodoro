<template>
  <div class="btn-group" role="group" aria-label="Temporizadores">
    <button
      v-for="(item, index) in times"
      :key="index"
      @click="changeTime(item.time)"
      type="button"
      class="btn btn-secondary">
      <span
        v-if="item.shortkey"
        v-shortkey.once="item.shortkey.keys"
        @shortkey="changeTime(item.time)"></span>
      <span
        v-else
        v-shortkey.once="['alt', index+1]"
        @shortkey="changeTime(item.time)"></span>
      {{ item.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'ClockTimes',
  props: {
    times: {
      type: Array,
      default: () => [
        {
          name: 'Pomodoro',
          time: 1500,
          shortkey: {
            keys: ['alt', 'p'],
          },
        },
        {
          name: 'Pausa curta',
          time: 300,
          shortkey: {
            keys: ['alt', 'c'],
          },
        },
        {
          name: 'Pausa longa',
          time: 900,
          shortkey: {
            keys: ['alt', 'l'],
          },
        },
      ],
    },
  },
  methods: {
    changeTime(newTime) {
      this.$parent.startTime = newTime;
    },
  },
  mounted() {
    const shortkeys = this.times
      .reduce((keys, button, index) => {
        keys.push({
          name: button.name,
          keys: (button.shortkey) ? button.shortkey.keys : ['alt', index + 1],
        });
        return keys;
      }, []);
    this.$emit('getShortKeys', shortkeys);
  },
};
</script>
