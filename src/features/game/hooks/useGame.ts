import { useQuery } from "@tanstack/react-query"

import api from "@/lib/axios"
import { type Game } from "@/features/game/utils/types"

const useGame = (slug: string | undefined) =>
  useQuery<Game, Error>({
    queryKey: ["games", slug],
    queryFn: async () => {
      const { data } = await api.get(`/games/${slug}`)
      return data
    },
  })

export default useGame
