import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter } from "react-router-dom";
import routes from "../../src/routes";
import { RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { beforeEach, vi, afterEach } from "vitest";
import checkLoggedInStatus from "../../src/utils/checkLoggedInStatus";
vi.mock("../../src/utils/checkLoggedInStatus");

describe("Render components through url", () => {
  test("Error Page for non-existent url", () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ["/non-existent-url"],
    });
    render(<RouterProvider router={router} />);

    const text = screen.getByText("This is a custom 404 error page.");
    expect(text).toBeInTheDocument();
  });

  test("Signup Page", async () => {
    checkLoggedInStatus.mockResolvedValue(null);

    const router = createMemoryRouter(routes, {
      initialEntries: ["/signup"],
    });
    render(<RouterProvider router={router} />);

    const heading = await screen.findByRole("heading", {
      name: "Create your account",
    });
    expect(heading).toBeInTheDocument();
  });

  test("Login Page", async () => {
    checkLoggedInStatus.mockResolvedValue(null);

    const router = createMemoryRouter(routes, {
      initialEntries: ["/login"],
    });
    render(<RouterProvider router={router} />);

    const heading = await screen.findByRole("heading", {
      name: "Please log in",
    });
    expect(heading).toBeInTheDocument();
  });
});

describe("redirects after fetching", () => {
  let globalFetch;

  beforeEach(() => {
    globalFetch = global.fetch;
    global.fetch = vi.fn();
  });

  afterEach(() => {
    global.fetch = globalFetch;
  });

  test("SignUp redirect to LogIn after success", async () => {
    checkLoggedInStatus.mockResolvedValue(null);

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

    const button = await screen.findByRole("button", { name: /create/i });
    expect(button).toBeInTheDocument();

    await user.click(button);

    const heading = await screen.findByRole("heading", {
      name: "Please log in",
    });
    expect(heading).toBeInTheDocument();
  });
});
