import React from "react";

// import css
import "../styles/BrochuresAndCollateral.css";

//  wave 
import BrochuresAndCollateralVector from "../assets/ContactUs_Vector.png";

const SmallGreenWave = (props) => {
  return (
    <div className="w-screen min-h-[274px] flex justify-center items-center relative mt-[100px] BrochuresAndCollateral">
      <img
        src={BrochuresAndCollateralVector}
        className="w-screen h-[120%] z-10 absolute top-0 left-0"
        alt="contact-us-vector"
      />

      <div className="lg:w-10/12 md:w-11/12 z-20 relative w-screen h-full flex flex-col justify-center items-start bg-transparent text-white md:px-0 px-4">
        <div className="lg:text-[48px] md:text-[36px] text-[32px] font-bold">
            {props.heading}
        </div>
        <div className="lg:text-[32px] md:text-[24px] text-[20px] font-normal w-3/4">
            {props.subheading}
        </div>
      </div>
    </div>
  );
};

export default SmallGreenWave;
