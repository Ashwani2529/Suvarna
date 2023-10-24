import PropTypes from "prop-types";
import React from "react";
import "../../../styles/Menustyle.css";

export const Menu = ({ property1, className, text = "Blog", onMouseEnter, onMouseLeave }) => {
  return (
    <div className={`menu ${className}`} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
      <div className={`blog ${property1}`}>{text}</div>
      <div className={`rectangle property-1-${property1}`} />
    </div>
  );
};

Menu.propTypes = {
  property1: PropTypes.oneOf(["selected", "default"]),
  text: PropTypes.string,
};
