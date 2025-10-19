export type Response<T> = {
  count: number;
  next: string | null;
  results: T[];
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

export type Publisher = {
  id: number;
  name: string;
};

export type Game = {
  id: number;
  slug: string;
  name: string;
  background_image: string | null;
  metacritic: number | null;
  parent_platforms: { platform: Platform }[];
  description_raw: string;
  genres: Genre[];
  publishers: Publisher[];
};

export type GameQuery = {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
};

export type Movie = {
  id: number;
  name: string;
  preview: string;
  data: {
    480: string;
    max: string;
  };
};

export type Screenshot = {
  id: number;
  image: string;
  width: number;
  height: number;
};
