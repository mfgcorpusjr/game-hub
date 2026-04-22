import { useState, useEffect } from "react"
import { useNavigate } from "react-router"

import { Input } from "@/components/ui/input"

import useGameStore from "@/features/game/stores/useGameStore"

export default function SearchGames() {
  const [input, setInput] = useState("")
  const navigate = useNavigate()

  const search = useGameStore((state) => state.query.search)
  const setSearch = useGameStore((state) => state.setSearch)

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch(input.trim() || undefined)
    navigate("/")
  }

  useEffect(() => {
    setInput(search ?? "")
  }, [search])

  return (
    <form className="w-full flex-1" onSubmit={handleSubmit}>
      <Input
        type="search"
        className="flex-1"
        placeholder="Search games..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  )
}
