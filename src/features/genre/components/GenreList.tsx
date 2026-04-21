import GenreListItem from "@/features/genre/components/GenreListItem"

import useGenres from "@/features/genre/hooks/useGenres"

export default function GenreList() {
  const { data, isLoading, isError } = useGenres()

  if (isLoading) {
    return <p>Loading</p>
  }

  if (isError) {
    return null
  }

  return (
    <section className="space-y-8">
      <h4 className="text-xl font-bold">Genres</h4>

      <div className="space-y-4">
        {data?.results.map((genre) => (
          <GenreListItem key={genre.id} genre={genre} />
        ))}
      </div>
    </section>
  )
}
