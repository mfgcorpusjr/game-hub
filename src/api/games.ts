import api from "@/api";
import type { Response, Game, GameQuery } from "@/types";

export const getAll = (gameQuery: GameQuery): Promise<Response<Game>> => {
  return api.get("/games", {
    params: {
      genres: gameQuery.genreId,
    },
  });
};
