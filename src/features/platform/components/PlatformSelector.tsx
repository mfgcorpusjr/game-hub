import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import usePlatforms from "@/features/platform/hooks/usePlatforms"

export default function PlatformSelector() {
  const { data, isError } = usePlatforms()

  if (isError) {
    return null
  }

  return (
    <div className="space-y-2">
      <Label>Platforms:</Label>

      <Select>
        <SelectTrigger className="w-60">
          <SelectValue placeholder="All" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectItem value="All">All</SelectItem>

            {data?.results.map((platform) => (
              <SelectItem key={platform.id} value={platform.slug}>
                {platform.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
