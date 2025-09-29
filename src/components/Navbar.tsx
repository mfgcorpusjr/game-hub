import SearchText from "@/components/SearchText";

import useTheme from "@/hooks/useTheme";
import logoImg from "@/assets/logo.webp";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center p-2 gap-4">
      <img src={logoImg} className="w-14" />

      <SearchText />

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          className="toggle toggle-success"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        Dark Mode
      </div>
    </div>
  );
}
