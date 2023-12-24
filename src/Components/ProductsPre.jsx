import React from "react";
import { LargeButton } from "./Homepage/LargeButton/LargeButton";
import { ComplianceLogos } from "./Products/ComplianceLogos/ComplianceLogos";
import "../styles/dmsstyle.css";
import products_header from "../assets/about_Us.png";

import SmallBlueWave from "./SmallBlueWave";
import Banner from "./Products/Banner/Banner";
import HimsBenifits from "./Products/HimsBenifits/HimsBenifits";

export const ProductsPre = ({ head, paragraph }) => {
  return (
    <>
     <Banner head={head} paragraph={paragraph} image={products_header} />

      <div className=" flex flex-col items-center relative flex-[0_0_auto] w-full my-[120px]">
        <HimsBenifits />
        <ComplianceLogos />
      </div>
      <SmallBlueWave
        heading="Key Modules"
        subheading="So that you spend less time at the computer and more time on what matters… your patients."
      />
    </>
  );
};
