<script setup lang="ts">
import { useApodMediaByDateStore } from '~/store/apod-by-date';
const apodMedia = useApodMediaByDateStore();
</script>

<template>
  <Title>{{ apodMedia.pageTitle }}</Title>

  <div class="p-4">
    <div v-if="apodMedia.status === 'pending'">Loading...</div>
    <div v-if="apodMedia.error">{{ apodMedia.error }}</div>

    <ApodMediaCard
      v-if="apodMedia.media"
      :media-type="apodMedia.media.media_type"
      :url="
        apodMedia.media.media_type === 'image'
          ? apodMedia.media.hdurl
          : apodMedia.media.url
      "
      :title="apodMedia.media.title"
      :date="apodMedia.media.date"
      :description="apodMedia.media.explanation"
    />
  </div>
</template>
