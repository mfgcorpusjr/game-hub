import api from "@/api";
import { type FetchResponse, type Genre } from "@/types";

export const getAll = (): Promise<FetchResponse<Genre>> => {
  return api({
    url: "/genres",
  });
};
