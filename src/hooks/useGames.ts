import { useInfiniteQuery } from "@tanstack/react-query";

import * as GamesAPI from "@/api/games";
import useGameQueryStore from "@/store/useGameQueryStore";

const useGames = () => {
  const query = useGameQueryStore((state) => state.query);

  return useInfiniteQuery({
    queryKey: ["games", query],
    queryFn: ({ pageParam }) =>
      GamesAPI.getAll({
        params: {
          genres: query.genre?.id,
          parent_platforms: query.platform?.id,
          ordering: query.sortOrder,
          search: query.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
