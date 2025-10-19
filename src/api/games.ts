import api from "@/api";
import type { Response, Game, GameQuery } from "@/types";

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
