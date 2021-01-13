import React from "react";
import { PropertyCard } from "./PropertyCard";

export const PropertySection = () => {
  return (
    <section>
      <h2>Section Heading</h2>
      <div>
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </section>
  );
};
