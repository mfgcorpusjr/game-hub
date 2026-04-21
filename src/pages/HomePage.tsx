import GenreList from "@/features/genre/components/GenreList"
import Heading from "@/features/game/components/Heading"

export default function HomePage() {
  return (
    <main className="grid grid-cols-12 gap-8">
      <aside className="hidden md:col-span-3 md:block">
        <GenreList />
      </aside>

      <section className="space-y-8 md:col-span-9">
        <Heading />
      </section>
    </main>
  )
}
