import { type Game } from "@/types/model";

export type FetchGamesResponse = {
  count: number;
  results: Game[];
};
