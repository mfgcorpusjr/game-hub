import GameListItemSkeleton from "@/features/game/components/GameListItemSkeleton"
import GameListItem from "@/features/game/components/GameListItem"

import useGames from "@/features/game/hooks/useGames"

export default function GameList() {
  const { data, isLoading, error } = useGames()

  if (error) return <p className="text-sm text-gray-500">{error.message}</p>

  const paginatedData = data?.pages.flatMap((page) => page.results)

  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {isLoading &&
        Array.from({ length: 10 }).map((_, index) => (
          <GameListItemSkeleton key={index} />
        ))}

      {paginatedData?.map((game) => (
        <GameListItem key={game.id} game={game} />
      ))}
    </section>
  )
}
