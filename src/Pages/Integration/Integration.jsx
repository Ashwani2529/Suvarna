import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../Components/Integrations/Button/Button";
import { Category } from "../../Components/Integrations/Category/Category";
import { IntegrationAppcard } from "../../Components/Integrations/IntegrationAppcard/IntegrationAppcard";
import { LogoHeader } from "../../Components/Integrations/LogoHeader/LogoHeader";
import { Footer } from "../../Components/Homepage/Footer/Footer";
import "./integration.css";
import Navbar from "../../Components/Homepage/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

export const Integration = () => {
  let navigate = useNavigate();

  const [isSticky, setIsSticky] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      const elementToWatch = document.getElementById('stickToTopRef');
      
      console.log(elementToWatch.getBoundingClientRect().y);

      if (elementToWatch.getBoundingClientRect().y <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    console.log(isSticky);
    window.addEventListener("scroll", (e) => {
      handleScroll();
    console.log(isSticky);

    });
    return () => {
      window.removeEventListener("scroll", (e) => {
        handleScroll();
      });
    };
  }, []);

  return (
    <div className="intindex">
      <div className="overlap-group">
        <div className="sections">
          <div className="frame-5">
            <div className="div-2">
              <div className="headerint">
                <p className="compliance-header">
                  <span className="span">Supercharge your business with </span>
                  <span className="text-wrapper-4">integrations.</span>
                </p>
                <p className="p">
                  Integrate with your favourite third-party apps &amp; medical
                  devices for seamless operations &amp; patient care.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`frame-6 ${isSticky} ? "sticky" : "`}
            id="stickToTopRef"
          >
            <div className={`frame-7 bg-red-900 ${isSticky} ? "sticky" : "`}>
              <div className="div-wrapper">
                <div className="text-wrapper-5">FILTER BY CATEGORY</div>
              </div>
              <div className="frame-8">
                <Category
                  className="design-component-instance-node"
                  property1="selected"
                />
                <Category
                  className="design-component-instance-node"
                  property1="default"
                  text="Accounting/ ERP/ CRM"
                />
                <Category
                  className="design-component-instance-node"
                  property1="default"
                  text="Picture Archiving and Communications System (PACS)"
                />
                <Category
                  className="design-component-instance-node"
                  property1="default"
                  text="Lab Analyzers"
                />
                <Category
                  className="design-component-instance-node"
                  property1="default"
                  text="EDC &amp; POS Machines"
                />
                <Category
                  className="design-component-instance-node"
                  property1="default"
                  text="Modalities"
                />
                <Category
                  className="design-component-instance-node"
                  property1="default"
                  text="Payments"
                />
                <Category
                  className="design-component-instance-node"
                  property1="default"
                  text="Communication"
                />
              </div>
            </div>
            <div className="frame-9">
              <div className="div-2">
                <div className="text-wrapper-6">Accounting/ ERP/ CRM</div>
                <div className="frame-10">
                  <IntegrationAppcard property1="accounting" />
                  <IntegrationAppcard
                    integrationLogoProperty1="SAP"
                    property1="accounting"
                    text="SAP"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="focus"
                    property1="accounting"
                    text="Focus"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="MS-dynamics-AX"
                    property1="accounting"
                    text="Microsoft Dynamics AX"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="tally"
                    property1="accounting"
                    text="Tally"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="MS-dynamics-NAV"
                    property1="accounting"
                    text="Microsoft Dynamics NAV"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="a-ayush"
                    property1="accounting"
                    text="Aayush Hospitals"
                  />
                </div>
              </div>
              <div className="div-2">
                <p className="text-wrapper-7">
                  Picture Archiving and Communications System (PACS)
                </p>
                <div className="frame-10">
                  <IntegrationAppcard
                    integrationLogoProperty1="radspa"
                    property1="PACS"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="med-synapse"
                    property1="PACS"
                    text1="medSynapse"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="CGE-centricity"
                    property1="PACS"
                    text1="GE Centricity"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="ANIDS"
                    property1="PACS"
                    text1="ANIDS"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="tally"
                    property1="PACS"
                    text1="Tally"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="GEMS"
                    property1="PACS"
                    text1="GEMS Srikakulam"
                  />
                </div>
              </div>
              <div className="div-2">
                <div className="text-wrapper-7">Lab Analyzers</div>
                <div className="frame-10">
                  <IntegrationAppcard
                    integrationLogoProperty1="abott"
                    property1="lab-analyzer"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="accurex"
                    property1="lab-analyzer"
                    text2="Accurex"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="acon"
                    property1="lab-analyzer"
                    text2="Acon"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="adonis"
                    property1="lab-analyzer"
                    text2="Adonis"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="agappe"
                    property1="lab-analyzer"
                    text2="Agappe"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="alere"
                    property1="lab-analyzer"
                    text2="Alere"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="alifax"
                    property1="lab-analyzer"
                    text2="Alifax"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="arkray"
                    property1="lab-analyzer"
                    text2="Arkray"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="veckman"
                    property1="lab-analyzer"
                    text2="Beckman Coulter"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="aspen"
                    property1="lab-analyzer"
                    text2="Aspen Healthcare"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="biomerieux"
                    property1="lab-analyzer"
                    text2="Biomerieux"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="biorad"
                    property1="lab-analyzer"
                    text2="Bio-Rad"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="biosystems"
                    property1="lab-analyzer"
                    text2="BioSystems"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="e-verlife"
                    property1="lab-analyzer"
                    text2="Everlife CPC Diagnostics"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="dia-tek"
                    property1="lab-analyzer"
                    text2="DiaTek"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="diatron"
                    property1="lab-analyzer"
                    text2="Diatron"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="diesse"
                    property1="lab-analyzer"
                    text2="Diesse"
                  />
                </div>
              </div>
              <div className="div-2">
                <div className="text-wrapper-7">EDC and POS Machines</div>
                <div className="frame-10">
                  <IntegrationAppcard
                    integrationLogoProperty1="pos1"
                    property1="POS"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="pos2"
                    property1="POS"
                    text3="POS2"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="pos3"
                    property1="POS"
                    text3="POS3"
                  />
                </div>
              </div>
              <div className="div-2">
                <div className="text-wrapper-8">Modalities</div>
                <div className="frame-10">
                  <IntegrationAppcard
                    integrationLogoProperty1="c-tscan"
                    property1="modalities"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="MR-iscan"
                    property1="modalities"
                    text4="MRI Scan"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="petscan"
                    property1="modalities"
                    text4="PET-Scan"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="xray"
                    property1="modalities"
                    text4="X-Ray"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="ultrasound"
                    property1="modalities"
                    text4="Ultrasound"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="two-decho"
                    property1="modalities"
                    text4="2D-Echo"
                  />
                </div>
              </div>
              <div className="div-2">
                <div className="text-wrapper-7">Payments</div>
                <div className="frame-10">
                  <IntegrationAppcard
                    integrationLogoProperty1="UPI"
                    property1="payments"
                    text5="UPI"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="razorpay"
                    property1="payments"
                    text5="Razorpay"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="paytm"
                    property1="payments"
                    text5="Paytm"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="pay-u-money"
                    property1="payments"
                    text5="PayUMoney"
                  />
                </div>
              </div>
              <div className="div-2">
                <div className="text-wrapper-7">Communication</div>
                <div className="frame-10">
                  <IntegrationAppcard
                    integrationLogoProperty1="whats-app"
                    property1="comm"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="SMS"
                    property1="comm"
                    text6="SMS"
                  />
                  <IntegrationAppcard
                    integrationLogoProperty1="gmail"
                    property1="comm"
                    text6="Gmail"
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <div className="header-2">
          <LogoHeader
            onClick={() => navigate("/")}
            className="design-component-instance-node"
          />
          <div className="frame-22">
            <div className="menu-2">
              <Navbar />
            </div>
            {/* <Button className="design-component-instance-node right-2" property1="default-small-icon" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
