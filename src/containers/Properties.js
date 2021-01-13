import React, { useState, useEffect } from "react";
import { PropertySection } from "../components/PropertySection";
import data from "../data/property-data.json";

export const Properties = () => {
  const [results, setResults] = useState([]);
  const [savedProperties, setSavedProperties] = useState([]);

  useEffect(() => {
    setResults(data.results);
    setSavedProperties(data.saved);
  }, []);

  return (
    <main>
      <PropertySection
        type={"resultsType"}
        properties={results}
        sectionHeading={"Results"}
      />
      <PropertySection
        type={"savedPropertiesType"}
        properties={savedProperties}
        sectionHeading={"Saved Properties"}
      />
    </main>
  );
};
