import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import SignUp from "../../src/components/SignUp";
import { MemoryRouter } from "react-router-dom";

describe("Sign-up component", () => {
  test("Render component", () => {
    render(
      <MemoryRouter initialEntries={["/signup"]}>
        <SignUp />
      </MemoryRouter>
    );

    const heading = screen.getByRole("heading", {
      value: "Create your account",
    });
    const username = screen.getByLabelText("Username");
    const email = screen.getByLabelText("Email");
    const password = screen.getByLabelText("Password");
    const confirmPassword = screen.getByLabelText("Confirm Password");
    const button = screen.getByRole("button", { value: "Create" });

    expect(heading).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(confirmPassword).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
