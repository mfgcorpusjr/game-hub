import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

import { useTheme } from "@/components/theme-provider"

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex items-center gap-2">
      <Switch
        id="dark-mode"
        checked={theme === "dark"}
        onCheckedChange={(theme) => setTheme(theme ? "dark" : "light")}
      />

      <Label htmlFor="dark-mode">Dark Mode</Label>
    </div>
  )
}
