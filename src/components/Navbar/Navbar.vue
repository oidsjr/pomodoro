<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="/">{{ siteTitle }}</a>

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
  data() {
    return {
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
