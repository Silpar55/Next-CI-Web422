/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../src/components/Home.jsx";

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: "Welcome to Next.js!" })
    ).toBeInTheDocument();
  });
  it("Check for Getting Started Text", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Get started by editing")).toBeInTheDocument();
  });
});
