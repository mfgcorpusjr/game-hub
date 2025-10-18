import Container from "@/components/Container";
import Navbar from "@/components/Navbar";

export default function App() {
  return (
    <Container>
      <Navbar />

      <div className="flex">
        <aside className="w-[240px] hidden lg:block bg-green-500">Aside</aside>
        <main className="flex-1 bg-blue-500">Main</main>
      </div>
    </Container>
  );
}
