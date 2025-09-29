import { useQuery } from "@tanstack/react-query";

import * as GamesAPI from "@/api/games";
import useGameQueryStore from "@/store/useGameQueryStore";

const useGames = () => {
  const query = useGameQueryStore((state) => state.query);

  return useQuery({
    queryKey: ["games", query],
    queryFn: () =>
      GamesAPI.getAll({
        params: {
          genres: query.genre?.id,
          parent_platforms: query.platform?.id,
          ordering: query.sortOrder,
          search: query.searchText,
        },
      }),
  });
};

export default useGames;
