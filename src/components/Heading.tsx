import useGameQueryStore from "@/stores/useGameQueryStore";
import usePlatform from "@/hooks/usePlatform";
import useGenre from "@/hooks/useGenre";

export default function Heading() {
  const platformId = useGameQueryStore((state) => state.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const genreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const genre = useGenre(genreId);

  const heading = `${platform?.name ?? ""} ${genre?.name ?? ""} Games`.trim();

  return <h1 className="text-3xl font-bold">{heading}</h1>;
}
