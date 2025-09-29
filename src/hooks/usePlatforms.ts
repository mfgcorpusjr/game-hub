import { useQuery } from "@tanstack/react-query";

import * as PlatformsAPI from "@/api/platforms";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => PlatformsAPI.getAll(),
  });

export default usePlatforms;
