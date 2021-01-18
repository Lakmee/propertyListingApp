import { render, screen, within, fireEvent } from "@testing-library/react";
import { Properties } from "./Properties";

describe("Properties", () => {
  const resultsSectionHeadingText = "Results";
  const savedSectionHeadingText = "Saved Properties";
  const addPropertyButtonText = "Add Property";
  const removePropertyButtonText = "Remove Property";

  test("renders the heading of the Results section", () => {
    render(<Properties />);
    const resultsSectionHeading = screen.getByText(resultsSectionHeadingText);
    expect(resultsSectionHeading).toBeInTheDocument();
  });

  test("renders the heading of the Saved Properties section", () => {
    render(<Properties />);
    const savedSectionHeading = screen.getByText(savedSectionHeadingText);
    expect(savedSectionHeading).toBeInTheDocument();
  });

  test("can add a properties in Result section to the Save Properties section", () => {
    render(<Properties />);
    const resultsSection = screen
      .getByText(resultsSectionHeadingText)
      .closest("section");
    const resultsListing = within(resultsSection).getByTestId(
      "propterty-section"
    );

    const savedSection = screen
      .getByText(savedSectionHeadingText)
      .closest("section");
    const savedListing = within(savedSection).getByTestId("propterty-section");

    //Results and Saved Properties counts in the initial state
    const initialResultsCount = resultsListing.children.length;
    const initialSavedCount = savedListing.children.length;

    //Add a property to Saved Properties
    fireEvent.click(
      within(resultsListing.children[0]).getByText(addPropertyButtonText)
    );

    //Results section properties count remains the same as the initial state
    expect(resultsListing.children.length).toEqual(initialResultsCount);
    //Saved Properties count should have increased by 1
    expect(savedListing.children.length).toEqual(initialSavedCount + 1);
  });

  test("can remove properties from Saved Properties section", () => {
    render(<Properties />);
    const resultsSection = screen
      .getByText(resultsSectionHeadingText)
      .closest("section");
    const resultsListing = within(resultsSection).getByTestId(
      "propterty-section"
    );

    const savedSection = screen
      .getByText(savedSectionHeadingText)
      .closest("section");
    const savedListing = within(savedSection).getByTestId("propterty-section");

    //Add a property to Saved Properties
    fireEvent.click(
      within(resultsListing.children[0]).getByText(addPropertyButtonText)
    );

    //Results and Saved Properties counts in the initial state
    const initialResultsCount = resultsListing.children.length;
    const initialSavedCount = savedListing.children.length;

    //Remove a property from Saved Property section
    fireEvent.click(
      within(savedListing.children[0]).getByText(removePropertyButtonText)
    );

    //Results section properties count remains the same as the initial state
    expect(resultsListing.children.length).toEqual(initialResultsCount);
    //Saved Properties count should have decreased by 1
    expect(savedListing.children.length).toEqual(initialSavedCount - 1);
  });

  test("cannot add a property to Saved Properties section if it already in the Save Properties", () => {
    render(<Properties />);
    const resultsSection = screen
      .getByText(resultsSectionHeadingText)
      .closest("section");
    const resultsListing = within(resultsSection).getByTestId(
      "propterty-section"
    );

    const savedSection = screen
      .getByText(savedSectionHeadingText)
      .closest("section");
    const savedListing = within(savedSection).getByTestId("propterty-section");

    //Results and Saved Properties counts in the initial state
    const initialResultsCount = resultsListing.children.length;
    const initialSavedCount = savedListing.children.length;

    //Add a property to Saved Properties
    fireEvent.click(
      within(resultsListing.children[0]).getByText(addPropertyButtonText)
    );

    //Results section properties count remains the same as the initial state
    expect(resultsListing.children.length).toEqual(initialResultsCount);
    //Saved Properties count should have increased by 1
    expect(savedListing.children.length).toEqual(initialSavedCount + 1);

    //Add the same property to Saved Properties
    fireEvent.click(
      within(resultsListing.children[0]).getByText(addPropertyButtonText)
    );

    //Counts of the third state
    //Results section properties count remains the same as the initial state
    expect(resultsListing.children.length).toEqual(initialResultsCount);
    //Saved Properties count remains the same as the second
    expect(savedListing.children.length).toEqual(initialSavedCount + 1);
  });

  test("Displays a message when all properties are removed from Saved Properties section", () => {
    render(<Properties />);
    const noListingMessageText = "No Saved Properties Found";

    const savedSection = screen
      .getByText(savedSectionHeadingText)
      .closest("section");
    const savedListing = within(savedSection).getByTestId("propterty-section");

    //Saved Properties counts in the initial state
    const initialSavedCount = savedListing.children.length;

    //Remove all the properties
    for (let i = initialSavedCount; i > 0; i--) {
      fireEvent.click(
        within(savedListing.children[i - 1]).getByText(removePropertyButtonText)
      );
    }

    //No Saved Properties Found message should be displayed
    const noListingMessage = screen.getByText(noListingMessageText);
    expect(noListingMessage).toBeInTheDocument();
  });
});
