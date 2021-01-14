import React from "react";
import { CardBody } from "./card-elements/CardBody";
import { CardFooter } from "./card-elements/CardFooter";
import { CardHeader } from "./card-elements/CardHeader";
import { CardButton } from "./card-elements/CardButton";

export const PropertyCard = ({ type, property, buttonAction }) => {
  return (
    <div>
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
      <CardButton buttonAction={buttonAction} propertyId={property.id} />
    </div>
  );
};
