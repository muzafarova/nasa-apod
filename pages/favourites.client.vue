<script setup lang="ts">
import { useFavouritesStore } from '~/store/favourites';

const favouritesStore = useFavouritesStore();

useHead({ title: 'Favourites' });
</script>

<template>
  <div class="p-5">
    <PageHeading tag="h2">Favourites</PageHeading>
    <div class="flex flex-wrap gap-5 py-5 justify-start align-start">
      <div
        v-for="item of favouritesStore.favourites"
        :key="item[0]"
        class="w-96 relative bg-slate-700 p-4"
      >
        <FavToggleButton
          :item="item[1]"
          class="block absolute right-0 top-1 m-4"
        />
        <NuxtLink :to="`/apod/${item[1].date}`" :title="item[1].title">
          <time class="text-sm text-slate-400">{{
            formatDate(item[1].date)
          }}</time>
          <h3 class="text-lg mb-2 flex items-center justify-between gap-2">
            {{ item[1].title }}
          </h3>
          <img
            v-if="item[1].media_type !== 'other'"
            :src="
              item[1].media_type === 'image'
                ? item[1].url
                : item[1].thumbnail_url
            "
            :alt="item[1].title"
            class="block max-w-full pointer-events-none"
          />
          <p class="text-sm mt-3">
            {{ truncate(item[1].explanation, 200) }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
