import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter } from "react-router-dom";
import routes from "../../src/routes";
import { RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { beforeEach, vi } from "vitest";

describe("Render components through url", () => {
  test("Error Page for non-existent url", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/non-existent-url"],
    });
    render(<RouterProvider router={router} />);

    const text = screen.getByText("This is a custom 404 error page.");
    expect(text).toBeInTheDocument();
  });

  test("Signup Page", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/signup"],
    });
    render(<RouterProvider router={router} />);

    const heading = screen.getByRole("heading", {
      name: "Create your account",
    });
    expect(heading).toBeInTheDocument();
  });

  test("Login Page", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/login"],
    });
    render(<RouterProvider router={router} />);

    const heading = screen.getByRole("heading", {
      name: "Please log in",
    });
    expect(heading).toBeInTheDocument();
  });
});

describe("redirects after fetching", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  test("SignUp redirect to LogIn after success", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      status: 201,
      json: async () => ({ message: "User created" }),
    });

    const user = userEvent.setup();
    const router = createMemoryRouter(routes, {
      initialEntries: ["/signup"],
    });
    render(<RouterProvider router={router} />);

    const button = screen.getByRole("button", { name: /create/i });
    expect(button).toBeInTheDocument();

    await user.click(button);

    const heading = await screen.findByRole("heading", {
      name: "Please log in",
    });
    expect(heading).toBeInTheDocument();
  });
});
