import { createBrowserRouter } from "react-router";

import RootLayout from "@/pages/RootLayout";
import HomePage from "@/pages/HomePage";
import GameDetailsPage from "@/pages/GameDetailsPage";
import ErrorPage from "@/pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
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
