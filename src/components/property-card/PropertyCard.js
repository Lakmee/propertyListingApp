import React from "react";
import PropTypes from "prop-types";
import CardBody from "./card-elements/card-body/CardBody";
import CardFooter from "./card-elements/card-footer/CardFooter";
import CardHeader from "./card-elements/card-header/CardHeader";
import CardButton from "./card-elements/card-button/CardButton";
import "./PropertyCard.scss";

function PropertyCard({ type, property, buttonAction }) {
  return (
    <div className="property-card">
      <div>
        <CardHeader
          agencyLogoSource={property.agency.logo}
          bgColor={property.agency.brandingColors.primary}
          propertyId={property.id}
        />
        <CardBody
          propertyImageSource={property.mainImage}
          propertyId={property.id}
        />
        <CardFooter propertyPrice={property.price} />
      </div>
      <CardButton
        type={type}
        buttonAction={buttonAction}
        propertyId={property.id}
      />
    </div>
  );
}

PropertyCard.propTypes = {
  type: PropTypes.string,
  property: PropTypes.shape({
    id: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    agency: PropTypes.shape({
      logo: PropTypes.string.isRequired,
      brandingColors: PropTypes.shape({
        primary: PropTypes.string.isRequired,
      }).isRequired,
    }),
    mainImage: PropTypes.string.isRequired,
  }).isRequired,
  buttonAction: PropTypes.func.isRequired,
};

export default PropertyCard;
