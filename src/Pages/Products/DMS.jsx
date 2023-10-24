import React from "react";
import {ProductsPre} from "../../Components/Products/ProductsPre/ProductsPre";
import Navbar from "../../Components/Homepage/Navbar/Navbar";
import { LogoHeader } from "../../Components/Homepage/LogoHeader/LogoHeader";
import "../../styles/dmsstyle.css";
import "../../styles/tailwind.css";
import { ProductsPro } from "../../Components/Products/ProductsPro/ProductsPro";
export const DMS = () => {
  return (
    <div className="relative w-[1366px] h-[3504px] bg-white">
      <div className="inline-flex flex-col items-center gap-[120px] absolute top-[97px] left-0">
     <ProductsPre head={"Document Management System"} paragraph={"Digitize your physical case sheets, prescriptions, reports & more with Document Management System"}/>
        <ProductsPro cardHead={"Digitize Physical Documents"} h={642} t={253}/>
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