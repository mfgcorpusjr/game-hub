import { type Genre } from "@/types";

type GenreListItemProps = {
  genre: Genre;
};

export default function GenreListItem({ genre }: GenreListItemProps) {
  return (
    <li className="flex items-center gap-2 cursor-pointer group">
      <img
        src={genre.image_background}
        alt={genre.name}
        className="w-10 aspect-square rounded-lg object-cover"
      />
      <div className="group-hover:underline group-hover:font-bold">
        {genre.name}
      </div>
    </li>
  );
}
