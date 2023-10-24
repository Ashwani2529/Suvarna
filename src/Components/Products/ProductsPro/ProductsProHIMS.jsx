import React from 'react'
import "../../../styles/dmsstyle.css";
import "../../../styles/footer.css";
import { ProductModuleCard } from '../ProductModuleCard/ProductModuleCard';
import { ProductModuleImage } from '../ProductModuleImage/ProductModuleImage';
import { Button } from '../../AboutUs/Button/Button';
import { Footer } from '../../Homepage/Footer/Footer';
export const ProductsProHIMS = ({cardHead,cardHead1,cardHead2,cardHead3,cardHead4,cardHead5,cardHead6,h,t}) => {
  let path1 = "../assets/Product_Module_Image.svg";
  let path2 = "../assets/Product_Module_Image1.svg";
  return (
    <>
    <div className="relative w-[1366px] h-[4050px] bg-white">
    <div className="relative h-[4050px]">
      <div style={{height:`${h}px`,top:`${t}px`}} className="absolute w-[1366px] left-px object-cover">
      <svg xmlns="http://www.w3.org/2000/svg" width="1366" height="3026" viewBox="0 0 1366 3026" fill="none">
  <path d="M332.931 559.173C315.137 555.554 297.855 550.284 282.339 540.877C226.212 506.851 166.303 453.929 104 474.575L0 514.01V2842.47L603.655 3017.34C669.002 3036.27 739.491 3020.68 790.763 2975.96L1112.31 2695.52C1169.35 2645.77 1253.91 2644.28 1312.66 2691.99C1363.51 2733.27 1439.5 2697.09 1439.5 2631.59V754.205V0.463135L1347.62 259.277C1326.71 318.179 1262.58 349.598 1203.22 330.026C1152.67 313.359 1097.28 333.559 1069.33 378.859L1042.11 422.973C984.991 515.535 859.639 537.023 774.956 468.769L769.813 464.624C698.696 407.303 596.529 409.923 528.443 470.814L475.349 518.297C437.073 552.529 383.251 569.407 332.931 559.173Z" fill="url(#paint0_linear_1971_11202)" fill-opacity="0.4"/>
  <defs>
    <linearGradient id="paint0_linear_1971_11202" x1="124.827" y1="3280.49" x2="1155.93" y2="3272.44" gradientUnits="userSpaceOnUse">
      <stop offset="0.161458" stop-color="#35954C"/>
      <stop offset="1" stop-color="#526F85"/>
    </linearGradient>
  </defs>
</svg>
        </div>
      <div id="pattern" className="absolute w-[1366px] h-[274px] top-0 left-0 bg-[100%_100%]">
        <div className="inline-flex flex-col items-center justify-center gap-[16px] relative top-[40px] left-[344px]">
          <div className="relative w-fit mt-[-1.00px] font-header-h0 font-[number:var(--header-h0-font-weight)] text-white text-[length:var(--header-h0-font-size)] text-center tracking-[var(--header-h0-letter-spacing)] leading-[var(--header-h0-line-height)] whitespace-nowrap [font-style:var(--header-h0-font-style)]">
            Key Modules
          </div>
          <p className="relative w-[754px] font-metric-descriptor font-[number:var(--metric-descriptor-font-weight)] text-white text-[length:var(--metric-descriptor-font-size)] text-center tracking-[var(--metric-descriptor-letter-spacing)] leading-[var(--metric-descriptor-line-height)] [font-style:var(--metric-descriptor-font-style)]">
            So that you spend less time at the computer and more time on what matters… your patients.
          </p>
        </div>
      </div>
     
      <div className="inline-flex flex-col items-start absolute top-[415px] left-56">
        <ProductModuleCard head={cardHead} path={path1}
          className="!flex-[0_0_auto]"
          icon={<ProductModuleImage className="!absolute !w-[304px] !h-[304px] !top-[88px] !left-0" />}
        />
      </div>
      <div className="inline-flex flex-col items-start absolute top-[968px] left-9">
        <ProductModuleCard head={cardHead1} path={path2}
          className="!flex-[0_0_auto]"
          icon={<ProductModuleImage className="!absolute !w-[304px] !h-[304px] !top-[88px] !left-0"/>}
        />
      </div>
      <div className="inline-flex flex-col items-start absolute top-[1520px] left-56">
        <ProductModuleCard head={cardHead2} path={path1}
          className="!flex-[0_0_auto]"
          icon={<ProductModuleImage className="!absolute !w-[304px] !h-[304px] !top-[88px] !left-0" />}
        />
      </div>
      <div className="inline-flex flex-col items-start absolute top-[2072px] left-9">
        <ProductModuleCard head={cardHead3} path={path2}
          className="!flex-[0_0_auto]"
          icon={<ProductModuleImage className="!absolute !w-[304px] !h-[304px] !top-[88px] !left-0" />}
        />
      </div>
      <div className="inline-flex flex-col items-start absolute top-[2624px] left-56">
        <ProductModuleCard head={cardHead4} path={path1}
          className="!flex-[0_0_auto]"
          icon={<ProductModuleImage className="!absolute !w-[304px] !h-[304px] !top-[88px] !left-0" />}
        />
      </div>
      <div className="inline-flex flex-col items-start absolute top-[3176px] left-9">
        <ProductModuleCard head={cardHead5} path={path2}
          className="!flex-[0_0_auto]"
          icon={<ProductModuleImage className="!absolute !w-[304px] !h-[304px] !top-[88px] !left-0" />}
        />
      </div>
      <div className="inline-flex flex-col items-start absolute top-[3728px] left-56">
        <ProductModuleCard head={cardHead6} path={path1}
          className="!flex-[0_0_auto]"
          icon={<ProductModuleImage className="!absolute !w-[304px] !h-[304px] !top-[88px] !left-0" />}
        />
      </div>
    </div>
  </div>
  <div className="top-[99px] mt-12 my-5 inline-flex flex-col items-center relative flex-[0_0_auto]">
    <div className="flex flex-col w-[1366px] items-center justify-center  px-[60px] relative flex-[0_0_auto] bg-[#f9f9f9]">
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
