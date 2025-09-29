import Navbar from "@/components/Navbar";
import GenreList from "@/components/GenreList";
import GameHeading from "@/components/GameHeading";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import GameList from "@/components/GameList";

export default function App() {
  return (
    <div className="container mx-auto space-y-4">
      <Navbar />

      <div className="flex">
        <aside className="w-[250px] hidden lg:block p-2">
          <GenreList />
        </aside>
        <main className="flex-1 space-y-4 p-2">
          <GameHeading />
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
