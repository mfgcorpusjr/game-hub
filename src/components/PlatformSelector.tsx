import usePlatforms from "@/hooks/usePlatforms";

export default function PlatformSelector() {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <fieldset className="fieldset w-full md:w-[250px]">
      <legend className="fieldset-legend">Platforms:</legend>
      <select className="select w-full">
        <option value="">All</option>
        {data?.results.map((platform) => (
          <option key={platform.id}>{platform.name}</option>
        ))}
      </select>
    </fieldset>
  );
}
