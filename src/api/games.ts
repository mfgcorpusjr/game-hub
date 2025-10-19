import api from "@/api";
import type { Response, Game, GameQuery, Movie, Screenshot } from "@/types";

export const getAll = (
  pageParam: number,
  gameQuery: GameQuery
): Promise<Response<Game>> => {
  return api.get("/games", {
    params: {
      page: pageParam,
      genres: gameQuery.genreId,
      parent_platforms: gameQuery.platformId,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
    },
  });
};

export const get = (slug: string): Promise<Game> => {
  return api.get(`/games/${slug}`);
};

export const getMovies = (id: number): Promise<Response<Movie>> => {
  return api.get(`/games/${id}/movies`);
};

export const getScreenshots = (id: number): Promise<Response<Screenshot>> => {
  return api.get(`/games/${id}/screenshots`);
};
