import { describe, test, expect } from "vitest";
import { createMemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import routes from "../../src/routes";
import { render } from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import { beforeEach, afterEach } from "vitest";
import { screen } from "@testing-library/react";

describe("redirect if no user", () => {
  let globalFetch;

  beforeEach(() => {
    globalFetch = global.fetch;
    global.fetch = vi.fn();
  });

  afterEach(() => {
    global.fetch = globalFetch;
  });

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
