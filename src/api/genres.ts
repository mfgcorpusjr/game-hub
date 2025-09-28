import api from "@/api";

import { type FetchGenresResponse } from "@/types/response";

export const getAll = (): Promise<FetchGenresResponse> => {
  return api({
    url: "/genres",
  });
};
