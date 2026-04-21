import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const sortOrders = [
  { value: "Relevance", name: "Relevance" },
  { value: "-added", name: "Date added" },
  { value: "name", name: "Name" },
  { value: "-released", name: "Release date" },
  { value: "-metacritic", name: "Popularity" },
  { value: "-rating", name: "Average rating" },
]

export default function SortOrderSelector() {
  return (
    <div className="w-full space-y-2 md:w-60">
      <Label>Order By:</Label>

      <Select>
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
