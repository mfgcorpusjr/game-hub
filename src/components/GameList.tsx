import InfiniteScroll from "react-infinite-scroll-component";

import GameListItem from "@/components/GameListItem";
import GameListItemSkeleton from "@/components/GameListItemSkeleton";

import useGames from "@/hooks/useGames";

export default function GameList() {
  const { data, isLoading, error, fetchNextPage, hasNextPage } = useGames();
  const fetchedGames = data?.pages.flatMap((game) => game.results);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (fetchedGames?.length === 0) {
    return <p>No games found</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <InfiniteScroll
      dataLength={fetchedGames?.length ?? 0}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={
        <span className="loading loading-spinner loading-xl block mx-auto my-4"></span>
      }
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading &&
          skeletons.map((skeleton) => <GameListItemSkeleton key={skeleton} />)}

        {fetchedGames?.map((game) => (
          <GameListItem key={game.id} game={game} />
        ))}
      </div>
    </InfiniteScroll>
  );
}
