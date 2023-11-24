import React from "react";

import vector1 from "../assets/blue-wave-1.png";
import vector2 from "../assets/blue-wave-2.png";
import vector3 from "../assets/blue-wave-3.png";

import smallBlueWave from "../assets/smallBlueWave.png";

const SmallBlueWave = (props) => {
  return (
    <div className="w-screen h-[400px] flex justify-center items-center relative my-[60px]">
      <div className="lg:h-full md:w-[100%] md:h-[90%] w-[120%] h-[80%]  absolute top-0 left-0 flex justify-center items-center select-none ">
        <img src={smallBlueWave} className="h-full absolute top-0 left-0 select-none"  alt="vector" />
      </div>

      <div className="lg:w-10/12 md:w-11/12 relative w-screen h-full flex flex-col justify-center items-center z-50 lg:mb-[40px] md:mb-[80px] mb-[120px]">
        <div className="w-full md:text-[48px] text-[32px] font-bold text-center flex justify-center items-center text-white">
          {props.heading}
        </div>
        <div className="w-3/4 md:text-[24px] text-[20px] font-normal text-center flex justify-center items-center text-white">
          {props.subheading}
        </div>
      </div>
    </div>
  );
};

export default SmallBlueWave;
