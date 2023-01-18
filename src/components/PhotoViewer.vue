<template>
  <div>
    <!-- Image -->
    <img
      v-on:click="() => (showModal = true)"
      :src="photo.src.tiny"
      lazy="loading"
      :alt="photo.src.alt"
      class="duration-500 cursor-pointer hover:ring-4 hover:shadow-lg hover:rounded-xl hover:scale-105"
    />

    <!-- Image preview -->
    <a-modal
      title="Title"
      :visible="showModal"
      @ok="() => (showModal = false)"
      @cancel="() => (showModal = false)"
    >
      <!-- Tab panels -->
      <a-tabs tab-position="left" default-active-key="1">
        <!-- Image Tab -->
        <a-tab-pane key="1" tab="Picture">
          <img
            class="w-full h-full object-contain max-h-80 rounded-xl"
            :src="photo.src.medium"
            lazy="loading"
          />
        </a-tab-pane>

        <!-- Image Information Tab -->
        <a-tab-pane key="2" tab="Info" force-render>
          <ul>
            <li>{{ photo.alt }}</li>
            <li class="mt-8">
              <b>Photographer:</b> {{ photo.photographer }}
              <a class="underline" :href="photo.photographer.url">(profile)</a>
            </li>
            <li>
              <b class="mr-1">URL:</b>
              <a class="underline" target="_blank" :href="photo.url">{{
                photo.url
              }}</a>
            </li>
          </ul>
        </a-tab-pane>

        <!-- Image Reference Tab -->
        <a-tab-pane key="3" tab="Reference">
          <a href="https://www.pexels.com">Photos provided by Pexels</a>

          <a href="https://www.pexels.com">
            <img src="https://images.pexels.com/lib/api/pexels.png" />
          </a>
        </a-tab-pane>
      </a-tabs>

      <!-- Customized Modal Footer -->
      <template slot="footer">
        <div class="flex justify-center">
          <a-button key="back" @click="() => (showModal = false)">
            Okay
          </a-button>
        </div>
      </template>
    </a-modal>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    photo: { type: Object, required: true },
  },
  data() {
    return {
      showModal: false as boolean,
    };
  },
};
</script>
