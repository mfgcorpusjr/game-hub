import { useQuery } from "@tanstack/react-query";

import * as GamesAPI from "@/api/games";

const useMovies = (id: number) =>
  useQuery({
    queryKey: ["games", id, "movies"],
    queryFn: () => GamesAPI.getMovies(id),
  });

export default useMovies;
