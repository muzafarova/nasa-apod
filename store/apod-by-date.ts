import { type ApodMedia } from '~/types/apod';

export const useApodMediaByDateStore = defineStore(
  'apodMediaByDateStore',
  () => {
    const route = useRoute();
    const date = computed(() => {
      return Array.isArray(route.params.date)
        ? route.params.date[0]
        : route.params.date;
    });

    const url = computed(() => `/api/apod?date=${date.value}`);
    const {
      data: media,
      error,
      status,
      execute,
    } = useAsyncData(
      url.value,
      async () => {
        if (!date.value) {
          return null;
        }

        return await $fetch<ApodMedia>(url.value);
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
