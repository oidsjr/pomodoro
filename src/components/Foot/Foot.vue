<template>
  <footer class="bg-dark text-light py-3 mt-4">
    <div class="container">
      <div class="row">
        <div class="col-md-8 text-center text-md-left">
          {{ siteTitle }} por <a href="https://github.com/oidanieljunior" rel="noopener">@oidanieljunior</a>.
        </div>
        <div class="col-md-4 text-center text-md-right">
          <a href="#" @click.prevent="scrollToTop()">Voltar para o topo</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Foot',
  props: {
    siteTitle: String,
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
