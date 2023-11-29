import React from "react";
import "../../../styles/dmsstyle.css";
import "../../../styles/footer.css";
import { ProductModuleCard } from "../ProductModuleCard/ProductModuleCard";
import { ProductModuleImage } from "../ProductModuleImage/ProductModuleImage";
import { Button } from "../../AboutUs/Button/Button";
import bgImg from "../../../VectorDMS.png";
import { Footer } from "../../../Components/Footer";
export const ProductsPro = ({ cardHead }) => {
  return (
    <>
      <div className="relative w-full h-[1050px] bg-white">
        <div className="relative h-[950px] w-[99%]">
          <img
            src={bgImg}
            alt=""
            style={{
              position: "absolute",
              left: "9px",
              top: "410px",
              height: "580px",
              width: "100vw",
            }}
          />

          <div className="inline-flex flex-col items-start absolute top-[545px] right-16">
            <ProductModuleCard
              head={cardHead}
              className="!flex-[0_0_auto]"
              icon={
                <ProductModuleImage className="!absolute !w-[304px] !h-[304px] !top-[88px] !left-0" />
              }
            />
          </div>
        </div>
      </div>
      <div className="w-screen h-[30vh] flex justify-center items-center relative bg-[#f9f9f9]">
        <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-variable-collection-black text-[36px] tracking-[0] leading-[54px] whitespace-nowrap">
            Have a question? We’d love to hear from you.
          </div>
          <Button
            className="!flex-[0_0_auto] !inline-flex !w-[unset] mt-8"
            property1="default-small"
            supportClassName="!flex-[0_0_auto] !inline-flex !w-[unset]"
            text="Contact us"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
