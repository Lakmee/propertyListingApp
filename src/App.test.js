import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders App componenet with App Header, App Footer and Property Listing", () => {
    render(<App />);

    //renders App Header
    const appHeaderHeading = screen.getByText("Property Listing");
    expect(appHeaderHeading).toBeInTheDocument();

    //renders App Footer
    const appFooterText = screen.getByText("Application footer sample text");
    expect(appFooterText).toBeInTheDocument();

    //renders Property Listing
    const appResultPropertyHeading = screen.getByText("Results");
    expect(appResultPropertyHeading).toBeInTheDocument();
    const appSavedPropertyHeading = screen.getByText("Saved Properties");
    expect(appSavedPropertyHeading).toBeInTheDocument();
  });
});
