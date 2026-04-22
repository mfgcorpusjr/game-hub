import { useParams, Navigate } from "react-router"

import Spinner from "@/components/Spinner"
import PlaceholderText from "@/components/PlaceholderText"
import ExpandableText from "@/components/ExpandableText"

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
    <main className="flex flex-col gap-8 md:flex-row">
      <section className="flex-1 space-y-8">
        <h3 className="text-3xl font-bold">{game.name}</h3>

        <ExpandableText>{game.description_raw}</ExpandableText>
      </section>

      <section className="flex-1">Right Section</section>
    </main>
  )
}
