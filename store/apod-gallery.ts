import { type ApodMedia } from '~/server/api/apod';

const MONTHS_BACK = 1;

export const useApodGalleryStore = defineStore('apodGallery', () => {
  const defaultStartDate = dateMonthsFromNow(MONTHS_BACK);
  const startDate = ref<string>(defaultStartDate);

  const { data, error, status, execute } = useAsyncData(
    'apodGallery',
    () => $fetch<ApodMedia[]>(`/api/apod?start_date=${startDate.value}`),
    { lazy: true }
  );

  const gallery = computed(() =>
    data.value?.filter((item) => item.media_type !== 'other')
  );

  function changeDate(date: string) {
    startDate.value = date;
  }

  watch(startDate, () => execute());
  execute();

  return { gallery, error, status, startDate, changeDate };
});
