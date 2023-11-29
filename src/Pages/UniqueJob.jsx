import React from "react";
// import "./style.css";
import "../styles/UniqueJob.css";
import { Footer } from "../Components/Footer";

import vector1 from "../assets/Vector 1.png";
import vector2 from "../assets/Vector 2.png";
import vector3 from "../assets/Vector 3.png";

export const UniqueJob = () => {
  return (
    <div className="UniqueJob h-auto flex-col justify-start items-center">
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
          <div className="text-[48px] font-bold my-2">Unique Job title</div>

          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center mx-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-2 w-[20px] h-[20px]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.052 1.25H11.948C11.0495 1.24997 10.3003 1.24995 9.70552 1.32991C9.07773 1.41432 8.51093 1.59999 8.05546 2.05546C7.59999 2.51093 7.41432 3.07773 7.32991 3.70552C7.27259 4.13189 7.25637 5.15147 7.25179 6.02566C5.22954 6.09171 4.01536 6.32778 3.17157 7.17157C2 8.34315 2 10.2288 2 14C2 17.7712 2 19.6569 3.17157 20.8284C4.34314 22 6.22876 22 9.99998 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14C22 10.2288 22 8.34315 20.8284 7.17157C19.9846 6.32778 18.7705 6.09171 16.7482 6.02566C16.7436 5.15147 16.7274 4.13189 16.6701 3.70552C16.5857 3.07773 16.4 2.51093 15.9445 2.05546C15.4891 1.59999 14.9223 1.41432 14.2945 1.32991C13.6997 1.24995 12.9505 1.24997 12.052 1.25ZM15.2479 6.00188C15.2434 5.15523 15.229 4.24407 15.1835 3.9054C15.1214 3.44393 15.0142 3.24644 14.8839 3.11612C14.7536 2.9858 14.5561 2.87858 14.0946 2.81654C13.6116 2.7516 12.964 2.75 12 2.75C11.036 2.75 10.3884 2.7516 9.90539 2.81654C9.44393 2.87858 9.24644 2.9858 9.11612 3.11612C8.9858 3.24644 8.87858 3.44393 8.81654 3.9054C8.771 4.24407 8.75661 5.15523 8.75208 6.00188C9.1435 6 9.55885 6 10 6H14C14.4412 6 14.8565 6 15.2479 6.00188Z"
                  fill="white"
                />
              </svg>
              Timing
            </div>
            <div className="flex justify-center items-center mx-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-2 w-[20px] h-[20px]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 0C7.02975 0 3 4.02975 3 9C3 10.9571 3.64163 12.753 4.70813 14.2238C4.72725 14.259 4.73025 14.2984 4.752 14.3321L10.752 23.3321C11.0303 23.7495 11.499 24 12 24C12.501 24 12.9697 23.7495 13.248 23.3321L19.248 14.3321C19.2701 14.2984 19.2727 14.259 19.2919 14.2238C20.3584 12.753 21 10.9571 21 9C21 4.02975 16.9703 0 12 0ZM12 12C10.3432 12 9 10.6567 9 9C9 7.34325 10.3432 6 12 6C13.6567 6 15 7.34325 15 9C15 10.6567 13.6567 12 12 12Z"
                  fill="white"
                />
              </svg>
              Location
            </div>
            <div className="flex justify-center items-center mx-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-2 w-[20px] h-[20px]"
                width="18"
                height="24"
                viewBox="0 0 18 24"
                fill="none"
              >
                <path
                  d="M14.0261 1.98544C13.9814 2.28187 13.7906 2.59852 13.4414 2.88277C12.2964 3.8085 11.9147 4.57181 11.8173 4.81139C11.797 4.86417 11.7889 4.89258 11.7889 4.89258H6.21014C6.21014 4.89258 6.20203 4.86417 6.18173 4.81139C6.08428 4.57181 5.70262 3.8085 4.55766 2.88277C4.54547 2.87466 4.53736 2.8665 4.52925 2.85839C3.23808 1.77834 4.26534 0.320766 6.21019 0.864797C6.30356 0.889172 6.38883 0.909469 6.46598 0.921656C7.50942 1.07597 7.23741 0 8.99953 0C10.8957 0 10.4369 1.24242 11.7889 0.864844C12.1625 0.759281 12.4995 0.730875 12.7959 0.75525C13.6444 0.832359 14.1316 1.37236 14.0261 1.98544Z"
                  fill="white"
                />
                <path
                  d="M17.7697 15.229C17.7697 20.0728 13.8434 23.999 8.99962 23.999C7.74098 23.999 6.54318 23.7351 5.46313 23.2519C3.46551 22.375 1.8577 20.7671 0.976586 18.7695C0.497477 17.6854 0.229492 16.4876 0.229492 15.229C0.229492 10.6612 4.64296 7.17348 5.99905 5.93514C6.08024 5.86609 6.15337 5.79709 6.21018 5.74023H11.7889C11.8458 5.79709 11.9189 5.86609 12 5.93514C13.3562 7.17348 17.7697 10.6612 17.7697 15.229Z"
                  fill="white"
                />
              </svg>
              Salary
            </div>
          </div>
        </div>
      </div>

      <div className="h-[2950px] w-screen flex flex-col justify-center items-center">
        <div className="lg:w-10/12 md:w-11/12 w-full">
          <div className="sub-header">UniqueJob</div>
        </div>

        {/*  table list */}
        <div className="my-16">
          <div className="sub-header">Table of Contents</div>

          <ul className="my-4">
            <li className="my-4 table-of-content-text"> Acceptance of Terms</li>
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
            By accessing or using ESGBites, you acknowledge that you have read,
            understood, and agree to be bound by these terms and conditions, as
            well as our Privacy Policy. Your use of the Website constitutes your
            acceptance of these terms in full. If you do not agree with any of
            these terms, please do not use the Website.
          </div>
        </div>
        {/* 2 point  */}
        <div className="my-16">
          <div className="sub-header">2. Use of Content</div>
          <div className="regular-text my-3">
            <div className="my-4">
              <div className="sub-header-2 mb-2">2.1 Content Disclaimer</div>
              The content provided on ESGBites is for informational purposes
              only. It is not intended as professional advice and should not be
              relied upon as such. While we strive to provide accurate and
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
              from ESGBites or the respective copyright holders. If you wish to
              use any content for non-commercial purposes, you must provide
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
              only. It is not intended as professional advice and should not be
              relied upon as such. While we strive to provide accurate and
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
              from ESGBites or the respective copyright holders. If you wish to
              use any content for non-commercial purposes, you must provide
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
            endorsement or responsibility for the content, products, or services
            offered by third parties. Users access third-party websites at their
            own risk. We recommend that you review the terms and privacy
            policies of any third-party websites you visit through links on
            ESGBites.
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
            To the fullest extent permitted by applicable law, ESGBites and its
            affiliates, directors, officers, employees, and agents shall not be
            liable for any direct, indirect, incidental, consequential, or
            punitive damages arising from your use of the Website or any content
            therein. This includes, but is not limited to, damages for loss of
            profits, data, goodwill, or other intangible losses. This limitation
            of liability applies even if ESGBites has been advised of the
            possibility of such damages.
          </div>
        </div>
        {/*  7th point */}
        <div className="my-16">
          <div className="sub-header">7. Changes to Terms</div>
          <div className="regular-text my-3">
            ESGBites reserves the right to modify these terms and conditions at
            any time without prior notice. It is your responsibility to review
            these terms periodically to stay informed of any updates. Continued
            use of the Website after changes have been made implies your
            acceptance of the modified terms. If you do not agree to the
            modified terms, you should discontinue using the Website.
          </div>
        </div>
        {/*  8th point */}
        <div className="my-16">
          <div className="sub-header">8. Governing Law</div>
          <div className="regular-text my-3">
            These terms and conditions are governed by and construed in
            accordance with the laws of California. Any disputes arising out of
            or related to these terms shall be subject to the exclusive
            jurisdiction of the courts of California. Any claims arising from
            the use of the Website must be brought within 2 months after the
            cause of action arises or be forever barred.
          </div>
        </div>
      </div>
    </div>
  );
};
