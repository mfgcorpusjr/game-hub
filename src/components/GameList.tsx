import GameListItem from "@/components/GameListItem";

import useGames from "@/hooks/useGames";

export default function GameList() {
  const { data, isLoading, error } = useGames();

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.results.map((game) => (
        <GameListItem key={game.id} game={game} />
      ))}
    </ul>
  );
}
