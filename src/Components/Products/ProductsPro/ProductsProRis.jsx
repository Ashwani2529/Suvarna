import React from 'react'
import "../../../styles/dmsstyle.css";
import "../../../styles/footer.css";
import { ProductModuleCard } from '../ProductModuleCard/ProductModuleCard';
import { ProductModuleImage } from '../ProductModuleImage/ProductModuleImage';
import { Button } from '../../AboutUs/Button/Button';
import bgImg from '../../../VectorRIS.png'
import { Footer } from '../../../Components/Footer';
export const ProductsProRis = ({cardHead,cardHead1,cardHead2}) => {
  let path1 = "../assets/Product_Module_Image.svg";
  let path2 = "../assets/Product_Module_Image1.svg";
  return (
    <>
    <div className="relative w-full h-[1980px] bg-white">
    <div className="relative w-[99%]">
    <img src={bgImg} alt="" style={{position:'absolute',left:'9px',top:'750px',height:"1200px",width:'100vw'}}/>
    
      <div className="inline-flex flex-col items-start absolute top-[515px] right-16">
        <ProductModuleCard head={cardHead} path={path1}
          className="!flex-[0_0_auto]"
          icon={<ProductModuleImage className="!absolute !w-[304px] !h-[304px] !top-[88px] !left-0" />}
        />
      </div>
      <div className="inline-flex flex-col items-start absolute top-[1068px] left-16">
        <ProductModuleCard head={cardHead1} path={path2}
          className="!flex-[0_0_auto]"
          icon={<ProductModuleImage className="!absolute !w-[304px] !h-[304px] !top-[88px] !left-0"/>}
        />
      </div>
      <div className="inline-flex flex-col items-start absolute top-[1620px] right-16">
        <ProductModuleCard head={cardHead2} path={path1}
          className="!flex-[0_0_auto]"
          icon={<ProductModuleImage className="!absolute !w-[304px] !h-[304px] !top-[88px] !left-0" />}
        />
      </div>
    </div>
  </div>
  <div className="top-[89px] my-5 inline-flex flex-col items-center relative flex-[0_0_auto]">
    <div className="flex flex-col w-full items-center justify-center  px-[60px] relative flex-[0_0_auto] bg-[#f9f9f9]">
      <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
        <p className="relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Regular',Helvetica] font-normal text-variable-collection-black text-[36px] tracking-[0] leading-[54px] whitespace-nowrap">
          Have a question? We’d love to hear from you.
        </p>
        <Button
          className="!flex-[0_0_auto] !inline-flex !w-[unset] mt-8"
          property1="default-small"
          supportClassName="!flex-[0_0_auto] !inline-flex !w-[unset]"
          text="Contact us"
        />
      </div>
    </div>
 
  </div> <Footer/>  </>
  )
}
