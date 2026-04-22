import { useQuery } from "@tanstack/react-query"

import api from "@/lib/axios"
import { type Response } from "@/utils/types"
import { type Movie } from "@/features/game/utils/types"

const useMovies = (id: number) =>
  useQuery<Response<Movie>, Error>({
    queryKey: ["games", id, "movies"],
    queryFn: async () => {
      const { data } = await api.get(`/games/${id}/movies`)
      return data
    },
  })

export default useMovies
