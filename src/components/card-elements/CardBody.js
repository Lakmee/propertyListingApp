import React from "react";

export const CardBody = ({ propertyImageSource }) => {
  return (
    <div>
      <img src={propertyImageSource} alt="" />
    </div>
  );
};
