export type Response<T> = {
  count: number;
  next: string | null;
  results: T[];
};

export type Game = {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
};

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

export type GameQuery = {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
};
