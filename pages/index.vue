<script setup lang="ts">
import { useApodMediaStore } from '~/store/apod';

useSeoMeta({
  title: 'Astronomy Picture of the Day',
});

const apodMediaStore = useApodMediaStore();
</script>

<template>
  <div class="p-4 space-y-8">
    <main class="lg:flex gap-4">
      <section class="p-8 bg-slate-700 lg:w-3/5">
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
      </section>

      <aside class="p-4">
        <PageHeading tag="h2">Past images</PageHeading>
      </aside>
    </main>

    <aside class="p-8 bg-slate-900">
      <MarsGallery />
    </aside>
  </div>
</template>
