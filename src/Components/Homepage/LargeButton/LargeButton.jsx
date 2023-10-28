import PropTypes from "prop-types";
import React from "react";
import "../../../styles/LargeBtnstyle.css";

export const LargeButton = ({ property1, className, divClassName, text = "REQUEST A DEMO"}) => {
  
  return (
    <div style={{left:(className==="slider-5")?window.innerWidth/2-130:0}} className={`large-button ${property1} ${className}`}>
      <div className={`REQUEST-a-DEMO ${divClassName}`}><a href="/#products">{text}</a></div>
    </div>
  );
};

LargeButton.propTypes = {
  property1: PropTypes.oneOf(["solid-white", "outline", "solid-blue"]),
  text: PropTypes.string,
};
