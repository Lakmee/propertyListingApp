import { render, screen } from "@testing-library/react";
import { AppFooter } from "./AppFooter";

describe("AppFooter", () => {
  test("renders footer text", () => {
    render(<AppFooter />);
    const footerText = screen.getByText("Copyright Message");
    expect(footerText).toBeInTheDocument();
  });
});
