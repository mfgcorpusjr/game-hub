import { useParams } from "react-router"

import Spinner from "@/components/Spinner"
import PlaceholderText from "@/components/PlaceholderText"

import useGame from "@/features/game/hooks/useGame"

export default function GameDetailsPage() {
  const { slug } = useParams()
  const { data, isLoading, error } = useGame(slug)

  if (isLoading) {
    return <Spinner />
  }

  if (error) {
    return <PlaceholderText text={error.message} />
  }

  return (
    <main className="flex flex-col gap-8 md:flex-row">
      <section className="flex-1">Left Section</section>

      <section className="flex-1">Right Section</section>
    </main>
  )
}
