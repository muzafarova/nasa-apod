<script setup lang="ts">
import { useFavouritesStore } from '~/store/favourites';

const favouritesStore = useFavouritesStore();

defineOptions({
  inheritAttrs: false,
});
</script>

<template>
  <ClientOnly>
    <NuxtLink to="/favourites" v-bind="$attrs" class="inline-flex items-center"
      >Favourites ({{ favouritesStore.count }})
    </NuxtLink>
  </ClientOnly>
</template>
