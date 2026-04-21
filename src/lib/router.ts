import { createBrowserRouter } from "react-router"

import { RootLayout, HomePage, GameDetailsPage } from "@/pages"

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "games/:slug", Component: GameDetailsPage },
    ],
  },
])

export default router
