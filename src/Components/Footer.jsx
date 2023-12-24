import React from "react";
import "../styles/footer.css";
import { Link, useNavigate } from "react-router-dom";

//  importing images
import logo from "../assets/suvarna_logo_footer.png";

export const Footer = () => {
  let navigate = useNavigate();

  const usefulLinks = [
    {
      id: 1,
      name: "Privacy policy",
      route: "/privacypolicy",
    },
    {
      id: 2,
      name: "Terms of service",
      route: "/termsofuse",
    },
    {
      id: 3,
      name: "Support",
      route: "/support",
    },
    {
      id: 4,
      name: "careers",
      route: "/careers",
    },
    {
      id: 5,
      name: "Contact Us",
      route: "/contactus",
    },
  ];

  const contactInfo = [
    {
      id: 1,
      name: "address",
      content:
        "6-3-191/C/1, Tower B, 4th Floor, Fortune 9, Raj Bhavan Road, Somajiguda, Hyderabad, Telangana, India-500082.",
    },
    {
      id: 2,
      name: "phoneNumber",
      content: "+91 8125772299",
    },
    {
      id: 3,
      name: "email",
      content: "jagdeesh@suvarna.co.in",
    },
  ];

  return (
    <footer className="w-full h-[536px] flex flex-col justify-center items-center bg-[#3A3D40]">
      <div className="lg:10/12 md:w-11/12 w-full h-full flex flex-col justify-start items-start px-3">
        {/*  logo and search Box */}
        <div className="w-full my-5 flex md:flex-row flex-col md:justify-start justify-start md:items-center items-startpy-3">
          <div className="md:me-[117.12px] md:mb-0 mb-[20px] flex lg:justify-center items-center">
            <Link to="/">
              <img src={logo} alt="suvarna_logo" className="min-h-[]" />
            </Link>
          </div>

          <form
            action=""
            className=" flex justify-start items-center h-[50px] flex-1 "
          >
            <div className="h-full">
              <input
                type="text"
                className="lg:w-[40vw] md:w-[50vw] w-[70vw] h-full ps-[24px] py-[12px] bg-transparent border border-white text-[#C2C2C2] rounded-[6px]"
                placeholder="Search products, blogs and more..."
                required
              />
            </div>
            <input
              className="bg-white w-[127px] h-[48px] rounded-[6px] text-[#2B6997] font-medium text-[16px] ms-[16px]"
              type="submit"
              value="Search"
            />
          </form>
        </div>

        {/* footer navigations */}
        <div className="w-full h-1/2 flex justify-between items-center ">
          {/*  info */}
          <div className="md:w-1/4 w-2/5 h-full flex flex-col justify-start items-start  ">
            <div className="text-[18px] font-medium text-white mb-[16px]">Contact Us</div>
            <div className="">
              {contactInfo?.map((d, index) => {
                return (
                  <div key={index} className="flex justify-start items-start my-[6px] ">
                    <div
                      
                      className="min-w-[20px] h-full flex justify-start items-start me-[12px] pt-1"
                    >
                      {/*  svg- contacts-icon */}
                      {d.name === "address" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_3371_3348)">
                            <path
                              d="M8 1.3335C11.3137 1.3335 14 4.01979 14 7.3335C14 9.3827 12.8827 11.0596 11.7056 12.2632C11.0598 12.9234 10.3731 13.465 9.7878 13.8744L9.50426 14.0679C9.45863 14.0983 9.41387 14.1278 9.37006 14.1563L9.11927 14.3161L8.89525 14.4529L8.61807 14.6142C8.23193 14.8322 7.76807 14.8322 7.38193 14.6142L7.10475 14.4529L6.75844 14.2391C6.71661 14.2125 6.67375 14.1849 6.62994 14.1563L6.35633 13.9739C5.74163 13.5545 4.99404 12.9784 4.29441 12.2632C3.11727 11.0596 2 9.3827 2 7.3335C2 4.01979 4.68629 1.3335 8 1.3335ZM8 5.3335C6.8954 5.3335 6 6.22893 6 7.3335C6 8.4381 6.8954 9.3335 8 9.3335C9.1046 9.3335 10 8.4381 10 7.3335C10 6.22893 9.1046 5.3335 8 5.3335Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3371_3348">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      )}

                      {/*  svg-phone-icon */}
                      {d.name === "phoneNumber" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_3371_3356)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M11.0349 14.755C10.0743 14.7197 7.35381 14.3441 4.5049 11.4951C1.65598 8.64619 1.28037 5.92575 1.24503 4.96511C1.19116 3.50147 2.31236 2.07935 3.6081 1.52403C3.91214 1.39373 4.2804 1.41757 4.57152 1.62993C5.63738 2.40741 6.37381 3.5829 7.00601 4.50777C7.29161 4.92557 7.22334 5.496 6.83541 5.83181L5.53465 6.79786C5.40572 6.89359 5.36285 7.06759 5.44018 7.20833C5.73448 7.74406 6.25879 8.54126 6.85874 9.14126C7.45941 9.74186 8.29428 10.3 8.86681 10.6275C9.01528 10.7124 9.20201 10.6632 9.29588 10.5202L10.1421 9.23126C10.4665 8.79939 11.0725 8.70506 11.513 9.00993C12.4513 9.65933 13.5459 10.3825 14.3473 11.4089C14.575 11.7005 14.6089 12.0818 14.4731 12.3987C13.9152 13.7005 12.5035 14.8091 11.0349 14.755Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3371_3356">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      )}

                      {/*  svg-phone-icon */}
                      {d.name === "email" && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_3371_3364)">
                            <path
                              d="M1.37865 3.65451L7.29583 9.5717C7.66195 9.93783 8.24136 9.96071 8.63409 9.64035L8.71003 9.5717L14.6228 3.65891C14.642 3.73146 14.6552 3.80643 14.6618 3.88326L14.6668 3.99984V11.9998C14.6668 12.7028 14.1229 13.2786 13.433 13.3295L13.3335 13.3332H2.66683C1.96392 13.3332 1.38805 12.7893 1.33715 12.0993L1.3335 11.9998V3.99984C1.3335 3.92022 1.34047 3.84223 1.35385 3.76645L1.37865 3.65451ZM13.3335 2.6665C13.4142 2.6665 13.4932 2.67367 13.57 2.68741L13.6833 2.71286L8.00296 8.39317L2.32144 2.71168C2.39488 2.69203 2.47081 2.6785 2.54867 2.67167L2.66683 2.6665H13.3335Z"
                              fill="#FBFBFB"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_3371_3364">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                    </div>

                    <div className="text-white text-[14px] h-full ">
                      {d.content}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* navigation */}
          <div className="w-1/4 h-full flex flex-col justify-start items-start ">
            <div className="text-[18px] font-medium text-white mb-[16px]">
              Useful Links
            </div>
            <div className="flex flex-col justify-start items-start">
              {usefulLinks?.map((d, index) => {
                return (
                  <Link
                    key={index}
                    to={d.route}
                    className="my-[6px] text-left text-[16px] text-white font-normal"
                  >
                    {d.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/*  social Media */}
          <div className="w-1/4 h-full flex flex-col justify-start items-start ">
            <div className="text-[18px] font-medium text-white mb-[16px]">
              Stay up-to-date
            </div>
            <div>
              <div className="w-full flex justify-start items-start">
                {/*  facebookicon */}
                <i id="icon" className="bx bxl-facebook-circle md:me-[20px]"></i>

                {/*  linkedin-icon */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  className="md:me-[20px] min-w-[28px] min-h-[28px]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2934_3237)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21 3.5C22.9331 3.5 24.5 5.06701 24.5 7V21C24.5 22.9331 22.9331 24.5 21 24.5H7C5.06701 24.5 3.5 22.9331 3.5 21V7C3.5 5.06701 5.06701 3.5 7 3.5H21ZM9.33333 11.6667C8.68901 11.6667 8.16667 12.189 8.16667 12.8333V18.6667C8.16667 19.311 8.68901 19.8333 9.33333 19.8333C9.97766 19.8333 10.5 19.311 10.5 18.6667V12.8333C10.5 12.189 9.97766 11.6667 9.33333 11.6667ZM12.8333 10.5C12.189 10.5 11.6667 11.0223 11.6667 11.6667V18.6667C11.6667 19.311 12.189 19.8333 12.8333 19.8333C13.4777 19.8333 14 19.311 14 18.6667V14.3964C14.3557 13.9947 14.9575 13.5241 15.6255 13.2384C16.0138 13.0723 16.5979 13.0059 17.0043 13.1336C17.182 13.1895 17.2833 13.268 17.346 13.3526C17.4068 13.435 17.5 13.6158 17.5 14V18.6667C17.5 19.3109 18.0223 19.8333 18.6667 19.8333C19.311 19.8333 19.8333 19.3109 19.8333 18.6667V14C19.8333 13.2174 19.6348 12.5232 19.2218 11.9649C18.8104 11.4089 18.2555 11.0811 17.704 10.9077C16.6521 10.5769 15.4862 10.7601 14.7078 11.0931C14.4608 11.1987 14.2174 11.3217 13.9815 11.4582C13.8831 10.9133 13.4065 10.5 12.8333 10.5ZM9.33333 8.16667C8.68901 8.16667 8.16667 8.68901 8.16667 9.33333C8.16667 9.97766 8.68901 10.5 9.33333 10.5C9.97766 10.5 10.5 9.97766 10.5 9.33333C10.5 8.68901 9.97766 8.16667 9.33333 8.16667Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2934_3237">
                      <rect width="28" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                {/* instagram-icon */}
                <i id="icon" className="bx bxl-instagram-alt md:me-[20px]"></i>

                {/*  x-icon */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  className="min-w-[28px] min-h-[28px]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2934_3249)">
                    <path
                      d="M23.0447 5.43494C23.469 4.95003 23.4198 4.21298 22.9349 3.78868C22.45 3.36438 21.7129 3.41352 21.2886 3.89843L15.3261 10.7127L10.2667 3.96668C10.0463 3.67291 9.70055 3.5 9.33333 3.5H4.66667C4.22477 3.5 3.8208 3.74969 3.62318 4.14494C3.42555 4.54018 3.4682 5.01317 3.73334 5.36668L11.2428 15.3794L4.95532 22.5651C4.53103 23.05 4.58017 23.7871 5.06508 24.2114C5.54998 24.6357 6.28704 24.5866 6.71134 24.1016L12.6738 17.2873L17.7333 24.0333C17.9537 24.3271 18.2994 24.5001 18.6667 24.5001H23.3333C23.7753 24.5001 24.1792 24.2503 24.3768 23.8551C24.5744 23.4598 24.5318 22.9868 24.2667 22.6333L16.7572 12.6207L23.0447 5.43494Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2934_3249">
                      <rect width="28" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* footer copyrights */}
       <div className="w-full h-[50px] border-top border-[#929292] py-[20px] text-center flex justify-center items-center text-[#FFFFFF] font-normal text-[16px]">
          © 2023 Suvarna Technosoft Inc. All rights reserved.
        </div>
    </footer>
  );
};
