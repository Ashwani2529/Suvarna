import React from "react";
import "../../../styles/dmsstyle.css";
import "../../../styles/footer.css";
import { ProductModuleCard } from "../ProductModuleCard/ProductModuleCard";
import { ProductModuleImage } from "../ProductModuleImage/ProductModuleImage";
import { Button } from "../../AboutUs/Button/Button";
import { Footer } from "../../../Components/Footer";
import bgImg from "../../../Vector 5.png";
export const ProductsProHIMS = ({
  cardHead,
  cardHead1,
  cardHead2,
  cardHead3,
  cardHead4,
  cardHead5,
  cardHead6,
}) => {
  let path1 = "../assets/Product_Module_Image.svg";
  let path2 = "../assets/Product_Module_Image1.svg";
  return (
    
      <div className="relative w-screen h-[500px] flex flex-col justify-start items-start">
        <div className="relative w-[99%] h-full">
          <img
            src={bgImg}
            alt=""
            style={{
              position: "absolute",
              left: "9px",
              top: "1200px",
              height: "2900px",
              width: "100vw",
            }}
          />

          <div className="lg:w-10/12 md:w-11/12 w-full flex flex-col justify-center items-center  absolute left-[10%] top-[50%]">
            <div className="w-full flex justify-start items-center my-[56px]">
              <ProductModuleCard
                head={cardHead}
                path={path1}
                className="!flex-[0_0_auto]"
                icon={
                  <ProductModuleImage className="!absolute !w-[304px] !h-[304px] !top-[88px] !left-0" />
                }
              />
            </div>
            <div className="w-full flex justify-end items-center my-[56px] ">
              <ProductModuleCard
                head={cardHead1}
                path={path2}
                className="!flex-[0_0_auto]"
                icon={
                  <ProductModuleImage className="!absolute !w-[304px] !h-[304px] !top-[88px] !left-0" />
                }
              />
            </div>
            <div className="w-full flex justify-start items-center my-[56px] ">
              <ProductModuleCard
                head={cardHead2}
                path={path1}
                className="!flex-[0_0_auto]"
                icon={
                  <ProductModuleImage className="!absolute !w-[304px] !h-[304px] !top-[88px] !left-0" />
                }
              />
            </div>
            <div className="w-full flex justify-end items-center my-[56px] ">
              <ProductModuleCard
                head={cardHead3}
                path={path2}
                className="!flex-[0_0_auto]"
                icon={
                  <ProductModuleImage className="!absolute !w-[304px] !h-[304px] !top-[88px] !left-0" />
                }
              />
            </div>
            <div className="w-full flex justify-start items-center my-[56px] ">
              <ProductModuleCard
                head={cardHead4}
                path={path1}
                className="!flex-[0_0_auto]"
                icon={
                  <ProductModuleImage className="!absolute !w-[304px] !h-[304px] !top-[88px] !left-0" />
                }
              />
            </div>
            <div className="w-full flex justify-end items-center my-[56px]">
              <ProductModuleCard
                head={cardHead5}
                path={path2}
                className="!flex-[0_0_auto]"
                icon={
                  <ProductModuleImage className="!absolute !w-[304px] !h-[304px] !top-[88px] !left-0" />
                }
              />
            </div>
            <div className="w-full flex justify-start items-center my-[56px]">
              <ProductModuleCard
                head={cardHead6}
                path={path1}
                className="!flex-[0_0_auto]"
                icon={
                  <ProductModuleImage className="!absolute !w-[304px] !h-[304px] !top-[88px] !left-0" />
                }
              />
            </div>
          </div>
        </div>
      </div>
  
  );
};
