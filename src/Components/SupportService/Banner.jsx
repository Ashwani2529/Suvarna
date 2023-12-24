import React from "react";
import supportImg from "../../assets/supportService.svg";
import SmallGreenWave from "../SmallGreenWave";

const Banner = () => {
  return (
    <div>
      {/* banner shape here */}
      <SmallGreenWave
        heading='24/7 Support Services'
        subheading='Exceptional support for best-in-class products'
      />
      {/* banner shape close here */}

      {/* hero content here */}
      <div className='flex flex-col items-center justify-center md:flex-row md:items-center  md:justify-center md:pl-[124px] md:pr-[172px] py-6 md:py-9 mt-4 md:mt-24'>
        <div className='mb-4 md:mb-0 md:w-1/2 md:pr-4'>
          <img
            src={supportImg}
            alt='content-image'
            className='w-full md:max-w-md'
          />
        </div>
        <div className='md:w-1/2'>
          <h3 className='text-3xl px-10 md:text-4xl lg:text-5xl font-bold text-[#2B6997] mb-4'>
            We support your growth.
          </h3>
          <p className='text-base px-10 md:text-lg lg:text-xl font-medium text-[#6D747A] mb-4'>
            We understand that the software/solution's power to transform your
            <br />
            operations will remain a mere promise without the right kind of
            <br />
            support.
            <br />
            <br />
            That is why we go the extra mile to provide high-quality support and
            <br />
            service that covers user challenges, from end-to-end
          </p>
        </div>
      </div>

      {/* hero content end here */}
    </div>
  );
};

export default Banner;
