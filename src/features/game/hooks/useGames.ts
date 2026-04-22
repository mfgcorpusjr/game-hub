import { useInfiniteQuery } from "@tanstack/react-query"

import api from "@/lib/axios"
import { type Response } from "@/utils/types"
import { type Game } from "@/features/game/utils/types"
import useGameStore from "@/features/game/stores/useGameStore"

const useGames = () => {
  const query = useGameStore((state) => state.query)

  return useInfiniteQuery<Response<Game>, Error>({
    queryKey: ["games", query],
    queryFn: async ({ pageParam }) => {
      const { data } = await api.get("/games", {
        params: {
          page: pageParam,
          ...(query.genreId && { genres: query.genreId }),
        },
      })
      return data
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    },
  })
}

export default useGames
