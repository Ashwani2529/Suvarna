import React from "react";

import vector1 from "../assets/blue-wave-1.png";
import vector2 from "../assets/blue-wave-2.png";
import vector3 from "../assets/blue-wave-3.png";

const SmallBlueWave = (props) => {
  return (
    <div className="w-screen min-h-[339px] flex justify-center items-center relative mt-[100px]  ">
      <div className="min-w-[100%] absolute top-0 left-0 flex justify-center items-center  ">
        <img
          src={vector1}
          alt="vector1"
          className="w-full absolute top-0 left-0 z-30"
        />
        <img
          src={vector2}
          alt="vector2"
          className="w-full absolute top-6 left-0 z-20 mt-8"
        />
        <img
          src={vector3}
          alt="vector1"
          className="w-full absolute top-12 left-0 z-10 mt-8"
        />
      </div>

      <div className="lg:w-10/12 md:w-11/12 relative w-screen h-full flex flex-col justify-center items-center bg-transparent z-50">
        <div className="w-full text-[48px] font-bold text-center flex justify-center items-center text-white">
          {props.heading}
        </div>
        <div className="w-3/4 text-[24px] font-normal text-center flex justify-center items-center text-white">
          {props.subheading}
        </div>
      </div>
    </div>
  );
};

export default SmallBlueWave;
