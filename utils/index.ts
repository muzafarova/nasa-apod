import { format, formatISO } from 'date-fns';

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
