import Navbar from "@/components/Navbar";
import GenreList from "@/components/GenreList";
import GameList from "@/components/GameList";

export default function App() {
  return (
    <div className="container mx-auto">
      <Navbar />

      <div className="flex">
        <aside className="w-[250px] hidden lg:block p-2">
          <GenreList />
        </aside>
        <main className="flex-1 p-2">
          <GameList />
        </main>
      </div>
    </div>
  );
}
