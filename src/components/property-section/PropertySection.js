import React from "react";
import { PropertyCard } from "../property-card/PropertyCard";

export const PropertySection = ({
  type,
  properties,
  sectionHeading,
  buttonAction,
}) => {
  const noListingMessage = "No " + sectionHeading + " Found";

  const propertiesMap = properties.map((property) => (
    <PropertyCard
      type={type}
      property={property}
      buttonAction={buttonAction}
      key={property.id}
    />
  ));

  return (
    <section>
      <h2>{sectionHeading}</h2>
      {properties.length === 0 ? (
        <p className="alert">{noListingMessage}</p>
      ) : (
        <div data-testid="propterty-section">{propertiesMap}</div>
      )}
    </section>
  );
};
