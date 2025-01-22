import { type ApodMedia } from '~/server/api/apod';

export const useApodMediaStore = defineStore('apodMediaStore', () => {
  const {
    data: media,
    error,
    status,
  } = useAsyncData('apodDefault', () => $fetch<ApodMedia>('/api/apod'), {
    lazy: true,
  });

  return { media, error, status };
});
