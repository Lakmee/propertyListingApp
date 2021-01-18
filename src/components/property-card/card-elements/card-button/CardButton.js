import React from "react";
import PropTypes from "prop-types";
import "./CardButton.scss";

function CardButton({ type, buttonAction, propertyId }) {
  return (
    <div className="button-wrapper">
      <div tabIndex="0"></div>
      <button onClick={() => buttonAction(propertyId)}>
        {type === "savedPropertiesType" ? "Remove Property" : "Add Property"}
      </button>
    </div>
  );
}

CardButton.propTypes = {
  type: PropTypes.string,
  buttonAction: PropTypes.func.isRequired,
  propertyId: PropTypes.string.isRequired,
};

export default CardButton;
