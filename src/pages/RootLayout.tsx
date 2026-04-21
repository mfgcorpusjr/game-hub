import { Outlet } from "react-router"

import Navbar from "@/components/Navbar"
import Container from "@/components/Container"

export default function RootLayout() {
  return (
    <>
      <Navbar />

      <Container className="py-8">
        <Outlet />
      </Container>
    </>
  )
}
