/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Property1Right = ({ color = "#001E41", stroke = "white", className }) => {
  return (
    <svg
      className={`property-1-right ${className}`}
      fill="none"
      height="48"
      viewBox="0 0 48 48"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle className="circle" cx="24" cy="24" fill={color} r="24" />
      <path
        className="path"
        d="M17 24H31"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        className="path"
        d="M24 17L31 24L24 31"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

Property1Right.propTypes = {
  color: PropTypes.string,
  stroke: PropTypes.string,
};
