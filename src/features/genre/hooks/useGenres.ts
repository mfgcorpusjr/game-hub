import { useQuery } from "@tanstack/react-query"

import api from "@/lib/axios"
import { type Response } from "@/utils/types"
import { type Genre } from "@/features/genre/utils/types"

const useGenres = () =>
  useQuery<Response<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: async () => {
      const { data } = await api.get("/genres")
      return data
    },
  })

export default useGenres
