import { useInfiniteQuery } from "@tanstack/react-query";

import * as GamesAPI from "@/api/games";
import useGameQueryStore from "@/stores/useGameQueryStore";

const useGames = () => {
  const gameQuery = useGameQueryStore((state) => state.gameQuery);

  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) => GamesAPI.getAll(pageParam, gameQuery),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
