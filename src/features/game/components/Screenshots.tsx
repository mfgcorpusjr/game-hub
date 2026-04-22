import ScreenshotSkeleton from "@/features/game/components/ScreenshotSkeleton"

import useScreenshots from "@/features/game/hooks/useScreenshots"
import { getCroppedImageUrl } from "@/utils/image"

type Props = {
  id: number
}

export default function Screenshots({ id }: Props) {
  const { data, isLoading, isError } = useScreenshots(id)

  if (isError) {
    return null
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {isLoading &&
        Array.from({ length: 6 }).map((_, index) => (
          <ScreenshotSkeleton key={index} />
        ))}

      {data?.results.map((screenshot) => (
        <img
          key={screenshot.id}
          src={getCroppedImageUrl(screenshot.image)}
          className="w-full rounded object-cover"
        />
      ))}
    </div>
  )
}
