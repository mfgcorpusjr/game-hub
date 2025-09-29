import { type ChangeEvent } from "react";

import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store/useGameQueryStore";

export default function PlatformSelector() {
  const { data, error } = usePlatforms();
  const setPlatform = useGameQueryStore((state) => state.setPlatform);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedPlatform = data?.results.find(
      (platform) => platform.id === parseInt(e.target.value)
    );
    if (selectedPlatform) {
      setPlatform(selectedPlatform);
    }
  };

  if (error) {
    return null;
  }

  return (
    <select className="select" defaultValue="" onChange={handleChange}>
      <option value="" disabled={true}>
        Select platform
      </option>
      {data?.results.map((platform) => (
        <option key={platform.id} value={platform.id}>
          {platform.name}
        </option>
      ))}
    </select>
  );
}
