import SearchInput from "@/components/SearchInput";
import ThemeSwitch from "@/components/ThemeSwitch";

import logoImg from "@/assets/images/logo.webp";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center gap-2 md:gap-4 py-2 pr-2">
      <img src={logoImg} alt="Game Hub logo" className="w-16 aspect-square" />

      <SearchInput />

      <ThemeSwitch />
    </nav>
  );
}
