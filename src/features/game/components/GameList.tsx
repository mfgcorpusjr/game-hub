import React from "react"

import GameListItem from "@/features/game/components/GameListItem"

import useGames from "@/features/game/hooks/useGames"

export default function GameList() {
  const { data, isLoading, error } = useGames()

  if (error) return <p className="text-sm text-gray-500">{error.message}</p>

  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {data?.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.results.map((game) => (
            <GameListItem key={game.id} game={game} />
          ))}
        </React.Fragment>
      ))}
    </section>
  )
}
