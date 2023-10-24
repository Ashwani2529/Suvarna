import React from 'react'
import "../../../styles/dmsstyle.css";
import "../../../styles/footer.css";
import { ProductModuleCard } from '../ProductModuleCard/ProductModuleCard';
import { ProductModuleImage } from '../ProductModuleImage/ProductModuleImage';
import { Button } from '../../AboutUs/Button/Button';
import { Footer } from '../../Homepage/Footer/Footer';
export const ProductsPro = ({cardHead,h,t}) => {
  return (
    <>
    <div className="relative w-[1366px] h-[950px] bg-white">
    <div className="relative h-[950px]">
      <div style={{height:`${h}px`,top:`${t}px`}} className="absolute w-[1366px] left-px object-cover">
      <svg xmlns="http://www.w3.org/2000/svg" width="1366" height="643" viewBox="0 0 1366 643" fill="none">
  <path d="M389.599 120.145C369.15 119.428 347.584 118.992 326.912 117.999C258.734 114.72 181.794 94.9803 113.703 99.7418L104 100.42L0 108.742V600.087L684.119 641.906C700.313 642.896 716.567 641.912 732.523 638.975L1176.05 557.347C1199.17 553.092 1222.86 552.946 1246.03 556.916L1322.61 570.037C1383.7 580.503 1439.5 533.451 1439.5 471.474V159.427V0.37439L1363.72 45.4148C1328.74 66.2073 1288.25 75.8339 1247.65 73.0095L1157.34 66.7258C1130.72 64.8735 1103.99 68.368 1078.74 77.0033L982.617 109.875C951.041 120.674 917.266 123.399 884.367 117.804L681.869 83.3627C658.476 79.3841 634.562 79.6 611.246 84.0003L438.012 116.692C422.063 119.702 405.82 120.714 389.599 120.145Z" fill="url(#paint0_linear_2016_3346)" fill-opacity="0.4"/>
  <defs>
    <linearGradient id="paint0_linear_2016_3346" x1="124.827" y1="692.516" x2="1154.58" y2="654.441" gradientUnits="userSpaceOnUse">
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
        <ProductModuleCard head={cardHead} 
          className="!flex-[0_0_auto]"
          icon={<ProductModuleImage className="!absolute !w-[304px] !h-[304px] !top-[88px] !left-0" />}
        />
      </div>
    </div>
  </div>
  <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
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
