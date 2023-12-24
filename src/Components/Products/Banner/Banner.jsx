import React from 'react';
import products_header from "../../../assets/about_Us.png";

const Banner = ({head,paragraph,image}) => {
    return (
      <div className="framedms md:h-[435px] h-auto w-full flex justify-center items-center relative sm:py-[64px] py-10 sm:px-[60px] px-10">
        <div className="lg:w-10/12 md:w-11/12 min-h-[70vh] md:mt-0 mt-[64px] w-full flex md:flex-row flex-col md:justify-between justify-evenly items-center">
          <div className="md:w-4/6 text-white md:pr-[32px] flex flex-col justify-center md:items-start items-center">
            <div className=" lg:text-[48px] md:text-[40px] text-[25px] font-bold  pt-10">
              {head}
            </div>
            <div className="lg:w-2/3 md:w-11/12 lg:text-[20px] md:text-[16px] text-[14px] font-normal my-[24px]">
              {paragraph}
            </div>
            <button className="bg-white text-[#295989] h-[50px] w-[204px] py-[12px] px-[18px] uppercase rounded-[6px] border border-1 border-white font-bold">
              Request a Demo
            </button>
          </div>
          <div className="lg:w-[648px] md:w-[35vw] w-[80vw] h-[235px] rounded-[12px] overflow-hidden flex justify-center items-center">
            <img src={image} alt="products_header" className="rounded-[12px]" />
          </div>
        </div>
      </div>
    );
};

export default Banner;