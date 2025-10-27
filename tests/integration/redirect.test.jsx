import { describe, test, expect } from "vitest";
import { createMemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import routes from "../../src/routes";
import { render } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import { beforeEach, afterEach } from "vitest";
import { screen } from "@testing-library/react";

let globalFetch;

beforeEach(() => {
  globalFetch = global.fetch;
  global.fetch = vi.fn();
});

afterEach(() => {
  global.fetch = globalFetch;
});

describe("Redirect if no user logged in", () => {
  test("from home to login", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => null,
    });

    const router = createMemoryRouter(routes, {
      initialEntries: ["/home"],
    });
    render(<RouterProvider router={router} />);

    const heading = await screen.findByRole("heading", {
      name: "Please log in",
    });
    expect(heading).toBeInTheDocument();
  });
});

describe("Redirect if there is a user logged in", () => {
  test("from login to home", async () => {
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => {
        return { id: 1, username: "user" };
      },
    });

    const router = createMemoryRouter(routes, {
      initialEntries: ["/login"],
    });
    render(<RouterProvider router={router} />);

    const heading = await screen.findByText("Placeholder Text for Home");
    expect(heading).toBeInTheDocument();
  });
});
