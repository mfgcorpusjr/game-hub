import { Skeleton } from "@/components/ui/skeleton"

export default function GenreListItemSkeleton() {
  return (
    <article className="flex items-center gap-2">
      <Skeleton className="size-10 rounded" />

      <Skeleton className="h-4 flex-1" />
    </article>
  )
}
