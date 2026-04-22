import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import useGameStore from "@/features/game/stores/useGameStore"

const sortOrders = [
  { value: "Relevance", name: "Relevance" },
  { value: "-added", name: "Date added" },
  { value: "name", name: "Name" },
  { value: "-released", name: "Release date" },
  { value: "-metacritic", name: "Popularity" },
  { value: "-rating", name: "Average rating" },
]

export default function SortOrderSelector() {
  const ordering = useGameStore((state) => state.query.ordering)
  const setOrdering = useGameStore((state) => state.setOrdering)

  return (
    <div className="w-full space-y-2 md:w-60">
      <Label className="text-muted-foreground">Order By:</Label>

      <Select
        value={ordering ?? "Relevance"}
        onValueChange={(value) =>
          setOrdering(value !== "Relevance" ? value : undefined)
        }
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Relevance" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {sortOrders.map((sortOrder) => (
              <SelectItem key={sortOrder.value} value={sortOrder.value}>
                {sortOrder.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
