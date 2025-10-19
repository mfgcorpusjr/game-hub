import { useQuery } from "@tanstack/react-query";

import * as PlatformsAPI from "@/api/platforms";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => PlatformsAPI.getAll(),
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default usePlatforms;
