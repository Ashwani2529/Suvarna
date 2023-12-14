import PropTypes from "prop-types";
import React from "react";
import "../../../styles/Partnerstyle.css";

export const Partners = ({ text = "Trusted by partners across the globe" }) => {
  return (
    <div className={`h-[300px] w-screen flex justify-center items-center`}>
      <div className="lg:w-10/12 md:w-11/12 w-full flex flex-col justify-center items-start ">
        <div className="w-full  md:text-[28px] text-[30px] text-[#6D747A] font-medium mb-[64px] text-center">
          {text}
        </div>
        <div className="w-full flex justify-evenly items-center">
          <img
            className="md:w-[81.809px] w-[60px] md:h-[56px]"
            alt="partners_logo"
            src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-7@2x.png"
          />
          <img
            className="md:w-[81.809px] w-[60px] md:h-[56px]"
            alt="partners_logo"
            src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-8.png"
          />
          <img
            className="md:w-[81.809px] w-[60px] md:h-[56px]"
            alt="partners_logo"
            src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-12.png"
          />
          <img
            className="md:w-[81.809px] w-[60px] md:h-[56px]"
            alt="partners_logo"
            src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-11.png"
          />
          <img
            className="md:w-[81.809px] w-[60px] md:h-[56px]"
            alt="partners_logo"
            src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-9.png"
          />
          <img
            className="md:w-[81.809px] w-[60px] md:h-[56px]"
            alt="partners_logo"
            src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/image-10.png"
          />
        </div>
      </div>
    </div>
  );
};

Partners.propTypes = {
  text: PropTypes.string,
};
