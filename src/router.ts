import { createBrowserRouter } from "react-router";

import RootLayout from "@/pages/RootLayout";
import HomePage from "@/pages/HomePage";
import GameDetailsPage from "@/pages/GameDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/games/:slug",
        Component: GameDetailsPage,
      },
    ],
  },
]);

export default router;
