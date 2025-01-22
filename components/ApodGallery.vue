<script setup lang="ts">
import { useApodGalleryStore } from '~/store/apod-gallery.js';
import ApodGalleryGrid from '~/components/ApodGalleryGrid.vue';

const apodGallery = useApodGalleryStore();
</script>

<template>
  <header>
    <PageHeading tag="h2" class="flex gap-2">
      Past images
      <span v-if="apodGallery.status === 'pending'">...</span>
    </PageHeading>
    <div v-if="apodGallery.error">{{ apodGallery.error }}</div>
  </header>
  <label
    for="since"
    class="inline-flex flex-wrap py-2 gap-y-1 gap-x-2 text-sm text-slate-300"
  >
    Since
    <input
      type="date"
      id="since"
      :max="new Date().toISOString().split('T')[0]"
      :min="
        new Date(new Date().setMonth(new Date().getMonth() - 1))
          .toISOString()
          .split('T')[0]
      "
      :value="apodGallery.startDate"
      @change="e => apodGallery.changeDate((e.target as HTMLInputElement).value)"
      class="bg-slate-400 hover:bg-white text-black px-1 rounded"
    />
  </label>

  <ApodGalleryGrid v-if="apodGallery.gallery" :items="apodGallery.gallery" />
</template>
