import React from "react";

export const CardHeader = ({ agencyLogoSource, bgColor, propertyId }) => {
  const logoBgColor = bgColor;
  return (
    <div style={{ backgroundColor: logoBgColor }}>
      <img
        src={agencyLogoSource}
        alt={"Logo of the property " + propertyId + " publishing agency"}
      />
    </div>
  );
};
