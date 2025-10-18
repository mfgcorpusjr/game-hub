import logoImg from "@/assets/images/logo.webp";

export default function Navbar() {
  return (
    <nav>
      <img src={logoImg} alt="Game Hub logo" className="w-16 aspect-square" />
    </nav>
  );
}
