import React from 'react'
import "../../../styles/dmsstyle.css";
import "../../../styles/footer.css";
import { ProductModuleCard } from '../ProductModuleCard/ProductModuleCard';
import { ProductModuleImage } from '../ProductModuleImage/ProductModuleImage';
import { Button } from '../../AboutUs/Button/Button';
import { Footer } from '../../Homepage/Footer/Footer';
export const ProductsProSli = ({cardHead,cardHead1,cardHead2,cardHead3,h,t}) => {
  let path1 = "../assets/Product_Module_Image.svg";
  let path2 = "../assets/Product_Module_Image1.svg";
  return (
    <>
    <div className="relative w-[1366px] h-[2550px] bg-white">
    <div className="relative h-[2550px]">
      <div style={{height:`${h}px`,top:`${t}px`}} className="absolute w-[1366px] left-px object-cover">
      <svg xmlns="http://www.w3.org/2000/svg" width="1366" height="1838" viewBox="0 0 1366 1838" fill="none">
  <path d="M354.817 341.501C340.127 340.173 325.437 338.588 311.43 335.926C244.543 323.217 170.754 274.602 104 287.997L0 311.875V1721.78L641.078 1834.23C684.782 1841.89 729.793 1834.81 769.029 1814.09L1123.57 1626.85C1178.5 1597.84 1243.99 1596.9 1299.73 1624.3C1364.17 1655.98 1439.5 1609.08 1439.5 1537.27V457.315V0.917725L1367.12 124.371C1332.93 182.68 1265.54 212.914 1199.26 199.68C1147.8 189.407 1094.59 205.254 1057.13 242.008L1035.34 263.395C974.892 322.709 883.643 337.525 807.537 300.382L738.973 266.92C680.939 238.597 612.802 240.037 556.017 270.787L466.339 319.35C432.407 337.725 393.248 344.973 354.817 341.501Z" fill="url(#paint0_linear_2016_4672)" fill-opacity="0.4"/>
  <defs>
    <linearGradient id="paint0_linear_2016_4672" x1="124.827" y1="1987" x2="1155.82" y2="1973.72" gradientUnits="userSpaceOnUse">
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
    </div>
  </div>
  <div className="top-[60px] my-5 inline-flex flex-col items-center relative flex-[0_0_auto]">
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
