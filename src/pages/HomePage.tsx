import GenreList from "@/features/genre/components/GenreList"
import Heading from "@/features/game/components/Heading"
import PlatformSelector from "@/features/platform/components/PlatformSelector"
import SortOrderSelector from "@/features/game/components/SortOrderSelector"

export default function HomePage() {
  return (
    <main className="grid grid-cols-12 gap-8">
      <aside className="hidden md:col-span-3 md:block">
        <GenreList />
      </aside>

      <section className="space-y-8 md:col-span-9">
        <Heading />

        <div className="flex items-center gap-4">
          <PlatformSelector />

          <SortOrderSelector />
        </div>
      </section>
    </main>
  )
}
