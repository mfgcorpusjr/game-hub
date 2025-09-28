import { type Game } from "@/types/model";
import { type Genre } from "@/types/model";

export type FetchGamesResponse = {
  count: number;
  results: Game[];
};

export type FetchGenresResponse = {
  count: number;
  results: Genre[];
};
