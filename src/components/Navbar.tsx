import logoImg from "@/assets/logo.webp";

export default function Navbar() {
  return (
    <div className="flex items-center">
      <img src={logoImg} alt="logo" className="w-14" />
      <h2>Navbar</h2>
    </div>
  );
}
