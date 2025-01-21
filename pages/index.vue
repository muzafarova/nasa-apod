<script setup lang="ts">
import { useApodStore } from '~/store/apod';

useSeoMeta({
  title: 'Astronomy Picture of the Day',
});

const apodStore = useApodStore();
</script>

<template>
  <div class="p-4">
    <h1>Today’s image</h1>

    <div v-if="apodStore.status === 'pending'">Loading...</div>

    <div v-if="apodStore.error">
      <pre>{{ apodStore.error }}</pre>
    </div>

    <NuxtLink v-if="apodStore.apod" :to="`/apod/${apodStore.apod.date}`">
      <ApodMediaCard
        :url="apodStore.apod.url"
        :media-type="apodStore.apod.media_type"
        :title="apodStore.apod.title"
        :date="apodStore.apod.date"
      />
    </NuxtLink>
  </div>
</template>
