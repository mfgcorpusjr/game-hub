import { useQuery } from "@tanstack/react-query"

import api from "@/lib/axios"
import { type Response } from "@/utils/types"
import { type Platform } from "@/features/platform/utils/types"

const usePlatforms = () =>
  useQuery<Response<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: async () => {
      const { data } = await api.get("/platforms/lists/parents")
      return data
    },
  })

export default usePlatforms
