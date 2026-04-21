import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function GameListItemSkeleton() {
  return (
    <Card className="pt-0 shadow-none">
      <CardHeader className="p-0">
        <Skeleton className="h-96 w-full rounded-b-none md:h-48" />
      </CardHeader>

      <CardContent className="space-y-4">
        <Skeleton className="h-4 w-full" />

        <Skeleton className="h-4 w-[75%]" />
      </CardContent>
    </Card>
  )
}
