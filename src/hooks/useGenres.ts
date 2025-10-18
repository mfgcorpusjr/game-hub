import { useQuery } from "@tanstack/react-query";

import * as GenresAPI from "@/api/genres";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => GenresAPI.getAll(),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default useGenres;
