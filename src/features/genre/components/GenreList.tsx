import GenreListItem from "@/features/genre/components/GenreListItem"
import GenreListItemSkeleton from "@/features/genre/components/GenreListItemSkeleton"

import useGenres from "@/features/genre/hooks/useGenres"

export default function GenreList() {
  const { data, isLoading, isError } = useGenres()

  if (isError) {
    return null
  }

  return (
    <section className="space-y-8">
      <h4 className="text-xl font-bold">Genres</h4>

      <div className="space-y-4">
        {isLoading &&
          Array.from({ length: 10 }).map((_, index) => (
            <GenreListItemSkeleton key={index} />
          ))}

        {data?.results.map((genre) => (
          <GenreListItem key={genre.id} genre={genre} />
        ))}
      </div>
    </section>
  )
}
