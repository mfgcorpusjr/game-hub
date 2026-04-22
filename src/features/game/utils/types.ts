import { type Platform } from "@/features/platform/utils/types"

export type Game = {
  id: number
  slug: string
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
  description_raw: string
}
