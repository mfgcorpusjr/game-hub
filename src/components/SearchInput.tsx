import { type FormEvent, useRef } from "react";
import { useNavigate } from "react-router";

import useGameQueryStore from "@/stores/useGameQueryStore";

export default function SearchInput() {
  const searchRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((state) => state.setSearchText);
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearchText(searchRef.current?.value.trim() || undefined);
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
        <input type="search" placeholder="Search games..." ref={searchRef} />
      </label>
    </form>
  );
}
