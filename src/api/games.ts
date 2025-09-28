import api from "@/api";

import { type FetchGamesResponse } from "@/types/response";

export const getAll = (): Promise<FetchGamesResponse> => {
  return api({
    url: "/games",
  });
};
