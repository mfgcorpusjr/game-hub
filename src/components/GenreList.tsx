import GenreListItem from "@/components/GenreListItem";

import useGenres from "@/hooks/useGenres";

export default function GenreList() {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  return (
    <ul className="space-y-4">
      {data?.results.map((genre) => (
        <GenreListItem key={genre.id} genre={genre} />
      ))}
    </ul>
  );
}
