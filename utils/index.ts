import { format } from 'date-fns';

function formatDate(date: string, template: string) {
  if (typeof date !== 'string') {
    return date;
  }

  try {
    return format(date, template);
  } catch (err) {
    console.warn(err);
    return date;
  }
}

export function formatDateUI(date: string) {
  return formatDate(date, 'dd/MM/yyyy');
}

export function formatDateAPI(date: string) {
  return formatDate(date, 'yyyy-MM-dd');
}
