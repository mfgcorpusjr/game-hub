export default function HomePage() {
  return (
    <main className="grid grid-cols-12">
      <aside className="hidden md:col-span-3 md:block">Aside</aside>

      <section className="md:col-span-9">Section</section>
    </main>
  )
}
