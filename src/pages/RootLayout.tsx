import { Outlet } from "react-router";

import Container from "@/components/Container";
import Navbar from "@/components/Navbar";

export default function RootLayout() {
  return (
    <Container>
      <Navbar />

      <Outlet />
    </Container>
  );
}
