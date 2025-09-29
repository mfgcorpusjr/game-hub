export default function GenreListItemSkeleton() {
  return (
    <div className="flex items-center gap-2">
      <div className="skeleton w-10 aspect-square rounded" />
      <div className="skeleton flex-1 h-4" />
    </div>
  );
}
