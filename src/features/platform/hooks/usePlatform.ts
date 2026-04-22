import usePlatforms from "@/features/platform/hooks/usePlatforms"

const usePlatform = (id: number | undefined) => {
  const { data } = usePlatforms()
  const platform = data?.results.find((platform) => platform.id === id)

  return platform
}

export default usePlatform
