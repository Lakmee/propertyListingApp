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

  const addProperty = (id) => {
    const newlyAddProperty = results.filter((result) => result.id === id);
    setSavedProperties([...savedProperties, ...newlyAddProperty]);
  };

  const removeProperty = (id) => {
    const remainingSavedProperties = savedProperties.filter(
      (result) => id !== result.id
    );
    setSavedProperties(remainingSavedProperties);
  };

  return (
    <main>
      <PropertySection
        type={"resultsType"}
        properties={results}
        sectionHeading={"Results"}
        buttonAction={addProperty}
      />
      <PropertySection
        type={"savedPropertiesType"}
        properties={savedProperties}
        sectionHeading={"Saved Properties"}
        buttonAction={removeProperty}
      />
    </main>
  );
};
