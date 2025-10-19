import api from "@/api";
import type { Response, Game } from "@/types";

export const getAll = (): Promise<Response<Game>> => {
  return api.get("/games");
};
