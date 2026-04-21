import InfiniteScroll from "react-infinite-scroll-component"

import Spinner from "@/components/Spinner"
import GameListItemSkeleton from "@/features/game/components/GameListItemSkeleton"
import GameListItem from "@/features/game/components/GameListItem"

import useGames from "@/features/game/hooks/useGames"

export default function GameList() {
  const { data, isLoading, error, fetchNextPage, hasNextPage } = useGames()

  if (error) return <p className="text-sm text-gray-500">{error.message}</p>

  const paginatedData = data?.pages.flatMap((page) => page.results)

  return (
    <InfiniteScroll
      dataLength={paginatedData?.length ?? 0}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<Spinner />}
      endMessage={
        <p className="p-4 text-center text-sm text-gray-500">
          Yay! You have seen it all
        </p>
      }
    >
      <section className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
        {isLoading &&
          Array.from({ length: 10 }).map((_, index) => (
            <GameListItemSkeleton key={index} />
          ))}

        {paginatedData?.map((game) => (
          <GameListItem key={game.id} game={game} />
        ))}
      </section>
    </InfiniteScroll>
  )
}
