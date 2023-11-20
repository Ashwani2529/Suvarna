import React from "react";

import { LogoHeader } from "../Components/AboutUs/LogoHeader/LogoHeader";
// import "./style.css";
import "../styles/ContactUs.css";
import Navbar from "../Components/Homepage/Navbar/Navbar";
import { Footer } from "../Components/Homepage/Footer/Footer";

//  importing components 
import { ContactUsSection } from "../Components/ContactUsSection";

import ContactUsVector from "../assets/ContactUs_Vector.png";

//  importing icons , map and location illustrations
import map from "../assets/Screenshot 2023-10-16 at 6.34 1.png";
import mumbai from "../assets/Mumbai.png";
import kolkata from "../assets/kolkata.png";
import delhi from "../assets/Delhi.png";
import bengaluru from "../assets/Bengaluru.png";


export const ContactUs = () => {


    const offices = [{
        id : 1,
        place : "Mumbai",
        address : "456, Ocean Heights,Nariman Point,Mumbai - 400021",
        icon : mumbai
    },{
        id : 2,
        place : "Delhi",
        address : "14A, Westwood Avenue,Connaught Place,New Delhi - 110001",
        icon : delhi
    },{
        id : 3,
        place : "Kolkata",
        address : "789, Greenfield Tower, Park Street,Kolkata - 700016",
        icon : kolkata
    },{
        id : 3,
        place : "Bengaluru",
        address : "101, Skyline Residency, MG Road,Bengaluru - 560001",
        icon : bengaluru
    }
]

  return (
    <div className="ContactUs h-auto flex-col justify-start items-center ">
      {/*  vectors + heading */}

      <div className="w-screen min-h-[274px] flex justify-center items-center relative mt-[100px]">
        <img
          src={ContactUsVector}
          className="w-screen z-10 absolute top-0 left-0"
          alt="contact-us-vector"
        />

        <div className="lg:w-10/12 md:w-11/12 z-20 relative w-screen h-full flex flex-col justify-center items-start bg-transparent">
          <div className="heading">Contact us</div>
          <div className="sub-heading">
            Get in touch, we’re here to help you.
          </div>
        </div>
      </div>

      <div className="h-[2050px] w-screen flex flex-col justify-start items-center  mt-40">
        <div className="lg:w-10/12 md:w-11/12 w-full flex flex-col justify-center items-center">
          {/*  details */}
          <div className="w-full h-[500px] flex items-center justify-center ">
            <div className="w-1/2 h-4/5 flex flex-col justify-start items-start">
              <div className="sub-header">Contact Details</div>
              {/*  first row */}
              <div className=" flex my-2.5">
                {/*  location icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="24"
                  className="lg:w-6 lg:h-6 w-10 h-10"
                  viewBox="0 0 18 24"
                  fill="none"
                >
                  <path
                    d="M9 0C4.02975 0 0 4.02975 0 9C0 10.9571 0.641625 12.753 1.70813 14.2238C1.72725 14.259 1.73025 14.2984 1.752 14.3321L7.752 23.3321C8.03025 23.7495 8.499 24 9 24C9.501 24 9.96975 23.7495 10.248 23.3321L16.248 14.3321C16.2701 14.2984 16.2727 14.259 16.2919 14.2238C17.3584 12.753 18 10.9571 18 9C18 4.02975 13.9703 0 9 0ZM9 12C7.34325 12 6 10.6567 6 9C6 7.34325 7.34325 6 9 6C10.6567 6 12 7.34325 12 9C12 10.6567 10.6567 12 9 12Z"
                    fill="#6D747A"
                  />
                </svg>
                <div className="ms-2 regular-text ">
                  6-3-191/C/1, 4th Floor, Fortune 9,Raj Bhavan Road, Somajiguda,
                  Hyderabad - 500082.
                </div>
              </div>
              {/*  second row */}
              <div className=" flex my-2.5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.6258 19.6195 21.5163 19.8128 21.388 20C21.3433 20.0651 21.2964 20.1295 21.2471 20.1931C21.1824 20.2767 21.1134 20.359 21.04 20.44C20.8504 20.6489 20.6534 20.8354 20.4476 21C20.1217 21.2608 19.774 21.4667 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                    fill="#6D747A"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.98958 2.39989C3.74153 1.66198 4.62059 1.25 5.59 1.25C5.97318 1.25 6.36311 1.33138 6.71941 1.5014C7.08755 1.67229 7.42309 1.93393 7.68396 2.30922L10.0003 5.574C10.2053 5.85906 10.3657 6.13796 10.4818 6.42035C10.5997 6.6971 10.68 7.00644 10.68 7.32C10.68 7.70687 10.5673 8.07663 10.367 8.40939C10.1968 8.70784 9.96427 8.99567 9.69563 9.26502L9.00688 9.98096C9.01385 9.99743 9.02321 10.0197 9.03333 10.0455C9.183 10.3079 9.44802 10.6772 9.84989 11.1524C10.29 11.6609 10.7568 12.1761 11.2604 12.6897C11.7923 13.2116 12.2961 13.6858 12.8048 14.1178C13.2858 14.5247 13.6606 14.7841 13.933 14.9322C13.955 14.9417 13.9753 14.9509 13.9918 14.9584L14.6815 14.2778C14.955 14.0046 15.2482 13.7638 15.5612 13.5966C15.8882 13.4019 16.2447 13.29 16.64 13.29C16.9399 13.29 17.2362 13.354 17.534 13.4758C17.8169 13.5916 18.0939 13.7509 18.3717 13.9398L18.378 13.9441L21.6909 16.2961C22.0455 16.5425 22.3234 16.8545 22.4965 17.2479L22.5016 17.2596L22.5064 17.2715C22.6338 17.59 22.72 17.9351 22.72 18.33C22.72 18.8025 22.6147 19.2817 22.3982 19.7403C22.2879 19.9738 22.1587 20.2021 22.0066 20.424C21.9538 20.5011 21.8983 20.5773 21.84 20.6525C21.7634 20.7514 21.682 20.8484 21.5957 20.9436C21.3815 21.1797 21.1554 21.3943 20.9162 21.5856C20.537 21.8891 20.1283 22.1318 19.6865 22.3131C18.9922 22.6021 18.2445 22.75 17.45 22.75C16.3114 22.75 15.1213 22.4821 13.896 21.96C12.6885 21.4455 11.4895 20.7561 10.3086 19.8963L10.3076 19.8956C9.12671 19.0331 8.00824 18.0786 6.94224 17.0229L6.93709 17.0178C5.88147 15.9519 4.92677 14.8332 4.07368 13.6614L4.07114 13.658C3.22474 12.4813 2.5351 11.293 2.0297 10.1032L2.02877 10.101C1.51719 8.88605 1.25 7.69701 1.25 6.54C1.25 5.77184 1.3856 5.02732 1.66286 4.33342C1.94487 3.61753 2.38783 2.96904 2.98958 2.39989Z"
                    fill="#6D747A"
                  />
                </svg>

                <div className="ms-2 regular-text">8125772299</div>
              </div>
              {/*  third Row */}
              <div className=" flex my-2.5">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2621_16683)">
                    <path d="M24 0H0V24H24V0Z" fill="white" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.96802 4H18.032C18.4706 3.99999 18.8491 3.99998 19.1624 4.02135C19.4922 4.04386 19.8221 4.09336 20.1481 4.22836C20.8831 4.53284 21.4672 5.11687 21.7716 5.85195C21.9066 6.17788 21.9561 6.50779 21.9787 6.83762C22 7.15088 22 7.52936 22 7.96801V16.032C22 16.4706 22 16.8491 21.9787 17.1624C21.9561 17.4922 21.9066 17.8221 21.7716 18.1481C21.4672 18.8831 20.8831 19.4672 20.1481 19.7716C19.8221 19.9066 19.4922 19.9561 19.1624 19.9787C18.8491 20 18.4706 20 18.032 20H5.96801C5.52936 20 5.15088 20 4.83762 19.9787C4.50779 19.9561 4.17788 19.9066 3.85195 19.7716C3.11687 19.4672 2.53284 18.8831 2.22836 18.1481C2.09336 17.8221 2.04386 17.4922 2.02135 17.1624C1.99998 16.8491 1.99999 16.4706 2 16.032V7.96802C1.99999 7.52937 1.99998 7.15088 2.02135 6.83762C2.04386 6.50779 2.09336 6.17788 2.22836 5.85195C2.53284 5.11687 3.11687 4.53284 3.85195 4.22836C4.17788 4.09336 4.50779 4.04386 4.83762 4.02135C5.15088 3.99998 5.52937 3.99999 5.96802 4ZM4.31745 6.27777C4.68114 5.86214 5.3129 5.82002 5.72854 6.1837L11.3415 11.095C11.7185 11.4249 12.2815 11.4249 12.6585 11.095L18.2715 6.1837C18.6871 5.82002 19.3189 5.86214 19.6825 6.27777C20.0462 6.69341 20.0041 7.32517 19.5885 7.68885L13.9755 12.6002C12.8444 13.5899 11.1556 13.5899 10.0245 12.6002L4.41153 7.68885C3.99589 7.32517 3.95377 6.69341 4.31745 6.27777Z"
                      fill="#6D747A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2621_16683">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="ms-2 regular-text">jagdeesh@suvarna.co.in</div>
              </div>
            </div>

            <div className="w-1/2 bg-gray-200 flex justify-center items-center rounded-[4px] overflow-hidden ">
              <img src={map} alt="location-map" className="location-map" />
            </div>
          </div>

          {/*  offices */}
          <div className="w-full h-[336px] flex flex-col justify-center items-start my-16">
            <div className="sub-header">
               Our Offices
            </div>

            <div className="w-full flex flex-grow-1 justify-evenly items-center ">
                {offices?.map((d, index)=>{
                    return <div key={index} className="office-card" > 
                      <div>
                        <img src={d.icon} alt={d.place} />
                      </div>
                      <div className="office-card-header">
                        {d.place}
                      </div>
                      <div className="office-card-regular-text">
                        {d.address}
                      </div>
                    </div>
                })}
            </div>
          </div>

           {/*  contact us form */}
           <ContactUsSection className="" checkSquareSvgrepo="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/check-square-svgrepo-com-1-1.svg" />
        </div>
      </div>

      {/*  same for every page  */}
      <Footer className="" />
     
    </div>
  );
};
