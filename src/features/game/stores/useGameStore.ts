import { create } from "zustand"

type GameStore = {
  query: {
    genreId?: number
    parentPlatformId?: number
  }

  setGenreId: (genreId?: number) => void
  setParentPlatformId: (parentPlatformId?: number) => void
}

const useGameStore = create<GameStore>()((set) => ({
  query: {
    genreId: undefined,
    parentPlatformId: undefined,
  },

  setGenreId: (genreId) =>
    set((state) => ({ query: { ...state.query, genreId } })),

  setParentPlatformId: (parentPlatformId) =>
    set((state) => ({ query: { ...state.query, parentPlatformId } })),
}))

export default useGameStore
