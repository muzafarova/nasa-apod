<script setup lang="ts">
defineProps<{
  items: {
    url: string;
    title: string;
    date: string;
    media_type: string;
    thumbnail_url?: string;
  }[];
}>();
</script>

<template>
  <div class="flex flex-wrap gap-5 py-5 justify-start align-start">
    <div
      v-for="item of items"
      :key="item.url"
      class="w-32 h-16 overflow-hidden"
    >
      <NuxtLink :to="`/apod/${item.date}`" :title="item.title">
        <img
          :src="item.media_type === 'image' ? item.url : item.thumbnail_url"
          :alt="`${item.date}: ${item.title}`"
          class="block max-w-full pointer-events-none"
        />
      </NuxtLink>
    </div>
  </div>
</template>
