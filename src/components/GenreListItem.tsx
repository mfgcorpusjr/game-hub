import clsx from "clsx";

import { type Genre } from "@/types";
import { getCroppedImageUrl } from "@/utils/image";
import useGameQueryStore from "@/stores/useGameQueryStore";

type GenreListItemProps = {
  genre: Genre;
};

export default function GenreListItem({ genre }: GenreListItemProps) {
  const genreId = useGameQueryStore((state) => state.gameQuery.genreId);
  const setGenreId = useGameQueryStore((state) => state.setGenreId);

  return (
    <li
      className="flex items-center gap-2 cursor-pointer group"
      onClick={() => setGenreId(genre.id)}
    >
      <img
        src={getCroppedImageUrl(genre.image_background)}
        alt={genre.name}
        className="w-10 aspect-square rounded-lg object-cover"
      />
      <div
        className={clsx("group-hover:underline group-hover:font-bold", {
          underline: genre.id === genreId,
          "font-bold": genre.id === genreId,
        })}
      >
        {genre.name}
      </div>
    </li>
  );
}
