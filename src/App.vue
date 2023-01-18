<template>
  <div class="flex flex-col min-h-screen overflow-x-hidden">
    <Navbar />
    <main class="flex-1">
      <PhotoSearch />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import PhotoSearch from "./components/PhotoSearch.vue";

export default defineComponent({
  data() {
    return {
      collapsed: false,
    };
  },
  components: {
    Navbar,
    Footer,
    PhotoSearch,
  },
  methods: {},
});
</script>
