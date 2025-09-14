import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter } from "react-router-dom";
import routes from "../src/routes";
import { RouterProvider } from "react-router-dom";

describe("Root component", () => {
  test("Render Error Page", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/nourl"],
    });
    render(<RouterProvider router={router} />);
    const text = screen.getByText("This is a custom 404 error page.");
    expect(text).toBeInTheDocument();
  });
});
