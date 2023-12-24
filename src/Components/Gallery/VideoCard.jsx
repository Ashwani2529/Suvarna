import React, { useState } from "react";
import closeIcon from "../../assets/close-icon.svg";
import durationIcon from "../../assets/duration-icon.svg";
import galleryFullScreen from "../../assets/gallery-fullscreen-icon.svg";
import galleryMoreIcon from "../../assets/gallery-more-icon.svg";
import galleryPauseIcon from "../../assets/gallery-pause-icon.svg";
import videoPlayerIcon from "../../assets/gallery-play-icon.svg";
import galleryVolumeIcon from "../../assets/gallery-volume-icon.svg";

const VideoCard = ({ item }) => {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);

  const openModal = () => {
    setIsModalDisplayed(true);
  };

  const closeModal = () => {
    setIsModalDisplayed(false);
  };

  return (
    <>
      <div id='card' onClick={openModal}>
        <div className='relative'>
          <img
            className='w-[410px] h-[312px] rounded-md'
            src={item.thumbnail}
            alt='video-image'
          />
          {/* Play icon centered over the thumbnail */}
          <img
            src={videoPlayerIcon}
            alt='play-icon'
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer'
          />
        </div>

        <div className='text-[28px] font-medium'>{item?.title}</div>

        <div className='text-[14px] text-[#3c4043] font-normal flex'>
          <img className='mr-[8px]' src={durationIcon} alt='duration-icon' />
          {item?.duration}
        </div>
      </div>

      {/* Modal */}
      {isModalDisplayed && (
        <div className='fixed z-50 flex justify-center items-center top-0 left-0 w-full h-full'>
          <div
            className='bg-white flex flex-col items-start relative z-40 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 rounded-md'
            style={{
              boxShadow: "0px 4px 24px 4px rgba(0, 0, 0, 0.15)",
              width: "100%",
              maxWidth: "600px", // Adjust the max width as needed
            }}
          >
            <div className='flex items-center justify-between w-full'>
              <h2 className='text-[20px] text-[#08090A] font-semibold '>
                {item?.title}
              </h2>
              <button
                className='text-[28px] font-medium text-gray-600 hover:text-gray-800 transition duration-300 focus:outline-none'
                onClick={closeModal}
              >
                <img src={closeIcon} alt='close-icon' className='w-6 h-6' />
              </button>
            </div>

            {/* video player */}
            <div className='relative mt-[24px]'>
              {/* Video thumbnail image */}
              <img
                className='w-screen'
                src={item?.thumbnail}
                alt='video-thumbnail'
              />

              {/* Bottom content */}
              <div className='absolute bottom-0 left-0 right-0 flex justify-between items-center p-4'>
                {/* Left side content */}
                <div className='flex items-center'>
                  <img
                    src={galleryPauseIcon}
                    alt='pause-icon'
                    className='mr-[24px] cursor-pointer'
                  />
                  <p className='text-[16px] text-white font-medium'>
                    0:01 / 2:46
                  </p>
                </div>

                {/* Right side content */}
                <div className='flex items-center gap-[36px]'>
                  <img
                    src={galleryVolumeIcon}
                    alt='volume-icon'
                    className='cursor-pointer'
                  />
                  <img
                    src={galleryFullScreen}
                    alt='fullscreen-icon'
                    className='cursor-pointer'
                  />
                  <img
                    src={galleryMoreIcon}
                    alt='more-icon'
                    className='cursor-pointer'
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className='absolute bg-opacity-10 w-full h-full'
            style={{
              background: "rgba(255, 255, 255, 0.90)",
            }}
            onClick={closeModal}
          ></div>
        </div>
      )}
    </>
  );
};

export default VideoCard;
