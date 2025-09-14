import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import SignUp from "../../src/components/SignUp";

describe("Sign-up component", () => {
  test("Render component", () => {
    render(<SignUp />);

    const heading = screen.getByRole("heading", {
      value: "Create your account",
    });
    const username = screen.getByLabelText("Username");
    const email = screen.getByLabelText("Email");
    const password = screen.getByLabelText("Password");
    const confirmPassword = screen.getByLabelText("Confirm Password");

    expect(heading).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(confirmPassword).toBeInTheDocument();
  });
});
