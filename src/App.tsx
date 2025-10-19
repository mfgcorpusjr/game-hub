import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import GenreList from "@/components/GenreList";
import Heading from "@/components/Heading";
import PlatformSelector from "@/components/PlatformSelector";
import GameList from "@/components/GameList";

export default function App() {
  return (
    <Container>
      <Navbar />

      <div className="flex mt-8">
        <aside className="w-[220px] hidden lg:block">
          <h3 className="text-lg font-bold mb-4">Genres</h3>
          <GenreList />
        </aside>
        <main className="flex-1 space-y-8">
          <Heading />
          <PlatformSelector />
          <GameList />
        </main>
      </div>
    </Container>
  );
}
