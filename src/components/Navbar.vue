<template>
  <section class="bg-blue-300">
    <div class="container mx-auto px-8 py-4 flex items-center justify-between">
      <h2 class="text-xl font-medium">
        VueJS Demo <span class="text-xs font-normal">Made with Pexels API</span>
      </h2>
      <a-button type="primary">Login</a-button>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  components: {},
  data() {
    return {
      open: false,
    };
  },
};
</script>
