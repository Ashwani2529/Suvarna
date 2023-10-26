import React, { useState } from "react";
import { Blog } from "../../Components/Homepage/Blog/Blog";
import { ClientLogos } from "../../Components/Homepage/ClientLogos/ClientLogos";
import { ClientLogos1 } from "../../Components/Homepage/ClientLogos/ClientLogos1";
import { ContactUsSection } from "../../Components/Homepage/ContactUsSection/ContactUsSection";
import { LogoHeader } from "../../Components/Homepage/LogoHeader/LogoHeader";
import { Metric } from "../../Components/Homepage/Metric/Metric";
import { Partners } from "../../Components/Homepage/Partners/Partners";
import { Products } from "../../Components/Homepage/Products/Products";
import { SliderV } from "../../Components/Homepage/SliderV/SliderV";
import { TestimonialSingle } from "../../Components/Homepage/TestimonialSingle/TestimonialSingle";
import { Component215 } from "../../Components/Homepage/icons/Component215/Component215";
import { Component217 } from "../../Components/Homepage/icons/Component217/Component217";
import { Component25 } from "../../Components/Homepage/icons/Component25/Component25";
import { Component27 } from "../../Components/Homepage/icons/Component27/Component27";
import { Line51 } from "../../Components/Homepage/icons/Line51/Line51";
import { Line52 } from "../../Components/Homepage/icons/Line52/Line52";
import { ProductCardLogos27 } from "../../Components/Homepage/icons/ProductCardLogos27/ProductCardLogos27";
import { Property1LeftDisabled } from "../../Components/Homepage/icons/Property1LeftDisabled/Property1LeftDisabled";
import { Property1Right } from "../../Components/Homepage/icons/Property1Right/Property1Right";
import "./homestyle.css";
import Navbar from "../../Components/Homepage/Navbar/Navbar";
import { Footer } from "../../Components/Homepage/Footer/Footer";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  let navigate = useNavigate();
  const [white,setWhite]=useState("#EBEDF0")
  const [black,setBlack]=useState("#001E41" )
  const [left,setLeft]=useState(0);
  const handleRight=()=>{
    setLeft(1)
    setWhite("#001E41");
    setBlack("#EBEDF0");
  }
  const handleLeft=()=>{
    setLeft(0)
    setWhite("#EBEDF0");
    setBlack("#001E41");
  }
  return (
    <div className="index">
      <SliderV
        className="slider-v2"
        frameIcon={<Component215 className="icon-instance-node" />}
        frameIcon1={<Component27 className="icon-instance-node" />}
        frameIcon2={<Component217 className="icon-instance-node" />}
        largeButtonDivClassName="slider-4"
        largeButtonPropertyOutlineClassName="slider-5"
        override={<Component25 className="icon-instance-node" />}
        property1="green"
        sliderNewVector84Color="url(#paint0_linear_2082_1182)"
        sliderNewVectorPropertyDefaultClassName="slider-v-instance"
        sliderNewVectorPropertyDefaultClassNameOverride="slider-v2-instance"
      />
      <div className="header">
        <LogoHeader className="design-component-instance-node-2" />
        <div className="frame-31">
          <div className="menu-2">
            <Navbar/>
           
          </div>
          
        </div>
      </div>
      <div className="sections">
        <div className="products-section">
          <div className="frame-33">
            <div className="frame-34">
              <div className="products-4">
                <div className="frame-35">
                  <div className="text-wrapper-13">Products</div>
                </div>
                <p className="text-wrapper-14">Explore our wide range of healthcare solutions</p>
              </div>
              <div className="flex product-slider">
     <div onClick={handleLeft}> <Property1LeftDisabled
      className="slider-3"
        color={white }
        stroke={black}
       
      /></div>
    
    <div onClick={handleRight}><Property1Right
        className="slider-3"
        color={black }
        stroke={white}
       
       
      /></div>
    </div>
              </div>
            {left===0?( <div className="product-cards" id="products">
              <Products
                arrowRight="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/arrow-right-24.svg"
                className="products-instance"
                property1="DMS"
              />
              <Products
                arrowRight="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/arrow-right-24.svg"
                className="products-2-instance"
                property1="edukares"
              />
              <Products
                arrowRight="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/arrow-right-24.svg"
                className="products-5"
                property1="BI-MIS"
              />
              <Products
                arrowRight="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/arrow-right-27.svg"
                className="products-6"
                property1="SLIMS"
              />
             
              <Products
                arrowRight="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/arrow-right-8@2x.png"
                arrowRightClassName="products-11"
                className="products-10"
                pexelsDanielFrankClassName="products-9"
                property1="edukares"
              />
              </div>
             ):( 
          <div className="product-cards" id="products">
             <Products
                arrowRight="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/arrow-right-24.svg"
                className="products-instance a"
                property1="HIMS"
              />
              <Products
                arrowRight="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/arrow-right-24.svg"
                className="products-2-instance b"
                property1="RIS-PACS"
              />
              <Products
                arrowRight="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/arrow-right-24.svg"
                className="products-5 c"
                property1="EMR"
              />
              <Products
                arrowRight="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/arrow-right-27.svg"
                className="products-6 d"
                property1="TRIMS"
              />
             
              <Products
                arrowRight="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/arrow-right-8@2x.png"
                arrowRightClassName="products-11"
                className="products-10"
                pexelsDanielFrankClassName="products-9"
                property1="RIS-PACS"
              />
                        </div>)}
           
          </div>
        </div>
        <div className="frame-36">
          <div className="frame-37">
            <div className="compliance-header-2">23+ years of excellence</div>
            <p className="compliance-header-3">in delivering innovative solutions to 1000+ healthcare providers</p>
          </div>
          <div className="frame-38">
            <div className="frame-39 grid grid-cols-2 grid-rows-2">
              <Metric rectangleClassName="metric-3" text="15000+" text1="Physicians" />
              <Metric rectangleClassName="metric-instance" text="36000+" text1="Healthcare Professionals" />
              <Metric rectangleClassName="metric-3-instance" text="4000+" text1="Organisations" />
              <Metric text="60M+" text1="Patient Records" />
            </div>
          </div>
        </div>
        <div className="clients-testimonials" id="clients">
          <div className="frame-40">
            <div className="overlap-group-4">
              <div className="frame-41">
                <div className="compliance-header-4">Our top clients</div>
                <p className="compliance-header-5">
                  We’ve a legacy of successful collaboration with healthcare providers in their digital transformation
                  journey
                </p>
              </div>
            </div>
            <div className="frame-42">
              <ClientLogos className="design-component-instance-node-2" property1="variant-2" />
              <ClientLogos1 className="design-component-instance-node-2" property1="variant-2" />
            </div>
          </div>
          <div className="frame-43" id="testimonial">
            <p className="text-wrapper-15">What our customers have to say</p>
            <div className="frame-44">
              <div className="frame-45">
                
                <TestimonialSingle
                  className="testimonial-single-instance"
                  frame="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/6525973795dd5c4c0357416c/img/frame-482390.svg"
                />
                <Line52 className="line-5-2" color="url(#paint0_linear_1971_10008)" />
                <TestimonialSingle
                  className="testimonial-single-instance"
                  frame="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/6525973795dd5c4c0357416c/img/frame-482390-1.svg"
                  maskGroup="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/mask-group@2x.png"
                  text="Dr. Sumit Wankhade"
                  text1="Mumbai, IN"
                />
              </div>
              <div className="frame-46">
              <Line51 className="line-6" color="url(#paint0_linear_1971_10012)" />
                <Line51 className="line-6" color="url(#paint0_linear_1971_10012)" />
              </div>
              <div className="frame-45">
                <TestimonialSingle
                  className="testimonial-single-instance"
                  frame="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/6525973795dd5c4c0357416c/img/frame-482390-2.svg"
                  line="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/line-3-3.svg"
                  maskGroup="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/mask-group-1@2x.png"
                  text="Dr. Ravi G. Kumar"
                  text1="Hyderabad, IN"
                  text2="We were confident that all our expectations would be met and Suvarna has exceeded them in every aspect to our complete satisfaction."
                />
              <Line52 className="line-5-2" color="url(#paint0_linear_1971_10008)" />
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
        </div>
        <Partners id="partners" className="design-component-instance-node-2" text="Global strategic partners" />
        <div className="blog-articles" id="blogging">
          <div className="frame-47">
            <div className="frame-35">
              <p className="text-wrapper-16">Check out our latest insights</p>
            </div>
            <div className="frame-48">
              <Property1LeftDisabled className="icon-instance-node" color="#EBEDF0" stroke="#001E41" />
              <Property1Right className="icon-instance-node" color="#001E41" stroke="white" />
            </div>
          </div>
          <div className="frame-49">
            <Blog
              arrowRight="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/arrow-right-32.svg"
              className="design-component-instance-node-2"
              property1="default"
            />
            <Blog
              arrowRight="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/arrow-right-32.svg"
              className="design-component-instance-node-2"
              property1="variant-2"
            />
            <Blog
              arrowRight="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/arrow-right-32.svg"
              className="design-component-instance-node-2"
              property1="variant-3"
            />
            <Blog
              arrowRight="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/arrow-right-35.svg"
              className="design-component-instance-node-2"
              property1="variant-4"
            />
            {/* <Blog
              arrowRight="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/arrow-right-36@2x.png"
              arrowRightClassName="blog-instance"
              className="design-component-instance-node-2"
              property1="variant-2"
            /> */}
          </div>
        </div>
        <ContactUsSection id="contactus" checkSquareSvgrepo="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/check-square-svgrepo-com-1-1.svg" />
       <Footer/>
      </div>
    </div>
  );
};
