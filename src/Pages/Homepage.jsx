import React from "react";

//  import
import { ClientLogos } from "../Components/Homepage/ClientLogos/ClientLogos";

import { Partners } from "../Components/Homepage/Partners/Partners";

import { Component215 } from "../Components/Homepage/icons/Component215/Component215";
import { Component217 } from "../Components/Homepage/icons/Component217/Component217";
import { Component25 } from "../Components/Homepage/icons/Component25/Component25";
import { Component27 } from "../Components/Homepage/icons/Component27/Component27";

import Carousel from "../Components/Carousel.tsx";

//  import compoenets
import BlogCarousel from "../Components/BlogCarousel";
import ClientReview from "../Components/ClientReview";
import ContactUsSection from "../Components/ContactUsSection";
import Logistic from "../Components/Logistic";
import ProductCarousel from "../Components/ProductCarousel";
import SmallBlueWave from "../Components/SmallBlueWave";

export const Homepage = () => {
  let slides = [
    <div>
      <div
        className='h-screen relative z-40 text-xl flex flex-col justify-center items-center '
        //  image to be chnaged
        style={{
          background:
            "linear-gradient(180deg, rgba(15, 134, 77, 0.60) 21.88%, rgba(70, 144, 199, 0.7) 100%) , url('https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-artem-podrez-5878523-1.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className='text-white lg:text-[48px] md:text-[40px] text-[23px] font-bold mb-[16px]'>
          Trusted by 1000+ healthcare providers
        </div>
        <div className='w-1/2 text-center text-white md:text-[20px] text-[16px] mb-[82px]'>
          Our wide range of innovative technology-enabled solutions cater to
          hospitals, diagnostic centres, medical colleges and other healthcare
          touch points.
        </div>
        <button className='w-[264px] h-[48px] flex justify-center items-center text-[#2B6997] text-[16px] font-bold bg-white rounded-[6px]'>
          EXPLORE PRODUCTS
        </button>
      </div>
    </div>,

    <div onClick={(e) => console.log(1)}>
      <div
        className='h-screen relative z-40 bg-white text-xl flex flex-col justify-center items-center '
        style={{
          background:
            "linear-gradient(180deg, rgba(15, 134, 77, 0.60) 21.88%, rgba(70, 144, 199, 0.7) 100%) , url('https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-artem-podrez-5878523-2.png')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className='text-white lg:text-[48px] md:text-[40px] text-[23px] font-bold mb-[16px]'>
          Simple. Reliable. Proven. Affordable
        </div>
        <div className='w-1/2 text-center text-white md:text-[20px] text-[16px] mb-[82px]'>
          Suvarna's streamlined healthcare solutions prioritize simplicity and
          affordability without compromising quality or reliability.
        </div>
        <button className='w-[264px] h-[48px] flex justify-center items-center text-[#2B6997] text-[16px] font-bold bg-white rounded-[6px]'>
          EXPLORE PRODUCTS
        </button>
      </div>
    </div>,

    <div onClick={(e) => console.log(2)}>
      <div
        className='h-screen relative z-40 text-xl flex flex-col justify-center items-center '
        style={{
          background:
            "linear-gradient(180deg, rgba(15, 134, 77, 0.60) 21.88%, rgba(70, 144, 199, 0.7) 100%) , url('https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-artem-podrez-5878523-3.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className='text-white lg:text-[48px] md:text-[40px] text-[23px] font-bold mb-[16px]'>
          Celebrating 23+ years of innovation
        </div>
        <div className='w-1/2 text-center text-white md:text-[20px] text-[16px] mb-[82px]'>
          Our two-decade journey of unwavering commitment to improving health
          outcomes signifies a legacy built on experience, expertise, and
          continuous innovation.
        </div>
        <button className='w-[264px] h-[48px] flex justify-center items-center text-[#2B6997] text-[16px] font-bold bg-white rounded-[6px]'>
          EXPLORE PRODUCTS
        </button>
      </div>
    </div>,

    <div onClick={(e) => console.log(3)}>
      <div
        className='h-screen relative z-40 bg-white text-xl flex flex-col justify-center items-center '
        style={{
          background:
            "linear-gradient(180deg, rgba(15, 134, 77, 0.60) 21.88%, rgba(70, 144, 199, 0.7) 100%) , url('https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/pexels-artem-podrez-5878523-4.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className='text-white lg:text-[48px] md:text-[40px] text-[23px] font-bold mb-[16px]'>
          Digitally transforming healthcare
        </div>
        <div className='w-1/2 text-center text-white md:text-[20px] text-[16px] mb-[82px]'>
          Suvarna pioneers the digital revolution in healthcare, leveraging
          cutting-edge technology and empowering healthcare providers to deliver
          superior patient care.
        </div>
        <button className='w-[264px] h-[48px] flex justify-center items-center text-[#2B6997] text-[16px] font-bold bg-white rounded-[6px]'>
          EXPLORE PRODUCTS
        </button>
      </div>
    </div>,
  ];

  return (
    <div className='w-screen h-auto flex flex-col justify-center items-center'>
      <div className='relative w-full h-screen bg-gray-600 flex justify-center items-center'>
        {/* <SliderV
          className="slider-v2"
          frameIcon={<Component215 className="icon-instance-node" />}
          frameIcon1={<Component27 className="icon-instance-node" />}
          frameIcon2={<Component217 className="icon-instance-node" />}
          largeButtonDivClassName="slider-4"
          largeButtonPropertyOutlineClassName="slider-5"
          override={<Component25 className="icon-instance-node" />}
          property1="green"
          sliderNewVector84Color="url(#paint0_linear_2082_1182)"
          sliderNewVectorPropertyDefaultClassName="slider-v-instance"
          sliderNewVectorPropertyDefaultClassNameOverride="slider-v2-instance"
        /> */}

        <Carousel
          slides={slides}
          animationType='SLIDE'
          duration={2500}
          withNavigation={true}
        />

        <div className={`absolute z-50 left-0 top-0 mt-[183px]`}>
          <div
            className={`w-[262px] bg-[#252629] opacity-70 p-[8px] flex justify-start items-center mb-2`}
          >
            <div className='w-[48px] h-[48px]'>
              <Component215 className='component-2' />
            </div>
            {/* slider mini card */}
            <div className='ms-[12px] flex-grow-1 flex flex-col justify-center items-start'>
              <div className='font-medium md:text-[20px] text-[16px] text-white'>
                36K+
              </div>
              <div
                className={`font-normal md:text-[16px] text-[14px] text-white`}
              >
                Healthcare Professionals
              </div>
            </div>
          </div>

          <div
            className={`w-[262px] bg-[#252629] opacity-70 p-[8px] flex justify-start items-center mb-2`}
          >
            <div className='w-[48px] h-[48px]'>
              <Component25 className='component-2' />
            </div>
            <div className='ms-[12px] flex-grow-1 flex flex-col justify-center items-start'>
              <div className='font-medium text-[20px] text-white'>15K+</div>
              <div className={`font-normal text-[16px] text-white`}>
                Physicians
              </div>
            </div>
          </div>

          <div
            className={`w-[262px] bg-[#252629] opacity-70 p-[8px] flex justify-start items-center mb-2}`}
          >
            <div className='w-[48px] h-[48px]'>
              <Component27 className='component-2' />
            </div>
            <div className='ms-[12px] flex-grow-1 flex flex-col justify-center items-start'>
              <div className='font-medium text-[20px] text-white'>4K+</div>
              <div className={`font-normal text-[16px] text-white`}>
                Organisations
              </div>
            </div>
          </div>

          <div
            className={`w-[262px] bg-[#252629] opacity-70 p-[8px] flex justify-start items-center mb-2`}
          >
            <div className='w-[48px] h-[48px]'>
              <Component217 className='component-2' />
            </div>
            <div className='ms-[12px] flex-grow-1 flex flex-col justify-center items-start'>
              <div className='font-medium text-[20px] text-white'>60M+</div>
              <div className={`font-normal text-[16px] text-white`}>
                Patient Records"s
              </div>
            </div>
          </div>
        </div>

        <img
          className='absolute left-0 bottom-0 w-full z-[44]'
          alt='Vector'
          src='https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/vector-5.svg'
        />
      </div>

      {/*  product cards */}
      <ProductCarousel />

      {/*  logistic cards */}
      <Logistic />

      {/*  blue small wave */}

      <SmallBlueWave
        heading='Our top clients'
        subheading='We have a legacy of successful collaboration with healthcare providers in their digital transformation journey'
      />

      <div className='w-screen h-[300px] flex justify-center items-center  relative '>
        <div className='lg:w-10/12 md:w-11/12 w-full h-full md:px-0 flex flex-col justify-evenly items-center relative bg-white select-none'>
          <ClientLogos
            className='design-component-instance-node-2'
            property1='variant-2'
          />
          <ClientLogos
            className='design-component-instance-node-2'
            property1='variant-2'
          />
        </div>
      </div>

      <ClientReview />

      <Partners id='partners' text='Global strategic partners' />

      <BlogCarousel />

      <ContactUsSection />
    </div>
  );
};
