export default function SortOrderSelector() {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  return (
    <fieldset className="fieldset w-[250px]">
      <legend className="fieldset-legend">Order by:</legend>
      <select className="select">
        {sortOrders.map((sortOrder) => (
          <option key={sortOrder.value} value={sortOrder.value}>
            {sortOrder.label}
          </option>
        ))}
      </select>
    </fieldset>
  );
}
