import PlatformIconList from "@/components/PlatformIconList";

import { type Game } from "@/types";
import { getCroppedImageUrl } from "@/utils/image";

type GameListItemProps = {
  game: Game;
};

export default function GameListItem({ game }: GameListItemProps) {
  return (
    <li className="card bg-base-300 shadow-sm">
      <figure>
        <img
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          className="object-cover"
        />
      </figure>
      <div className="card-body">
        <PlatformIconList
          platforms={game.parent_platforms.map(({ platform }) => platform)}
        />
        <h3 className="text-xl font-bold">{game.name}</h3>
      </div>
    </li>
  );
}
