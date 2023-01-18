<template>
  <div class="pb-16">
    <h1 class="text-center py-24 text-5xl">Gügle Image Search</h1>

    <!-- Form for the user to input -->
    <form
      class="flex space-x-2 items-center py-4 justify-center"
      v-on:submit.prevent="handleSubmit"
    >
      <a-input
        type="text"
        class="w-64"
        placeholder="Search here"
        v-model="search"
        required
      />

      <!-- Search button with loading during searching -->
      <a-button
        class="px-2 py-1 bg-blue-300 rounded-md"
        :loading="status === 'searching'"
        html-type="submit"
      >
        Search
      </a-button>
    </form>

    <!-- Pagination -->
    <div class="my-4" v-if="results.total_results">
      <a-pagination
        class="w-max mx-auto"
        show-quick-jumper
        v-model="config.page"
        :total="results.total_results"
        show-size-changer
        :page-size.sync="config.items"
        @showSizeChange="getPhotos"
        @change="getPhotos"
      />
    </div>

    <!-- Image Results -->
    <ul
      v-if="status === 'success'"
      class="grid grid-cols-4 container mx-auto gap-4 px-8"
    >
      <li
        class="object-contain"
        v-if="status === 'success'"
        v-for="photo in photos"
      >
        <!-- Customized component that let's the user preview an image with more information -->
        <PhotoViewer :photo="photo" />
      </li>
    </ul>

    <!-- First thing to show -->
    <ul v-else-if="status === 'idle'" class="text-center">
      Please use search Gügle to get results
    </ul>

    <!-- Show if there's no data received -->
    <ul v-else-if="status === 'failed'" class="text-center">
      No results for "{{
        config.search
      }}", please use another keyword
    </ul>

    <!-- Show if it's still searching -->
    <ul v-else-if="status === 'searching'" class="text-center">
      Looking for pictures about "{{
        config.search
      }}"
    </ul>
  </div>
</template>

<script lang="ts">
import type {
  ObjectInterface,
  PexelsSearchInterface,
} from "../helpers/commonInterfaces";
import { defineComponent } from "vue";
import { utilGetPhoto } from "../helpers/commonFetch";
import PhotoViewer from "./PhotoViewer.vue";

export default defineComponent({
  data() {
    return {
      photos: [] as ObjectInterface[],
      search: "",
      status: "idle",
      results: {} as ObjectInterface,
      config: {
        search: "",
        items: 10,
        page: 1,
      } as PexelsSearchInterface,
    };
  },
  components: {
    PhotoViewer,
  },
  methods: {
    handleSubmit: function () {
      this.config.search = new String(this.search).valueOf();
      this.config.page = 1;
      this.getPhotos();
    },
    getPhotos: async function () {
      this.status = "searching";
      const res = await utilGetPhoto(this.config);
      if (res.total_results) {
        this.photos = res.photos;
        this.status = "success";
      } else this.status = "failed";
      this.results = res;
    },
  },
});
</script>
