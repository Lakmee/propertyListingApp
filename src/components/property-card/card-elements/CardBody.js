import React from "react";

export const CardBody = ({ propertyImageSource, propertyId }) => {
  return (
    <div>
      <img src={propertyImageSource} alt={"image of property " + propertyId} />
    </div>
  );
};
