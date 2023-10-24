import React from "react";
import {ProductsPre} from "../../Components/Products/ProductsPre/ProductsPre";
import Navbar from "../../Components/Homepage/Navbar/Navbar";
import { LogoHeader } from "../../Components/Homepage/LogoHeader/LogoHeader";
import "../../styles/dmsstyle.css";
import "../../styles/tailwind.css";
import { ProductsPro } from "../../Components/Products/ProductsPro/ProductsPro";
export const Edukares = () => {
  return (
    <div className="relative w-[1366px] h-[3504px] bg-white">
      <div className="inline-flex flex-col items-center gap-[120px] absolute top-[97px] left-0">
     <ProductsPre head={"Digital Campus Management System"} paragraph={"Experience the new age Campus Management System"}/>
        <ProductsPro cardHead={"Designed to address the needs of management, staff, and student"}/>
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