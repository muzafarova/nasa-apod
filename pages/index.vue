<script setup lang="ts">
import { useApodMediaStore } from '~/store/apod';

useSeoMeta({
  title: 'Astronomy Picture of the Day',
});

const apodMediaStore = useApodMediaStore();
</script>

<template>
  <div class="p-4">
    <h1>Today’s image</h1>

    <div v-if="apodMediaStore.status === 'pending'">Loading...</div>

    <div v-if="apodMediaStore.error">
      <pre>{{ apodMediaStore.error }}</pre>
    </div>

    <NuxtLink
      v-if="apodMediaStore.media"
      :to="`/apod/${apodMediaStore.media.date}`"
    >
      <ApodMediaCard
        :url="apodMediaStore.media.url"
        :media-type="apodMediaStore.media.media_type"
        :title="apodMediaStore.media.title"
        :date="apodMediaStore.media.date"
      />
    </NuxtLink>
  </div>
</template>
