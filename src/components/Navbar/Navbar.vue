<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">{{ siteTitle }}</router-link>
      <button class="navbar-toggler d-lg-none" type="button"
        data-toggle="collapse" :data-target="'#' + menuName"
        :aria-controls="menuName"
        aria-expanded="false" aria-label="Exibir/ocultar navegação"
        v-on:click.prevent="toggleCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <NavbarCollapse :menuName="menuName" :links="links" />
    </div>
  </nav>
</template>

<script>
import NavbarCollapse from './NavbarCollapse.vue';

export default {
  name: 'Navbar',
  components: {
    NavbarCollapse,
  },
  props: {
    siteTitle: String,
    menuName: String,
  },
  methods: {
    toggleCollapse() {
      this.collapseShow = !this.collapseShow;
    },
  },
  data() {
    return {
      collapseShow: false,
      links: [
        {
          name: 'Home',
          route: '/',
        },
      ],
    };
  },
};
</script>
