import PropTypes from "prop-types";
import React from "react";
import "../../../styles/Sliderstyle.css";

export const Slider = ({ property1, className }) => {
  return (
    <div className={`slider ${className}`}>
      <div className={`ellipse ${property1}`} />
      <div className={`ellipse-2 property-1-${property1}`} />
      <div className={`ellipse-3 property-1-0-${property1}`} />
      <div className={`ellipse-4 property-1-1-${property1}`} />
    </div>
  );
};

Slider.propTypes = {
  property1: PropTypes.oneOf(["two", "four", "three", "one"]),
};
