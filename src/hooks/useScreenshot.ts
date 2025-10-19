import { useQuery } from "@tanstack/react-query";

import * as GamesAPI from "@/api/games";

const useScreenshots = (id: number) =>
  useQuery({
    queryKey: ["games", id, "screenshots"],
    queryFn: () => GamesAPI.getScreenshots(id),
  });

export default useScreenshots;
