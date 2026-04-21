import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logout" onClick={() => navigate("/")}>
        <i className="fa fa-sign-out"></i> Logout
      </div>
    </div>
  );
};

export default Navbar;