import { type Genre } from "@/types/model";
import { getCroppedImageUrl } from "@/utils/image";
import useGameQueryStore from "@/store/useGameQueryStore";

type GenreListItemProps = {
  genre: Genre;
};

export default function GenreListItem({ genre }: GenreListItemProps) {
  const setGenre = useGameQueryStore((state) => state.setGenre);

  return (
    <div
      className="flex items-center gap-2 cursor-pointer group"
      onClick={() => setGenre(genre)}
    >
      <img
        src={getCroppedImageUrl(genre.image_background)}
        className="w-10 aspect-square rounded"
      />
      <div className="flex-1 group-hover:underline group-hover:underline-offset-4">
        {genre.name}
      </div>
    </div>
  );
}
