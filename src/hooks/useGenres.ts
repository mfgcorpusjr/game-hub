import { useQuery } from "@tanstack/react-query";

import * as GenresAPI from "@/api/genres";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => GenresAPI.getAll(),
  });

export default useGenres;
