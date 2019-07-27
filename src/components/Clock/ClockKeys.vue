<template>
  <div class="card text-left">
    <h5 class="pt-3 px-3 mb-3 card-title">Comandos do teclado</h5>
    <ul class="list-group list-group-flush">
      <li
        v-for="(key, index) in keys"
        :key="index"
        class="list-group-item">
        <span class="card-keyname">{{ key.name }}: </span>
        <kbd><span
          v-for="(keyCode, index) in key.keys"
          :key="index">
          <span v-if="index > 0"> + </span>
          <kbd>{{ keyCode | capitalize }}</kbd></span></kbd>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ClockKeys',
  props: {
    keys: Array,
  },
  filters: {
    capitalize(value) {
      if (!value) return '';
      const newValue = value.toString();
      return newValue.charAt(0).toUpperCase() + newValue.slice(1);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  font-size: 0.825em;
  &-keyname {
    display: inline-block;
    padding-right: 10px;
  }
  .list-group-item {
    padding: 0.5rem 1.25rem;
  }
}
</style>
