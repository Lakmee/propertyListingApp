import React from "react";

export const CardButton = ({ type, buttonAction, propertyId }) => {
  return (
    <div>
      <button onClick={() => buttonAction(propertyId)}>
        {type === "savedPropertiesType" ? "Remove Property" : "Add Property"}
      </button>
    </div>
  );
};
