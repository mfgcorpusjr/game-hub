import { type AxiosRequestConfig } from "axios";

import api from "@/api";
import { type FetchGamesResponse } from "@/types/response";

export const getAll = (
  requestConfig: AxiosRequestConfig
): Promise<FetchGamesResponse> => {
  return api({
    url: "/games",
    ...requestConfig,
  });
};
