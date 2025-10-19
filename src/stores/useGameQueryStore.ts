import { create } from "zustand";

import { type GameQuery } from "@/types";

type GameQueryStore = {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId?: number) => void;
  setSortOrder: (sortOrder?: string) => void;
  setSearchText: (searchText?: string) => void;
};

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},

  setGenreId: (genreId: number) => {
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId } }));
  },

  setPlatformId: (platformId?: number) => {
    set((state) => ({
      gameQuery: { ...state.gameQuery, platformId },
    }));
  },

  setSortOrder: (sortOrder?: string) => {
    set((state) => ({
      gameQuery: { ...state.gameQuery, sortOrder },
    }));
  },

  setSearchText: (searchText?: string) => {
    set({ gameQuery: { searchText } });
  },
}));

export default useGameQueryStore;
