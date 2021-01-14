import React from "react";
import { PropertyCard } from "./PropertyCard";

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
      <div>
        <div>{properties.length === 0 ? noListingMessage : propertiesMap}</div>
      </div>
    </section>
  );
};
