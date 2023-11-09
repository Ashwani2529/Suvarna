import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./Pages/Homepage/Homepage";
import { AboutUs } from "./Pages/AboutUs/AboutUs";
import { Clients } from "./Pages/Clients/Clients";
import {TermsOfUse} from "./Pages/TermsOfUse/TermsOfUse";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy/PrivacyPolicy";
import { ContactUs } from "./Pages/ContactUs/ContactUs";
import {BrochuresAndCollateral} from "./Pages/BrochuresAndCollaterals/BrochuresAndCollaterals";


import { RISPACS } from "./Pages/Products/RISPACS";
import { DMS } from "./Pages/Products/DMS";
import { Edukares } from "./Pages/Products/Edukares";
import { BIMIS } from "./Pages/Products/BIMIS";
import { EMR } from "./Pages/Products/EMR";
import { SLIMS } from "./Pages/Products/SLIMS";
import { HIMS } from "./Pages/Products/HIMS";
import { Integration } from "./Pages/Integration/Integration";


function App() {
  return (
    <div style={{ scrollBehavior: "smooth" }} className="App w-full">
      <Router>
        <Routes>
          {/*  unique IDS */}
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/termsofuse" element={<TermsOfUse/>} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/contactus" element={<ContactUs />} ></Route>
          <Route path="/integration" element={<Integration />} />
          <Route path="/brochuresandcollaterals" element={<BrochuresAndCollateral />} />


          {/* products  */}
          <Route path="/products/rispacs" element={<RISPACS />} />
          <Route path="/products/dms" element={<DMS />} />
          <Route path="/products/edukares" element={<Edukares />} />
          <Route path="/products/bimis" element={<BIMIS />} />
          <Route path="/products/emr" element={<EMR />} />
          <Route path="/products/slims" element={<SLIMS />} />
          <Route path="/products/hims" element={<HIMS />} />

          <Route path="/clients" element={<Clients />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
