import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import components
import Header from "./Components/Header";

//  import Pages

import { Homepage } from "./Pages/Homepage";
import { AboutUs } from "./Pages/AboutUs";
import { Clients } from "./Pages/Clients";
import { TermsOfUse } from "./Pages/TermsOfUse";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy";
import { ContactUs } from "./Pages/ContactUs";
import { BrochuresAndCollateral } from "./Pages/BrochuresAndCollaterals";
import { UniqueJob } from "./Pages/UniqueJob";
import { Integration } from "./Pages/Integration";
import { Carrers } from "./Pages/Carrers";
import Blogs from "./Pages/Blogs";
import UniqueBlog from "./Pages/UniqueBlog";
import Gallery from "./Pages/Gallery";
import Partners from "./Pages/Partners";
import Products from "./Pages/Products";

import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      return null;
    };
  }, []);

  return (
    <div style={{ scrollBehavior: "smooth" }} className="App w-screen relative">
      <Router>
        <Header />
        <Routes>
          {/*  unique IDS */}
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/termsofuse" element={<TermsOfUse />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/contactus" element={<ContactUs />}></Route>
          <Route path="/integration" element={<Integration />} />
          <Route
            path="/brochuresandcollaterals"
            element={<BrochuresAndCollateral />}
          />
          <Route path="/carrers" element={<Carrers />} />
          <Route path="/carrers/:id" element={<UniqueJob />} />
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/blogs/:id" element={<UniqueBlog />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/partners" element={<Partners />}></Route>
          <Route path="/products/:type" element={<Products />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
