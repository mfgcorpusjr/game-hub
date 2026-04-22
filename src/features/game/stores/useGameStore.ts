import { create } from "zustand"

type GameStore = {
  query: {
    genreId?: number
    platformId?: number
    ordering?: string
    search?: string
  }

  setGenreId: (genreId?: number) => void
  setPlatformId: (platformId?: number) => void
  setOrdering: (ordering?: string) => void
  setSearch: (search?: string) => void
  resetQuery: () => void
}

const useGameStore = create<GameStore>()((set) => ({
  query: {
    genreId: undefined,
    platformId: undefined,
    ordering: undefined,
    search: undefined,
  },

  setGenreId: (genreId) =>
    set((state) => ({ query: { ...state.query, genreId } })),

  setPlatformId: (platformId) =>
    set((state) => ({ query: { ...state.query, platformId } })),

  setOrdering: (ordering) =>
    set((state) => ({ query: { ...state.query, ordering } })),

  setSearch: (search) =>
    set({
      query: {
        genreId: undefined,
        platformId: undefined,
        ordering: undefined,
        search,
      },
    }),

  resetQuery: () =>
    set({
      query: {
        genreId: undefined,
        platformId: undefined,
        ordering: undefined,
        search: undefined,
      },
    }),
}))

export default useGameStore
