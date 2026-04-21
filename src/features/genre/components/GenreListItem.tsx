import { type Genre } from "@/features/genre/utils/types"

type Props = {
  genre: Genre
}

export default function GenreListItem({ genre }: Props) {
  return (
    <article className="group flex cursor-pointer items-center gap-2">
      <img
        src={genre.image_background}
        alt={genre.name}
        className="size-10 rounded object-cover"
      />

      <span className="group-hover:font-semibold group-hover:underline">
        {genre.name}
      </span>
    </article>
  )
}
