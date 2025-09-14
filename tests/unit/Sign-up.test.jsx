import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import SignUp from "../../src/components/SignUp";

describe("Sign-up component", () => {
  test("Render component", () => {
    render(<SignUp />);
    const h1 = screen.getByText("Create your account");
    expect(h1).toBeInTheDocument();
  });
});
