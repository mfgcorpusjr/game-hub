import GenreList from "@/features/genre/components/GenreList"

export default function HomePage() {
  return (
    <main className="grid grid-cols-12 gap-8">
      <aside className="hidden md:col-span-3 md:block">
        <GenreList />
      </aside>

      <section className="md:col-span-9">Section</section>
    </main>
  )
}
