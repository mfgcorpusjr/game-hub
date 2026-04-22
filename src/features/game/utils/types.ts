import { type Platform } from "@/features/platform/utils/types"
import { type Genre } from "@/features/genre/utils/types"

export type Game = {
  id: number
  slug: string
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
  metacritic: number
  description_raw: string
  genres: Genre[]
  publishers: Publisher[]
}

type Publisher = {
  id: number
  name: string
}

export type Movie = {
  id: number
  name: string
  preview: string
  data: {
    480: string
  }
}
