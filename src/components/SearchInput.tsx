import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router";

import useGameQueryStore from "@/stores/useGameQueryStore";

export default function SearchInput() {
  const searchText = useGameQueryStore((state) => state.gameQuery.searchText);
  const setSearchText = useGameQueryStore((state) => state.setSearchText);
  const [searchInput, setSearchInput] = useState(searchText ?? "");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearchText(searchInput.trim() || undefined);
    navigate("/");
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <label className="input w-full rounded-full">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          placeholder="Search games..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </label>
    </form>
  );
}
