import useGameQueryStore from "@/stores/useGameQueryStore";

export default function SortOrderSelector() {
  const setSortOrder = useGameQueryStore((state) => state.setSortOrder);

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <fieldset className="fieldset w-full md:w-[250px]">
      <legend className="fieldset-legend">Order by:</legend>
      <select
        className="select w-full"
        onChange={(e) => setSortOrder(e.target.value)}
      >
        {sortOrders.map((sortOrder) => (
          <option key={sortOrder.value} value={sortOrder.value}>
            {sortOrder.label}
          </option>
        ))}
      </select>
    </fieldset>
  );
}
