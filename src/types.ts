export type FetchResponse<T> = {
  results: T[];
  count: number;
  next: string | null;
};

export type Genre = {
  id: number;
  name: string;
  slug: string;
  image_background: string;
};

export type Platform = {
  id: number;
  slug: string;
  name: string;
};

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
};
