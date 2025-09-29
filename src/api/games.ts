import { type AxiosRequestConfig } from "axios";

import api from "@/api";
import { type FetchResponse } from "@/types/response";
import { type Game } from "@/types/model";

export const getAll = (
  requestConfig: AxiosRequestConfig
): Promise<FetchResponse<Game>> => {
  return api({
    url: "/games",
    ...requestConfig,
  });
};
