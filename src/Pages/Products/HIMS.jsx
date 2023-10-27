import React from "react";
import {ProductsPre} from "../../Components/Products/ProductsPre/ProductsPre";
import Navbar from "../../Components/Homepage/Navbar/Navbar";
import { LogoHeader } from "../../Components/Homepage/LogoHeader/LogoHeader";
import "../../styles/dmsstyle.css";
import "../../styles/tailwind.css"
import { ProductsProHIMS} from "../../Components/Products/ProductsPro/ProductsProHIMS";
export const HIMS= () => {
   let cardHead1 = "Inpatient & ER Management";
  let cardHead2 = "Patient Engagement - (CRM)";
  let cardHead3 = "Revenue Cycle Management";
  let cardHead4 = "Supply Chain Management";
  let cardHead5 = "Operations Management";
  let cardHead6 = "Digital Presence";
  return (
    <div className="relative w-[1355px] h-[6710px] bg-white" style={{left:"2px"}}>
      <div className="inline-flex flex-col items-center gap-[120px] absolute top-[97px] left-0" style={{right:"16px"}}>
     <ProductsPre head={"Hospital Information Management System"} paragraph={"Streamline operations, enhance patient care and transform patient engagement with Suvarna HIMS"}/>
     <ProductsProHIMS cardHead={"Outpatient Management"} cardHead1={cardHead1} cardHead2={cardHead2} 
     cardHead3={cardHead3} cardHead4={cardHead4}
      cardHead5={cardHead5} cardHead6={cardHead6}
       h={642} t={1165}/>
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