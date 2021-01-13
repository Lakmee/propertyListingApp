import React from "react";
import { PropertyCard } from "./PropertyCard";

export const PropertySection = ({ type, properties, sectionHeading }) => {
  const propertiesMap = properties.map((property) => (
    <PropertyCard type={type} property={property} key={property.id} />
  ));

  return (
    <section>
      <h2>{sectionHeading}</h2>
      <div>
        <div>{propertiesMap}</div>
      </div>
    </section>
  );
};
