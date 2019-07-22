<template>
    <div class="collapse navbar-collapse" :class="{show: $parent.collapseShow}" :id="menuName">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item" v-for="(link, index) in links" :key="index">
          <a class="nav-link" :href="link.route">{{ link.name }}</a>
        </li>
      </ul>
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
