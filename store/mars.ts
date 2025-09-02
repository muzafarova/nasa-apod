import { type MarsMedia } from '~/types/apod';

export const useMarsMediaStore = defineStore('marsMediaStore', () => {
  const url = computed(
    () => '/api/mars?earth_date=' + formatISODate(new Date())
  );
  const {
    data: media,
    error,
    status,
  } = useAsyncData<MarsMedia>(url.value, () => $fetch<MarsMedia>(url.value), {
    lazy: true,
  });

  return { media, error, status };
});
