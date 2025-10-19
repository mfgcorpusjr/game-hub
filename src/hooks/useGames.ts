import { useQuery } from "@tanstack/react-query";

import * as GamesAPI from "@/api/games";
import useGameQueryStore from "@/stores/useGameQueryStore";

const useGames = () => {
  const gameQuery = useGameQueryStore((state) => state.gameQuery);

  return useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () => GamesAPI.getAll(gameQuery),
  });
};

export default useGames;
