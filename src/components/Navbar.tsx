import { useNavigate } from "react-router"

import Container from "@/components/Container"
import SearchGames from "@/features/game/components/SearchGames"
import ThemeSwitcher from "@/components/ThemeSwitcher"

import useGameStore from "@/features/game/stores/useGameStore"
import logoImg from "@/assets/images/logo.webp"

export default function Navbar() {
  const navigate = useNavigate()
  const resetQuery = useGameStore((state) => state.resetQuery)

  const handleLogoLink = () => {
    navigate("/")
    resetQuery()
  }

  return (
    <nav className="py-4">
      <Container className="flex flex-col items-center gap-4 sm:flex-row">
        <img
          src={logoImg}
          alt="Game Hub logo"
          className="size-16 cursor-pointer"
          onClick={handleLogoLink}
        />

        <SearchGames />

        <ThemeSwitcher />
      </Container>
    </nav>
  )
}
