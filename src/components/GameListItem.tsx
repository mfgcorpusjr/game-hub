import PlatformList from "@/components/PlatformList";
import CriticScore from "@/components/CriticScore";

import { type Game } from "@/types/model";

type GameListItemProps = {
  game: Game;
};

export default function GameListItem({ game }: GameListItemProps) {
  return (
    <div className="card bg-base-300 shadow-sm">
      <figure>
        <img src={game.background_image} />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center gap-4">
          <PlatformList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={game.metacritic} />
        </div>
        <h2 className="card-title">{game.name}</h2>
      </div>
    </div>
  );
}
