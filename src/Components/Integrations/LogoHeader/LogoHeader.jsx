import React from "react";
import "../../../styles/intlogoheader.css";
import { useNavigate } from "react-router-dom";

export const LogoHeader = ({ className }) => {
  let navigate=useNavigate();
  return (
    <div onClick={() => navigate("/")} className={`logo-header ${className}`}>
      <img
        className="suvarna-s"
        alt="Suvarna s"
        src="https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6532b974383de2c8bb576865/img/suvarna-s-1.png"
      />
      <img
        className="suvarna-logo-header"
        alt="Suvarna logo header"
        src="https://cdn.animaapp.com/projects/6532b4e74ae10547916b42ac/releases/6532b974383de2c8bb576865/img/suvarna-logo-header-flip-fixed-1.png"
      />
    </div>
  );
};