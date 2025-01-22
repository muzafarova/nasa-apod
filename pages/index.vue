<script setup lang="ts">
import { useApodMediaStore } from '~/store/apod';
import { useMarsMediaStore } from '~/store/mars';

useSeoMeta({
  title: 'Astronomy Picture of the Day',
});

const apodMediaStore = useApodMediaStore();
const marsMediaStore = useMarsMediaStore();
</script>

<template>
  <div class="p-4 space-y-8">
    <main>
      <PageHeading tag="h1">Astronomy Picture of the Day</PageHeading>

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
    </main>

    <aside class="space-y-2">
      <PageHeading tag="h2">Today’s images from Mars</PageHeading>

      <div v-if="marsMediaStore.status === 'pending'">Loading...</div>

      <div v-if="marsMediaStore.error">
        <pre>{{ marsMediaStore.error }}</pre>
      </div>

      <div v-if="marsMediaStore.media?.photos" class="flex flex-wrap gap-2">
        <img
          v-for="photo of marsMediaStore.media.photos"
          :key="photo.img_src"
          :src="photo.img_src"
          :alt="`${photo.rover.name}: ${photo.earth_date}`"
          class="w-36"
        />
      </div>
    </aside>
  </div>
</template>
