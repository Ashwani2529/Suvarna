import React from "react";

import smallBlueWave from "../assets/smallBlueWave.png";

const SmallBlueWave = (props) => {
  return (
    <div className="w-screen h-[400px] flex justify-center items-center relative mt-[60px]">
      <div className="lg:h-full md:w-[100%] md:h-[100%] w-[120%] h-[90%]  absolute top-0 left-0 flex justify-center items-center select-none ">
        <img src={smallBlueWave} className="h-full absolute top-0 left-0 select-none"  alt="vector" />
      </div>

      <div className="lg:w-10/12 md:w-11/12 relative w-screen h-full flex flex-col justify-center items-center z-50 lg:mb-[40px] md:mb-[80px] mb-[120px]">
        <div className="w-full lg:text-[48px] md:text-[40px] text-[32px] font-bold text-center flex justify-center items-center text-white">
          {props.heading}
        </div>
        <div className="lg:w-3/4 md:w-5/6 w-full lg::text-[24px] md:text-[18px] text-[14px] font-normal text-center flex justify-center items-center text-white">
          {props.subheading}
        </div>
      </div>
    </div>
  );
};

export default SmallBlueWave;
