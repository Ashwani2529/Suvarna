import React, { useEffect, useState } from "react";
import galleyVideo4 from "../assets/gallery-thumbnail-1.png";
import {
  default as galleyVideo3,
  default as galleyVideo7,
} from "../assets/gallery-thumbnail-2.png";
import {
  default as galleyVideo2,
  default as galleyVideo6,
} from "../assets/gallery-thumbnail-3.png";
import {
  default as galleyVideo1,
  default as galleyVideo5,
} from "../assets/gallery-thumbnail-4.png";
import VideoCard from "../Components/Gallery/VideoCard";
import SmallGreenWave from "../Components/SmallGreenWave";

import galleryImage1 from "../assets/gallery-image-1.png";
import galleryImage2 from "../assets/gallery-image-2.png";
import galleryImage3 from "../assets/gallery-image-3.png";
import galleryImage4 from "../assets/gallery-image-4.png";
import galleryImage5 from "../assets/gallery-image-5.png";
import galleryImage6 from "../assets/gallery-image-6.png";
import galleryImage7 from "../assets/gallery-image-7.png";
import galleryImage8 from "../assets/gallery-image-8.png";
import ImageCard from "../Components/Gallery/ImageCard";

const Gallery = () => {
  // videos data
  const videos = [
    {
      title: "About Company",
      duration: "00:03:43",
      thumbnail: galleyVideo1,
    },
    {
      title: "About Company",
      duration: "00:03:43",
      thumbnail: galleyVideo2,
    },
    {
      title: "About Company",
      duration: "00:03:43",
      thumbnail: galleyVideo3,
    },
    {
      title: "About Company",
      duration: "00:03:43",
      thumbnail: galleyVideo4,
    },
    {
      title: "About Company",
      duration: "00:03:43",
      thumbnail: galleyVideo5,
    },
    {
      title: "About Company",
      duration: "00:03:43",
      thumbnail: galleyVideo6,
    },
    {
      title: "About Company",
      duration: "00:03:43",
      thumbnail: galleyVideo7,
    },
  ];

  const images = [
    {
      coverImage: galleryImage1,
      title: "Jamaica Conference 2023",
      qty: 22,
      images: [
        galleryImage1,
        galleryImage2,
        galleryImage3,
        galleryImage4,
        galleryImage5,
        galleryImage6,
      ],
    },
    {
      coverImage: galleryImage2,
      title: "Patholabs Intl’ Chapter",
      qty: 17,
      images: [
        galleryImage2,
        galleryImage1,
        galleryImage3,
        galleryImage4,
        galleryImage5,
        galleryImage6,
      ],
    },
    {
      coverImage: galleryImage3,
      title: "ANIDS University Seminar",
      qty: 17,
      images: [
        galleryImage3,
        galleryImage1,
        galleryImage2,
        galleryImage4,
        galleryImage5,
        galleryImage6,
      ],
    },
    {
      coverImage: galleryImage4,
      title: "Jamaica Conference 2023 ",
      qty: 22,
      images: [
        galleryImage4,
        galleryImage1,
        galleryImage2,
        galleryImage3,

        galleryImage5,
        galleryImage6,
      ],
    },
    {
      coverImage: galleryImage5,
      title: "Technology in childcare ",
      qty: 31,
      images: [
        galleryImage5,
        galleryImage1,
        galleryImage2,
        galleryImage3,
        galleryImage4,
        galleryImage5,
        galleryImage6,
      ],
    },
    {
      coverImage: galleryImage6,
      title: "Elantrix Surgery Onboarding",
      qty: 14,
      images: [
        galleryImage6,
        galleryImage1,
        galleryImage2,
        galleryImage3,
        galleryImage4,
        galleryImage5,
      ],
    },
    {
      coverImage: galleryImage7,
      title: "IMRJA Seminar July 2022",
      qty: 18,
      images: [
        galleryImage7,
        galleryImage2,
        galleryImage3,
        galleryImage4,
        galleryImage5,
        galleryImage6,
      ],
    },
    {
      coverImage: galleryImage8,
      title: "ASTRIX Vaccine Conventio...",
      qty: 16,
      images: [
        galleryImage8,
        galleryImage1,
        galleryImage2,
        galleryImage3,
        galleryImage4,
        galleryImage5,
        galleryImage6,
      ],
    },
  ];

  const [type, setType] = useState("videos" | "images");

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      return null;
    };
  }, []);

  return (
    <>
      <div className='max-w-screen h-auto flex-col justify-center items-center mb-[120px]'>
        {/* gallery banner shape here */}
        <SmallGreenWave
          heading='Gallery'
          subheading=' Explore Suvarna’s inspiring journey through images and videos that tell our story.'
        />
        {/* gallery banner shape close here */}

        {/* gallery here */}
        <div className='w-full flex flex-grow-1 justify-center items-center mt-64'>
          <div className='lg:w-10/12 w-11/12 flex flex-col justify-start items-center'>
            {/* gallery switch here */}
            <div className='w-full flex justify-start items-center'>
              <button
                type='button'
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
                type='button'
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
            {/* gallery switch close here */}

            {/* gallery navigate here */}
            {type === "videos" ? (
              <div className='flex flex-wrap items-center gap-4 md:gap-8 lg:gap-12 mt-4 md:mt-8'>
                {videos.map((item, index) => (
                  <VideoCard key={index} item={item} />
                ))}
              </div>
            ) : (
              <div className='flex flex-wrap items-center gap-4 md:gap-8 lg:gap-12 mt-4 md:mt-8'>
                {images.map((item, index) => (
                  <ImageCard key={index} item={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
