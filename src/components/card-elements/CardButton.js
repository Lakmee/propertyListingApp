import React from "react";

export const CardButton = ({ buttonAction, propertyId }) => {
  const buttonText = () => {
    if (buttonAction.name === "addProperty") return "Add Property";
    if (buttonAction.name === "removeProperty") return "Remove Property";
  };

  return (
    <div>
      <button onClick={() => buttonAction(propertyId)}>{buttonText()}</button>
    </div>
  );
};
