import { type ApodMedia } from '~/server/api/apod';

export const useApodMediaStore = defineStore('apodMediaStore', () => {
  const {
    data: media,
    error,
    status,
  } = useFetch<ApodMedia>('/api/apod', {
    lazy: true,
    cache: 'no-store',
  });

  return { media, error, status };
});
