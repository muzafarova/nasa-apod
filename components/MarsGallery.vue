<script setup lang="ts">
import { useMarsMediaStore } from '~/store/mars';

const marsMediaStore = useMarsMediaStore();
</script>

<template>
  <section class="space-y-4">
    <header>
      <PageHeading tag="h2">Today’s images from Mars</PageHeading>
      <div v-if="marsMediaStore.status === 'pending'">Loading...</div>
      <div v-if="marsMediaStore.error">{{ marsMediaStore.error }}</div>
    </header>

    <div v-if="marsMediaStore.media?.photos" class="overflow-x-auto w-full">
      <div class="flex gap-2">
        <img
          v-for="photo of marsMediaStore.media.photos"
          :key="photo.img_src"
          :src="photo.img_src"
          :alt="`${photo.rover.name} rover (${photo.earth_date})`"
          class="w-36"
        />
      </div>
    </div>
  </section>
</template>
