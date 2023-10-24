import PropTypes from "prop-types";
import React from "react";
import "../../../styles/PropertySWstyle.css";

export const PropertySelectedWrapper = ({ property1, className, text = "Products", onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`property-selected-wrapper property-1-0-${property1} ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {property1 === "selected" && (
        <>
          <div className="frame-4">
            <div className="products">{text}</div>
            <div className="rectangle-2" />
          </div>
          <img
            className="img"
            alt="Frame"
            src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/frame-2-1.svg"
          />
        </>
      )}

      {["default", "selected-2"].includes(property1) && (
        <>
          <div className="frame-5">
            <div className="products-2">{text}</div>
            <img
              className="chevron-down-2"
              alt="Chevron down"
              src={
                property1 === "selected-2"
                  ? "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/chevron-down-10.svg"
                  : "https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/chevron-down-2.svg"
              }
            />
          </div>
          <div className="rectangle-3" />
        </>
      )}
    </div>
  );
};

PropertySelectedWrapper.propTypes = {
  property1: PropTypes.oneOf(["selected-2", "selected", "default"]),
  text: PropTypes.string,
};
