import { Badge } from "@/components/ui/badge"

type Props = {
  score: number
}

export default function CriticScore({ score }: Props) {
  return (
    <Badge variant={score >= 80 ? "default" : "destructive"}>{score}</Badge>
  )
}
