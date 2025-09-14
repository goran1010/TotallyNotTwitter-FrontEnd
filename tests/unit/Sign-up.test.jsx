import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import SignUp from "../../src/components/SignUp";

describe("Sign-up component", () => {
  test("Render component", () => {
    render(<SignUp />);
    const text = screen.getByText("Sign Up");
    expect(text).toBeInTheDocument();
  });
});
