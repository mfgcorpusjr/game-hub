import api from "@/api";
import { type FetchResponse } from "@/types/response";
import { type Platform } from "@/types/model";

export const getAll = (): Promise<FetchResponse<Platform>> => {
  return api({
    url: "/platforms/lists/parents",
  });
};
