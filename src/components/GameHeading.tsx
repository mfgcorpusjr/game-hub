import useGameQueryStore from "@/store/useGameQueryStore";

export default function GameHeading() {
  const selectedPlatform = useGameQueryStore((state) => state.query.platform);
  const selectedGenre = useGameQueryStore((state) => state.query.genre);

  return (
    <h2 className="text-3xl font-bold">
      {selectedPlatform?.name} {selectedGenre?.name} Games
    </h2>
  );
}
