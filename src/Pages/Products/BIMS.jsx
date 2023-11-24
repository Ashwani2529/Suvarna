import React , {useEffect} from "react";
import { ProductsPre } from "../../Components/Products/ProductsPre/ProductsPre";
import "../../styles/dmsstyle.css";
import "../../styles/tailwind.css";
import { ProductsPro } from "../../Components/Products/ProductsPro/ProductsPro";
export const BIMS = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
    return(()=>{
      return null
    });
  },[])

  return (
    <div className="relative w-full h-[3504px] bg-white">
      <div className="inline-flex flex-col items-center gap-[120px] absolute top-[97px] left-0 w-full">
        <ProductsPre
          head={"Business Intelligence & MIS"}
          paragraph={
            "Measure, manage & grow your business with intelligent analytics and live dashboards"
          }
        />
        <ProductsPro cardHead={"Reporting that grows with you"} />
      </div>
    </div>
  );
};
