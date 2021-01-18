import React from "react";
import "./CardButton.scss";

export const CardButton = ({ type, buttonAction, propertyId }) => {
  return (
    <div className="button-wrapper">
      <div tabIndex="0"></div>
      <button onClick={() => buttonAction(propertyId)}>
        {type === "savedPropertiesType" ? "Remove Property" : "Add Property"}
      </button>
    </div>
  );
};
