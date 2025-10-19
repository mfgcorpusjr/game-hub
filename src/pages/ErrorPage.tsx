import { useRouteError, isRouteErrorResponse } from "react-router";

import Container from "@/components/Container";
import Navbar from "@/components/Navbar";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <Container>
      <Navbar />

      <div className="flex flex-col justify-center items-center gap-4 h-96">
        <h1 className="text-3xl font-bold">Oops</h1>
        <p>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occurred."}
        </p>
      </div>
    </Container>
  );
}
