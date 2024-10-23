import { format } from 'date-fns';

export const formatDate = (date: Date): string => {
  return format(date, 'MMM dd, yyyy');
};

export const formatTime = (time: string): string => {
  return format(new Date(`2024-01-01T${time}`), 'hh:mm a');
};