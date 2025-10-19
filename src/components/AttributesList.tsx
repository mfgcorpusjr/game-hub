import AttributesListItem from "@/components/AttributesListItem";
import CriticScore from "@/components/CriticScore";

import { type Game } from "@/types";

type AttributesListProps = {
  game: Game;
};

export default function AttributesList({ game }: AttributesListProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <AttributesListItem title="Platforms">
        <ul>
          {game.parent_platforms.map(({ platform }) => (
            <li key={platform.id}>{platform.name}</li>
          ))}
        </ul>
      </AttributesListItem>

      <AttributesListItem title="Genres">
        <ul>
          {game.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </AttributesListItem>

      <AttributesListItem title="Metascore">
        <CriticScore score={game.metacritic} />
      </AttributesListItem>

      <AttributesListItem title="Publishers">
        <ul>
          {game.publishers.map((publisher) => (
            <li key={publisher.id}>{publisher.name}</li>
          ))}
        </ul>
      </AttributesListItem>
    </div>
  );
}
