export default function GameListItemSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <div className="skeleton h-[200px] w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-[50%]"></div>
    </div>
  );
}
