import { create } from "zustand"

type GameStore = {
  query: {
    genreId?: number
  }
  setGenreId: (genreId: number) => void
}

const useGameStore = create<GameStore>()((set) => ({
  query: {
    genreId: undefined,
  },

  setGenreId: (genreId) =>
    set((state) => ({ query: { ...state.query, genreId } })),
}))

export default useGameStore
