import React from 'react'
import { LargeButton } from "../../Homepage/LargeButton/LargeButton";
import { ComplianceLogos } from "../ComplianceLogos/ComplianceLogos";
import "../../../styles/dmsstyle.css";
export const ProductsPre = ({head,paragraph}) => {
  return (
    <>
    <div className="framedms">
    <div className="div">
      <div className="compliance-header">{head}</div>
      <p className="p">
        {paragraph}
      </p>
      <LargeButton className="large-button-instance" property1="solid-white" />
    </div>
    <div className="overlap-wrapper">
      <div className="overlap">
        <div className="video-overlay">
          <div className="overlap-group">
            <img className="polygon" src="../assets/Polygon1.svg" alt=''/>
          </div>
        </div>
      </div>
    </div>
  </div>
      <div className="inline-flex flex-col items-center gap-[120px] relative flex-[0_0_auto]">
        <div className="inline-flex flex-col items-center gap-[64px] relative flex-[0_0_auto]">
          <div className="flex w-full gap-[24px] flex-col items-center relative flex-[0_0_auto]">
            <div className="relative w-[652px] mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-variable-collection-brand-blue text-[48px] tracking-[0.96px] leading-[72px]">
              World class care, anywhere.
            </div>
            <p className="relative w-[872px] font-metric-descriptor font-[number:var(--metric-descriptor-font-weight)] text-variable-collection-grey-05 text-[length:var(--metric-descriptor-font-size)] text-center tracking-[var(--metric-descriptor-letter-spacing)] leading-[var(--metric-descriptor-line-height)] [font-style:var(--metric-descriptor-font-style)]">
              Streamline operations, enhance patient care and transform patient engagement with Suvarna HIMS.
              Streamline operations, enhance patient care and transform patient engagement with Suvarna HIMS.
            </p>
          </div>
          <div className="flex w-[1096px] items-start justify-between relative flex-[0_0_auto]">
            <div className="inline-flex items-start gap-[16px] relative flex-[0_0_auto]">
            <img src="../assets/archive.svg" alt=''/>
              <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-variable-collection-black text-[20px] tracking-[0.40px] leading-[30px] whitespace-nowrap">
                  Reach more patients
                </div>
                <p className="relative w-[270px] font-body-text-b1 font-[number:var(--body-text-b1-font-weight)] text-variable-collection-grey-05 text-[length:var(--body-text-b1-font-size)] tracking-[var(--body-text-b1-letter-spacing)] leading-[var(--body-text-b1-line-height)] [font-style:var(--body-text-b1-font-style)]">
                  Virtual visits transform the way patients and providers communicate. Telehealth is a breakthrough
                  health option that advances convenient access.
                </p>
              </div>
            </div>
            <div className="inline-flex items-start gap-[16px] relative flex-[0_0_auto]">
            <img src="../assets/heart.svg" alt=''/>
              <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-variable-collection-black text-[20px] tracking-[0.40px] leading-[30px] whitespace-nowrap">
                  Improve health outcomes
                </div>
                <p className="relative w-[270px] font-body-text-b1 font-[number:var(--body-text-b1-font-weight)] text-variable-collection-grey-05 text-[length:var(--body-text-b1-font-size)] tracking-[var(--body-text-b1-letter-spacing)] leading-[var(--body-text-b1-line-height)] [font-style:var(--body-text-b1-font-style)]">
                  Virtual visits transform the way patients and providers communicate. Telehealth is a breakthrough
                  health option that advances convenient access, efficiency, and satisfaction across the entire care
                  continuum.
                </p>
              </div>
            </div>
            <div className="inline-flex items-start gap-[16px] relative flex-[0_0_auto]">
            <img src="../assets/activity.svg" alt=''/>
              <div className="inline-flex flex-col items-start gap-[16px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Helvetica_Neue-Medium',Helvetica] font-medium text-variable-collection-black text-[20px] tracking-[0.40px] leading-[30px] whitespace-nowrap">
                  Convenient Access
                </div>
                <p className="relative w-[270px] font-body-text-b1 font-[number:var(--body-text-b1-font-weight)] text-variable-collection-grey-05 text-[length:var(--body-text-b1-font-size)] tracking-[var(--body-text-b1-letter-spacing)] leading-[var(--body-text-b1-line-height)] [font-style:var(--body-text-b1-font-style)]">
                  Virtual visits transform the way patients and providers communicate. Telehealth is a breakthrough
                  health option that advances convenient access.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ComplianceLogos />

      </div>
      </>
  )
};
