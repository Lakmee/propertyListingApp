import React from "react";

export const CardHeader = ({ agencyLogoSource, bgColor }) => {
  return (
    <div style={{ backgroundColor: bgColor }}>
      <img src={agencyLogoSource} alt="" />
    </div>
  );
};
