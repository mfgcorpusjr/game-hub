import { useQuery } from "@tanstack/react-query";

import * as GamesAPI from "@/api/games";

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => GamesAPI.get(slug),
  });

export default useGame;
