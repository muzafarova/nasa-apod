<script setup lang="ts">
import { useApodMediaStore } from '~/store/apod';

const apodMediaStore = useApodMediaStore();
</script>

<template>
  <div class="space-y-4">
    <header>
      <PageHeading tag="h1">Astronomy Picture of the Day</PageHeading>
      <div v-if="apodMediaStore.status === 'pending'">Loading...</div>
      <div v-if="apodMediaStore.error">{{ apodMediaStore.error }}</div>
    </header>

    <div v-if="apodMediaStore.media" class="flex flex-col relative">
      <NuxtLink :to="`/apod/${apodMediaStore.media.date}`">
        <ApodMediaCard
          :url="
            apodMediaStore.media.media_type === 'image'
              ? apodMediaStore.media.hdurl
              : apodMediaStore.media.media_type === 'video'
              ? apodMediaStore.media.url
              : ''
          "
          :media-type="apodMediaStore.media.media_type"
          :title="apodMediaStore.media.title"
          :date="apodMediaStore.media.date"
        />
        <p class="text-sm mt-3">
          {{ truncate(apodMediaStore.media.explanation, 400) }}
        </p>
      </NuxtLink>
      <FavToggleButton
        :item="apodMediaStore.media"
        class="absolute -right-4 top-0 inline-flex p-4"
      />
    </div>
  </div>
</template>
