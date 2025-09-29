import useGameQueryStore from "@/store/useGameQueryStore";

export default function SortSelector() {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const selectedSortOrder = useGameQueryStore((state) => state.query.sortOrder);
  const setSortOrder = useGameQueryStore((state) => state.setSortOrder);

  return (
    <select
      className="select"
      value={selectedSortOrder ?? ""}
      onChange={(e) => setSortOrder(e.target.value)}
    >
      {sortOrders.map((sortOrder) => (
        <option key={sortOrder.value} value={sortOrder.value}>
          {sortOrder.label}
        </option>
      ))}
    </select>
  );
}
