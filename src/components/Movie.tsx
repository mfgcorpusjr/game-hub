import MovieSkeleton from "@/components/MovieSkeleton";

import useMovies from "@/hooks/useMovies";
import { getCroppedImageUrl } from "@/utils/image";

type MovieProps = {
  id: number;
};

export default function Movie({ id }: MovieProps) {
  const { data, isLoading, error } = useMovies(id);
  const first = data?.results[0];

  if (isLoading) return <MovieSkeleton />;

  if (error || !first) return null;

  return (
    <video
      poster={getCroppedImageUrl(first.preview)}
      controls
      className="w-full"
    >
      <source src={first.data[480]} />
    </video>
  );
}
