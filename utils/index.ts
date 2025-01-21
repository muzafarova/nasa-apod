import { format } from 'date-fns';

export function formatDate(date: string) {
  if (typeof date !== 'string') {
    return date;
  }

  try {
    return format(date, 'dd/MM/yyyy');
  } catch (err) {
    console.warn(err);
    return date;
  }
}
