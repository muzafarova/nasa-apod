<script setup lang="ts">
import { useApodStore } from '~/store/apod';

useSeoMeta({
  title: 'Astronomy Picture of the Day • ',
});

const apodStore = useApodStore();
</script>

<template>
  <div class="p-4">
    <h1>Today’s image</h1>
    <div v-if="apodStore.status === 'pending'">Loading...</div>
    <div v-if="apodStore.error">
      <pre>{{ apodStore.error }}</pre>
    </div>
    <div v-if="apodStore.data">
      <pre>{{ apodStore.data }}</pre>
    </div>
  </div>
</template>
