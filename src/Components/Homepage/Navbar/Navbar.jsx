import React from 'react';
import "../../../styles/Navbarstyle.css";
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  let navigate=useNavigate();
  return (
    <div className='flex bg-white text-black'>
        <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <div className="navbar" id="navbarNavDropdown">
        <ul id="navB" className="navbar-nav grid grid-rows-1 grid-cols-7 gap-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" onClick={() => navigate("/")}>Home</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/#products" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Products
            </a>
            <ul style={{minWidth:"max-content"}} className="dropdown-menu text-black">
              <li><a className="dropdown-item my-2" href="/products/hims">HIMS</a>
              <p className='text-sm ml-4'>Hospital Information Management System</p></li>
              <li><a className="dropdown-item my-2" onClick={() => navigate("/products/rispacs")}>RIC-PACS</a>
              <p className='text-sm ml-4'>Radiology Information System</p></li>
              <li><a className="dropdown-item my-2" onClick={() => navigate("/products/dms")}>DMS</a>
              <p className='text-sm ml-4'>Document Management System</p></li>
              <li><a className="dropdown-item my-2" onClick={() => navigate("/products/edukares")}>Edukares</a>
              <p className='text-sm ml-4'>Digital Campus Management System</p></li>
              <li><a className="dropdown-item my-2" onClick={() => navigate("/products/bimis")}>BI & MIS</a>
              <p className='text-sm ml-4'>Business Intelligence & MIS</p></li>  
              <li><a className="dropdown-item my-2" onClick={() => navigate("/products/slims")}>SLIMS</a>
              <p className='text-sm ml-4'>Suvarna Laboratory Information Management System</p></li>
              <li><a className="dropdown-item my-2" onClick={() => navigate("/products/emr")}>EMS</a>
              <p className='text-sm ml-4'>Electronic Medical Record</p></li>
              <li><a className="dropdown-item my-2" onClick={() => navigate("/integration")}>Integrations</a>
             </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Clients
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item my-1" href='/#clients'>Clients</a></li>
              <li><a className="dropdown-item my-1" href="/#testimonial">Testimonials</a></li>
              <li><a className="dropdown-item my-1" href="/#">Support Services</a></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Company
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item my-1" onClick={() => navigate("/about")}>About Us</a></li>
              <li><a className="dropdown-item my-1" href="/#contactus">Contact Us</a></li>
              <li><a className="dropdown-item my-1" href="/#">Careers</a></li>
              <li><a className="dropdown-item my-1" href="/#">Brochures & Collaterals</a></li>
                <li><a className="dropdown-item my-1" href="/#">Gallery</a></li>
            </ul>
          </li>
          <li className="nav-item">
          <a className="nav-link" href="/#blogging">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/#partners">Partners</a>
        </li>
         <li className="nav-item">
          <button id="btnsup" className="flex btn btn-primary ml-1" type="dropdown">Support
          <img
                  className="chevron-down-4"
                  alt="Chevron down"
                  src="https://cdn.animaapp.com/projects/64e8772352986c5d15a0377d/releases/65258581d0b8c0b30f5bfba1/img/chevron-down.svg"
                /></button>
        </li>
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar