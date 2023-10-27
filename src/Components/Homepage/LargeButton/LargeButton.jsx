import PropTypes from "prop-types";
import React from "react";
import "../../../styles/LargeBtnstyle.css";

export const LargeButton = ({ property1, className, divClassName, text = "REQUEST A DEMO"}) => {
  
  return (
    <div className={`large-button ${property1} ${className}`}>
      <div className={`REQUEST-a-DEMO ${divClassName}`}><a href="/#products">{text}</a></div>
    </div>
  );
};

LargeButton.propTypes = {
  property1: PropTypes.oneOf(["solid-white", "outline", "solid-blue"]),
  text: PropTypes.string,
};
