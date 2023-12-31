import React, { useState, useEffect } from "react";
import { Footer } from "../Components/Footer";
import ReCaptchaV2 from "react-google-recaptcha";
import partner_illustration from "../assets/partner_illustration.png";
import tick_icon from "../assets/Frame 482931.png";
import business_deal from "../assets/Business deal-amico (1) 2.png";
import partners_vector from "../assets/partners.png";
import proven_svg from "../assets/proven_svg.svg";
import structured from "../assets/structured.svg";
import support from "../assets/support.svg";
import financial from "../assets/financial.svg";

import SmallBlueWave from "../Components/SmallBlueWave";

import fetchData from "../utils/Api";

const Partners = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});

  const [formData, setFormData] = useState({
      first_name: "",
      last_name:  "",
      discription : "NotRequired",
      business_email: "",
      business_phone_number: 7657345,
      phone_number: "",
      alternative_phone_number: "",
      company_name: "",
      address: "NotRequired",
      city: "",
      state: "",
      country: "",
      zipcode: "",
      message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetchData("POST", "api/contact_us/create/", formData).then((res) => {
      setResponse(res);
      setLoading(false);
      alert(
        `Welcome ${response.name}! Our team will respond within 24 hours !`
      );
    });
  };

  return (
    <div className="w-screen flex flex-col justify-start items-start">
      {/*  hero section */}
      <div className=" w-full h-[900px] flex justify-center items-center relative">
        <div className="lg:w-10/12 md:w-11/12 w-11/12 flex md:flex-row flex-col justify-center items-center z-20 ">
          <div className="md:w-1/2 h-1/2  flex flex-col justify-center items-start ">
            <div className="lg:text-[48px] md:text-[40px] text-[32px] text-white font-bold my-[8px]">
              Partner with us
            </div>

            <div className="text-white lg:text-[24px] md:text-[16px] text-[16px] font-normal my-[8px]">
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
                <span className="lg:text-[20px] md:text-[16px] text-[12px] font-normal text-white">
                  Best in class products and solutions
                </span>
              </li>
              <li className="w-full flex justify-start items-center my-[12px]">
                <img
                  src={tick_icon}
                  alt="tick_icon"
                  className="me-2 w-[20px] h-[20px] "
                />
                <span className="lg:text-[20px] md:text-[16px] text-[12px] font-normal text-white">
                  Structured training programs
                </span>
              </li>
              <li className="w-full flex justify-start items-center my-[12px]">
                <img
                  src={tick_icon}
                  alt="tick_icon"
                  className="me-2 w-[20px] h-[20px] "
                />
                <span className="lg:text-[20px] md:text-[16px] text-[12px] font-normal text-white">
                  Pre-sales and sales support
                </span>
              </li>
              <li className="w-full flex justify-start items-center my-[12px]">
                <img
                  src={tick_icon}
                  alt="tick_icon"
                  className="me-2 w-[20px] h-[20px] "
                />
                <span className="lg:text-[20px] md:text-[16px] text-[12px] font-normal text-white">
                  High financial rewards
                </span>
              </li>
            </div>
          </div>
          <div className="md:w-1/2  flex justify-start items-center ">
            <img
              src={partner_illustration}
              alt="partner_illustration"
              className=""
            />
          </div>
        </div>
        <div className="w-screen h-[850px] absolute flex justify-center items-center top-0 end-0">
          <img
            src={partners_vector}
            className="w-screen h-[800px] absolute top-0"
            alt="bg_partners"
          />
        </div>
      </div>

      <div className="md:h-[600px] w-screen flex flex-col justify-center items-center mb-[50px] relative z-30">
        <div className="w-full h-1/2 flex flex-col justify-center items-center">
          <div className="w-full text-center lg:text-[36px] md:text-[28px] text-[20px] text-[#3c4043] font-bold">
            Join our <span className="text-[#146DFA]">2,500+</span> strong
            Partner Program
          </div>

          <div className="lg:my-4 my-2 text-center lg:w-full md:w-10/12 lg:text-[20px] md:text-[16px] text-[12px]">
            In the 2 decades of our journey, we have enabled 1000+ healthcare
            service providers in their digital transformation. However our goal
            is to double this number in the next few years.
          </div>

          <div className="lg:my-4 my-2 text-center  lg:w-full md:w-10/12 lg:text-[20px] md:text-[16px] text-[12px]">
            We know we alone can't reach to all our potential customers, hence
            we have designed very attractive partner program and we believe
            together we can do a lot of good to address our customer need.
          </div>
        </div>

        <div className="w-full md:h-1/2 flex md:flex-row flex-col justify-evenly items-center md:px-0 px-2">
          {/*  card 1 */}
          <div className=" w-[264px] h-[221px] flex flex-col justify-center items-start">
            <div className="h-1/4">
             <img src={proven_svg} className="lg:w-[47px] lg:h-[48px] w-[36px]" alt="proven_svg"></img>
            </div>
            <div className="w-full h-3/4 flex flex-col justify-start items-center">
              <div className="lg:text-[24px] md:text-[20px] text-[16px] font-medium my-2 text-left w-full flex justify-start items-center">
                Proven solutions
              </div>
              <div className="lg:text-[16px] md:text-[12px] text-[12px] font-normal text-[#6D747A] text-left">
                With our suite of proven, best-in-class products and solutions,
                we ensure that you’re in safe hands.
              </div>
            </div>
          </div>

          {/*  card 2 */}
          <div className=" w-[264px] h-[221px] flex flex-col justify-center items-start">
            <div className="h-1/4">
              <img src={structured} className="lg:w-[47px] lg:h-[48px] w-[36px]" alt="structured" />
            </div>
            <div className="w-full h-3/4 flex flex-col justify-start items-center">
              <div className="lg:text-[24px] md:text-[20px] text-[16px] font-medium my-2 text-left w-full flex justify-start items-center">
                Structured Training
              </div>
              <div className="lg:text-[16px] md:text-[12px] text-[12px] font-normal text-[#6D747A] text-left">
                We set you up for success through our well-researched,
                comprehensive and structured training programs.
              </div>
            </div>
          </div>

          {/*  vcard 3 */}
          <div className=" w-[264px] h-[221px] flex flex-col justify-center items-start">
            <div className="h-1/4">
              <img src={support} className="lg:w-[47px] lg:h-[48px] w-[36px]" alt="support" />
            </div>
            <div className="w-full h-3/4 flex flex-col justify-start items-center">
              <div className="lg:text-[24px] md:text-[20px] text-[16px] font-medium my-2 text-left w-full flex justify-start items-center">
                Support Services
              </div>
              <div className="lg:text-[16px] md:text-[12px] text-[12px] font-normal text-[#6D747A] text-left">
                We’re here to help you in your journey, hand-holding wherever
                needed and supporting in your pre-sales and sales process.
              </div>
            </div>
          </div>
          <div className=" w-[264px] h-[221px] flex flex-col justify-center items-start">
            <div className="h-1/4">
               <img src={financial} className="lg:w-[47px] lg:h-[48px] w-[36px]" alt="financialServices" />
            </div>
            <div className="w-full h-3/4 flex flex-col justify-start items-center">
              <div className="lg:text-[24px] md:text-[20px] text-[16px] font-medium my-2 text-left w-full flex justify-start items-center">
                Financial Rewards
              </div>
              <div className="lg:text-[16px] md:text-[12px] text-[12px] font-normal text-[#6D747A] text-left">
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

      <div className="w-screen flex flex-grow-1 justify-center items-center my-[120px]  ">
        <div className="lg:w-10/12 md:w-11/12 w-full h-full flex justify-center items-center ">
          <div className="w-1/2 h-full md:flex hidden justify-start items-center">
            <img src={business_deal} alt="business_deal_image" />
          </div>
          <form
            method="POST"
            action={`${process.env.REACT_APP_API_URL}api/partner/create/`}
            className="md:w-1/2 w-11/12 h-full flex flex-col justify-center items-center md:px-16 px-0"
            onSubmit={(e)=>{handleSubmit(e)}}
          >
            <div className="w-full h-full flex flex-col justify-between items-start">
              <div className="w-full h-24 flex flex-col justify-start items-start ">
                <p className="text-[28px] font-medium">
                  Connect with us to know more.
                </p>
                <p className="text-[16px] font-normal text-[#6D747A]">
                  Share your details and we’ll get in touch within 24 hours
                </p>
              </div>
              <div className="w-[100%] flex flex-grow-1 flex-col justify-start items-center">
                <div className="w-full flex flex-row md:justify-start justify-evenly items-center">
                  <div className="w-[45%]  flex flex-col justify-start items-start md:me-2">
                    <label
                      htmlFor="first_name"
                      className="py-2 font-medium text-[16px]"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                       onChange={(e)=>handleChange(e)}
                      placeholder="John"
                      name="first_name"
                    />
                  </div>
                  <div className="w-[45%] flex flex-col justify-start items-start md:ms-2">
                    <label
                      htmlFor="last_name"
                      className="py-2 font-medium text-[16px]"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                       onChange={(e)=>handleChange(e)}
                      placeholder="Doe"
                      name="last_name"
                    />
                  </div>
                </div>

                <div className="w-full flex flex-row  md:justify-start justify-evenly items-center">
                  <div className="w-[45%] flex flex-col justify-start items-start md:me-2">
                    <label
                      htmlFor="business_email"
                      className="py-2 font-medium text-[16px]"
                    >
                      Business Email
                    </label>
                    <input
                      type="text"
                      className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                       onChange={(e)=>handleChange(e)}
                      placeholder="contact@company.com"
                      name="business_email"
                    />
                  </div>
                  <div className="w-[45%] flex flex-col justify-start items-start md:ms-2">
                    <label
                      htmlFor="phone_number"
                      className="py-2 font-medium text-[16px]"
                    >
                      Phone
                    </label>
                    <input
                      type="number"
                      className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                       onChange={(e)=>handleChange(e)}
                      placeholder="e.g. person@gmail.com"
                      name="phone_number"
                    />
                  </div>
                </div>

                <div className="md:w-full w-[93%] flex flex-row md:justify-start justify-evenly items-center">
                  <div className="md:w-[45%] w-full flex flex-col justify-start items-start">
                    <label
                      htmlFor="alternative_phone_number"
                      className="py-2 font-medium text-[16px]"
                    >
                      Alternate Phone 
                    </label>
                    <input
                      type="number"
                      className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                       onChange={(e)=>handleChange(e)}
                      placeholder="e.g. person@gmail.com"
                      name="alternative_phone_number"
                    />
                  </div>
                </div>

                <div className="w-full flex flex-row md:justify-start justify-evenly items-center">
                  <div className="w-[45%] flex flex-col justify-start items-start md:me-2">
                    <label
                      htmlFor="company_name"
                      className="py-2 font-medium text-[16px]"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                       onChange={(e)=>handleChange(e)}
                      placeholder="e.g. Star Hospitals Pvt. Ltd."
                      name="company_name"
                    />
                  </div>
                  <div className="w-[45%] flex flex-col justify-start items-start md:ms-2">
                    <label
                      htmlFor="state"
                      className="py-2 font-medium text-[16px]"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                       onChange={(e)=>handleChange(e)}
                      placeholder="e.g Gujarat"
                      name="state"
                    />
                  </div>
                </div>

                <div className="md:w-full w-[90%] flex md:flex-row flex-col  md:justify-start justify-evenly items-center">
                <div className="w-[45%] flex flex-col justify-start items-start md:me-2">
                    <label
                      htmlFor="city"
                      className="py-2 font-medium text-[16px]"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                       onChange={(e)=>handleChange(e)}
                      placeholder="Ahemdabad"
                      name="city"
                    />
                  </div>
                </div>

                <div className="md:w-full w-[90%] flex md:flex-row flex-col  md:justify-start justify-evenly items-center">
                  <div className="md:w-[45%] w-full flex flex-col justify-start items-start md:me-2">
                    <label
                      htmlFor="country"
                      className="py-2 font-medium text-[16px]"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                       onChange={(e)=>handleChange(e)}
                      placeholder="e.g India"
                      name="country"
                    />
                  </div>
                  <div className="md:w-[45%] w-full flex flex-col justify-start items-start md:me-2">
                    <label
                      htmlFor="zipcode"
                      className="py-2 font-medium text-[16px]"
                    >
                      Zip Postal Code
                    </label>
                    <input
                      type="number"
                      className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                       onChange={(e)=>handleChange(e)}
                      placeholder="e.g. 846113"
                      name="zipcode"
                    />
                  </div>
                </div>

                <div className="md:w-full w-[90%] flex justify-start items-start">
                  <div className="w-[90%] flex flex-col justify-start items-start">
                    <label
                      htmlFor="message"
                      className="py-2 font-medium text-[16px]"
                    >
                      Message
                    </label>
                    <textarea
                      className="w-full py-2.5 px-2.5 rounded-sm border border-[#CED4DA]"
                       onChange={(e)=>handleChange(e)}
                      placeholder="Leave us a message..."
                      name="message"
                    />
                  </div>
                </div>
                <div className="md:w-full w-[90%] flex flex-col justify-center items-start my-2">
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
                      <span className="text-[#146DFA] font-normal">
                        privacy policy
                      </span>
                    </p>
                  </div>
                </div>
                <div className="md:w-full w-[90%] flex justify-start items-center my-2">
                  <input
                    type="submit"
                    className="bg-[#146DFA] w-[118px] h-[48px] rounded-[6px] text-white font-medium flex justify-center items-center"
                    value="Submit"
                  />
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
