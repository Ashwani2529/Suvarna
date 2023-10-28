import React from "react";
import {ProductsPre} from "../../Components/Products/ProductsPre/ProductsPre";
import Navbar from "../../Components/Homepage/Navbar/Navbar";
import { LogoHeader } from "../../Components/Homepage/LogoHeader/LogoHeader";
import "../../styles/dmsstyle.css";
import "../../styles/tailwind.css"
import { ProductsProRis } from "../../Components/Products/ProductsPro/ProductsProRis";
export const EMR = () => {
   let cardHead1 = "For Hospital/ Provider";
  let cardHead2 = "For Nurse/ Caregivers";
  return (
    <div className="relative w-full h-[3504px] bg-white">
      <div className="inline-flex flex-col items-center gap-[120px] absolute top-[97px] left-0 w-full">
     <ProductsPre head={"Electronic Medical Record"} paragraph={"Enable doctors and care givers for a better connected & coordinated patient care, with Suvarna EMR"}/>
     <ProductsProRis cardHead={"For Clinicians/ Doctors"} cardHead1={cardHead1} cardHead2={cardHead2} h={642} t={253}/>
      </div>
      <div className="header flex">
        <LogoHeader className="design-component-instance-node-2" />
        <div className="frame-31">
          <div className="menu-2 ml-40">
            <Navbar/>
          </div>
        </div>
      </div>
    </div>
  );
};