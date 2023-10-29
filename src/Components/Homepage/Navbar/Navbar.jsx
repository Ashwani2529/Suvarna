import React from 'react';
import "../../../styles/Navbarstyle.css";
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  let navigate=useNavigate();
  return (
    <div className='flex bg-white text-black md:flex lg:flex'>
        <nav className="navbar navbar-expand-lg md:navbar-expand-lg lg:navbar-expand-lg">
    <div className="container-fluid md:container-fluid lg:container-fluid">
      <div className="navbar">
      <ul id="navB" className="grid grid-cols-7 gap-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" onClick={() => {navigate("/");window.scrollTo(0, 0);}}>Home</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/#products" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Products
            </a>
            <ul style={{minWidth:"max-content"}} className="dropdown-menu text-black">
              <li><a className="dropdown-item my-2" href="/products/hims">HIMS</a>
              <p className='text-sm ml-4'>Hospital Information Management System</p></li>
              <li><a className="dropdown-item my-2" onClick={() =>{navigate("/products/rispacs");window.scrollTo(0, 0);}}>RIC-PACS</a>
              <p className='text-sm ml-4'>Radiology Information System</p></li>
              <li><a className="dropdown-item my-2" onClick={() => {navigate("/products/dms");window.scrollTo(0, 0);}}>DMS</a>
              <p className='text-sm ml-4'>Document Management System</p></li>
              <li><a className="dropdown-item my-2" onClick={() => {navigate("/products/edukares");window.scrollTo(0, 0);}}>Edukares</a>
              <p className='text-sm ml-4'>Digital Campus Management System</p></li>
              <li><a className="dropdown-item my-2" onClick={() => {navigate("/products/bimis");window.scrollTo(0, 0);}}>BI & MIS</a>
              <p className='text-sm ml-4'>Business Intelligence & MIS</p></li>  
              <li><a className="dropdown-item my-2" onClick={() => {navigate("/products/slims");window.scrollTo(0, 0);}}>SLIMS</a>
              <p className='text-sm ml-4'>Suvarna Laboratory Information Management System</p></li>
              <li><a className="dropdown-item my-2" onClick={() => {navigate("/products/emr");window.scrollTo(0, 0);}}>EMS</a>
              <p className='text-sm ml-4'>Electronic Medical Record</p></li>
              <li><a className="dropdown-item my-2" onClick={() => {navigate("/integration");window.scrollTo(0, 0);}}>Integrations</a>
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
              <li><a className="dropdown-item my-1" onClick={() => {navigate("/about");window.scrollTo(0, 0);}}>About Us</a></li>
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