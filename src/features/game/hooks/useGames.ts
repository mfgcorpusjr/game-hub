import { useInfiniteQuery } from "@tanstack/react-query"

import api from "@/lib/axios"
import { type Response } from "@/utils/types"
import { type Game } from "@/features/game/utils/types"

const useGames = () =>
  useInfiniteQuery<Response<Game>, Error>({
    queryKey: ["games"],
    queryFn: async ({ pageParam }) => {
      const { data } = await api.get("/games", {
        params: {
          page: pageParam,
        },
      })
      return data
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined
    },
  })

export default useGames
