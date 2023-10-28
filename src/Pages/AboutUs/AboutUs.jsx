import React from "react";
import { Button } from "../../Components/AboutUs/Button/Button";
import { Founder } from "../../Components/AboutUs/Founder/Founder";
import { LogoHeader } from "../../Components/AboutUs/LogoHeader/LogoHeader";
import { Srpa } from "../../Components/AboutUs/Srpa/Srpa";
import "./style.css";
import Navbar from "../../Components/Homepage/Navbar/Navbar";
import { Footer } from "../../Components/Homepage/Footer/Footer";

export const AboutUs = () => {
  return (
    <div className="about">
      <div className="sections">
        <div className="frame-6">
          <div className="compliance-header">ABOUT US</div>
          <div className="frame-7">
            <p className="p">
              <span className="span">We help healthcare businesses </span>
              <span className="text-wrapper-2">succeed</span>
              <span className="text-wrapper-3"> </span>
              <span className="span">in their digital transformation journey</span>
            </p>
            <p className="compliance-header-2">
              As a leading provider of innovative technology enabled solutions for hospitals, diagnostic centres,
              medical colleges and other healthcare touch points, our intuitively designed products automates the
              administrative and clinical operations of healthcare organizations of all sizes. Our innovative solutions
              enables decision making by streamlining the processes, procedures, and workflows of the healthcare
              organization. Our customers have been able to meet all the healthcare standards &amp; compliances leading
              to successful accreditation&#39;s like NABH, NABL etc.
            </p>
          </div>
        </div>
        <div className="mission">
          <div className="overlap">
            <div className="frame-wrapper">
              <div className="frame-8">
                <p className="compliance-header-3">Delivering excellence since 23 years</p>
                <p className="compliance-header-4">
                  We are committed to organizational excellence and continual improvement in process, to ensure our
                  customers get
                </p>
                <div className="frame-9">
                  <div className="frame-10">
                    <img
                      className="material-symbols"
                      alt="Material symbols"
                      src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/material-symbols-check-circle.svg"
                    />
                    <div className="text-wrapper-4">Error-free deliverables</div>
                  </div>
                  <div className="frame-10">
                    <img
                      className="material-symbols"
                      alt="Material symbols"
                      src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/material-symbols-check-circle-1.svg"
                    />
                    <div className="text-wrapper-5">Innovative products &amp; services</div>
                  </div>
                  <div className="frame-10">
                    <img
                      className="material-symbols"
                      alt="Material symbols"
                      src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/material-symbols-check-circle-2.svg"
                    />
                    <div className="text-wrapper-5">Responsive, agile and efficient</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-group">
                <div className="video-overlay">
                  <div className="polygon-wrapper">
                    <img
                      className="polygon"
                      alt="Polygon"
                      src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/polygon-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-11">
          <div className="frame-12">
            <div className="frame-13">
              <p className="compliance-header-5">
                <span className="span">OUR</span>
                <span className="text-wrapper-2"> VISION</span>
              </p>
              <img
                className="line"
                alt="Line"
                src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/line-2.svg"
              />
            </div>
            <p className="compliance-header-6">
              We are strongly focused to be leaders in building unique technology enabled products and deliver world
              class solutions which are innovative, customized and blended to meet customer specific requirements.
            </p>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
              <div className="div-wrapper">
                <div className="frame-14">
                  <div className="compliance-header-7">We’re on a mission...</div>
                  <p className="compliance-header-8">
                    Our mission is to empower the society through a wide range of technology enabled services and
                    deliver value based solutions which keep our customers at the pinnacle of growth.
                  </p>
                </div>
              </div>
              <img
                className="pexels-pixabay"
                alt="Pexels pixabay"
                src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/pexels-pixabay-356040-1.png"
              />
            </div>
          </div>
        </div>
        <div className="div-2">
          <div className="text-wrapper-6">Why choose Suvarna?</div>
          <Srpa
            property1="default"
            tileSecureSvgrepoCom="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/secure-svgrepo-com-1-2.svg"
            tileThumbUpFill="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/thumb-up-2-fill-1-7.svg"
          />
        </div>
        <div className="story-and-team">
          <div className="story">
            <div className="overlap-group-3">
              <img
                className="vector"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/vector-3.svg"
              />
              <img
                className="vector-2"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/vector-2.svg"
              />
              <img
                className="vector-3"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/vector-1.svg"
              />
              <div className="frame-15">
                <div className="compliance-header-9">How our story began</div>
                <p className="compliance-header-10">
                  Suvarna Technosoft&#39;s journey began with a simple yet profound vision: to revolutionize the
                  healthcare industry through cutting-edge software solutions. Established in 1999, our founders,
                  seasoned healthcare professionals and visionary technologists, recognized the critical need for
                  seamless integration of technology in the healthcare ecosystem. With unwavering commitment and a deep
                  understanding of the sector&#39;s intricacies, we embarked on a mission to streamline processes,
                  enhance patient care, and empower healthcare providers. Over the years, we have tirelessly strived to
                  bridge the gap between healthcare and technology, leveraging our expertise to develop bespoke,
                  intuitive, and scalable solutions that cater to the unique needs of our clients.
                </p>
              </div>
            </div>
          </div>
          <div className="div-2">
            <div className="frame-16">
              <div className="frame-17">
                <div className="text-wrapper-7">Meet our Leadership Team</div>
              </div>
              <p className="compliance-header-11">
                Our founding team combines seasoned professionals and tech visionaries with decades of experience,
                uniting their expertise to drive innovation in the industry.
              </p>
            </div>
            <div className="frame-18">
              <Founder />
              <Founder
                maskGroup="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/mask-group-2@2x.png"
                text="Subba Rao"
                text1="Director - HIMS"
              />
              <Founder
                maskGroup="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/mask-group-3@2x.png"
                text="K.M.L.N Rao"
                text1="Director - SLIMS"
              />
              <Founder
                maskGroup="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/652628729ce07dec6d44e4db/img/mask-group-4@2x.png"
                text="Muni Kumar"
                text1="Director - EMR"
              />
            </div>
          </div>
        </div>
        <div className="frame-19">
          <div className="contact-us">
            <div className="frame-20">
              <p className="compliance-header-12">Have a question? We’d love to hear from you.</p>
              <Button
                className="button-instance"
                property1="default-small"
                supportClassName="button-instance"
                text="Contact us"
              />
            </div>
          </div>
          <Footer/>
        </div>
      </div>
      <header className="header">
        <LogoHeader className="design-component-instance-node" />
        <div className="frame-33">
          <div className="menu-2">
             <Navbar/>
          </div>
        
        </div>
      </header>
    </div>
  );
};
