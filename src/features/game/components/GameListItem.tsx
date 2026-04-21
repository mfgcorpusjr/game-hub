import { Card, CardHeader, CardContent } from "@/components/ui/card"
import GamePlatforms from "@/features/game/components/GamePlatforms"
import CriticScore from "@/features/game/components/CriticScore"

import { type Game } from "@/features/game/utils/types"
import { getCroppedImageUrl } from "@/utils/image"

type Props = {
  game: Game
}

export default function GameListItem({ game }: Props) {
  return (
    <Card className="pt-0 shadow-none duration-300 hover:scale-105">
      <CardHeader className="p-0">
        <img
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          className="h-96 w-full object-cover md:h-48"
        />
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <GamePlatforms
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />

          <CriticScore score={game.metacritic} />
        </div>

        <h4 className="text-lg font-bold">{game.name}</h4>
      </CardContent>
    </Card>
  )
}
