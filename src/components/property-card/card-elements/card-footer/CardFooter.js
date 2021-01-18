import React from "react";
import PropTypes from "prop-types";
import "./CardFooter.scss";

function CardFooter({ propertyPrice }) {
  return (
    <div className="card-footer">
      <p>{propertyPrice}</p>
    </div>
  );
}

CardFooter.propTypes = {
  propertyPrice: PropTypes.string.isRequired,
};

export default CardFooter;
