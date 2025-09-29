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

  const setSortOrder = useGameQueryStore((state) => state.setSortOrder);

  return (
    <select
      className="select"
      defaultValue=""
      onChange={(e) => setSortOrder(e.target.value)}
    >
      <option value="" disabled={true}>
        Order by
      </option>
      {sortOrders.map((sortOrder) => (
        <option key={sortOrder.value} value={sortOrder.value}>
          {sortOrder.label}
        </option>
      ))}
    </select>
  );
}
