import { LucideLoaderCircle } from "lucide-react"

export default function Spinner() {
  return (
    <div className="flex items-center justify-center p-4">
      <LucideLoaderCircle className="size-12 animate-spin" />
    </div>
  )
}
