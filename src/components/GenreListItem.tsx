import { type Genre } from "@/types/model";
import { getCroppedImageUrl } from "@/utils/image";

type GenreListItemProps = {
  genre: Genre;
};

export default function GenreListItem({ genre }: GenreListItemProps) {
  return (
    <div className="flex items-center gap-2 cursor-pointer group">
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
