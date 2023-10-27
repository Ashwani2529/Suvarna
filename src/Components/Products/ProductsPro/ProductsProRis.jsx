import React from 'react'
import "../../../styles/dmsstyle.css";
import "../../../styles/footer.css";
import { ProductModuleCard } from '../ProductModuleCard/ProductModuleCard';
import { ProductModuleImage } from '../ProductModuleImage/ProductModuleImage';
import { Button } from '../../AboutUs/Button/Button';
import { Footer } from '../../Products/Footer/Footer';
export const ProductsProRis = ({cardHead,cardHead1,cardHead2,h,t}) => {
  let path1 = "../assets/Product_Module_Image.svg";
  let path2 = "../assets/Product_Module_Image1.svg";
  return (
    <>
    <div className="relative w-[1350px] h-[1950px] bg-white">
    <div className="relative h-[1950px]">
      <div style={{height:`${h}px`,top:`${t}px`}} className="absolute w-[1350px] left-px object-cover">
      <svg xmlns="http://www.w3.org/2000/svg" width="1354" height="1366" viewBox="0 0 1354 1366" fill="none">
  <path d="M362.561 267.555C348.598 266.615 334.526 265.594 320.934 263.939C251.965 255.542 172.637 214.356 104 225.138L0 243.831V1347.55L654.89 1437.47C689.999 1442.29 725.758 1437.7 758.508 1424.16L1137.24 1267.58C1184.6 1248.01 1237.66 1247.35 1285.49 1265.76L1303.58 1272.72C1369.09 1297.93 1354 1249.58 1354 1179.4V357.686V0.40332L1378.37 82.0259C1336.3 138.193 1266.65 166.534 1197.32 155.698C1146.03 147.683 1093.7 161.046 1052.53 192.67L1023.22 215.19C968.09 257.536 894.932 268.223 829.998 243.415L721.761 202.062C673.472 183.613 619.916 184.578 572.323 204.754L461.534 251.719C430.403 264.916 396.298 269.827 362.561 267.555Z" fill="url(#paint0_linear_2016_2904)" fill-opacity="0.4"/>
  <defs>
    <linearGradient id="paint0_linear_2016_2904" x1="124.827" y1="1555.17" x2="1155.71" y2="1538.2" gradientUnits="userSpaceOnUse">
      <stop offset="0.161458" stop-color="#35954C"/>
      <stop offset="1" stop-color="#526F85"/>
    </linearGradient>
  </defs>
</svg>
        </div>
      <div id="pattern" className="absolute w-[1350px] h-[274px] top-0 left-0 bg-[100%_100%]">
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
    </div>
  </div>
  <div className="top-[60px] my-5 inline-flex flex-col items-center relative flex-[0_0_auto]">
    <div className="flex flex-col w-[1350px] items-center justify-center  px-[60px] relative flex-[0_0_auto] bg-[#f9f9f9]">
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
