import React, { useState } from "react";
import "../styles/Metricstyle.css";

const Logistic = () => {
    
  const [isMouseOverLogistic, setIsMouseOverLogistic] = useState(false);
  const [id, setId] = useState(0);

  return (
    <div className="w-screen max:h-screen bg-red-900 relative flex flex-col justify-evenly items-center my-[60px] index">
      <div className="frame-37 md:p-0 p-2">
        <div className="md:text-[36px] text-[30px] text-[#08090A] font-bold">
          23+ years of excellence
        </div>
        <p className="w-screen text-center md:text-[24px] text-[20px] font-normal text-[#6D747A]">
          in delivering innovative solutions to 1000+ healthcare providers
        </p>
      </div>
      <div className="lg:w-10/12 md:w-11/12 w-full flex items-center justify-center select-none ">
        <div className="w-[968px] md:h-[576px] flex flex-row flex-wrap justify-evenly items-center">
          {/*  1st card */}
          <div
            className="md:w-[352px] w-[46vw] h-[228px] flex flex-col justify-center items-start p-[24px] bg-white logistic_card_hover md:mt-0 mt-2"
            onMouseOver={() => {
              setIsMouseOverLogistic(true);
              setId(1);
            }}
            onMouseLeave={() => {
              setIsMouseOverLogistic(false);
              setId(0);
            }}
          >
            <div className="w-full flex flex-col justify-center items-start mb-[36px]">
              <div
                className={`font-medium md:text-[64px] text-[48px] ${
                  id === 1 && isMouseOverLogistic === true
                    ? "text-[#146DFA]"
                    : "text-[#001E41]"
                }  `}
              >
                15000+
              </div>
              <div className="md:text-[20px] text-[16px] font-normal text-[#6D747A]">
                Physicians
              </div>
            </div>
            <svg
              width="352"
              height="6"
              viewBox="0 0 352 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="352" height="5" fill="#67C380" />
            </svg>
          </div>

          {/*  2nd card */}
          <div
            className="md:w-[352px] w-[46vw] h-[228px] flex flex-col justify-center items-start p-[24px] bg-white logistic_card_hover md:mt-0 mt-2"
            onMouseOver={() => {
              setIsMouseOverLogistic(true);
              setId(2);
            }}
            onMouseLeave={() => {
              setIsMouseOverLogistic(false);
              setId(0);
            }}
          >
            <div className="w-full flex flex-col justify-center items-start mb-[36px]">
              <div
                className={`font-medium md:text-[64px] text-[48px] ${
                  id === 2 && isMouseOverLogistic === true
                    ? "text-[#146DFA]"
                    : "text-[#001E41]"
                }  `}
              >
                36000+
              </div>
              <div className="md:text-[20px] text-[16px] font-normal text-[#6D747A]">
                Healthcare Professionals
              </div>
            </div>

            <svg
              width="352"
              height="6"
              viewBox="0 0 352 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="352" height="5" fill="#FF7878" />
            </svg>
          </div>

          {/*  3rd card */}

          <div
            className="md:w-[352px] w-[46vw] h-[228px] flex flex-col justify-center items-start p-[24px] bg-white logistic_card_hover md:mt-0 mt-2 "
            onMouseOver={() => {
              setIsMouseOverLogistic(true);
              setId(3);
            }}
            onMouseLeave={() => {
              setIsMouseOverLogistic(false);
              setId(0);
            }}
          >
            <div className="w-full flex flex-col justify-center items-start mb-[36px]">
              <div
                className={`font-medium md:text-[64px] text-[48px] ${
                  id === 3 && isMouseOverLogistic === true
                    ? "text-[#146DFA]"
                    : "text-[#001E41]"
                }  `}
              >
                4000+
              </div>
              <div className="md:text-[20px] text-[16px] font-normal text-[#6D747A]">
                Organisations
              </div>
            </div>
            <svg
              width="352"
              height="6"
              viewBox="0 0 352 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="352" height="5" fill="#391E66" />
            </svg>
          </div>

          {/*  4th card */}
          <div
            className="md:w-[352px] w-[46vw] h-[228px] flex flex-col justify-center items-start p-[24px] bg-white logistic_card_hover md:mt-0 mt-2 "
            onMouseOver={() => {
              setIsMouseOverLogistic(true);
              setId(4);
            }}
            onMouseLeave={() => {
              setIsMouseOverLogistic(false);
              setId(0);
            }}
          >
            <div className="w-full flex flex-col justify-center items-start mb-[36px]">
              <div
                className={`font-medium md:text-[64px] text-[48px] ${
                  id === 4 && isMouseOverLogistic === true
                    ? "text-[#146DFA]"
                    : "text-[#001E41]"
                }  `}
              >
                60M+
              </div>
              <div className="md:text-[20px] text-[16px] font-normal text-[#6D747A]">
                Patient Records
              </div>
            </div>
            <svg
              width="352"
              height="6"
              viewBox="0 0 352 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.5" width="352" height="5" fill="#2CA49C" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logistic;
