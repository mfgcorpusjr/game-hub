import { create } from "zustand";

import { type GameQuery } from "@/types";

type GameQueryStore = {
  gameQuery: GameQuery;
  setGenreId: (id: number) => void;
  setPlatformId: (id: number) => void;
};

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},

  setGenreId: (id: number) => {
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId: id } }));
  },

  setPlatformId: (id: number) => {
    set((state) => ({
      gameQuery: { ...state.gameQuery, platformId: id || undefined },
    }));
  },
}));

export default useGameQueryStore;
