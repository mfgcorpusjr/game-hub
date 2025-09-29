import useGameQueryStore from "@/store/useGameQueryStore";
import { useState, type FormEvent } from "react";

export default function SearchText() {
  const [input, setInput] = useState("");
  const setSearchText = useGameQueryStore((state) => state.setSearchText);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim().length > 0) {
      setSearchText(input);
    }
  };

  return (
    <form className="flex-1" onSubmit={handleSubmit}>
      <label className="input w-full">
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
          type="text"
          placeholder="Search games"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
    </form>
  );
}
