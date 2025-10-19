import { create } from "zustand";

import { type GameQuery } from "@/types";

type GameQueryStore = {
  gameQuery: GameQuery;
  setGenreId: (id: number) => void;
  setPlatformId: (id: number) => void;
  setSortOrder: (sortOrder: string) => void;
};

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},

  setGenreId: (genreId: number) => {
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId } }));
  },

  setPlatformId: (platformId: number) => {
    set((state) => ({
      gameQuery: { ...state.gameQuery, platformId: platformId || undefined },
    }));
  },

  setSortOrder: (sortOrder: string) => {
    set((state) => ({
      gameQuery: { ...state.gameQuery, sortOrder: sortOrder || undefined },
    }));
  },
}));

export default useGameQueryStore;
