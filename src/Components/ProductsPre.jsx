import React from "react";
import { LargeButton } from "./Homepage/LargeButton/LargeButton";
import { ComplianceLogos } from "./Products/ComplianceLogos/ComplianceLogos";
import "../styles/dmsstyle.css";

import products_header from "../assets/about_Us.png";

import SmallBlueWave from "./SmallBlueWave";

export const ProductsPre = ({ head, paragraph }) => {
  return (
    <>
      <div className="framedms md:h-[435px] h-auto w-full flex justify-center items-center relative py-[64px] px-[60px]">
        <div className="lg:w-10/12 md:w-11/12 min-h-[70vh] md:mt-0 mt-[64px] w-full flex md:flex-row flex-col md:justify-between justify-evenly items-center">
          <div className="md:w-4/6 text-white md:pr-[32px] flex flex-col justify-center md:items-start items-center">
            <div className=" lg:text-[48px] md:text-[40px] text-[32px] font-medium">
              {head}
            </div>
            <div className="lg:w-2/3 md:w-11/12 lg:text-[20px] md:text-[16px] text-[14px] font-normal my-[24px]">
              {paragraph}
            </div>
            <button className="bg-white text-[#295989] h-[50px] w-[204px] py-[12px] px-[18px] uppercase rounded-[6px] border border-1 border-white font-bold">
              Request a Demo
            </button>
          </div>
          <div className="lg:w-[648px] md:w-[35vw] w-[70vw] h-[435px] rounded-[12px] overflow-hidden flex justify-center items-center">
            <img src={products_header} alt="products_header" className="rounded-[12px]" />
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-center relative flex-[0_0_auto] w-full my-[120px]">
        <div className="w-full flex-grow-1 flex flex-col justify-evenly items-center mb-[120px]">
          <div className="flex lg:w-10/12 md:w-11/12 w-full md:px-0 px-2 flex-col items-center relative flex-[0_0_auto]">
            <div className="relative mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-variable-collection-brand-blue lg:text-[48px] md:text-[40px] text-[32px] tracking-[0.96px] leading-[72px] mb-[24px]">
              World class care, anywhere.
            </div>
            <p className="relative md-px-4 font-normal text-[#3C4043] lg:text-[24px] md:text-[20px] text-[16px] text-center">
              Streamline operations, enhance patient care and transform patient
              engagement with Suvarna HIMS. Streamline operations, enhance
              patient care and transform patient engagement with Suvarna HIMS.
            </p>
          </div>
          <div className="flex lg:w-10/12 md:w-11/12 w-full md:h-2/3 h-auto md:items-start md:justify-between justify-center items-center relative flex-[0_0_auto] flex-wrap ">
            <div className="inline-flex items-start gap-[16px] relative flex-[0_0_auto] md:my-0 my-4">
              <img src="../assets/archive.svg" alt="" />
              <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-variable-collection-black text-[20px] tracking-[0.40px] leading-[30px] whitespace-nowrap">
                  Reach more patients
                </div>
                <p className="relative w-[270px] font-body-text-b1 font-[number:var(--body-text-b1-font-weight)] text-variable-collection-grey-05 text-[length:var(--body-text-b1-font-size)] tracking-[var(--body-text-b1-letter-spacing)] leading-[var(--body-text-b1-line-height)] [font-style:var(--body-text-b1-font-style)]">
                  Virtual visits transform the way patients and providers
                  communicate. Telehealth is a breakthrough health option that
                  advances convenient access.
                </p>
              </div>
            </div>
            <div className="inline-flex items-start gap-[16px] relative flex-[0_0_auto] md:my-0 my-4">
              <img src="../assets/heart.svg" alt="" />
              <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-variable-collection-black text-[20px] tracking-[0.40px] leading-[30px] whitespace-nowrap">
                  Improve health outcomes
                </div>
                <p className="relative w-[270px] font-body-text-b1 font-[number:var(--body-text-b1-font-weight)] text-variable-collection-grey-05 text-[length:var(--body-text-b1-font-size)] tracking-[var(--body-text-b1-letter-spacing)] leading-[var(--body-text-b1-line-height)] [font-style:var(--body-text-b1-font-style)]">
                  Virtual visits transform the way patients and providers
                  communicate. Telehealth is a breakthrough health option that
                  advances convenient access, efficiency, and satisfaction
                  across the entire care continuum.
                </p>
              </div>
            </div>
            <div className="inline-flex items-start gap-[16px] relative flex-[0_0_auto] md:my-0 my-4">
              <img src="../assets/activity.svg" alt="" />
              <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-variable-collection-black text-[20px] tracking-[0.40px] leading-[30px] whitespace-nowrap">
                  Convenient Access
                </div>
                <p className="relative w-[270px] font-body-text-b1 font-[number:var(--body-text-b1-font-weight)] text-variable-collection-grey-05 text-[length:var(--body-text-b1-font-size)] tracking-[var(--body-text-b1-letter-spacing)] leading-[var(--body-text-b1-line-height)] [font-style:var(--body-text-b1-font-style)]">
                  Virtual visits transform the way patients and providers
                  communicate. Telehealth is a breakthrough health option that
                  advances convenient access.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ComplianceLogos />
      </div>
      <SmallBlueWave
        heading="Key Modules"
        subheading="So that you spend less time at the computer and more time on what matters… your patients."
      />
    </>
  );
};
