import { type ChangeEvent } from "react";

import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store/useGameQueryStore";

export default function PlatformSelector() {
  const { data, error } = usePlatforms();
  const selectedPlatform = useGameQueryStore((state) => state.query.platform);
  const setPlatform = useGameQueryStore((state) => state.setPlatform);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const platform = data?.results.find(
      (p) => p.id === parseInt(e.target.value)
    );
    setPlatform(platform);
  };

  if (error) {
    return null;
  }

  return (
    <select
      className="select"
      value={selectedPlatform?.id ?? ""}
      onChange={handleChange}
    >
      <option value="">All</option>
      {data?.results.map((platform) => (
        <option key={platform.id} value={platform.id}>
          {platform.name}
        </option>
      ))}
    </select>
  );
}
