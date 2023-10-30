import React from 'react'
import "../../../styles/footer.css";
import { useNavigate } from 'react-router-dom';
export const Footer = () => {
  let navigate=useNavigate()
  return (
    <footer className="footer">
    <div className="frame-50">
      <img
        className="line-2"
        alt="Line"
        src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/line-1.svg"
      />
      <p className="element-suvarna">©&nbsp;&nbsp;2023 Suvarna Technosoft Inc. All rights reserved.</p>
    </div>
    <div className="frame-51">
      <div className="text-wrapper-17">Useful Links</div>
      <div className="frame-52">
        <div className="text-wrapper-18">Privacy policy</div>
        <div className="text-wrapper-19">Terms of service</div>
        <div className="text-wrapper-19">Help</div>
        <div className="text-wrapper-19">Careers</div>
        <div className="text-wrapper-19">Contact Us</div>
      </div>
    </div>
    <div className="frame-53">
      <div className="text-wrapper-17">Stay up-to-date</div>
      <div className='social-icons'>
      <i id='icon' className='bx bxl-facebook-circle' ></i>
      <i id='icon' className='bx bxl-linkedin-square'></i>
      <i id='icon' className='bx bxl-instagram-alt' ></i>
      <i id='icon' className='bx bxl-twitter' ></i>
      </div>
     
    </div>
    <div className="frame-55">
      <div className="text-wrapper-17">Contact Us</div>
      <div className="frame-52">
        <div className="frame-56">
          <img
            className="img-2"
            alt="Location fill"
            src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/6525973795dd5c4c0357416c/img/location-fill-1-1.svg"
          />
          <p className="text-wrapper-20">
            6-3-191/C/1, Tower B, 4th Floor, Fortune 9, Raj Bhavan Road, Somajiguda, Hyderabad, Telangana,
            India-500082.
          </p>
        </div>
        <div className="frame-57">
          <img
            className="img-2"
            alt="Phone fill"
            src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/6525973795dd5c4c0357416c/img/phone-fill-1-1.svg"
          />
          <div className="text-wrapper-21">+91 8125772299</div>
        </div>
        <div className="frame-57">
          <img
            className="img-2"
            alt="Mail fill"
            src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/6525973795dd5c4c0357416c/img/mail-fill--1--1-1.svg"
          />
          <div className="text-wrapper-21">jagdeesh@suvarna.co.in</div>
        </div>
      </div>
    </div>
    <img onClick={() => {
    navigate("/");
    window.scrollTo(0, 0);
  }}
      className="suvarna-logo-footer cursor-pointer"
      alt="Suvarna logo footer"
      src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/suvarna-logo-footer-1.png"
    />
    <div className="frame-58">
      <div className="frame-59">
        <div className="frame-60">
          <img
            className="search"
            alt="Search"
            src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/search.svg"
          />
          <input className="searching" placeholder="Search products, blogs and more..."></input>
         
        </div>
      </div>
      <div className="frame-61">
        <div className="text-wrapper-23">Search</div>
      </div>
    </div>
  </footer>
  )
}
