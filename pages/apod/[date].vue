<script setup lang="ts">
import { useApodMediaByDateStore } from '~/store/apod-by-date';
const apodMediaByDate = useApodMediaByDateStore();
</script>

<template>
  <div>
    <Title>{{ apodMediaByDate.pageTitle }}</Title>
    <Meta
      name="description"
      :content="apodMediaByDate.media?.explanation || ''"
    />

    <div class="p-4">
      <div v-if="apodMediaByDate.status === 'pending'">Loading...</div>
      <div v-if="apodMediaByDate.error">{{ apodMediaByDate.error }}</div>

      <ApodMediaCard
        v-if="apodMediaByDate.media"
        :media-type="apodMediaByDate.media.media_type"
        :url="
          apodMediaByDate.media.media_type === 'image'
            ? apodMediaByDate.media.hdurl
            : apodMediaByDate.media.media_type === 'video'
            ? apodMediaByDate.media.url
            : ''
        "
        :title="apodMediaByDate.media.title"
        :date="apodMediaByDate.media.date"
        :description="apodMediaByDate.media.explanation"
      >
        <FavToggleButton
          v-if="apodMediaByDate.media"
          :item="apodMediaByDate.media"
          class="inline-flex"
        />
      </ApodMediaCard>
    </div>
  </div>
</template>
