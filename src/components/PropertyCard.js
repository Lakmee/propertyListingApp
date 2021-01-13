import React from "react";
import { CardBody } from "./card-elements/CardBody";
import { CardFooter } from "./card-elements/CardFooter";
import { CardHeader } from "./card-elements/CardHeader";
import { CardButton } from "./card-elements/CardButton";

export const PropertyCard = () => {
  return (
    <div>
      <div>
        <CardHeader />
        <CardBody />
        <CardFooter />
      </div>
      <CardButton />
    </div>
  );
};
