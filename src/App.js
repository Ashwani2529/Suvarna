import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Homepage} from './Pages/Homepage/Homepage';
import { AboutUs } from "./Pages/AboutUs/AboutUs";
import {RISPACS} from "./Pages/Products/RISPACS";
import { DMS } from "./Pages/Products/DMS";
import { Edukares } from "./Pages/Products/Edukares";
import { BIMIS } from "./Pages/Products/BIMIS";
import { EMR } from "./Pages/Products/EMR";
import { SLIMS } from "./Pages/Products/SLIMS";
import { HIMS } from "./Pages/Products/HIMS";
import { Integration } from "./Pages/Integration/Integration";

function App() {
  
  return (
    <div style={{scrollBehavior:"smooth"}} className="App w-full">
        <Router>
        <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/integration" element={<Integration/>} />
         <Route path="/products/rispacs" element={<RISPACS/>} />
         <Route path="/products/dms" element={<DMS/>} />
         <Route path="/products/edukares" element={<Edukares/>} />
         <Route path="/products/bimis" element={<BIMIS/>} />
         <Route path="/products/emr" element={<EMR/>} />
         <Route path="/products/slims" element={<SLIMS/>} />
         <Route path="/products/hims" element={<HIMS/>} />
      </Routes>
        </Router>
           
    </div>

  );
}

export default App;