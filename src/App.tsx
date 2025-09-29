import Navbar from "@/components/Navbar";
import GenreList from "@/components/GenreList";
import GameList from "@/components/GameList";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";

export default function App() {
  return (
    <div className="container mx-auto">
      <Navbar />

      <div className="flex">
        <aside className="w-[250px] hidden lg:block p-2">
          <GenreList />
        </aside>
        <main className="flex-1 space-y-4 p-2">
          <div className="flex gap-4">
            <PlatformSelector />
            <SortSelector />
          </div>
          <GameList />
        </main>
      </div>
    </div>
  );
}
