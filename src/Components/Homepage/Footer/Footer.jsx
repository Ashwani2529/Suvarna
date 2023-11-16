import React from "react";
import "../../../styles/footer.css";
import { useNavigate } from "react-router-dom";
export const Footer = () => {
  let navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="frame-50">
        <hr className="border-t text-[#929292]" />
        <p className="element-suvarna">
          ©&nbsp;&nbsp;2023 Suvarna Technosoft Inc. All rights reserved.
        </p>
      </div>
      <div className="frame-51">
        <div className="text-wrapper-17">Useful Links</div>
        <div className="frame-52">
          <div className="text-wrapper-19">Privacy policy</div>
          <div className="text-wrapper-19">Terms of service</div>
          <div className="text-wrapper-19">Help</div>
          <div className="text-wrapper-19">Careers</div>
          <div className="text-wrapper-19">Contact Us</div>
        </div>
      </div>
      <div className="frame-53">
        <div className="text-wrapper-17">Stay up-to-date</div>
        <div className="social-icons">
          <i id="icon" className="bx bxl-facebook-circle"></i>

          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2934_3237)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21 3.5C22.9331 3.5 24.5 5.06701 24.5 7V21C24.5 22.9331 22.9331 24.5 21 24.5H7C5.06701 24.5 3.5 22.9331 3.5 21V7C3.5 5.06701 5.06701 3.5 7 3.5H21ZM9.33333 11.6667C8.68901 11.6667 8.16667 12.189 8.16667 12.8333V18.6667C8.16667 19.311 8.68901 19.8333 9.33333 19.8333C9.97766 19.8333 10.5 19.311 10.5 18.6667V12.8333C10.5 12.189 9.97766 11.6667 9.33333 11.6667ZM12.8333 10.5C12.189 10.5 11.6667 11.0223 11.6667 11.6667V18.6667C11.6667 19.311 12.189 19.8333 12.8333 19.8333C13.4777 19.8333 14 19.311 14 18.6667V14.3964C14.3557 13.9947 14.9575 13.5241 15.6255 13.2384C16.0138 13.0723 16.5979 13.0059 17.0043 13.1336C17.182 13.1895 17.2833 13.268 17.346 13.3526C17.4068 13.435 17.5 13.6158 17.5 14V18.6667C17.5 19.3109 18.0223 19.8333 18.6667 19.8333C19.311 19.8333 19.8333 19.3109 19.8333 18.6667V14C19.8333 13.2174 19.6348 12.5232 19.2218 11.9649C18.8104 11.4089 18.2555 11.0811 17.704 10.9077C16.6521 10.5769 15.4862 10.7601 14.7078 11.0931C14.4608 11.1987 14.2174 11.3217 13.9815 11.4582C13.8831 10.9133 13.4065 10.5 12.8333 10.5ZM9.33333 8.16667C8.68901 8.16667 8.16667 8.68901 8.16667 9.33333C8.16667 9.97766 8.68901 10.5 9.33333 10.5C9.97766 10.5 10.5 9.97766 10.5 9.33333C10.5 8.68901 9.97766 8.16667 9.33333 8.16667Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2934_3237">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <i id="icon" className="bx bxl-instagram-alt"></i>

          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2934_3249)">
              <path
                d="M23.0447 5.43494C23.469 4.95003 23.4198 4.21298 22.9349 3.78868C22.45 3.36438 21.7129 3.41352 21.2886 3.89843L15.3261 10.7127L10.2667 3.96668C10.0463 3.67291 9.70055 3.5 9.33333 3.5H4.66667C4.22477 3.5 3.8208 3.74969 3.62318 4.14494C3.42555 4.54018 3.4682 5.01317 3.73334 5.36668L11.2428 15.3794L4.95532 22.5651C4.53103 23.05 4.58017 23.7871 5.06508 24.2114C5.54998 24.6357 6.28704 24.5866 6.71134 24.1016L12.6738 17.2873L17.7333 24.0333C17.9537 24.3271 18.2994 24.5001 18.6667 24.5001H23.3333C23.7753 24.5001 24.1792 24.2503 24.3768 23.8551C24.5744 23.4598 24.5318 22.9868 24.2667 22.6333L16.7572 12.6207L23.0447 5.43494Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2934_3249">
                <rect width="28" height="28" fill="white" />
              </clipPath>
            </defs>
          </svg>
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
              6-3-191/C/1, Tower B, 4th Floor, Fortune 9, Raj Bhavan Road,
              Somajiguda, Hyderabad, Telangana, India-500082.
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
      <img
        onClick={() => {
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
            <input
              className="searching font-normal"
              placeholder="Search products, blogs and more..."
            ></input>
          </div>
        </div>
        <div className="frame-61">
          <div className="text-wrapper-23">Search</div>
        </div>
      </div>
    </footer>
  );
};
