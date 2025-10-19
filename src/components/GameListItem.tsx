import PlatformIconList from "@/components/PlatformIconList";
import CriticScore from "@/components/CriticScore";

import { type Game } from "@/types";
import { getCroppedImageUrl } from "@/utils/image";

type GameListItemProps = {
  game: Game;
};

export default function GameListItem({ game }: GameListItemProps) {
  return (
    <li className="card bg-base-300 shadow-sm hover:scale-105 transition-transform duration-200 ease-in cursor-pointer">
      <figure>
        <img
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          className="object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-start gap-4 mb-2">
          <PlatformIconList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={game.metacritic} />
        </div>

        <h2 className="text-xl font-bold">{game.name}</h2>
      </div>
    </li>
  );
}
