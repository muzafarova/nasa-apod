import { type Apod } from '~/server/api/apod';

export const useApodStore = defineStore('apodStore', () => {
  const {
    data: apod,
    error,
    status,
  } = useAsyncData<Apod>(() => $fetch<Apod>('/api/apod'));

  return { apod, error, status };
});
