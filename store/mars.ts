import { type MarsMedia } from '~/server/api/mars';

export const useMarsMediaStore = defineStore('marsMediaStore', () => {
  const {
    data: media,
    error,
    status,
  } = useAsyncData<MarsMedia>(
    'marsToday',
    () =>
      $fetch<MarsMedia>('/api/mars?earth_date=' + formatISODate(new Date())),
    {
      lazy: true,
    }
  );

  return { media, error, status };
});
