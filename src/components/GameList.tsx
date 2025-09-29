import GameListItem from "@/components/GameListItem";
import GameListItemSkeleton from "@/components/GameListItemSkeleton";

import useGames from "@/hooks/useGames";

export default function GameList() {
  const { data, isLoading, error } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (data?.count === 0) {
    return <p>No games found</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {isLoading &&
        skeletons.map((skeleton) => <GameListItemSkeleton key={skeleton} />)}

      {data?.results.map((game) => (
        <GameListItem key={game.id} game={game} />
      ))}
    </div>
  );
}
