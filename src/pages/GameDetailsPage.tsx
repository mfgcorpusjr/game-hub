import { useParams, Navigate } from "react-router"

import Spinner from "@/components/Spinner"
import PlaceholderText from "@/components/PlaceholderText"
import ExpandableText from "@/components/ExpandableText"
import AttributeList from "@/features/game/components/AttributeList"
import Movie from "@/features/game/components/Movie"
import Screenshots from "@/features/game/components/Screenshots"

import useGame from "@/features/game/hooks/useGame"

export default function GameDetailsPage() {
  const { slug } = useParams()
  const { data: game, isLoading, error } = useGame(slug)

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <PlaceholderText text={error.message} />
  }

  if (!game) {
    return <Navigate to="/" />
  }

  return (
    <main className="flex flex-col gap-8 lg:flex-row">
      <section className="flex-1 space-y-8">
        <h3 className="text-3xl font-bold">{game.name}</h3>

        <ExpandableText>{game.description_raw}</ExpandableText>

        <AttributeList game={game} />
      </section>

      <section className="flex-1 space-y-4">
        <Movie id={game.id} />

        <Screenshots id={game.id} />
      </section>
    </main>
  )
}
