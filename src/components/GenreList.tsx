import GenreListItem from "@/components/GenreListItem";
import GenreListItemSkeleton from "@/components/GenreListItemSkeleton";

import useGenres from "@/hooks/useGenres";

export default function GenreList() {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return null;

  return (
    <ul className="space-y-4">
      {isLoading &&
        skeletons.map((skeleton) => <GenreListItemSkeleton key={skeleton} />)}

      {data?.results.map((genre) => (
        <GenreListItem key={genre.id} genre={genre} />
      ))}
    </ul>
  );
}
