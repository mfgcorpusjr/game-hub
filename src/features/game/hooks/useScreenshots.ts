import { useQuery } from "@tanstack/react-query"

import api from "@/lib/axios"
import { type Response } from "@/utils/types"
import { type Screenshot } from "@/features/game/utils/types"

const useScreenshots = (id: number) =>
  useQuery<Response<Screenshot>, Error>({
    queryKey: ["games", id, "screenshots"],
    queryFn: async () => {
      const { data } = await api.get(`/games/${id}/screenshots`)
      return data
    },
  })

export default useScreenshots
