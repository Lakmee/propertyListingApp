import React, { useState, useEffect } from "react";
import { PropertySection } from "../components/PropertySection";
import data from "../data/property-data.json";

export const Properties = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(data.results);
  }, []);

  return (
    <main>
      <PropertySection
        type={"resultsType"}
        properties={results}
        sectionHeading={"Results"}
      />
    </main>
  );
};
