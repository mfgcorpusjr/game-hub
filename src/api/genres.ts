import api from "@/api";
import type { Response, Genre } from "@/types";

export const getAll = (): Promise<Response<Genre>> => {
  return api.get("/genres");
};
