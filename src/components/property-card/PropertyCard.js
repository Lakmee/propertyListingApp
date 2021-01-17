import React from "react";
import { CardBody } from "./card-elements/CardBody";
import { CardFooter } from "./card-elements/CardFooter";
import { CardHeader } from "./card-elements/CardHeader";
import { CardButton } from "./card-elements/CardButton";
import "./PropertyCard.scss";

export const PropertyCard = ({ type, property, buttonAction }) => {
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
};
