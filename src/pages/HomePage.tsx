import GenreList from "@/features/genre/components/GenreList"
import Heading from "@/features/game/components/Heading"
import PlatformSelector from "@/features/platform/components/PlatformSelector"
import SortOrderSelector from "@/features/game/components/SortOrderSelector"
import GameList from "@/features/game/components/GameList"

export default function HomePage() {
  return (
    <main className="grid grid-cols-12 gap-8">
      <aside className="hidden md:col-span-3 md:block lg:col-span-2">
        <GenreList />
      </aside>

      <section className="col-span-12 space-y-8 md:col-span-9 lg:col-span-10">
        <Heading />

        <div className="flex flex-col items-center gap-4 md:flex-row">
          <PlatformSelector />

          <SortOrderSelector />
        </div>

        <GameList />
      </section>
    </main>
  )
}
