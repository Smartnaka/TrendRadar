import type { Trend } from '../types';

export const fetchTrends = async (): Promise<Trend[]> => {
  const response = await fetch('/api/trends');

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  return data.trends;
};
