import usePlatforms from "@/hooks/usePlatforms";

export default function PlatformSelector() {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <select className="select">
      <option value="">All Platforms</option>
      {data?.results.map((platform) => (
        <option key={platform.id}>{platform.name}</option>
      ))}
    </select>
  );
}
