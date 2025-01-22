import { format, formatISO, subMonths } from 'date-fns';

export function formatDate(date: string) {
  if (typeof date !== 'string') {
    return date;
  }

  try {
    return format(date, 'dd/MM/yyyy');
  } catch (err) {
    return date;
  }
}

export function formatISODate(date: Date) {
  if (!(date instanceof Date)) {
    return date;
  }
  return formatISO(new Date(date), { representation: 'date' });
}

export function truncate(text: string, size: number) {
  return text.length > size ? text.substring(0, size) + '...' : text;
}

export function dateMonthsFromNow(months: number) {
  return formatISODate(subMonths(new Date(), months));
}
