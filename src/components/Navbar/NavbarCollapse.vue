<template>
    <div class="collapse navbar-collapse" :class="{show: $parent.collapseShow}" :id="menuName">
      <ul class="navbar-nav text-center ml-auto mt-2 mt-lg-0">
        <li class="nav-item" v-for="(link, index) in links" :key="index">
          <router-link class="nav-link" :to="link.route">{{ link.name }}</router-link>
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
