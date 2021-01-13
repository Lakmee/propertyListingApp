import React from "react";
import { CardBody } from "./card-elements/CardBody";
import { CardFooter } from "./card-elements/CardFooter";
import { CardHeader } from "./card-elements/CardHeader";
import { CardButton } from "./card-elements/CardButton";

export const PropertyCard = ({ type, property }) => {
  return (
    <div>
      <div>
        <CardHeader
          agencyLogoSource={property.agency.logo}
          bgColor={property.agency.brandingColors.primary}
        />
        <CardBody propertyImageSource={property.mainImage} />
        <CardFooter propertyPrice={property.price} />
      </div>
      <CardButton />
    </div>
  );
};
