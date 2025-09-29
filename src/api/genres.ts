import api from "@/api";
import { type FetchResponse } from "@/types/response";
import { type Genre } from "@/types/model";

export const getAll = (): Promise<FetchResponse<Genre>> => {
  return api({
    url: "/genres",
  });
};
