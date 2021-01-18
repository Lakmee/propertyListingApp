import React from "react";
import PropTypes from "prop-types";
import "./CardBody.scss";

function CardBody({ propertyImageSource, propertyId }) {
  return (
    <div className="card-body">
      <img src={propertyImageSource} alt={"image of property " + propertyId} />
    </div>
  );
}

CardBody.propTypes = {
  propertyImageSource: PropTypes.string.isRequired,
  propertyId: PropTypes.string.isRequired,
};

export default CardBody;
