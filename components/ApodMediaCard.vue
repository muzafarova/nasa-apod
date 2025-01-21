<script setup lang="ts">
defineProps<{
  mediaType: 'image' | 'video';
  url: string;
  title: string;
  date: string;
  description?: string;
}>();
</script>

<template>
  <div class="max-h-full inline-flex flex-col text-white">
    <time class="text-sm text-slate-400">{{ formatDate(date) }}</time>
    <h2 class="text-xl py-4 flex items-center gap-5">
      {{ title }}
      <slot />
    </h2>
    <figure class="flex flex-wrap">
      <figcaption v-if="description" class="xl:w-1/5 bg-slate-700 p-5 shrink-0">
        <p class="text-base xl:text-sm max-w-prose">
          {{ description }}
        </p>
      </figcaption>
      <div class="xl:w-4/5">
        <img v-if="mediaType === 'image'" :src="url" :alt="title" />
        <iframe
          v-else-if="mediaType === 'video'"
          :src="url"
          :title="title"
          width="1120"
          height="630"
          class="max-w-full"
        />
      </div>
    </figure>
  </div>
</template>
