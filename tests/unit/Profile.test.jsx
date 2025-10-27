import { describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Profile from "../../src/components/Profile";
import { MemoryRouter } from "react-router-dom";

vi.mock("react", async (importOriginal) => {
  const actualReact = await importOriginal();
  return {
    ...actualReact,
    useContext: vi.fn(),
  };
});

describe("Profile component", () => {
  test("renders with fake user context", async () => {
    const fakeContext = {
      user: {
        id: 1,
        username: "test_user",
      },
      setUser: vi.fn(),
    };

    const { useContext } = await import("react");
    useContext.mockReturnValue(fakeContext);

    render(
      <MemoryRouter>
        <Profile />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("button", { name: /log out/i })
    ).toBeInTheDocument();
  });
});
