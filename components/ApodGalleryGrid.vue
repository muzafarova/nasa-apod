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
    <div v-for="item of items" :key="item.url">
      <NuxtLink
        :to="`/apod/${item.date}`"
        :title="`${formatDate(item.date)}: ${item.title}`"
        class="block w-32 h-24 overflow-hidden"
      >
        <NuxtImg
          preload
          loading="lazy"
          :src="item.media_type === 'image' ? item.url : item.thumbnail_url"
          :alt="item.title"
          width="128"
          height="96"
        />
      </NuxtLink>
    </div>
  </div>
</template>
