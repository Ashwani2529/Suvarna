import React from "react";
import { Footer } from "../Components/Homepage/Footer/Footer";

import ReCaptchaV2 from "react-google-recaptcha";


import partner_vector from "../assets/partner_vector.png";
import partner_illustration from "../assets/partner_illustration.png";
import tick_icon from "../assets/Frame 482931.png";
import business_deal from "../assets/Business deal-amico (1) 2.png"

import SmallBlueWave from "../Components/SmallBlueWave";

const Partners = () => {
  return (
    <div className="w-screen h-[3800px] flex flex-col justify-start items-start">
      {/*  hero section */}
      <div className="h-screen w-screen flex justify-center items-center relative">
        <div className="lg:w-10/12 md:w-11/12 w-11/12 relative flex justify-center items-center z-20">
          <div className="w-1/2 flex flex-col justify-center items-start">
            <div className="text-[48px] text-white font-bold my-[8px]">
              Partner with us
            </div>

            <div className="text-white text-[24px] font-normal my-[8px]">
              Join us to be a part of healthcare digital transformation and grow
              your business with us.
            </div>

            <div className="w-full flex flex-col justify-center items-start my-[18px]">
              <li className="w-full flex justify-start items-center my-[12px]">
                <img
                  src={tick_icon}
                  alt="tick_icon"
                  className="me-2 w-[20px] h-[20px] "
                />
                <span className="text-[20px] font-normal text-white">
                  Best in class products and solutions
                </span>
              </li>
              <li className="w-full flex justify-start items-center my-[12px]">
                <img
                  src={tick_icon}
                  alt="tick_icon"
                  className="me-2 w-[20px] h-[20px] "
                />
                <span className="text-[20px] font-normal text-white">
                  Structured training programs
                </span>
              </li>
              <li className="w-full flex justify-start items-center my-[12px]">
                <img
                  src={tick_icon}
                  alt="tick_icon"
                  className="me-2 w-[20px] h-[20px] "
                />
                <span className="text-[20px] font-normal text-white">
                  Pre-sales and sales support
                </span>
              </li>
              <li className="w-full flex justify-start items-center my-[12px]">
                <img
                  src={tick_icon}
                  alt="tick_icon"
                  className="me-2 w-[20px] h-[20px] "
                />
                <span className="text-[20px] font-normal text-white">
                  High financial rewards
                </span>
              </li>
            </div>
          </div>
          <div className="w-1/2 h-full flex justify-center items-center">
            <img
              src={partner_illustration}
              alt="partner_illustration"
              className=""
            />
          </div>
        </div>
        <div className="w-full h-full absolute flex justify-center items-center top-0 left-0">
          <img
            src={partner_vector}
            alt="header_vector"
            className="min-w-full mb-[350px] "
          />
        </div>
      </div>

      <div className="h-[600px] w-screen flex flex-col justify-center items-center mb-[50px]">
        <div className="w-full h-1/2 flex flex-col justify-center items-center">
          <div className="w-full text-center text-[36px] text-[#3c4043] font-bold">
            Join our <span className="text-[#146DFA]">2,500+</span> strong
            Partner Program
          </div>

          <div className="my-4 text-center w-full">
            In the 2 decades of our journey, we have enabled 1000+ healthcare
            service providers in their digital transformation. However our goal
            is to double this number in the next few years.
          </div>

          <div className="my-4 text-center w-full">
            We know we alone can't reach to all our potential customers, hence
            we have designed very attractive partner program and we believe
            together we can do a lot of good to address our customer need.
          </div>
        </div>

        <div className="w-full h-1/2 flex justify-evenly items-center">
          {/*  card 1 */}
          <div className=" w-[264px] h-[221px] flex flex-col justify-center items-start">
            <div className="h-1/4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
              >
                <path
                  d="M28 7.23594C34.1833 8.98594 40.95 11.0859 44.3333 12.2526V30.5693C44.3333 34.5359 40.0167 41.5359 28 48.5359C15.9833 41.4193 11.6667 34.5359 11.6667 30.5693V12.2526C15.05 10.9693 21.8167 8.98594 28 7.23594ZM28 2.33594C28 2.33594 7 8.28594 7 9.33594V30.5693C7 41.3026 22.5167 50.7526 26.8333 53.3193C27.1787 53.55 27.5847 53.6732 28 53.6732C28.4153 53.6732 28.8213 53.55 29.1667 53.3193C33.6 50.8693 49 41.3026 49 30.5693V9.33594C49 8.28594 28 2.33594 28 2.33594Z"
                  fill="#689DFF"
                />
                <path
                  d="M22.8666 34.301L17.0332 28.5844C16.629 28.1712 16.3839 27.6284 16.3412 27.052C16.2985 26.4756 16.461 25.9026 16.7999 25.4344C16.9887 25.1532 17.2395 24.919 17.5329 24.7499C17.8264 24.5807 18.1547 24.481 18.4926 24.4585C18.8306 24.436 19.1692 24.4912 19.4825 24.6199C19.7958 24.7486 20.0754 24.9474 20.2999 25.201L24.4999 29.401L35.6999 18.201C36.1492 17.864 36.705 17.7004 37.2653 17.7402C37.8256 17.7801 38.3526 18.0206 38.7498 18.4178C39.147 18.815 39.3875 19.342 39.4274 19.9023C39.4672 20.4626 39.3036 21.0184 38.9666 21.4677L26.1332 34.301C25.9256 34.5274 25.6732 34.7081 25.392 34.8317C25.1108 34.9553 24.807 35.0191 24.4999 35.0191C24.1927 35.0191 23.889 34.9553 23.6078 34.8317C23.3266 34.7081 23.0742 34.5274 22.8666 34.301Z"
                  fill="#689DFF"
                />
              </svg>
            </div>
            <div className="w-full h-3/4 flex flex-col justify-start items-center">
              <div className="text-[24px] font-medium my-2 text-left w-full flex justify-start items-center">
                Proven solutions
              </div>
              <div className="text-[16px] font-normal text-[#6D747A] text-left">
                With our suite of proven, best-in-class products and solutions,
                we ensure that you’re in safe hands.
              </div>
            </div>
          </div>

          {/*  card 2 */}
          <div className=" w-[264px] h-[221px] flex flex-col justify-center items-start">
            <div className="h-1/4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
              >
                <path
                  d="M44.31 16.3801C44.4369 16.709 44.6602 16.9918 44.9506 17.1917C45.241 17.3915 45.585 17.499 45.9375 17.5001C46.1533 17.4984 46.3668 17.4569 46.5675 17.3776C46.9983 17.2094 47.3451 16.8776 47.532 16.4546C47.7189 16.0316 47.7308 15.5518 47.565 15.1201C46.7554 13.0465 45.6212 11.1149 44.205 9.39757C43.9009 9.07234 43.4842 8.87528 43.0399 8.84652C42.5955 8.81775 42.1569 8.95944 41.8134 9.24274C41.4699 9.52604 41.2473 9.92963 41.1909 10.3713C41.1345 10.813 41.2486 11.2596 41.51 11.6201C42.6894 13.0485 43.6345 14.6552 44.31 16.3801ZM38.5 8.75007C38.9641 8.75007 39.4093 8.56569 39.7374 8.2375C40.0656 7.90931 40.25 7.46419 40.25 7.00007C40.2423 6.76476 40.1871 6.53344 40.0879 6.31995C39.9887 6.10645 39.8474 5.91518 39.6725 5.75757C39.5234 5.59576 39.342 5.467 39.14 5.37959C38.9381 5.29218 38.72 5.24805 38.5 5.25007C38.0359 5.25007 37.5907 5.43444 37.2626 5.76263C36.9344 6.09082 36.75 6.53594 36.75 7.00007C36.7568 7.25261 36.8182 7.50069 36.93 7.72725C37.0417 7.95382 37.2012 8.1535 37.3975 8.31257C37.7029 8.58229 38.0928 8.73702 38.5 8.75007ZM15.75 22.7501C15.75 25.1729 16.4684 27.5413 17.8145 29.5558C19.1605 31.5703 21.0737 33.1404 23.3121 34.0676C25.5505 34.9948 28.0136 35.2374 30.3899 34.7647C32.7661 34.292 34.9489 33.1253 36.6621 31.4121C38.3752 29.6989 39.542 27.5162 40.0146 25.1399C40.4873 22.7637 40.2447 20.3006 39.3175 18.0622C38.3904 15.8238 36.8202 13.9106 34.8057 12.5646C32.7912 11.2185 30.4228 10.5001 28 10.5001C24.7511 10.5001 21.6353 11.7907 19.3379 14.088C17.0406 16.3853 15.75 19.5012 15.75 22.7501ZM36.75 22.7501C36.75 24.4807 36.2368 26.1724 35.2754 27.6113C34.3139 29.0502 32.9473 30.1717 31.3485 30.834C29.7496 31.4963 27.9903 31.6696 26.293 31.3319C24.5956 30.9943 23.0365 30.161 21.8128 28.9373C20.5891 27.7135 19.7557 26.1544 19.4181 24.4571C19.0805 22.7598 19.2538 21.0004 19.9161 19.4016C20.5783 17.8027 21.6998 16.4362 23.1388 15.4747C24.5777 14.5132 26.2694 14.0001 28 14.0001C30.3206 14.0001 32.5462 14.9219 34.1872 16.5629C35.8281 18.2038 36.75 20.4294 36.75 22.7501Z"
                  fill="#FF8289"
                />
                <path
                  d="M53.7424 46.0058L44.0299 36.2933C47.2423 32.5117 49.0041 27.7102 48.9999 22.7483C48.9999 22.2842 48.8156 21.8391 48.4874 21.5109C48.1592 21.1827 47.7141 20.9983 47.2499 20.9983C46.7858 20.9983 46.3407 21.1827 46.0125 21.5109C45.6843 21.8391 45.4999 22.2842 45.4999 22.7483C45.4977 25.5938 44.8017 28.3958 43.4721 30.9116C42.1426 33.4274 40.2197 35.581 37.8699 37.1858L36.1199 38.2358C33.6194 39.5539 30.8353 40.2427 28.0087 40.2427C25.182 40.2427 22.398 39.5539 19.8974 38.2358L18.1474 37.1858C14.7386 34.8374 12.2726 31.3565 11.1876 27.3617C10.1026 23.3669 10.4688 19.1168 12.2212 15.3665C13.9736 11.6162 16.9986 8.60852 20.759 6.87778C24.5193 5.14704 28.7714 4.80533 32.7599 5.91334C32.9862 5.99553 33.227 6.03015 33.4673 6.01502C33.7076 5.9999 33.9421 5.93536 34.1563 5.82545C34.3705 5.71553 34.5597 5.56261 34.7121 5.37623C34.8645 5.18986 34.9768 4.97404 35.042 4.74228C35.1072 4.51053 35.1238 4.26781 35.0909 4.02932C35.058 3.79083 34.9763 3.5617 34.8508 3.35624C34.7253 3.15079 34.5588 2.97344 34.3616 2.83529C34.1644 2.69714 33.9409 2.60115 33.7049 2.55334C29.3839 1.34814 24.7906 1.55828 20.5977 3.15297C16.4048 4.74767 12.8327 7.64311 10.4048 11.4152C7.97682 15.1872 6.82055 19.6376 7.10534 24.1145C7.39014 28.5913 9.10104 32.8594 11.9874 36.2933L2.25742 46.0058C2.01062 46.2506 1.84231 46.5633 1.77393 46.9041C1.70556 47.245 1.74023 47.5984 1.87352 47.9194C2.00682 48.2405 2.23269 48.5145 2.52235 48.7067C2.81201 48.8988 3.15233 49.0004 3.49992 48.9983H9.23992L10.5874 53.0583C10.6812 53.3425 10.8462 53.5979 11.0668 53.8001C11.2874 54.0023 11.5562 54.1446 11.8474 54.2133L12.2499 54.2483C12.4802 54.2497 12.7085 54.2055 12.9218 54.1184C13.135 54.0314 13.3289 53.903 13.4924 53.7408L23.8874 43.3458C26.6019 43.8922 29.398 43.8922 32.1124 43.3458L42.5074 53.7408C42.6709 53.903 42.8649 54.0314 43.0781 54.1184C43.2913 54.2055 43.5196 54.2497 43.7499 54.2483H44.1524C44.4437 54.1796 44.7124 54.0373 44.933 53.8351C45.1536 53.6329 45.3187 53.3775 45.4124 53.0933L46.7599 48.9983H52.4999C52.8475 49.0004 53.1878 48.8988 53.4775 48.7067C53.7672 48.5145 53.993 48.2405 54.1263 47.9194C54.2596 47.5984 54.2943 47.245 54.2259 46.9041C54.1575 46.5633 53.9892 46.2506 53.7424 46.0058ZM19.9324 42.3483L12.9324 49.3483L12.0749 46.7933C11.9806 46.44 11.778 46.125 11.4955 45.8928C11.213 45.6605 10.8648 45.5225 10.4999 45.4983H7.71742L14.2624 38.9533L16.2049 40.1083C16.8475 40.5415 17.5135 40.9388 18.1999 41.2983L19.9324 42.3483ZM45.4999 45.4983C45.133 45.4974 44.7752 45.6118 44.4768 45.8253C44.1785 46.0389 43.9548 46.3408 43.8374 46.6883L42.9799 49.2433L35.9799 42.2433L37.7299 41.2108C38.4164 40.8513 39.0824 40.454 39.7249 40.0208L41.6674 38.8658L48.2824 45.4983H45.4999Z"
                  fill="#FF8289"
                />
              </svg>
            </div>
            <div className="w-full h-3/4 flex flex-col justify-start items-center">
              <div className="text-[24px] font-medium my-2 text-left w-full flex justify-start items-center">
                Structured Training
              </div>
              <div className="text-[16px] font-normal text-[#6D747A] text-left">
                We set you up for success through our well-researched,
                comprehensive and structured training programs.
              </div>
            </div>
          </div>

          {/*  vcard 3 */}
          <div className=" w-[264px] h-[221px] flex flex-col justify-center items-start">
            <div className="h-1/4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="47"
                height="48"
                viewBox="0 0 47 48"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M42.1999 19.7507C41.4766 12.3307 37.09 0.664062 23.5333 0.664062C9.97662 0.664062 5.58995 12.3307 4.86662 19.7507C2.32914 20.7138 0.655387 23.15 0.66656 25.8641V29.1307C0.66656 32.739 3.59169 35.6641 7.19995 35.6641C10.8082 35.6641 13.7333 32.739 13.7333 29.1307V25.8641C13.7216 23.2086 12.1093 20.8224 9.64995 19.8207C10.1166 15.5274 12.4033 5.33073 23.5333 5.33073C34.6633 5.33073 36.9266 15.5274 37.3933 19.8207C34.9389 20.8246 33.3348 23.2124 33.3333 25.8641V29.1307C33.3434 31.639 34.7837 33.9217 37.0433 35.0107C36.0633 36.8541 33.5666 39.3507 27.4299 40.0974C26.2033 38.2347 23.83 37.5004 21.7657 38.3448C19.7013 39.1892 18.5231 41.3764 18.9536 43.5648C19.3841 45.7532 21.3029 47.3307 23.5333 47.3307C25.2957 47.321 26.9023 46.3191 27.6866 44.7407C37.6966 43.5974 40.8933 38.4407 41.8966 35.4074C44.611 34.5281 46.4365 31.9838 46.4 29.1307V25.8641C46.4112 23.15 44.7374 20.7138 42.1999 19.7507ZM9.06662 29.1307C9.06662 30.1617 8.23088 30.9974 7.19995 30.9974C6.16902 30.9974 5.33328 30.1617 5.33328 29.1307V25.8641C5.33328 25.1972 5.68907 24.5809 6.26662 24.2475C6.84416 23.914 7.55573 23.914 8.13328 24.2475C8.71083 24.5809 9.06662 25.1972 9.06662 25.8641V29.1307ZM37.9999 25.8641C37.9999 24.8331 38.8357 23.9974 39.8666 23.9974C40.8975 23.9974 41.7333 24.8331 41.7333 25.8641V29.1307C41.7333 30.1617 40.8975 30.9974 39.8666 30.9974C38.8357 30.9974 37.9999 30.1617 37.9999 29.1307V25.8641Z"
                  fill="#FFA14A"
                />
              </svg>
            </div>
            <div className="w-full h-3/4 flex flex-col justify-start items-center">
              <div className="text-[24px] font-medium my-2 text-left w-full flex justify-start items-center">
                Support Services
              </div>
              <div className="text-[16px] font-normal text-[#6D747A] text-left">
                We’re here to help you in your journey, hand-holding wherever
                needed and supporting in your pre-sales and sales process.
              </div>
            </div>
          </div>
          <div className=" w-[264px] h-[221px] flex flex-col justify-center items-start">
            <div className="h-1/4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
              >
                <path
                  d="M28 14V42"
                  stroke="#67C380"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M35 22.1693C35 18.9476 31.8661 16.3359 28 16.3359C24.1339 16.3359 21 18.9476 21 22.1693C21 25.3909 24.1339 28.0026 28 28.0026C31.8661 28.0026 35 30.6143 35 33.8359C35 37.0576 31.8661 39.6693 28 39.6693C24.1339 39.6693 21 37.0576 21 33.8359"
                  stroke="#67C380"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <path
                  d="M16.3332 7.78564C19.7652 5.80033 23.7499 4.66406 27.9998 4.66406C40.8864 4.66406 51.3332 15.1107 51.3332 27.9974C51.3332 40.8839 40.8864 51.3307 27.9998 51.3307C15.1132 51.3307 4.6665 40.8839 4.6665 27.9974C4.6665 23.7475 5.80277 19.7628 7.78808 16.3307"
                  stroke="#67C380"
                  stroke-width="4"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className="w-full h-3/4 flex flex-col justify-start items-center">
              <div className="text-[24px] font-medium my-2 text-left w-full flex justify-start items-center">
                Financial Rewards
              </div>
              <div className="text-[16px] font-normal text-[#6D747A] text-left">
                We assure you the best bang for your buck and significant
                financial rewards with the Partner Program.
              </div>
            </div>
          </div>
        </div>
      </div>

      <SmallBlueWave
        heading="Want to learn more?"
        subheading="If you want to know more about the Suvarna Partner Program, please get in touch with us at
 +91 8125772299 or jagdeesh@suvarna.co.in"
      />

<div className="w-screen flex flex-grow-1 justify-center items-center mt-64" >
      <div className="lg:w-10/12 md:w-11/12 w-full h-full flex justify-center items-center ">
      <div className="w-1/2 h-full md:flex hidden justify-start items-center">
        <img
          src={business_deal}
          alt="business_deal_image"
        />
      </div>
      <form className="md:w-1/2 w-11/12 h-full flex flex-col justify-center items-center px-16">
        <div className="w-full h-full flex flex-col justify-between items-start">
          <div className="w-full h-24 flex flex-col justify-start items-start ">
            <p className="text-[28px] font-medium">Connect with us to know more.</p>
            <p className="text-[16px] font-normal text-[#6D747A]">
            Share your details and we’ll get in touch within 24 hours
            </p>
          </div>
          <div className="w-full flex flex-grow-1 flex-col justify-start items-center ">
            <div className="w-full flex md:flex-row flex-col justify-start items-center">
              <div className="md:w-[45%] w-full flex flex-col justify-start items-start md:me-2">
                <label htmlFor="name" className="py-2 font-medium text-[16px]">Name</label>
                <input
                  type="text"
                  className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                  placeholder="John Doe"
                  name="full_name"
                />
              </div>
              <div className="md:w-[45%] w-full flex flex-col justify-start items-start md:ms-2">
                <label htmlFor="name" className="py-2 font-medium text-[16px]">Organization Name</label>
                <input
                  type="text"
                  className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                  placeholder="e.g. First Cry Hospital"
                  name="organisation_name"
                />
              </div>
            </div>
            <div className="w-full flex md:flex-row flex-col justify-start items-center">
            <div className="md:w-[45%] w-full flex flex-col justify-start items-start md:me-2">
                <label htmlFor="name" className="py-2 font-medium text-[16px]">Email</label>
                <input
                  type="text"
                  className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                  placeholder="contact@company.com"
                  name="email"
                />
              </div>
              <div className="md:w-[45%] w-full flex flex-col justify-start items-start md:ms-2">
                <label htmlFor="name" className="py-2 font-medium text-[16px]">Phone</label>
                <input
                  type="text"
                  className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                  placeholder="e.g. person@gmail.com"
                  name="phone"
                />
              </div>
            </div>

            <div className="w-full flex md:flex-row flex-col justify-start items-center">
            
              <div className="md:w-[45%] w-full flex flex-col justify-start items-start">
                <label htmlFor="name" className="py-2 font-medium text-[16px]">Alternate Phone</label>
                <input
                  type="text"
                  className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                  placeholder="e.g. person@gmail.com"
                  name="phone"
                />
              </div>
            </div>


            <div className="w-full flex md:flex-row flex-col justify-start items-center">
            <div className="md:w-[45%] w-full flex flex-col justify-start items-start md:me-2">
                <label htmlFor="name" className="py-2 font-medium text-[16px]">City</label>
                <input
                  type="text"
                  className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                  placeholder="Ahemdabad"
                  name="city"
                />
              </div>
              <div className="md:w-[45%] w-full flex flex-col justify-start items-start md:ms-2">
                <label htmlFor="name" className="py-2 font-medium text-[16px]">State</label>
                <input
                  type="text"
                  className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                  placeholder="e.g Gujarat"
                  name="state"
                />
              </div>
            </div>

            

            <div className="w-full flex md:flex-row flex-col justify-start items-center">
            <div className="md:w-[45%] w-full flex flex-col justify-start items-start md:me-2">
                <label htmlFor="name" className="py-2 font-medium text-[16px]">Country</label>
                <input
                  type="text"
                  className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                  placeholder="e.g India"
                  name="country"
                />
             </div> 
                <div className="md:w-[45%] w-full flex flex-col justify-start items-start md:me-2">
                <label htmlFor="name" className="py-2 font-medium text-[16px]">Zip Postal Code</label>
                <input
                  type="text"
                  className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                  placeholder="e.g. 846113"
                  name="zip-postal-code"
                />
               </div>
            </div>


            <div className="w-full flex justify-start items-start">
            <div className="w-[90%] flex flex-col justify-start items-start">
                <label htmlFor="name" className="py-2 font-medium text-[16px]">Message</label>
                <textarea
                  className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                  placeholder="Leave us a message..."
                  name="message"
                />
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start my-2">
              <ReCaptchaV2 sitekey="6Lc5m6MoAAAAAI6JEC1uBof42fSeF_2iTWIFAz5F" />
              <div className="frame-30 my-2 flex ">
                <input
                  className="check-square-svgrepo border-slate-950 border-2 cursor-pointer"
                  alt="Check square svgrepo"
                  type="checkbox"
                />
                <p className="you-agree-to-our">
                  <span className="text-[#08090A] font-normal mx-2">
                    You agree to our friendly
                  </span>
                  <span className="text-[#146DFA] font-normal">privacy policy</span>
                </p>
              </div>
            </div>
           <div className="w-full flex justify-start items-center my-2">
           <button
              className="btn btn-primary"
              property1="default-small"
              text="Submit"
            >
              Submit
            </button>
           </div>
          </div>
        </div>
      </form>
      </div>
    </div>
      <Footer />
    </div>
  );
};

export default Partners;
