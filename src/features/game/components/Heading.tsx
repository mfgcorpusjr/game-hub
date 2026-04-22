import useGameStore from "@/features/game/stores/useGameStore"
import usePlatform from "@/features/platform/hooks/usePlatform"
import useGenre from "@/features/genre/hooks/useGenre"

export default function Heading() {
  const platformId = useGameStore((state) => state.query.parentPlatformId)
  const platform = usePlatform(platformId)

  const genreId = useGameStore((state) => state.query.genreId)
  const genre = useGenre(genreId)

  return (
    <h3 className="text-3xl font-bold">
      {`${platform?.name ?? ""} ${genre?.name ?? ""}`} Games
    </h3>
  )
}
