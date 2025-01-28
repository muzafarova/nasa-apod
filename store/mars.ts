import { type MarsMedia } from '~/server/api/mars';

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
