import { create } from "zustand";

import { type Genre, type Platform } from "@/types/model";

type GameQueryStore = {
  query: {
    genre?: Genre;
    platform?: Platform;
  };
  setGenre: (genre: Genre) => void;
  setPlatform: (platform: Platform) => void;
};

const useGameQueryStore = create<GameQueryStore>((set) => ({
  query: {
    genre: undefined,
  },

  setGenre: (genre: Genre) =>
    set((state) => ({ query: { ...state.query, genre } })),

  setPlatform: (platform: Platform) =>
    set((state) => ({ query: { ...state.query, platform } })),
}));

export default useGameQueryStore;
