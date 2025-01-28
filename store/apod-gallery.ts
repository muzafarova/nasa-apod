import { isPast, subMonths, addMonths } from 'date-fns';

import { type ApodMedia } from '~/server/api/apod';

const MONTHS_BACK = 1;
const MONTHS_BETWEEN = 1;

export const useApodGalleryStore = defineStore('apodGallery', () => {
  const defaultStartDate = formatISODate(subMonths(new Date(), MONTHS_BACK));
  const startDate = ref<string>(defaultStartDate);
  const RangeEnd = computed(() =>
    addMonths(new Date(startDate.value), MONTHS_BETWEEN)
  );
  const endDate = computed(() =>
    isPast(RangeEnd.value)
      ? formatISODate(RangeEnd.value)
      : formatISODate(new Date())
  );

  const url = computed(
    () => `/api/apod?start_date=${startDate.value}&end_date=${endDate.value}`
  );
  const { data, error, status, execute } = useAsyncData(
    url.value,
    () => $fetch<ApodMedia[]>(url.value),
    { lazy: true }
  );

  const gallery = computed(() =>
    data.value?.filter((item) => item.media_type !== 'other')
  );

  const other = computed(() =>
    (data.value || []).filter((item) => item.media_type === 'other')
  );

  function changeDate(date: string) {
    startDate.value = date;
  }

  watch(startDate, () => execute());
  execute();

  return { gallery, other, error, status, startDate, changeDate };
});
