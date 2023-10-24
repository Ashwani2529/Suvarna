/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Vector84 = ({ color = "url(#paint0_linear_1918_11414)", className }) => {
  return (
    <svg
      className={`vector-8-4 ${className}`}
      fill="none"
      height="920"
      viewBox="0 0 1366 920"
      width="1366"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" opacity="0.5">
        <path
          className="path"
          d="M466.162 915.5H310.608H105.537H0V0H1440V667.5V915.5H1315.46L1117.39 920L918.319 915.5H671.733H466.162Z"
          fill={color}
        />
      </g>
      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_2082_1182"
          x1="124.871"
          x2="1155.7"
          y1="-70.2777"
          y2="-43.6282"
        >
          <stop className="stop" stopColor="#1E7B15" />
          <stop className="stop" offset="1" stopColor="#6184A6" />
        </linearGradient>
      </defs>
    </svg>
  );
};

Vector84.propTypes = {
  color: PropTypes.string,
};
