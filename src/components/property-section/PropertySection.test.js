import { render, screen } from "@testing-library/react";
import { PropertySection } from "./PropertySection";

const testPropertyA = {
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

const testPropertyB = {
  price: "$560,520",
  agency: {
    brandingColors: {
      primary: "#fcfa3b",
    },
    logo:
      "https://i4.au.reastatic.net/170x32/a3bd69c1a5c651eca02dd829fdd4d11d1a0b3bb6b00db79410817d17067bd495/main.gif",
  },
  id: "2",
  mainImage:
    "https://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg",
};

describe("PropertySection", () => {
  const props = {
    properties: [testPropertyA, testPropertyB],
    sectionHeading: "Test Section Heading",
    addProperty: jest.fn(),
  };

  test("renders the heading of the section", () => {
    render(
      <PropertySection
        sectionHeading={props.sectionHeading}
        properties={props.properties}
        buttonAction={props.addProperty}
      />
    );
    const propertySectionHeading = screen.getByText(props.sectionHeading);
    expect(propertySectionHeading).toBeInTheDocument();
  });

  test("renders a list of properties", () => {
    render(
      <PropertySection
        sectionHeading={props.sectionHeading}
        properties={props.properties}
        buttonAction={props.addProperty}
      />
    );
    const propertyCardWrapper = screen.getByTestId("propterty-section");
    expect(propertyCardWrapper.children.length).toEqual(2);
  });

  test("Displays a message when there is no properties in the section", () => {
    render(
      <PropertySection
        sectionHeading={props.sectionHeading}
        properties={[]}
        buttonAction={props.addProperty}
      />
    );
    const noListingMessage = screen.getByText(
      "No " + props.sectionHeading + " Found"
    );
    expect(noListingMessage).toBeInTheDocument();
  });
});
