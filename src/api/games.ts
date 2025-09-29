import { type AxiosRequestConfig } from "axios";

import api from "@/api";
import { type FetchResponse, type Game } from "@/types";

export const getAll = (
  requestConfig: AxiosRequestConfig
): Promise<FetchResponse<Game>> => {
  return api({
    url: "/games",
    ...requestConfig,
  });
};
