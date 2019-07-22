<template>
  <div>
    <button class="navbar-toggler d-lg-none" type="button"
      data-toggle="collapse" :data-target="'#' + menuName"
      :aria-controls="menuName"
      aria-expanded="false" aria-label="Exibir/ocultar navegação">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" :id="menuName">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item" v-for="(link, index) in links" :key="index">
          <a class="nav-link" :href="link.route">{{ link.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarCollapse',
  props: {
    menuName: String,
    links: Array,
  },
};
</script>
