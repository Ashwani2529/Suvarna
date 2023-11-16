import React, { useState } from "react";
import SmallGreenWave from "../Components/SmallGreenWave";

const Gallery = () => {
  const [type, setType] = useState("videos");
  const [id, setId] = useState(0);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);

  return (
    <>
      <div className="w-screen h-[2413px] flex-col justify-center items-center">
        <SmallGreenWave
          heading="Gallery"
          subheading=" Explore Suvarna’s inspiring journey through images and videos that tell our story."
        />

        <div className="w-full flex flex-grow-1 justify-center items-center mt-64">
          <div className="lg:w-10/12 w-11/12 flex flex-col justify-start items-center">
            <div className="w-full flex justify-start items-center">
              <button
                type="button"
                className={`text-[20px] font-medium me-4 ${
                  type === "videos" ? "border-b-2 border-[#146DFA]" : ""
                }`}
                onClick={() => {
                  setType("videos");
                }}
              >
                Videos
              </button>
              <button
                type="button"
                className={`text-[20px] font-medium me-4 ${
                  type === "images" ? "border-b-2 border-[#146DFA]" : ""
                }`}
                onClick={() => {
                  setType("images");
                }}
              >
                Images
              </button>
            </div>

            <div className="w-full flex flex-row-1 justify-start items-center py-4">
              {/*  map through data and onClick set Id and isModalDisplayed = true */}
              <div
                className="h-[424px] w-[385px] flex flex-col justify-center items-center bg-white cursor-pointer"
                id="card"
                onClick={() => {
                  setId(1);
                  setIsModalDisplayed(true);
                }}
              >
                <div className="w-full flex flex-grow-1 bg-gray-100">
                  {/*  file */}
                </div>
                <div className="h-20 w-full flex flex-col justify-center items-start">
                  <div className="text-[28px] font-medium">title</div>
                  <div className="text-[14px] text-[#3c4043] font-normal flex ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="17"
                      className="w-[20px] h-[20px] me-2"
                      viewBox="0 0 16 17"
                      fill="none"
                    >
                      <path
                        d="M8.00016 15.1654C11.6821 15.1654 14.6668 12.1806 14.6668 8.4987C14.6668 4.8168 11.6821 1.83203 8.00016 1.83203C4.31826 1.83203 1.3335 4.8168 1.3335 8.4987C1.3335 12.1806 4.31826 15.1654 8.00016 15.1654Z"
                        stroke="#6D747A"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 4.5V8.5L10.6667 9.83333"
                        stroke="#6D747A"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    duration
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalDisplayed  && (
        <div className="w-screen h-screen fixed z-20 flex justify-center items-center top-0 left-0">
          <div className="w-[1048px] h-[822px] bg-white flex flex-col justify-center items-start relative z-40">
            <div className="h-12 bg-gray-100 flex justify-start items-center">title</div>

            <div className="w-full flex-grow-1 flex justify-center items-center bg-gray-300">
                Video
            </div>
          </div>
          
          
          <div className="w-screen h-screen absolute bg-white bg-opacity-10 z-30" onClick={()=>{
            setIsModalDisplayed(false);
          }}>

          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
