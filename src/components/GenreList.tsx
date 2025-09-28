import GenreListItem from "@/components/GenreListItem";

import useGenres from "@/hooks/useGenres";

export default function GenreList() {
  const { data, error } = useGenres();

  if (error) {
    return null;
  }

  return (
    <div className="space-y-4">
      {data?.results.map((genre) => (
        <GenreListItem key={genre.id} genre={genre} />
      ))}
    </div>
  );
}
