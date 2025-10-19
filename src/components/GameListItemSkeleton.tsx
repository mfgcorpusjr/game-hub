export default function GameListItemSkeleton() {
  return (
    <li className="shadow-sm space-y-4">
      <div className="skeleton h-60 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-1/2"></div>
    </li>
  );
}
