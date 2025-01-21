import { type Apod } from '~/server/api/apod';

export const useApodStore = defineStore('apodStore', () => {
  const { data, error, status } = useAsyncData<Apod>(() =>
    $fetch<Apod>('/api/apod')
  );

  return { data, error, status };
});
