import { Link } from "react-router"

import Container from "@/components/Container"
import SearchGames from "@/features/game/components/SearchGames"
import ThemeSwitcher from "@/components/ThemeSwitcher"

import logoImg from "@/assets/images/logo.webp"

export default function Navbar() {
  return (
    <nav className="py-4">
      <Container className="flex flex-col items-center gap-4 sm:flex-row">
        <Link to="/">
          <img src={logoImg} alt="Game Hub logo" className="size-16" />
        </Link>

        <SearchGames />

        <ThemeSwitcher />
      </Container>
    </nav>
  )
}
