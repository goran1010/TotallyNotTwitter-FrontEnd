import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import LogIn from "../../src/components/LogIn";
import { MemoryRouter } from "react-router-dom";

describe("Log In component", () => {
  test("Render component", () => {
    render(
      <MemoryRouter>
        <LogIn />
      </MemoryRouter>
    );

    const heading = screen.getByRole("heading", {
      value: "Log in",
    });
    const username = screen.getByLabelText("Username");
    const password = screen.getByLabelText("Password");
    const button = screen.getByRole("button", { value: "Log in" });

    expect(heading).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
