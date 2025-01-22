<script setup lang="ts">
import { useApodMediaStore } from '~/store/apod';

const apodMediaStore = useApodMediaStore();
</script>

<template>
  <div>
    <header>
      <PageHeading tag="h1">Astronomy Picture of the Day</PageHeading>
      <div v-if="apodMediaStore.status === 'pending'">Loading...</div>
      <div v-if="apodMediaStore.error">{{ apodMediaStore.error }}</div>
    </header>

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
