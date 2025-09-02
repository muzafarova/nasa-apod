import { type ApodMedia } from '~/types/apod';
import { useStorage } from '@vueuse/core';

export const useFavouritesStore = defineStore('favouritesStore', () => {
  const data = useStorage<{ [key: string]: ApodMedia }>('data', {});

  const uniqueDates = computed(() => new Set(Object.keys(data.value)));
  const count = computed(() => uniqueDates.value.size);
  const favourites = computed(() => {
    const map: Map<string, ApodMedia> = new Map();
    uniqueDates.value.forEach((date) => {
      map.set(date, data.value[date]);
    });
    return map;
  });

  function toggle(item: ApodMedia) {
    favourites.value.has(item.date)
      ? delete data.value[item.date]
      : (data.value = { ...data.value, [item.date]: item });
  }

  function isFavourite(date: string) {
    return favourites.value.has(date);
  }

  return { favourites, count, toggle, isFavourite };
});
