import React, { useState, useEffect } from "react";
import PropertySection from "../components/property-section/PropertySection";
import data from "../data/property-data.json";

export const Properties = () => {
  const [results, setResults] = useState([]);
  const [savedProperties, setSavedProperties] = useState([]);

  //Setting initial state Results and Saved Properties arrays
  useEffect(() => {
    setResults(data.results);
    setSavedProperties(data.saved);
  }, []);

  //Adding a property to savedProperties array
  const addProperty = (id) => {
    const isAlreadySavedProperty =
      savedProperties.filter((result) => result.id === id).length > 0;
    if (isAlreadySavedProperty) {
      //Preventing duplicate Saved Properties
      return;
    } else {
      const newlyAddProperty = results.filter((result) => result.id === id);
      setSavedProperties([...savedProperties, ...newlyAddProperty]);
    }
  };

  //Removing a property from savedProperties array
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
