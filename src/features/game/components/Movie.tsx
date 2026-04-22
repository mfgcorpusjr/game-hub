import MovieSkeleton from "@/features/game/components/MovieSkeleton"

import useMovies from "@/features/game/hooks/useMovies"
import { getCroppedImageUrl } from "@/utils/image"

type Props = {
  id: number
}

export default function Movie({ id }: Props) {
  const { data, isLoading, isError } = useMovies(id)
  const movie = data?.results[0]

  if (isLoading) {
    return <MovieSkeleton />
  }

  if (isError || !movie) {
    return null
  }

  return (
    <video
      poster={getCroppedImageUrl(movie.preview)}
      controls
      className="h-96 w-full object-cover"
    >
      <source src={movie.data[480]} />
    </video>
  )
}
