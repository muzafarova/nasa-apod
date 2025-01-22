<script setup lang="ts">
import { useApodGalleryStore } from '~/store/apod-gallery.js';
import ApodGalleryGrid from '~/components/ApodGalleryGrid.vue';
import PageHeading from './PageHeading.vue';

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
      :max="formatISODate(new Date())"
      min="1995-12-01"
      :value="apodGallery.startDate"
      @change="e => apodGallery.changeDate((e.target as HTMLInputElement).value)"
      class="bg-slate-400 hover:bg-white text-black px-1 rounded"
    />
  </label>

  <ApodGalleryGrid v-if="apodGallery.gallery" :items="apodGallery.gallery" />

  <div v-if="apodGallery.other.length > 0">
    <PageHeading tag="h3">Other</PageHeading>
    <dl v-for="item of apodGallery.other">
      <dt>
        <time class="text-sm text-slate-400"> {{ item.date }}: </time>
        {{ item.title }}
      </dt>
      <dd class="text-sm">{{ item.explanation }}</dd>
    </dl>
  </div>
</template>
