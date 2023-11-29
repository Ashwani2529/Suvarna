import React from 'react'
import { TestimonialSingle } from '../Components/TestimonialSingle';
import { Line52 } from './Homepage/icons/Line52/Line52';
import { Line51 } from './Homepage/icons/Line51/Line51';

const ClientReview = () => {
  return (
    <div
    className="w-screen min-h-screen flex flex-col justify-center items-center my-[60px] py-[60px]"
    id="testimonial"
  >
    <p className="md:text-[36px] text-[30px] text-[#08090A] font-bold mb-[64px]">
      What our customers have to say
    </p>
    <div className="lg:w-10/12 md:w-11/12 w-10/12 flex justify-center items-center">
      <div className=" md:gap-[36px] w-45vw">
        <TestimonialSingle
          className="testimonial-single-instance"
          frame="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/6525973795dd5c4c0357416c/img/frame-482390.svg"
        />
        <Line52
          className="line-5-2 lg:scale-100 md:scale-75 scale-[60%] lg:my-[85px]"
          color="url(#paint0_linear_1971_10008)"
        />
        <TestimonialSingle
          className="testimonial-single-instance"
          frame="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/6525973795dd5c4c0357416c/img/frame-482390-1.svg"
          maskGroup="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/mask-group@2x.png"
          text="Dr. Sumit Wankhade"
          text1="Mumbai, IN"
        />
      </div>
      <div className="frame-46 lg:mx-[82px]">
        <Line51 className="line-6 lg:scale-100 md:scale-75 scale-[60%]" color="url(#paint0_linear_1971_10012)" />
        <Line51 className="line-6 lg:scale-100 md:scale-75 scale-[60%]" color="url(#paint0_linear_1971_10012)" />
      </div>
      <div className="frame-45 lg:gap-[36px]">
        <TestimonialSingle
          className="testimonial-single-instance"
          frame="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/6525973795dd5c4c0357416c/img/frame-482390-2.svg"
          line="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/line-3-3.svg"
          maskGroup="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/mask-group-1@2x.png"
          text="Dr. Ravi G. Kumar"
          text1="Hyderabad, IN"
          text2="We were confident that all our expectations would be met and Suvarna has exceeded them in every aspect to our complete satisfaction."
        />
        <Line52
          className="line-5-2 lg:scale-100 md:scale-75 scale-[60%] lg:my-[48px]"
          color="url(#paint0_linear_1971_10008)"
        />
        <TestimonialSingle
          className="testimonial-single-instance"
          frame="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/6525973795dd5c4c0357416c/img/frame-482390-3.svg"
          line="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/line-3.svg"
          maskGroup="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/mask-group-2@2x.png"
          text="Dr. B Sarita Rao"
          text1="Bengaluru, IN"
          text2="We were confident that all our expectations would be met and Suvarna has exceeded them in every aspect to our complete satisfaction. We are happy to have a partner like Suvarna Technosoft for our healthcare software requirements."
        />
      </div>
    </div>
  </div>
  )
}

export default ClientReview