import { create } from "zustand";

import { type Genre } from "@/types/model";

type GameQueryStore = {
  query: {
    genre?: Genre;
  };
  setGenre: (genre: Genre) => void;
};

const useGameQueryStore = create<GameQueryStore>((set) => ({
  query: {
    genre: undefined,
  },

  setGenre: (genre: Genre) =>
    set((state) => ({ query: { ...state.query, genre } })),
}));

export default useGameQueryStore;
