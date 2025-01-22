import { type MarsMedia } from '~/server/api/mars';

export const useMarsMediaStore = defineStore('marsMediaStore', () => {
  const {
    data: media,
    error,
    status,
  } = useAsyncData<MarsMedia>(
    () =>
      $fetch<MarsMedia>('/api/mars?earth_date=' + formatDateAPI(Date.now())),
    {
      lazy: true,
    }
  );

  return { media, error, status };
});
