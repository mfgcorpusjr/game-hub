import useTheme from "@/hooks/useTheme";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        className="toggle toggle-success"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <span className="text-sm whitespace-nowrap">Dark Mode</span>
    </div>
  );
}
