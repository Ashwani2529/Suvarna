import PropTypes from "prop-types";
import React from "react";
import "../../../styles/Partnerstyle.css";

export const Partners = ({ className, text = "Trusted by partners across the globe" }) => {
  return (
    <div className={`partners ${className}`}>
      <p className="compliance-header">{text}</p>
      <div className="compliance-logos">
        <img
          className="image-7"
          alt="Image"
          src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-7@2x.png"
        />
        <img
          className="image-8"
          alt="Image"
          src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-8.png"
        />
        <img
          className="image-9"
          alt="Image"
          src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-12.png"
        />
        <img
          className="image-10"
          alt="Image"
          src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-11.png"
        />
        <img
          className="image-11"
          alt="Image"
          src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-9.png"
        />
        <img
          className="image-12"
          alt="Image"
          src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-10.png"
        />
      </div>
    </div>
  );
};

Partners.propTypes = {
  text: PropTypes.string,
};
