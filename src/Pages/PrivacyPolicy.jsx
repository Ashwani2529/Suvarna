import React from "react";

import { LogoHeader } from "../Components/AboutUs/LogoHeader/LogoHeader";
// import "./style.css";
import "../styles/PrivacyPolicy.css";
import Navbar from "../Components/Homepage/Navbar/Navbar";
import { Footer } from "../Components/Homepage/Footer/Footer";

import vector1 from "../assets/Vector 1.png";
import vector2 from "../assets/Vector 2.png";
import vector3 from "../assets/Vector 3.png";

export const PrivacyPolicy = () => {
  return (
    <div className="PrivacyPolicy h-auto flex-col justify-start items-center">
      {/*  vectors + heading */}

      <div className="w-screen min-h-[274px] flex justify-center items-center reltive mt-[100px]">
        <img
          src={vector1}
          className="w-screen z-30 absolute top-0 left-0"
          alt="vector1"
        />
        <img
          src={vector2}
          alt="vector2"
          className="w-screen z-20 absolute top-12 left-0"
        />
        <img
          src={vector3}
          alt="vector3"
          className="w-screen z-10 absolute top-16 left-0"
        />

        <div className="heading z-40 absolute  bg-transparent w-screen h-full flex justify-center items-center">
          Privacy Policy
        </div>
      </div>

      <div className="h-[2950px] w-screen flex flex-col justify-center items-center">
        <div className="lg:w-10/12 md:w-11/12 w-full">
          <div className="sub-header">
            PrivacyPolicy
          </div>
          <div className="last-updated-text my-2">
            Last updated: 12 October, 2023
          </div>
          <div className="regular-text my-3">
            <div>
            Welcome to Suvarna Technosoft Pvt. Ltd. ("the Website"). By accessing and using this Website, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using the Website. This Privacy Policy (the “Privacy Policy”) is intended to inform you about our practices regarding the collection and use of your data that you may submit to us through our Services. This Privacy Policy should be read alongside, and in addition to the Terms of Use.

            </div>
            <div className="mt-16">
            Unless otherwise defined in this Privacy Policy, terms used have the same meaning as in the Terms of Use. This Privacy Policy may be updated to reflect changes in legislation, so please review it now and then. You can always find the most recent version on our Site.
            </div>
          </div>

          {/*  table list */}
          <div className="my-16">
            <div className="sub-header">Table of Contents</div>

            <ul className="my-4">
              <li className="my-4 table-of-content-text">
                {" "}
                Acceptance of Terms
              </li>
              <li className="my-4 table-of-content-text">Use of Content</li>
              <li className="my-4 table-of-content-text">User Contributions</li>
              <li className="my-4 table-of-content-text">Third-party Links</li>
              <li className="my-4 table-of-content-text">
                Disclaimer of warranties
              </li>
              <li className="my-4 table-of-content-text">
                Limitation of liability
              </li>
              <li className="my-4 table-of-content-text"> Changes to Terms</li>
              <li className="my-4 table-of-content-text">Governing Law</li>
            </ul>
          </div>
          {/*  point -1 */}
          <div className="my-16">
            <div className="sub-header">1. Acceptance of Terms</div>
            <div className="regular-text my-3">
              By accessing or using ESGBites, you acknowledge that you have
              read, understood, and agree to be bound by these terms and
              conditions, as well as our Privacy Policy. Your use of the Website
              constitutes your acceptance of these terms in full. If you do not
              agree with any of these terms, please do not use the Website.
            </div>
          </div>
          {/* 2 point  */}
          <div className="my-16">
            <div className="sub-header">2. Use of Content</div>
            <div className="regular-text my-3">
              <div className="my-4">
                <div className="sub-header-2 mb-2">2.1 Content Disclaimer</div>
                The content provided on ESGBites is for informational purposes
                only. It is not intended as professional advice and should not
                be relied upon as such. While we strive to provide accurate and
                up-to-date information, we do not endorse or guarantee the
                accuracy, completeness, or reliability of any information
                presented on the Website. The content on ESGBites should not be
                seen as a substitute for seeking professional advice in specific
                situations.
              </div>
              <div className="my-4">
                <div className="sub-header-2 mb-2">2.2 Copyright</div>
                All content published on ESGBites, including articles, images,
                graphics, videos, and multimedia materials, is protected by
                copyright laws. All rights are reserved unless otherwise stated.
                You may not reproduce, distribute, modify, or republish any
                content from the Website without obtaining prior written consent
                from ESGBites or the respective copyright holders. If you wish
                to use any content for non-commercial purposes, you must provide
                proper attribution to ESGBites.
              </div>
            </div>
          </div>
          {/*  3rd point */}
          <div className="my-16">
            <div className="sub-header">3. User Contributions</div>
            <div className="regular-text my-3">
              <div className="my-4">
                <div className="sub-header-2 mb-2">
                  3.1 User Generated Content
                </div>
                The content provided on ESGBites is for informational purposes
                only. It is not intended as professional advice and should not
                be relied upon as such. While we strive to provide accurate and
                up-to-date information, we do not endorse or guarantee the
                accuracy, completeness, or reliability of any information
                presented on the Website. The content on ESGBites should not be
                seen as a substitute for seeking professional advice in specific
                situations.
              </div>
              <div className="my-4">
                <div className="sub-header-2 mb-2">3.2 Responsibility</div>
                All content published on ESGBites, including articles, images,
                graphics, videos, and multimedia materials, is protected by
                copyright laws. All rights are reserved unless otherwise stated.
                You may not reproduce, distribute, modify, or republish any
                content from the Website without obtaining prior written consent
                from ESGBites or the respective copyright holders. If you wish
                to use any content for non-commercial purposes, you must provide
                proper attribution to ESGBites.
              </div>
            </div>
          </div>
          {/*  4th point */}
          <div className="my-16">
            <div className="sub-header">4. Third-party Links</div>
            <div className="regular-text my-3">
              ESGBites may include links to third-party websites, events, or
              resources for informational purposes. These links do not imply
              endorsement or responsibility for the content, products, or
              services offered by third parties. Users access third-party
              websites at their own risk. We recommend that you review the terms
              and privacy policies of any third-party websites you visit through
              links on ESGBites.
            </div>
          </div>
          {/*  5th point */}
          <div className="my-16">
            <div className="sub-header">5. Disclaimer of Warranties</div>
            <div className="regular-text my-3">
              ESGBites provides the Website on an "as is" and "as available"
              basis. While we strive to maintain the functionality and
              availability of the Website, we do not provide any warranty or
              guarantee regarding the availability, accuracy, timeliness, or
              performance of the Website. Your use of the Website is at your own
              risk. We disclaim all warranties, whether express or implied,
              including but not limited to the implied warranties of
              merchantability, fitness for a particular purpose, and
              non-infringement.
            </div>
          </div>
          {/*  6th point */}
          <div className="my-16">
            <div className="sub-header">6. Limitation of Liability</div>
            <div className="regular-text my-3">
              To the fullest extent permitted by applicable law, ESGBites and
              its affiliates, directors, officers, employees, and agents shall
              not be liable for any direct, indirect, incidental, consequential,
              or punitive damages arising from your use of the Website or any
              content therein. This includes, but is not limited to, damages for
              loss of profits, data, goodwill, or other intangible losses. This
              limitation of liability applies even if ESGBites has been advised
              of the possibility of such damages.
            </div>
          </div>
          {/*  7th point */}
          <div className="my-16">
            <div className="sub-header">7. Changes to Terms</div>
            <div className="regular-text my-3">
              ESGBites reserves the right to modify these terms and conditions
              at any time without prior notice. It is your responsibility to
              review these terms periodically to stay informed of any updates.
              Continued use of the Website after changes have been made implies
              your acceptance of the modified terms. If you do not agree to the
              modified terms, you should discontinue using the Website.
            </div>
          </div>
          {/*  8th point */}
          <div className="my-16">
            <div className="sub-header">8. Governing Law</div>
            <div className="regular-text my-3">
              These terms and conditions are governed by and construed in
              accordance with the laws of California. Any disputes arising out
              of or related to these terms shall be subject to the exclusive
              jurisdiction of the courts of California. Any claims arising from
              the use of the Website must be brought within 2 months after the
              cause of action arises or be forever barred.
            </div>
          </div>
        </div>
      </div>

      {/*  same for every page  */}
      <Footer className="" />
      <header className="header z-50">
        <LogoHeader className="design-component-instance-node" />
        <div className="frame-33">
          <div className="menu-2">
            <Navbar />
          </div>
        </div>
      </header>
    </div>
  );
};
