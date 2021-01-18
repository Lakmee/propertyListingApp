import React from "react";
import "./CardButton.scss";

export const CardButton = ({ type, buttonAction, propertyId }) => {
  return (
    <div className="card-overlay" tabIndex="0">
      <button onClick={() => buttonAction(propertyId)}>
        {type === "savedPropertiesType" ? "Remove Property" : "Add Property"}
      </button>
    </div>
  );
};
