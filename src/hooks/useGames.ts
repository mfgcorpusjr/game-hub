import { useQuery } from "@tanstack/react-query";

import * as GamesAPI from "@/api/games";

const useGames = () =>
  useQuery({
    queryKey: ["games"],
    queryFn: () => GamesAPI.getAll(),
  });

export default useGames;
