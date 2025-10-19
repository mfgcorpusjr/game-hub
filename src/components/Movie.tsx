import useMovies from "@/hooks/useMovies";
import { getCroppedImageUrl } from "@/utils/image";

type MovieProps = {
  id: number;
};

export default function Movie({ id }: MovieProps) {
  const { data, error } = useMovies(id);
  const first = data?.results[0];

  if (error || !first) return null;

  return (
    <video poster={getCroppedImageUrl(first.preview)} controls>
      <source src={first.data[480]} />
    </video>
  );
}
