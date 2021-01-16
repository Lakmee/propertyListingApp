import { render, screen, fireEvent } from "@testing-library/react";
import { PropertyCard } from "./PropertyCard";

const testProperty = {
  price: "$726,500",
  agency: {
    brandingColors: {
      primary: "#ffe512",
    },
    logo:
      "https://i1.au.reastatic.net/170x32/d9e65c666e427e655fb63dcfe73f50d4ac7ff9a58c173db9474bd92e75b01070/main.gif",
  },
  id: "1",
  mainImage:
    "https://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg",
};

const typeResults = "resultsType";
const typeSaved = "savedPropertiesType";
const addProperty = jest.fn();
const removeProperty = jest.fn();

describe("PropertyCard", () => {
  test("renders the source url of agency logo", () => {
    render(<PropertyCard property={testProperty} buttonAction={addProperty} />);
    const altText =
      "Logo of the property " + testProperty.id + " publishing agency";
    const agencyLogoSourceURL = screen.getByAltText(altText);
    expect(agencyLogoSourceURL.getAttribute("src")).toBe(
      testProperty.agency.logo
    );
  });

  test("renders the primary branding color of the agency", () => {
    render(<PropertyCard property={testProperty} buttonAction={addProperty} />);
    const altText =
      "Logo of the property " + testProperty.id + " publishing agency";
    const cardHeaderWrapper = screen.getByAltText(altText).closest("div");
    expect(cardHeaderWrapper).toHaveStyle(
      "background-color: " + testProperty.agency.brandingColors.primary
    );
  });

  test("renders the source url of property image", () => {
    render(<PropertyCard property={testProperty} buttonAction={addProperty} />);
    const altText = "image of property " + testProperty.id;
    const propertyImageSourceURL = screen.getByAltText(altText);
    expect(propertyImageSourceURL.getAttribute("src")).toBe(
      testProperty.mainImage
    );
  });

  test("renders the property price", () => {
    render(<PropertyCard property={testProperty} buttonAction={addProperty} />);
    const propertyPrice = screen.getByText(testProperty.price);
    expect(propertyPrice).toBeInTheDocument();
  });

  test("renders the button text as Add Property", () => {
    render(
      <PropertyCard
        type={typeResults}
        property={testProperty}
        buttonAction={addProperty}
      />
    );
    const buttonText = screen.getByText("Add Property");
    expect(buttonText).toBeInTheDocument();
  });

  test("renders the button text as Remove Property", () => {
    render(
      <PropertyCard
        type={typeSaved}
        property={testProperty}
        buttonAction={removeProperty}
      />
    );
    const buttonText = screen.getByText("Remove Property");
    expect(buttonText).toBeInTheDocument();
  });

  test("calls onClick function addProperty when clicked", () => {
    render(
      <PropertyCard
        type={typeResults}
        property={testProperty}
        buttonAction={addProperty}
      />
    );
    fireEvent.click(screen.getByText("Add Property"));
    expect(addProperty).toHaveBeenCalledTimes(1);
  });

  test("calls onClick function removeProperty when clicked", () => {
    render(
      <PropertyCard
        type={typeSaved}
        property={testProperty}
        buttonAction={removeProperty}
      />
    );
    fireEvent.click(screen.getByText("Remove Property"));
    expect(removeProperty).toHaveBeenCalledTimes(1);
  });
});
