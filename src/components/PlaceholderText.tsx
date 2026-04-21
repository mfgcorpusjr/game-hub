import { cn } from "@/lib/utils"

type Props = {
  text: string
  className?: string
}

export default function PlaceholderText({ text, className }: Props) {
  return <p className={cn("text-sm text-gray-500", className)}>{text}</p>
}
