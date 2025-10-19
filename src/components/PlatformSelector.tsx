import usePlatforms from "@/hooks/usePlatforms";

export default function PlatformSelector() {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <fieldset className="fieldset w-[250px]">
      <legend className="fieldset-legend">Platforms:</legend>
      <select className="select">
        <option value="">All</option>
        {data?.results.map((platform) => (
          <option key={platform.id}>{platform.name}</option>
        ))}
      </select>
    </fieldset>
  );
}
