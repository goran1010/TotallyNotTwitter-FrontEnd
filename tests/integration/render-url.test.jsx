import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter } from "react-router-dom";
import routes from "../../src/routes";
import { RouterProvider } from "react-router-dom";

describe("Render components through url", () => {
  test("Render Error Page for non-existent url", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/non-existent-url"],
    });
    render(<RouterProvider router={router} />);

    const text = screen.getByText("This is a custom 404 error page.");
    expect(text).toBeInTheDocument();
  });

  test("Render Signup Page", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/signup"],
    });
    render(<RouterProvider router={router} />);

    const heading = screen.getByRole("heading", {
      name: "Create your account",
    });
    expect(heading).toBeInTheDocument();
  });
});
