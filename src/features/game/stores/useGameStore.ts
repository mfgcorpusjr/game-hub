import { create } from "zustand"

type GameStore = {
  query: {
    genreId?: number
    parentPlatformId?: number
    ordering?: string
  }

  setGenreId: (genreId?: number) => void
  setParentPlatformId: (parentPlatformId?: number) => void
  setOrdering: (ordering?: string) => void
}

const useGameStore = create<GameStore>()((set) => ({
  query: {
    genreId: undefined,
    parentPlatformId: undefined,
    ordering: undefined,
  },

  setGenreId: (genreId) =>
    set((state) => ({ query: { ...state.query, genreId } })),

  setParentPlatformId: (parentPlatformId) =>
    set((state) => ({ query: { ...state.query, parentPlatformId } })),

  setOrdering: (ordering) =>
    set((state) => ({ query: { ...state.query, ordering } })),
}))

export default useGameStore
