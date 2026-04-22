import { type Genre } from "@/features/genre/utils/types"
import useGameStore from "@/features/game/stores/useGameStore"
import { getCroppedImageUrl } from "@/utils/image"
import { cn } from "@/lib/utils"

type Props = {
  genre: Genre
}

export default function GenreListItem({ genre }: Props) {
  const { genreId } = useGameStore((state) => state.query)
  const setGenreId = useGameStore((state) => state.setGenreId)

  return (
    <article
      className="group flex cursor-pointer items-center gap-2"
      onClick={() => setGenreId(genre.id)}
    >
      <img
        src={getCroppedImageUrl(genre.image_background)}
        alt={genre.name}
        className="size-10 rounded object-cover"
      />

      <span
        className={cn("group-hover:font-semibold group-hover:underline", {
          "font-semibold": genre.id === genreId,
          underline: genre.id === genreId,
        })}
      >
        {genre.name}
      </span>
    </article>
  )
}
