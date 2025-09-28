import useTheme from "@/hooks/useTheme";

import logoImg from "@/assets/logo.webp";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex justify-between items-center p-2">
      <img src={logoImg} className="w-14" />

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
