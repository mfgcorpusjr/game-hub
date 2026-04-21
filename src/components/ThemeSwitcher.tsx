import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function ThemeSwitcher() {
  return (
    <div className="flex items-center gap-2">
      <Switch id="dark-mode" />

      <Label htmlFor="dark-mode">Dark Mode</Label>
    </div>
  )
}
