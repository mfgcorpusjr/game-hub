export default function GenreListItemSkeleton() {
  return (
    <li className="flex items-center gap-2">
      <div className="skeleton w-10 aspect-square rounded-lg" />
      <div className="skeleton w-1/2 h-4" />
    </li>
  );
}
