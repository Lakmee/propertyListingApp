import React from "react";
import "./CardFooter.scss";

export const CardFooter = ({ propertyPrice }) => {
  return (
    <div className="card-footer">
      <p>{propertyPrice}</p>
    </div>
  );
};
