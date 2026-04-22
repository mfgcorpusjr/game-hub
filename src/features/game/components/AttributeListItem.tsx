import { Label } from "@/components/ui/label"

type Props = {
  title: string
  children: React.ReactNode
}

export default function AttributeListItem({ title, children }: Props) {
  return (
    <div className="space-y-4">
      <Label className="text-muted-foreground">{title}</Label>

      {children}
    </div>
  )
}
