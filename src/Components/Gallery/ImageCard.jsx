import React, { useState } from "react";
import closeIcon from "../../assets/close-icon.svg";
import galleyFileIcon from "../../assets/gallery-folder-icon.svg";
import galleryNext from "../../assets/gallery-image-next.svg";
import galleryPrevTbg from "../../assets/gallery-image-prev-trans.svg";
import galleryPrev from "../../assets/gallery-image-prev.svg";

const ImageCard = ({ item }) => {
  const [id, setId] = useState(0);
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // func for open modal
  const openModal = () => {
    setId(1);
    setIsModalDisplayed(true);
  };

  // func for close modal
  const closeModal = () => {
    setIsModalDisplayed(false);
  };

  // func for handleImageClick
  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  // func for Next Switch
  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % item.images.length);
  };

  // func for Prev Switch
  const handlePrevImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + item.images.length) % item.images.length
    );
  };

  return (
    <>
      <div id='card' onClick={openModal}>
        <div className='relative'>
          {/* Image div */}
          <div className='relative'>
            <img
              className='w-[312px] h-[234px] rounded-md relative'
              src={item?.coverImage}
              alt='gallery-cover'
            />
            <img
              className='absolute top-[16px] right-[16px]'
              src={galleyFileIcon}
              alt='file-icon'
            />
          </div>
          {/* Image div close */}

          {/* Text div */}
          <div className='absolute bottom-[16px] left-[16px]'>
            <p className='text-[20px] font-semibold text-white'>
              {item?.title}
            </p>
            <p className='text-[14px] font-medium text-white'>
              {item?.qty} images
            </p>
          </div>
          {/* Text div close */}
        </div>
      </div>

      {/* Modal */}
      {isModalDisplayed && (
        <div className='fixed z-50 flex justify-center items-center top-10 left-0 w-full h-full'>
          <div
            className='bg-white flex flex-col items-start relative z-40 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 rounded-md'
            style={{
              boxShadow: "0px 4px 24px 4px rgba(0, 0, 0, 0.15)",
              width: "100%",
              maxWidth: "600px",
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

            {/* Images layout */}
            <div className='relative '>
              {/* main image */}
              <button
                onClick={handlePrevImage}
                className={` absolute top-1/2 -left-[84px] text-[14px] font-medium transition duration-300 focus:outline-none mr-2 ${
                  selectedImageIndex === 0
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                disabled={selectedImageIndex === 0}
              >
                <img
                  src={selectedImageIndex === 0 ? galleryPrevTbg : galleryPrev}
                  alt=''
                />
              </button>
              <img
                className='w-screen relative mt-[24px]'
                src={item?.images[selectedImageIndex]}
                alt='video-thumbnail'
              />
              <button
                onClick={handleNextImage}
                className={`absolute top-1/2 -right-[84px] text-[14px] font-medium transition duration-300 focus:outline-none ${
                  selectedImageIndex === item.images.length - 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                disabled={selectedImageIndex === item.images.length - 1}
              >
                <img src={galleryNext} alt='' />
              </button>
              {/* bottom image list */}
              <div className='flex mt-[12px]'>
                {item?.images.map((image, index) => (
                  <div
                    className={`cursor-pointer border  ${
                      selectedImageIndex === index
                        ? "border-blue-500 border-1 "
                        : " border border-transparent"
                    }`}
                    key={index}
                    onClick={() => handleImageClick(index)}
                  >
                    <img src={image} alt='image' />
                  </div>
                ))}
              </div>
            </div>

            {/* Next and Previous buttons */}
            {/* <div className='flex mt-4'>
              
              
            </div> */}
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

export default ImageCard;
