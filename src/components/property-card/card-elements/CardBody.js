import React from "react";
import "./CardBody.scss";

export const CardBody = ({ propertyImageSource, propertyId }) => {
  return (
    <div className="card-body">
      <img src={propertyImageSource} alt={"image of property " + propertyId} />
    </div>
  );
};
