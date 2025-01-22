<script setup lang="ts">
import { useApodByDateStore } from '~/store/apod-by-date';

const apodByDateStore = useApodByDateStore();
</script>

<template>
  <Title>{{ apodByDateStore.pageTitle }}</Title>

  <div class="p-4">
    <div v-if="apodByDateStore.status === 'pending'">Loading...</div>

    <div v-if="apodByDateStore.error">
      <pre>{{ apodByDateStore.error }}</pre>
    </div>

    <ApodMediaCard
      v-if="apodByDateStore.apod"
      :media-type="apodByDateStore.apod.media_type"
      :url="
        apodByDateStore.apod.media_type === 'image'
          ? apodByDateStore.apod.hdurl
          : apodByDateStore.apod.url
      "
      :title="apodByDateStore.apod.title"
      :date="apodByDateStore.apod.date"
      :description="apodByDateStore.apod.explanation"
    />
  </div>
</template>
