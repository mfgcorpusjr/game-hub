import useGenres from "@/features/genre/hooks/useGenres"

const useGenre = (id: number | undefined) => {
  const { data } = useGenres()
  const genre = data?.results.find((genre) => genre.id === id)

  return genre
}

export default useGenre
