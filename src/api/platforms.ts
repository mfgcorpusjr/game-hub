import api from "@/api";
import { type FetchResponse, type Platform } from "@/types";

export const getAll = (): Promise<FetchResponse<Platform>> => {
  return api({
    url: "/platforms/lists/parents",
  });
};
