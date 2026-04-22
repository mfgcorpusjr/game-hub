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
import useGameStore from "@/features/game/stores/useGameStore"

export default function PlatformSelector() {
  const { data, isError } = usePlatforms()

  const platformId = useGameStore((state) => state.query.platformId)
  const setPlatformId = useGameStore((state) => state.setPlatformId)

  if (isError) {
    return null
  }

  return (
    <div className="w-full space-y-2 md:w-60">
      <Label className="text-muted-foreground">Platforms:</Label>

      <Select
        value={platformId?.toString() ?? "0"}
        onValueChange={(val) => setPlatformId(+val || undefined)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="All" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectItem value="0">All</SelectItem>

            {data?.results.map((platform) => (
              <SelectItem key={platform.id} value={platform.id.toString()}>
                {platform.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
