import { create } from "zustand";

import { type GameQuery } from "@/types";

type GameQueryStore = {
  gameQuery: GameQuery;
  setGenreId: (id: number) => void;
};

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},

  setGenreId: (id: number) => {
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId: id } }));
  },
}));

export default useGameQueryStore;
