import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import GenreList from "@/components/GenreList";
import GameList from "@/components/GameList";

export default function App() {
  return (
    <Container>
      <Navbar />

      <div className="flex mt-8">
        <aside className="w-[220px] hidden lg:block">
          <h2 className="text-lg font-bold mb-4">Genres</h2>
          <GenreList />
        </aside>
        <main className="flex-1">
          <GameList />
        </main>
      </div>
    </Container>
  );
}
