import React from "react";
import "./CardHeader.scss";

export const CardHeader = ({ agencyLogoSource, bgColor, propertyId }) => {
  const logoBgColor = bgColor;
  return (
    <div style={{ backgroundColor: logoBgColor }} className="card-header">
      <img
        src={agencyLogoSource}
        alt={"Logo of the property " + propertyId + " publishing agency"}
      />
    </div>
  );
};
