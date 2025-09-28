export default function App() {
  return (
    <div>
      <header className="bg-red-100">
        <nav className="container mx-auto bg-red-500 p-4">Nav</nav>
      </header>

      <div className="container mx-auto flex">
        <aside className="bg-green-500 w-[250px] hidden lg:block p-4">
          Aside
        </aside>
        <main className="bg-blue-500 flex-1 p-4">Main</main>
      </div>
    </div>
  );
}
