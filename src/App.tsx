export default function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="bg-red-500">Header</header>
      <div className="flex">
        <aside className="w-[240px] hidden lg:block bg-green-500">Aside</aside>
        <main className="flex-1 bg-blue-500">Main</main>
      </div>
    </div>
  );
}
