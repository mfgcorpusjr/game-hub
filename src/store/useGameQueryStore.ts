import { create } from "zustand";

import { type Genre, type Platform } from "@/types";

type GameQueryStore = {
  query: {
    genre?: Genre;
    platform?: Platform;
    sortOrder?: string;
    searchText?: string;
  };
  setGenre: (genre: Genre) => void;
  setPlatform: (platform?: Platform) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
};

const useGameQueryStore = create<GameQueryStore>((set) => ({
  query: {
    genre: undefined,
  },

  setGenre: (genre: Genre) =>
    set((state) => ({ query: { ...state.query, genre } })),

  setPlatform: (platform?: Platform) =>
    set((state) => ({ query: { ...state.query, platform } })),

  setSortOrder: (sortOrder: string) =>
    set((state) => ({ query: { ...state.query, sortOrder } })),

  setSearchText: (searchText: string) => set({ query: { searchText } }),
}));

export default useGameQueryStore;
