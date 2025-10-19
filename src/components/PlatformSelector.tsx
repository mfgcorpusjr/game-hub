import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/stores/useGameQueryStore";

export default function PlatformSelector() {
  const { data, error } = usePlatforms();
  const setPlatformId = useGameQueryStore((state) => state.setPlatformId);

  if (error) return null;

  return (
    <fieldset className="fieldset w-full md:w-[250px]">
      <legend className="fieldset-legend">Platforms:</legend>
      <select
        className="select w-full"
        onChange={(e) => setPlatformId(+e.target.value)}
      >
        <option value={0}>All</option>
        {data?.results.map((platform) => (
          <option key={platform.id} value={platform.id}>
            {platform.name}
          </option>
        ))}
      </select>
    </fieldset>
  );
}
