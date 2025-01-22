import { subDays } from 'date-fns';
import { type ApodMedia } from '~/server/api/apod';

const DAYS_BACK = 15;

export const useApodGalleryStore = defineStore('apodGallery', () => {
  const defaultStartDate = formatISODate(subDays(Date.now(), DAYS_BACK));
  const startDate = ref<string>(defaultStartDate);

  const {
    data: gallery,
    error,
    status,
    execute,
  } = useAsyncData(
    'apodGallery',
    () => $fetch<ApodMedia[]>(`/api/apod?start_date=${startDate.value}`),
    { lazy: true }
  );

  function changeDate(date: string) {
    startDate.value = date;
  }

  watch(startDate, () => execute());
  execute();

  return { gallery, error, status, startDate, changeDate };
});
