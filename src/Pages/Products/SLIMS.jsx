import React from "react";
import {ProductsPre} from "../../Components/Products/ProductsPre/ProductsPre";
import Navbar from "../../Components/Homepage/Navbar/Navbar";
import { LogoHeader } from "../../Components/Homepage/LogoHeader/LogoHeader";
import "../../styles/dmsstyle.css";
import "../../styles/tailwind.css";
import { ProductsProSli} from "../../Components/Products/ProductsPro/ProductsProSli";
export const SLIMS = () => {
   let cardHead1 = "Revenue Cycle Management";
  let cardHead2 = "Radiology  Information System";
  let cardHead3 = "Patient Engagement - (CRM)";
  return (
    <div className="relative w-[1366px] h-[3504px] bg-white">
      <div className="inline-flex flex-col items-center gap-[120px] absolute top-[97px] left-0">
     <ProductsPre head={"Suvarna Laboratory Information Management System"} paragraph={"Automate workflows, reduce TAT, error free reporting, achieve compliance and enhance customer satisfaction with SLIMS"}/>
     <ProductsProSli cardHead={"Laboratory Information System"} cardHead1={cardHead1} cardHead2={cardHead2} cardHead3={cardHead3} h={642} t={695}/>
      </div>
      <div className="header flex ml-4">
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