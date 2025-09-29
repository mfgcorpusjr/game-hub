export type FetchResponse<T> = {
  results: T[];
  count: number;
  next: string | null;
};
