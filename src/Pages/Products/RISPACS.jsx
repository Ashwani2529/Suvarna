import React from "react";
import {ProductsPre} from "../../Components/Products/ProductsPre/ProductsPre";
import Navbar from "../../Components/Homepage/Navbar/Navbar";
import { LogoHeader } from "../../Components/Homepage/LogoHeader/LogoHeader";
import "../../styles/dmsstyle.css";
import "../../styles/tailwind.css"
import { ProductsProRis } from "../../Components/Products/ProductsPro/ProductsProRis";
export const RISPACS = () => {
   let cardHead1 = "PACS/ Modality Integration";
  let cardHead2 = "Radiology Workflow Management";
  return (
    <div className="relative w-[1355px] h-[3504px] bg-white" style={{left:"2px"}}>
      <div className="inline-flex flex-col items-center gap-[120px] absolute top-[97px] left-0" style={{right:"16px"}}>
     <ProductsPre head={"Radiology Information System"} paragraph={"Transform enterprise imaging, radiology workflows and reporting with Suvarna RIS-PACS"}/>
     <ProductsProRis cardHead={"Centralized Reporting"} cardHead1={cardHead1} cardHead2={cardHead2} h={642} t={253}/>
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