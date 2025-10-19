import InfiniteScroll from "react-infinite-scroll-component";

import GameListItem from "@/components/GameListItem";
import GameListItemSkeleton from "@/components/GameListItemSkeleton";

import useGames from "@/hooks/useGames";

export default function GameList() {
  const { data, isLoading, error, fetchNextPage, hasNextPage } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) {
    return <p>{error.message}</p>;
  }

  const paginatedData = data?.pages.flatMap((page) => page.results);

  return (
    <InfiniteScroll
      dataLength={paginatedData?.length || 0}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={
        <span className="block mx-auto mt-8 loading loading-spinner loading-xl" />
      }
    >
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading &&
          skeletons.map((skeleton) => <GameListItemSkeleton key={skeleton} />)}

        {paginatedData?.map((game) => (
          <GameListItem key={game.id} game={game} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
