import React from "react";
import { ProductsPre } from "../../Components/Products/ProductsPre/ProductsPre";

import "../../styles/dmsstyle.css";
import "../../styles/tailwind.css";
import { ProductsPro } from "../../Components/Products/ProductsPro/ProductsPro";
export const DMS = () => {
  return (
    <div className="relative w-full h-[3504px] bg-white">
      <div className="inline-flex flex-col items-center gap-[120px] absolute top-[97px] left-0 w-full">
        <ProductsPre
          head={"Document Management System"}
          paragraph={
            "Digitize your physical case sheets, prescriptions, reports & more with Document Management System"
          }
        />
        <ProductsPro cardHead={"Digitize Physical Documents"} h={642} t={253} />
      </div>
    </div>
  );
};
