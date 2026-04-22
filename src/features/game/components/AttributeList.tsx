import AttributeListItem from "@/features/game/components/AttributeListItem"
import CriticScore from "@/features/game/components/CriticScore"

import { type Game } from "@/features/game/utils/types"

type Props = {
  game: Game
}

export default function AttributeList({ game }: Props) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <AttributeListItem title="Platforms">
        <ul>
          {game.parent_platforms.map(({ platform }) => (
            <li key={platform.id}>{platform.name}</li>
          ))}
        </ul>
      </AttributeListItem>

      <AttributeListItem title="Genres">
        <ul>
          {game.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </AttributeListItem>

      <AttributeListItem title="Metascore">
        <CriticScore score={game.metacritic} />
      </AttributeListItem>

      <AttributeListItem title="Publishers">
        <ul>
          {game.publishers.map((publisher) => (
            <li key={publisher.id}>{publisher.name}</li>
          ))}
        </ul>
      </AttributeListItem>
    </div>
  )
}
