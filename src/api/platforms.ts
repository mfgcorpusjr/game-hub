import api from "@/api";
import type { Response, Platform } from "@/types";

export const getAll = (): Promise<Response<Platform>> => {
  return api.get("/platforms/lists/parents");
};
