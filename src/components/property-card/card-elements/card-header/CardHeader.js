import React from "react";
import PropTypes from "prop-types";
import "./CardHeader.scss";

function CardHeader({ agencyLogoSource, bgColor, propertyId }) {
  const logoBgColor = bgColor;
  return (
    <div style={{ backgroundColor: logoBgColor }} className="card-header">
      <img
        src={agencyLogoSource}
        alt={"Logo of the property " + propertyId + " publishing agency"}
      />
    </div>
  );
}

CardHeader.propTypes = {
  agencyLogoSource: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  propertyId: PropTypes.string.isRequired,
};

export default CardHeader;
