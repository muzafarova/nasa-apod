import { type ApodMedia } from '~/server/api/apod';

export const useApodMediaByDateStore = defineStore(
  'apodMediaByDateStore',
  () => {
    const route = useRoute();
    const date = computed(() => {
      return Array.isArray(route.params.date)
        ? route.params.date[0]
        : route.params.date;
    });

    const {
      data: media,
      error,
      status,
      execute,
    } = useAsyncData(
      'apodByDate',
      async () => {
        if (!date.value) {
          return null;
        }

        return await $fetch<ApodMedia>(`/api/apod?date=${date.value}`);
      },
      { lazy: true }
    );

    const pageTitle = computed(() =>
      media.value ? media.value.title : formatDate(date.value)
    );

    watch(
      () => route.params.date,
      () => execute()
    );

    return { pageTitle, media, error, status };
  }
);
