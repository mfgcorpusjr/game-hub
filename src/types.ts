export type Response<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};
