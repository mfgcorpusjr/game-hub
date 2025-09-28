import Navbar from "@/components/Navbar";

export default function App() {
  return (
    <div>
      <header>
        <nav className="container mx-auto p-2">
          <Navbar />
        </nav>
      </header>

      <div className="container mx-auto flex">
        <aside className="bg-green-500 w-[250px] hidden lg:block p-2">
          Aside
        </aside>
        <main className="bg-blue-500 flex-1 p-2">Main</main>
      </div>
    </div>
  );
}
