import { render, screen } from "@testing-library/react";
import { AppHeader } from "./AppHeader";

describe("AppHeader", () => {
  test("renders header text", () => {
    render(<AppHeader />);
    const headerText = screen.getByText("Property Listing");
    expect(headerText).toBeInTheDocument();
  });
});
