import { type Apod } from '~/server/api/apod';

export const useApodByDateStore = defineStore('apodByDateStore', () => {
  const route = useRoute();
  const date = computed(() => {
    return Array.isArray(route.params.date)
      ? route.params.date[0]
      : route.params.date;
  });

  const {
    data: apod,
    error,
    status,
    execute,
  } = useAsyncData<Apod | null>(
    async () => {
      if (!date.value) {
        return null;
      }

      return await $fetch<Apod>(`/api/apod?date=${date.value}`);
    },
    { lazy: true }
  );

  const pageTitle = computed(() =>
    apod.value ? apod.value.title : formatDate(date.value)
  );

  watch(
    () => route.params.date,
    () => execute()
  );

  return { pageTitle, apod, error, status };
});
