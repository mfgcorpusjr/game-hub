import { type Game } from "@/features/game/utils/types"

type Props = {
  game: Game
}

export default function GameListItem({ game }: Props) {
  return <div>{game.name}</div>
}
