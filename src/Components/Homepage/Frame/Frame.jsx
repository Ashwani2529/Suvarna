import PropTypes from "prop-types";
import React from "react";
import { Component25 } from "../icons/Component25/Component25";
import "../../../styles/Framestyle.css";

export const Frame = ({
  property1,
  className,
  icon = <Component25 className="component" />,
  text = "36K+",
  divClassName,
  text1 = "Healthcare Professionals",
}) => {
  return (
    <div className={`frame property-1-${property1} ${className}`}>
      {icon}
      <div className="div-4">
        <div className="element">{text}</div>
        <div className={`healthcare ${divClassName}`}>{text1}</div>
      </div>
    </div>
  );
};

Frame.propTypes = {
  property1: PropTypes.oneOf(["lighter", "default"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
